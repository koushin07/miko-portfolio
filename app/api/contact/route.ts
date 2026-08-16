import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const PROJECT_TYPES = [
  'SaaS',
  'AI Application',
  'Automation',
  'API Integration',
  'Existing Application',
  'Bug Fix / Improvement',
  'QA / Testing',
  'Other',
]

const field = (label: string, value: unknown) =>
  value ? `<p><strong>${label}:</strong> ${esc(value).replace(/\n/g, '<br>')}</p>` : ''

export async function POST(request: NextRequest) {
  try {
    const { name, email, projectType, building, help, budget, currentSite } = await request.json()

    if (!name || !email || !building) {
      return NextResponse.json(
        { error: 'Please fill in your name, email, and what you are building.' },
        { status: 400 }
      )
    }
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    if (projectType && !PROJECT_TYPES.includes(projectType)) {
      return NextResponse.json(
        { error: 'Invalid project type' },
        { status: 400 }
      )
    }
    for (const [key, value] of Object.entries({ name, building, help, budget, currentSite })) {
      if (value && (typeof value !== 'string' || value.length > 4000)) {
        return NextResponse.json({ error: `Invalid ${key}` }, { status: 400 })
      }
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

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'canaresmiko3@gmail.com',
      replyTo: email,
      subject: `New project inquiry from ${String(name).slice(0, 100)}${projectType ? ` — ${projectType}` : ''}`,
      html: `
        <h2>New Project Inquiry</h2>
        ${field('Name', name)}
        ${field('Email', email)}
        ${field('Project type', projectType)}
        ${field('What they are building', building)}
        ${field('What they need help with', help)}
        ${field('Budget / timeline', budget)}
        ${field('Current system / website', currentSite)}
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
