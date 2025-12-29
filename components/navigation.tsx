"use client"

import { useMemo, useState } from "react"
import { CalendarIcon, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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

  const bookingWebhook = process.env.NEXT_PUBLIC_BOOKING_WEBHOOK || "https://hook.us2.make.com/jj0ks9fxup85shdzos3b7x5e1pavkhc1"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!bookingWebhook) {
      setStatus("error")
      setStatusMessage("Booking webhook not configured. Add NEXT_PUBLIC_BOOKING_WEBHOOK to .env.")
      return
    }
    if (!selectedDate) {
      setStatus("error")
      setStatusMessage("Please select a date.")
      return
    }
    setStatus("loading")
    setStatusMessage("")
    try {
      const res = await fetch(bookingWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          startDateTime:
            selectedDate && selectedStartTime
              ? `${selectedDate.toISOString().slice(0, 10)}T${selectedStartTime}`
              : "",
          endDateTime:
            selectedDate && selectedEndTime
              ? `${selectedDate.toISOString().slice(0, 10)}T${selectedEndTime}`
              : "",
          source: "nav-book-call",
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`)
      }
      setStatus("success")
      setStatusMessage("Request sent. I'll confirm a time shortly.")
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

  const timeOptions = ["09:00", "09:30", "10:00", "10:30", "11:00", "13:00", "14:00", "15:00", "16:00"]
  const timezones = useMemo(() => {
    if (typeof Intl !== "undefined" && "supportedValuesOf" in Intl && Intl.supportedValuesOf) {
      try {
        return Intl.supportedValuesOf("timeZone")
      } catch {
        // ignore
      }
    }
    return [
      "Asia/Manila",
      "UTC",
      "America/Los_Angeles",
      "America/New_York",
      "Europe/London",
      "Europe/Berlin",
      "Asia/Singapore",
    ]
  }, [])

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

      <Sheet open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto px-6 py-6">
          <SheetHeader className="mb-4">
            <SheetTitle>Book a call</SheetTitle>
            <SheetDescription>Your request goes to my automation; you'll get a calendar invite.</SheetDescription>
          </SheetHeader>

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
                    disabled={(date) =>
                      unavailableDates.includes(date.toISOString().slice(0, 10)) || date < new Date()
                    }
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
                        value={selectedStartTime}
                        onChange={(e) => setSelectedStartTime(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e308e]"
                      >
                        <option value="">Select start time</option>
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground">End</span>
                      <select
                        value={selectedEndTime}
                        onChange={(e) => setSelectedEndTime(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e308e]"
                      >
                        <option value="">Select end time</option>
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
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

            {status !== "idle" ? (
              <div
                className={`text-sm rounded-lg px-3 py-2 ${
                  status === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
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

          <div className="rounded-lg border border-dashed border-gray-200 p-3 text-xs text-muted-foreground mt-4">
            <p className="font-semibold text-foreground text-sm mb-1">Automation</p>
            <p>This booking form triggers a Make.com webhook to create the calendar invite and send confirmations. Adjust availability by editing the disabled dates/times in code.</p>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
              <div className="rounded-lg border border-dashed border-gray-200 p-3 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground text-sm mb-1">Pro tip</p>
                <p>Unavailable dates can be listed in code via the <code>unavailableDates</code> array. We'll skip disabled dates and send your chosen slot to automation.</p>
              </div>
