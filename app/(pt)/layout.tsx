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
    default: "Dérik Sehn — Engenheiro de software",
    template: "%s | DevSehn",
  },
  description:
    "Dérik Sehn é engenheiro de software e desenvolve aplicações web e sistemas backend para monitoramento industrial, comércio, logística e saúde.",
  openGraph: {
    title: "Dérik Sehn — Engenheiro de software",
    description:
      "Projetos de software para monitoramento industrial, comércio digital, logística e saúde.",
    siteName: "DevSehn",
    locale: "pt_BR",
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

export default function PortugueseRootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${monoFont.variable}`}>
        <PortfolioProviders>
          <a className="skip-link" href="#main-content">
            Pular para o conteúdo
          </a>
          <SiteHeader locale="pt-BR" />
          <main className="site-main" id="main-content">
            {children}
          </main>
          <SiteFooter locale="pt-BR" />
          <PersonJsonLd />
        </PortfolioProviders>
      </body>
    </html>
  )
}
