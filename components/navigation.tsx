"use client"

import { useEffect, useMemo, useState } from "react"
import { CalendarIcon, Check, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TIME_OPTIONS, toDateString, zonedTimeToIso } from "@/lib/booking"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
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

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Automation", href: "/automation" },
    { label: "Case Study", href: "/case-study" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const [slotAvailability, setSlotAvailability] = useState<Record<string, { start: boolean; end: boolean }> | null>(null)
  const [availabilityVersion, setAvailabilityVersion] = useState(0)
  const [confirmation, setConfirmation] = useState<{ name: string; when: string; meetLink: string | null } | null>(
    null
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

  const upcomingDates = useMemo(() => {
    const list: { label: string; value: string }[] = []
    const formatter = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" })
    for (let i = 0; i < 14; i++) {
      const d = new Date()
      d.setDate(d.getDate() + i)
      const value = d.toISOString().slice(0, 10)
      list.push({ value, label: formatter.format(d) })
    }
    return list
  }, [])

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
    []
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
    date
      ? date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
      : "Select a date"

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M 5 7 L 5 17 M 5 7 L 12 15 L 19 7 M 19 7 L 19 17" stroke="#131f5b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="text-white text-h5 font-medium">miko</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-white/70 hover:text-white transition text-base-custom">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect Button */}
          <button
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className="hidden md:block px-5 py-2.5 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover hover:scale-105 transition-all duration-300 text-base-custom font-medium"
          >
            Book a call
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 flex flex-col gap-2 bg-hero-bg border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition px-2 py-2 text-base-custom"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false)
                setIsDialogOpen(true)
              }}
              className="w-full mt-2 px-5 py-2.5 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover transition font-medium text-base-custom text-center"
            >
              Book a call
            </button>
          </div>
        </div>
      </div>

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
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto px-6 py-6">
          <SheetHeader className="mb-4">
            <SheetTitle>Book a call</SheetTitle>
            <SheetDescription>Pick a time that works for you — you'll get a Google Calendar invite with a Meet link.</SheetDescription>
          </SheetHeader>

          {status === "success" ? (
            <div className="space-y-5 text-center py-8">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Thank you{confirmation?.name ? `, ${confirmation.name}` : ""}!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your call is booked{confirmation?.when ? ` for ${confirmation.when}` : ""}. A Google Calendar
                  invite with the Meet link is on its way to your email.
                </p>
              </div>
              {confirmation?.meetLink ? (
                <a
                  href={confirmation.meetLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-2.5 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover transition-all duration-200 text-sm font-medium"
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
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e308e]"
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
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e308e]"
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
                    className={cn(
                      "w-full justify-between text-left font-normal border-gray-200",
                      !selectedDate && "text-muted-foreground"
                    )}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                            if (TIME_OPTIONS.some((t) => t > value && t < cur && slotAvailability?.[t]?.start === false)) {
                              return ""
                            }
                            return cur
                          })
                        }}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e308e]"
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
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e308e]"
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
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full justify-between text-left font-normal border-gray-200"
                      >
                        <span className="truncate">{formData.timezone || "Select timezone"}</span>
                        <ChevronDown className="h-4 w-4 opacity-60" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-[320px]" align="start">
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
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e308e]"
                placeholder="Agenda or anything I should prepare"
              />
            </div>

            {status === "error" ? (
              <div className="text-sm rounded-lg px-3 py-2 bg-red-50 text-red-700 border border-red-200">
                {statusMessage}
              </div>
            ) : null}

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-5 py-2.5 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover transition-all duration-200 text-sm font-medium disabled:opacity-60"
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

          <div className="rounded-lg border border-dashed border-gray-200 p-3 text-xs text-muted-foreground mt-4">
            <p className="font-semibold text-foreground text-sm mb-1">How it works</p>
            <p>Availability comes straight from my calendar — booked times are disabled. Booking creates a Google Calendar event with a Meet link and emails you the invite.</p>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
