import type { Metadata } from "next"
import { AboutPage } from "@/components/portfolio/about-page"

export const metadata: Metadata = {
  title: "About",
  description:
    "Explore Derik Sehn's frontend, backend, cloud infrastructure, and full-stack experience.",
  alternates: {
    canonical: "/en/about",
    languages: {
      "pt-BR": "/about",
      en: "/en/about",
    },
  },
}

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />
}
