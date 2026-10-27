import type { Metadata } from "next"
import { ContactPage } from "@/components/portfolio/contact-page"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Dérik Sehn sobre oportunidades em engenharia de software, projetos freelance ou dúvidas sobre seu trabalho.",
  alternates: {
    canonical: "/contact",
    languages: {
      "pt-BR": "/contact",
      en: "/en/contact",
    },
  },
}

export default function PortugueseContactPage() {
  return <ContactPage locale="pt-BR" />
}
