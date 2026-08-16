"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import { CalendarIcon, Check, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TIME_OPTIONS, toDateString, zonedTimeToIso } from "@/lib/booking"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"

const inputClasses =
  "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"

export function BookingSheet({ trigger }: { trigger: ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedStartTime, setSelectedStartTime] = useState("")
  const [selectedEndTime, setSelectedEndTime] = useState("")
  const [timezoneOpen, setTimezoneOpen] = useState(false)
  const unavailableDates = useMemo<string[]>(() => [], [])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timezone: defaultTimezone,
    notes: "",
  })

  const [slotAvailability, setSlotAvailability] = useState<Record<string, { start: boolean; end: boolean }> | null>(
    null,
  )
  const [availabilityVersion, setAvailabilityVersion] = useState(0)
  const [confirmation, setConfirmation] = useState<{ name: string; when: string; meetLink: string | null } | null>(
    null,
  )

  useEffect(() => {
    if (!selectedDate) {
      setSlotAvailability(null)
      return
    }
    let cancelled = false
    const load = async () => {
      try {
        const params = new URLSearchParams({ date: toDateString(selectedDate), timezone: formData.timezone })
        const res = await fetch(`/api/availability?${params}`)
        if (!res.ok) throw new Error(`Availability request failed: ${res.status}`)
        const data = await res.json()
        if (cancelled) return
        const map: Record<string, { start: boolean; end: boolean }> = {}
        for (const slot of data.slots || []) map[slot.time] = { start: slot.start, end: slot.end }
        setSlotAvailability(map)
        setSelectedStartTime((cur) => (cur && map[cur]?.start === false ? "" : cur))
        setSelectedEndTime((cur) => (cur && map[cur]?.end === false ? "" : cur))
      } catch (err) {
        console.error(err)
        if (!cancelled) setSlotAvailability(null)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [selectedDate, formData.timezone, availabilityVersion])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate) {
      setStatus("error")
      setStatusMessage("Please select a date.")
      return
    }
    if (!selectedStartTime || !selectedEndTime) {
      setStatus("error")
      setStatusMessage("Please select a start and end time.")
      return
    }
    if (selectedEndTime <= selectedStartTime) {
      setStatus("error")
      setStatusMessage("End time must be after start time.")
      return
    }
    setStatus("loading")
    setStatusMessage("")
    try {
      const dateStr = toDateString(selectedDate)
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          startDateTime: zonedTimeToIso(dateStr, selectedStartTime, formData.timezone),
          endDateTime: zonedTimeToIso(dateStr, selectedEndTime, formData.timezone),
          source: "nav-book-call",
          submittedAt: new Date().toISOString(),
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        setStatus("error")
        setStatusMessage(data?.error || "Could not send request. Please try again.")
        if (res.status === 409) {
          // The slot was taken meanwhile — refresh the dropdowns
          setAvailabilityVersion((v) => v + 1)
        }
        return
      }
      setConfirmation({
        name: formData.name,
        when: `${formatDate(selectedDate)}, ${selectedStartTime}–${selectedEndTime} (${formData.timezone})`,
        meetLink: data?.meetLink || null,
      })
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        timezone: defaultTimezone,
        notes: "",
      })
      setSelectedDate(undefined)
      setSelectedStartTime("")
      setSelectedEndTime("")
    } catch (err) {
      setStatus("error")
      setStatusMessage("Could not send request. Please try again.")
      console.error(err)
    }
  }

  const timezones = useMemo(
    () => [
      "Asia/Manila",
      "UTC",
      "Europe/London",
      "America/New_York",
      "Asia/Tokyo",
      "Australia/Sydney",
      "Africa/Johannesburg",
      "America/Los_Angeles",
      "Pacific/Auckland",
      "Europe/Berlin",
      "America/Chicago",
    ],
    [],
  )

  const isStartDisabled = (time: string) => slotAvailability?.[time]?.start === false

  // An end time is out if it's booked, not after the chosen start, or if the
  // range from the chosen start would span a busy block in between.
  const isEndDisabled = (time: string) => {
    if (slotAvailability?.[time]?.end === false) return true
    if (selectedStartTime) {
      if (time <= selectedStartTime) return true
      if (TIME_OPTIONS.some((t) => t > selectedStartTime && t < time && slotAvailability?.[t]?.start === false)) {
        return true
      }
    }
    return false
  }

  const formatDate = (date?: Date) =>
    date ? date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "Select a date"

  return (
    <>
      <span className="contents" onClick={() => setIsDialogOpen(true)}>
        {trigger}
      </span>
      <Sheet
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open)
          if (!open) {
            setStatus("idle")
            setStatusMessage("")
            setConfirmation(null)
          }
        }}
      >
        <SheetContent side="right" className="w-full overflow-y-auto px-6 py-6 sm:max-w-lg">
          <SheetHeader className="mb-4">
            <SheetTitle>Book a call</SheetTitle>
            <SheetDescription>
              Pick a time that works for you — you'll get a Google Calendar invite with a Meet link.
            </SheetDescription>
          </SheetHeader>

          {status === "success" ? (
            <div className="space-y-5 py-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/15">
                <Check className="h-6 w-6 text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Thank you{confirmation?.name ? `, ${confirmation.name}` : ""}!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your call is booked{confirmation?.when ? ` for ${confirmation.when}` : ""}. A Google Calendar invite
                  with the Meet link is on its way to your email.
                </p>
              </div>
              {confirmation?.meetLink ? (
                <a
                  href={confirmation.meetLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-accent-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-primary-hover"
                >
                  Open Google Meet link
                </a>
              ) : null}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle")
                    setStatusMessage("")
                    setConfirmation(null)
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Book another time
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-foreground">Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-foreground">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-foreground">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn("w-full justify-between text-left font-normal", !selectedDate && "text-muted-foreground")}
                    >
                      <span className="inline-flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        {formatDate(selectedDate)}
                      </span>
                      <ChevronDown className="h-4 w-4 opacity-60" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-2" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => {
                        const startOfToday = new Date()
                        startOfToday.setHours(0, 0, 0, 0)
                        return unavailableDates.includes(date.toISOString().slice(0, 10)) || date < startOfToday
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {selectedDate ? (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Preferred time</label>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Start</span>
                        <select
                          required
                          value={selectedStartTime}
                          onChange={(e) => {
                            const value = e.target.value
                            setSelectedStartTime(value)
                            setSelectedEndTime((cur) => {
                              if (!cur || cur <= value) return ""
                              if (
                                TIME_OPTIONS.some(
                                  (t) => t > value && t < cur && slotAvailability?.[t]?.start === false,
                                )
                              ) {
                                return ""
                              }
                              return cur
                            })
                          }}
                          className={inputClasses}
                        >
                          <option value="">Select start time</option>
                          {TIME_OPTIONS.map((time) => (
                            <option key={time} value={time} disabled={isStartDisabled(time)}>
                              {time}
                              {isStartDisabled(time) ? " — booked" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">End</span>
                        <select
                          required
                          value={selectedEndTime}
                          onChange={(e) => setSelectedEndTime(e.target.value)}
                          className={inputClasses}
                        >
                          <option value="">Select end time</option>
                          {TIME_OPTIONS.map((time) => (
                            <option key={time} value={time} disabled={isEndDisabled(time)}>
                              {time}
                              {isEndDisabled(time) ? " — unavailable" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-foreground">Timezone</label>
                    <Popover open={timezoneOpen} onOpenChange={setTimezoneOpen}>
                      <PopoverTrigger asChild>
                        <Button type="button" variant="outline" className="w-full justify-between text-left font-normal">
                          <span className="truncate">{formData.timezone || "Select timezone"}</span>
                          <ChevronDown className="h-4 w-4 opacity-60" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[320px] p-0" align="start">
                        <Command>
                          <CommandInput placeholder="Search timezone..." />
                          <CommandEmpty>No timezone found.</CommandEmpty>
                          <CommandGroup className="max-h-60 overflow-auto">
                            {timezones.map((tz) => (
                              <CommandItem
                                key={tz}
                                value={tz}
                                onSelect={(value) => {
                                  setFormData({ ...formData, timezone: value })
                                  setTimezoneOpen(false)
                                }}
                              >
                                {tz}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                </>
              ) : null}

              <div className="space-y-1">
                <label className="block text-sm font-medium text-foreground">Notes (optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className={inputClasses}
                  placeholder="Agenda or anything I should prepare"
                />
              </div>

              {status === "error" ? (
                <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive-foreground">
                  {statusMessage}
                </div>
              ) : null}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-lg bg-accent-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-primary-hover disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send request"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="mt-4 rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
            <p className="mb-1 text-sm font-semibold text-foreground">How it works</p>
            <p>
              Availability comes straight from my calendar — booked times are disabled. Booking creates a Google
              Calendar event with a Meet link and emails you the invite.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
