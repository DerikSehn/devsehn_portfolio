import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { caseStudies } from "@/lib/portfolio/content"
import { localizePath, type Locale } from "@/lib/portfolio/paths"

export function WorkPage({ locale }: { locale: Locale }) {
  const english = locale === "en"

  return (
    <>
      <section className="page-intro site-container">
        <p className="eyebrow">{english ? "Projects" : "Projetos"}</p>
        <h1>{english ? "Work" : "Trabalhos"}</h1>
        <p className="page-intro-copy">
          {english
            ? "A selection of software projects, from industrial monitoring to digital commerce."
            : "Uma seleção de projetos de software, de monitoramento industrial a comércio digital."}
        </p>
      </section>

      <section className="work-index site-container" aria-label={english ? "Case studies" : "Cases"}>
        {caseStudies[locale].map((study, index) => (
          <Link
            className={`work-card work-card-${index + 1}`}
            href={localizePath(locale, `/work/${study.slug}`)}
            key={study.slug}
          >
            <div className="work-card-art">
              <Image
                alt={study.imageAlt}
                fill
                priority={index === 0}
                sizes="(max-width: 760px) 100vw, 50vw"
                src={study.image}
              />
            </div>
            <div className="work-card-copy">
              <p className="eyebrow">{study.domain}</p>
              <h2>{study.title}</h2>
              <p>{study.summary}</p>
              <span className="inline-link">
                {english ? "Read the case" : "Conhecer o case"}
                <ArrowUpRight aria-hidden="true" size={17} />
              </span>
            </div>
          </Link>
        ))}
      </section>

    </>
  )
}
