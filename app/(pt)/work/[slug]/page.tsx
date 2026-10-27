import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyPage } from "@/components/portfolio/case-study-page"
import { caseStudies, getCaseStudy } from "@/lib/portfolio/content"

type CasePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies["pt-BR"].map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug, "pt-BR")

  if (!study) return { title: "Case não encontrado" }

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/work/${slug}`,
      languages: {
        "pt-BR": `/work/${slug}`,
        en: `/en/work/${slug}`,
      },
    },
    openGraph: {
      title: `${study.title} | DevSehn`,
      description: study.summary,
      images: [study.image],
    },
  }
}

export default async function PortugueseCasePage({ params }: CasePageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug, "pt-BR")
  if (!study) notFound()

  return <CaseStudyPage locale="pt-BR" study={study} />
}
