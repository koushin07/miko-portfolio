import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { googleConfigured, queryFreeBusy, createBookingEvent, appendBookingRow, sendGmail } from '@/lib/google'
import { isValidTimezone } from '@/lib/booking'

const MAX_DURATION_MS = 2 * 60 * 60 * 1000

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// e.g. "Sat, Jul 4, 2026, 9:00 AM (Asia/Manila)"
const formatInTimezone = (iso: string, timeZone: string) =>
  `${new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(iso))} (${timeZone})`

export async function POST(request: NextRequest) {
  try {
    const { name, email, timezone, notes, startDateTime, endDateTime, submittedAt } = await request.json()

    // Validate input
    if (!name || !email || !startDateTime || !endDateTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (typeof name !== 'string' || name.length > 200) {
      return NextResponse.json({ error: 'Invalid name' }, { status: 400 })
    }
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }
    if (notes && (typeof notes !== 'string' || notes.length > 2000)) {
      return NextResponse.json({ error: 'Notes are too long' }, { status: 400 })
    }
    if (typeof timezone !== 'string' || !isValidTimezone(timezone)) {
      return NextResponse.json({ error: 'Invalid timezone' }, { status: 400 })
    }
    const start = Date.parse(startDateTime)
    const end = Date.parse(endDateTime)
    if (Number.isNaN(start) || Number.isNaN(end)) {
      return NextResponse.json({ error: 'Invalid start or end time' }, { status: 400 })
    }
    if (end <= start) {
      return NextResponse.json({ error: 'End time must be after start time' }, { status: 400 })
    }
    if (start < Date.now()) {
      return NextResponse.json({ error: 'The selected time is in the past' }, { status: 400 })
    }
    if (end - start > MAX_DURATION_MS) {
      return NextResponse.json({ error: 'Meetings are limited to 2 hours' }, { status: 400 })
    }

    if (!googleConfigured()) {
      console.error('Missing Google OAuth environment variables')
      return NextResponse.json(
        { error: 'Booking service is not configured. Please try again later.' },
        { status: 503 }
      )
    }

    // Re-check availability to guard the race between the slot fetch and submit
    const busy = await queryFreeBusy(new Date(start).toISOString(), new Date(end).toISOString())
    if (busy.length > 0) {
      return NextResponse.json(
        { error: 'That time is no longer available. Please pick another slot.' },
        { status: 409 }
      )
    }

    const event = await createBookingEvent({
      name,
      email,
      notes,
      start: startDateTime,
      end: endDateTime,
      timezone,
    })

    // Sheet logging is best-effort — the booking already exists on the calendar
    try {
      await appendBookingRow([
        email,
        name,
        timezone,
        startDateTime,
        endDateTime,
        notes || '',
        submittedAt || new Date().toISOString(),
      ])
    } catch (sheetError) {
      console.error('Booking sheet append failed:', sheetError)
    }

    // Thank-you email to the visitor, sent from the owner's Gmail (best-effort;
    // requires the gmail.send scope on the refresh token)
    try {
      await sendGmail(
        email,
        'Your call with Miko is confirmed',
        [
          `Hi ${name},`,
          '',
          "Thank you for booking a call — I'm looking forward to speaking with you.",
          '',
          'Your meeting is scheduled and a Google Calendar invite is on its way. Details:',
          '',
          `When: ${formatInTimezone(startDateTime, timezone)} – ${formatInTimezone(endDateTime, timezone)}`,
          `Google Meet: ${event.hangoutLink || 'the link is in your calendar invite'}`,
          '',
          "In the meantime, feel free to prepare any questions or topics you'd like us to cover during the call.",
          '',
          'Speak soon,',
          'Miko',
        ].join('\n')
      )
    } catch (gmailError) {
      console.error('Visitor thank-you email failed:', gmailError)
    }

    // Owner notification is best-effort too — the invite is already on the calendar
    try {
      const resendKey = process.env.RESEND_API_KEY
      if (resendKey) {
        const resend = new Resend(resendKey)
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'canaresmiko3@gmail.com',
          replyTo: email,
          subject: `New booking: ${name.slice(0, 100)} — ${formatInTimezone(startDateTime, timezone)}`,
          html: `
            <h2>New Booking</h2>
            <p><strong>Name:</strong> ${esc(name)}</p>
            <p><strong>Email:</strong> ${esc(email)}</p>
            <p><strong>When:</strong> ${esc(formatInTimezone(startDateTime, timezone))} &ndash; ${esc(formatInTimezone(endDateTime, timezone))}</p>
            <p><strong>Meet link:</strong> ${event.hangoutLink ? `<a href="${esc(event.hangoutLink)}">${esc(event.hangoutLink)}</a>` : 'Not available'}</p>
            <p><strong>Notes:</strong></p>
            <p>${esc(notes || 'None').replace(/\n/g, '<br>')}</p>
          `,
        })
      } else {
        console.warn('RESEND_API_KEY not set; skipping booking notification email')
      }
    } catch (emailError) {
      console.error('Booking notification email failed:', emailError)
    }

    return NextResponse.json({ success: true, meetLink: event.hangoutLink || null }, { status: 200 })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
