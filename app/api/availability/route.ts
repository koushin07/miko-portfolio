import { NextRequest, NextResponse } from 'next/server'
import { googleConfigured, queryFreeBusy } from '@/lib/google'
import { TIME_OPTIONS, isValidTimezone, zonedTimeToIso } from '@/lib/booking'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date') || ''
    const timezone = searchParams.get('timezone') || 'UTC'

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: 'Invalid date, expected YYYY-MM-DD' }, { status: 400 })
    }
    if (!isValidTimezone(timezone)) {
      return NextResponse.json({ error: 'Invalid timezone' }, { status: 400 })
    }

    if (!googleConfigured()) {
      console.error('Missing Google OAuth environment variables')
      return NextResponse.json(
        { error: 'Booking service is not configured. Please try again later.' },
        { status: 503 }
      )
    }

    const timeMin = zonedTimeToIso(date, '00:00', timezone)
    const timeMax = zonedTimeToIso(date, '23:59', timezone)
    const busy = await queryFreeBusy(timeMin, timeMax)

    const now = Date.now()
    const slots = TIME_OPTIONS.map((time) => {
      const instant = Date.parse(zonedTimeToIso(date, time, timezone))
      // A time can't START a meeting if it falls inside a busy block [start, end),
      // and can't END one if any earlier start would overlap the block (start, end].
      const start =
        instant > now && !busy.some((b) => instant >= Date.parse(b.start) && instant < Date.parse(b.end))
      const end =
        instant > now && !busy.some((b) => instant > Date.parse(b.start) && instant <= Date.parse(b.end))
      return { time, start, end }
    })

    return NextResponse.json({ slots })
  } catch (error) {
    console.error('Availability error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
