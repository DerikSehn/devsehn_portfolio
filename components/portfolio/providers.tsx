"use client"

import type { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

export function PortfolioProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
