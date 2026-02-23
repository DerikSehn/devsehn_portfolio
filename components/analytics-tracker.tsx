'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Fires a lightweight POST to /api/track on every route change.
 * Runs silently in the background — failures are ignored.
 */
export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {
      // Silently discard network errors
    })
  }, [pathname])

  return null
}
