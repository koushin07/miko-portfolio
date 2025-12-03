import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY environment variable')
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'canaresmiko3@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (result.error) {
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
