"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { pageview } from "@/lib/analytics"

export default function AnalyticsListener() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const search = searchParams.toString()
    const url = search ? `${pathname}?${search}` : pathname
    pageview(url)
  }, [pathname, searchParams])

  return null
}
