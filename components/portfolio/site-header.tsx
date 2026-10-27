"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { localizePath, switchLocalePath, type Locale } from "@/lib/portfolio/paths"
import { ThemeToggle } from "./theme-toggle"

const navigation = {
  "pt-BR": [
    { label: "Trabalhos", path: "/work" },
    { label: "Sobre", path: "/about" },
    { label: "Contato", path: "/contact" },
  ],
  en: [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const english = locale === "en"
  const cvLabel = "CV"
  const menuLabel = english ? "Open navigation" : "Abrir navegação"

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  const isActive = (path: string) => {
    const href = localizePath(locale, path)
    return path === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          className="brand"
          href={localizePath(locale, "/")}
          aria-label="DevSehn — home"
        >
          <svg
            aria-hidden="true"
            className="brand-mark"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M14.5 2.5 4 21.5h6.1l9.9-19h-5.5Z" fill="currentColor" />
          </svg>
          <span>DevSehn</span>
        </Link>

        <nav className="desktop-navigation" aria-label={english ? "Main navigation" : "Navegação principal"}>
          {navigation[locale].map((item) => (
            <Link
              aria-current={isActive(item.path) ? "page" : undefined}
              className="nav-link"
              href={localizePath(locale, item.path)}
              key={item.path}
            >
              {item.label}
            </Link>
          ))}
          <a className="nav-link cv-link" href="/Derik-Sehn-CV-en.pdf" download>
            {cvLabel}
          </a>
        </nav>

        <div className="header-utilities">
          <ThemeToggle locale={locale} />
          <div className="locale-switch" aria-label={english ? "Language" : "Idioma"}>
            <Link
              aria-current={!english ? "page" : undefined}
              aria-label="Português"
              href={switchLocalePath(pathname, "pt-BR")}
            >
              PT
            </Link>
            <Link
              aria-current={english ? "page" : undefined}
              aria-label="English"
              href={switchLocalePath(pathname, "en")}
            >
              EN
            </Link>
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? (english ? "Close navigation" : "Fechar navegação") : menuLabel}
            className="icon-button mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-navigation" data-mobile-navigation id="mobile-navigation">
          <nav aria-label={english ? "Mobile navigation" : "Navegação móvel"}>
            {navigation[locale].map((item) => (
              <Link
                aria-current={isActive(item.path) ? "page" : undefined}
                href={localizePath(locale, item.path)}
                key={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="/Derik-Sehn-CV-en.pdf" download>
              {cvLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
