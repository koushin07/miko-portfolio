# In-house booking setup (Google Calendar + Sheets)

The "Book a call" form talks directly to Google — no Make.com. Flow:

1. `GET /api/availability?date=YYYY-MM-DD&timezone=<IANA>` — free/busy query against the calendar; the form disables booked time options.
2. `POST /api/booking` — re-checks availability, creates a Google Calendar event with a Google Meet link and the visitor as attendee (`sendUpdates=all`, so Google emails the invite), then best-effort: appends a row to the bookings spreadsheet, sends the visitor a thank-you email from the owner's Gmail (Gmail API), and sends the owner a notification email (Resend).

## One-time Google Cloud setup

1. Create a project at https://console.cloud.google.com (or reuse one).
2. **Enable APIs**: "Google Calendar API", "Google Sheets API" and "Gmail API" (APIs & Services → Library).
3. **OAuth consent screen** (APIs & Services → OAuth consent screen):
   - User type: **External**.
   - After creating it, set Publishing status to **In production**. (In "Testing" mode the refresh token expires after 7 days.) An unverified production app is fine — only you consent, once.
4. **Credentials** → Create credentials → OAuth client ID → Application type: **Desktop app**. Note the client ID and secret.
5. Mint the refresh token:

   ```bash
   node scripts/google-oauth-setup.mjs
   ```

   Open the printed URL, sign in with the Gmail account that owns the calendar (canaresmiko3@gmail.com), approve the scopes (calendar events, free/busy, spreadsheets, send email). The script prints the three env values.

## Environment variables

Set in `.env.local` for local dev and in Vercel → Project → Settings → Environment Variables:

| Variable | Required | Notes |
|---|---|---|
| `GOOGLE_CLIENT_ID` | yes | From the OAuth client |
| `GOOGLE_CLIENT_SECRET` | yes | From the OAuth client |
| `GOOGLE_REFRESH_TOKEN` | yes | Printed by the setup script |
| `GOOGLE_CALENDAR_ID` | no | Defaults to `primary` |
| `BOOKING_SHEET_ID` | no | Spreadsheet ID of "upcoming bookings/calls" (`1jVHZSTMzCjDXInyPP-OfxD6dc0c7UIPjHP_YqOnd7B4`). Unset = sheet logging skipped |
| `BOOKING_SHEET_RANGE` | no | Defaults to `Sheet1!A:G` (columns: email, name, timezone, start, end, notes, submittedAt) |

## Testing

```bash
npm run dev
curl "http://localhost:3000/api/availability?date=2026-07-10&timezone=Asia/Manila"
```

Then book through the form with a secondary email address and confirm:

- The event appears on the calendar with a Meet link and both attendees.
- The visitor address receives the Google Calendar invite email.
- A new row lands in the bookings sheet.
- Booking the same slot again returns "That time is no longer available."

## Notes

- Meeting slots come from `TIME_OPTIONS` in `lib/booking.ts` — edit there to change offered times (server and form share it).
- Meetings are capped at 2 hours server-side (`app/api/booking/route.ts`).
- If the refresh token ever stops working (revoked, Google security event), re-run the setup script and update the env var.
