// Minimal Google Calendar / Sheets client using the OAuth refresh-token grant.
// Requires GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET and GOOGLE_REFRESH_TOKEN
// (mint the refresh token once with `node scripts/google-oauth-setup.mjs`).

let cachedToken: { accessToken: string; expiresAt: number } | null = null

export const googleConfigured = () =>
  Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN)

const calendarId = () => process.env.GOOGLE_CALENDAR_ID || 'primary'

export async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.accessToken
  }
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: 'refresh_token',
    }),
  })
  if (!res.ok) {
    throw new Error(`Google token refresh failed: ${res.status} ${await res.text()}`)
  }
  const data = await res.json()
  cachedToken = { accessToken: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 }
  return cachedToken.accessToken
}

export type BusyInterval = { start: string; end: string }

export async function queryFreeBusy(timeMin: string, timeMax: string): Promise<BusyInterval[]> {
  const token = await getAccessToken()
  const res = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ timeMin, timeMax, items: [{ id: calendarId() }] }),
  })
  if (!res.ok) {
    throw new Error(`FreeBusy query failed: ${res.status} ${await res.text()}`)
  }
  const data = await res.json()
  const calendars = data.calendars || {}
  const entry = calendars[calendarId()] || (Object.values(calendars)[0] as { busy?: BusyInterval[] } | undefined)
  return entry?.busy ?? []
}

export type BookingEventInput = {
  name: string
  email: string
  notes?: string
  start: string // RFC3339 with offset
  end: string
  timezone: string
}

export async function createBookingEvent(input: BookingEventInput) {
  const token = await getAccessToken()
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId())}/events?conferenceDataVersion=1&sendUpdates=all`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      summary: `Consultation: ${input.name} × Miko`,
      description: input.notes || '',
      start: { dateTime: input.start, timeZone: input.timezone },
      end: { dateTime: input.end, timeZone: input.timezone },
      attendees: [{ email: input.email, displayName: input.name }],
      conferenceData: {
        createRequest: { requestId: crypto.randomUUID(), conferenceSolutionKey: { type: 'hangoutsMeet' } },
      },
      guestsCanModify: false,
      guestsCanInviteOthers: true,
      guestsCanSeeOtherGuests: true,
      reminders: { useDefault: true },
    }),
  })
  if (!res.ok) {
    throw new Error(`Event creation failed: ${res.status} ${await res.text()}`)
  }
  return res.json()
}

// Prefix a quote so visitor input starting with =, +, -, @ etc. is stored as
// text instead of being evaluated as a spreadsheet formula.
const defuseFormula = (value: string) => (/^[=+\-@\t\r]/.test(value) ? `'${value}` : value)

// Sends a plaintext email as the authenticated Gmail account.
// Requires the gmail.send scope on the refresh token.
export async function sendGmail(to: string, subject: string, body: string) {
  const token = await getAccessToken()
  const raw = Buffer.from(
    [
      'From: Miko Canares <canaresmiko3@gmail.com>',
      `To: ${to}`,
      `Subject: ${subject}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      body,
    ].join('\r\n')
  ).toString('base64url')
  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ raw }),
  })
  if (!res.ok) {
    throw new Error(`Gmail send failed: ${res.status} ${await res.text()}`)
  }
  return res.json()
}

export async function appendBookingRow(values: (string | undefined)[]) {
  const sheetId = process.env.BOOKING_SHEET_ID
  if (!sheetId) return
  const range = process.env.BOOKING_SHEET_RANGE || 'Sheet1!A:G'
  const token = await getAccessToken()
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ values: [values.map((v) => defuseFormula(v ?? ''))] }),
  })
  if (!res.ok) {
    throw new Error(`Sheet append failed: ${res.status} ${await res.text()}`)
  }
}
