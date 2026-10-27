"use client"

import { SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import type { Locale } from "@/lib/portfolio/paths"

export function ThemeToggle({ locale }: { locale: Locale }) {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const label =
    locale === "en"
      ? isDark
        ? "Switch to light theme"
        : "Switch to dark theme"
      : isDark
        ? "Ativar tema claro"
        : "Ativar tema escuro"

  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <SunMoon aria-hidden="true" size={18} strokeWidth={1.7} />
    </button>
  )
}
