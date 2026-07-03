// Shared booking constants and timezone math, used by both the booking form
// (client) and the availability/booking API routes (server).

export const TIME_OPTIONS = ["09:00", "09:30", "10:00", "10:30", "11:00", "13:00", "14:00", "15:00", "16:00"]

export const isValidTimezone = (timeZone: string) => {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone })
    return true
  } catch {
    return false
  }
}

// Minutes that `timeZone` is ahead of UTC at the given instant.
export const getOffsetMinutes = (date: Date, timeZone: string) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  })
  const parts = formatter.formatToParts(date)
  const pick = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((p) => p.type === type)?.value || 0)
  const asUtc = Date.UTC(pick("year"), pick("month") - 1, pick("day"), pick("hour"), pick("minute"), pick("second"))
  return (asUtc - date.getTime()) / 60000
}

const pad = (n: number) => String(n).padStart(2, "0")

// "2026-07-10" + "09:00" + "Asia/Manila" -> "2026-07-10T09:00:00+08:00"
export const zonedTimeToIso = (dateStr: string, time: string, timeZone: string) => {
  if (!dateStr || !time) return ""
  const [y, m, d] = dateStr.split("-").map(Number)
  const [hour = 0, minute = 0] = time.split(":").map(Number)
  const base = new Date(Date.UTC(y, m - 1, d, hour, minute, 0))
  const offsetMinutes = getOffsetMinutes(base, timeZone)
  const sign = offsetMinutes >= 0 ? "+" : "-"
  const abs = Math.abs(offsetMinutes)
  return `${y}-${pad(m)}-${pad(d)}T${pad(hour)}:${pad(minute)}:00${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`
}

// Local calendar date of a picked Date object, as "YYYY-MM-DD".
export const toDateString = (date: Date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
