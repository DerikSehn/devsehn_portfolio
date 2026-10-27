import type { Metadata } from "next"
import { ContactPage } from "@/components/portfolio/contact-page"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Derik Sehn about software engineering opportunities, freelance projects, or questions about his work.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      "pt-BR": "/contact",
      en: "/en/contact",
    },
  },
}

export default function EnglishContactPage() {
  return <ContactPage locale="en" />
}
