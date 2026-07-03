#!/usr/bin/env node
// One-time helper to mint the Google OAuth refresh token for the booking API.
// Usage: node scripts/google-oauth-setup.mjs
// Prerequisites: a Google Cloud OAuth client (Desktop app type) with the
// Calendar and Sheets APIs enabled — see docs/booking-setup.md.

import http from "node:http"
import readline from "node:readline/promises"

const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar.freebusy",
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/gmail.send",
].join(" ")

const PORT = 53682
const REDIRECT_URI = `http://127.0.0.1:${PORT}`

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const clientId = process.env.GOOGLE_CLIENT_ID || (await rl.question("Google OAuth Client ID: "))
const clientSecret = process.env.GOOGLE_CLIENT_SECRET || (await rl.question("Google OAuth Client Secret: "))
rl.close()

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
  client_id: clientId.trim(),
  redirect_uri: REDIRECT_URI,
  response_type: "code",
  access_type: "offline",
  prompt: "consent",
  scope: SCOPES,
})}`

console.log("\nOpen this URL in your browser and approve access with the Google account that owns the calendar:\n")
console.log(authUrl)
console.log(`\nWaiting for the OAuth redirect on ${REDIRECT_URI} ...`)

const code = await new Promise((resolve, reject) => {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, REDIRECT_URI)
    const authCode = url.searchParams.get("code")
    const error = url.searchParams.get("error")
    // Ignore favicon and other stray requests — only react to the OAuth callback
    if (!authCode && !error) {
      res.writeHead(404)
      res.end()
      return
    }
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(
      authCode
        ? "<h2>All set — you can close this tab and return to the terminal.</h2>"
        : `<h2>Authorization failed: ${error}</h2>`
    )
    server.close()
    if (authCode) resolve(authCode)
    else reject(new Error(`Authorization failed: ${error}`))
  })
  server.listen(PORT)
})

const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    client_id: clientId.trim(),
    client_secret: clientSecret.trim(),
    code,
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
  }),
})

const tokens = await tokenRes.json()
if (!tokenRes.ok || !tokens.refresh_token) {
  console.error("\nToken exchange failed:", JSON.stringify(tokens, null, 2))
  process.exit(1)
}

console.log("\nSuccess! Add these to .env.local and your Vercel project settings:\n")
console.log(`GOOGLE_CLIENT_ID=${clientId.trim()}`)
console.log(`GOOGLE_CLIENT_SECRET=${clientSecret.trim()}`)
console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`)
