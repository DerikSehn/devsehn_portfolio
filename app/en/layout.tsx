import type { ReactNode } from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import { PersonJsonLd } from "@/components/portfolio/person-jsonld"
import { PortfolioProviders } from "@/components/portfolio/providers"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteHeader } from "@/components/portfolio/site-header"
import "../globals.css"

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devsehn.com.br"),
  title: {
    default: "Dérik Sehn — Software Engineer",
    template: "%s | DevSehn",
  },
  description:
    "Derik Sehn is a software engineer building web applications and backend systems for industrial monitoring, commerce, logistics, and healthcare.",
  openGraph: {
    title: "Dérik Sehn — Software Engineer",
    description:
      "Software projects in industrial monitoring, digital commerce, logistics, and healthcare.",
    siteName: "DevSehn",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    languages: {
      "pt-BR": "/",
      en: "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${monoFont.variable}`}>
        <PortfolioProviders>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <SiteHeader locale="en" />
          <main className="site-main" id="main-content">
            {children}
          </main>
          <SiteFooter locale="en" />
          <PersonJsonLd />
        </PortfolioProviders>
      </body>
    </html>
  )
}
