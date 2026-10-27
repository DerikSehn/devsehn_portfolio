import type { Metadata } from "next"
import { AboutPage } from "@/components/portfolio/about-page"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a experiência de Dérik Sehn em front-end, back-end, infraestrutura em nuvem e desenvolvimento full-stack.",
  alternates: {
    canonical: "/about",
    languages: {
      "pt-BR": "/about",
      en: "/en/about",
    },
  },
}

export default function PortugueseAboutPage() {
  return <AboutPage locale="pt-BR" />
}
