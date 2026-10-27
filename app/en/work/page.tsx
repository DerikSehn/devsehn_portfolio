import type { Metadata } from "next"
import { WorkPage } from "@/components/portfolio/work-page"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Derik Sehn's software projects in industrial monitoring and digital commerce.",
  alternates: {
    canonical: "/en/work",
    languages: {
      "pt-BR": "/work",
      en: "/en/work",
    },
  },
}

export default function EnglishWorkPage() {
  return <WorkPage locale="en" />
}
