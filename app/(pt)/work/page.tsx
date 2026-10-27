import type { Metadata } from "next"
import { WorkPage } from "@/components/portfolio/work-page"

export const metadata: Metadata = {
  title: "Trabalhos",
  description:
    "Projetos de software de Dérik Sehn em monitoramento industrial e comércio digital.",
  alternates: {
    canonical: "/work",
    languages: {
      "pt-BR": "/work",
      en: "/en/work",
    },
  },
}

export default function PortugueseWorkPage() {
  return <WorkPage locale="pt-BR" />
}
