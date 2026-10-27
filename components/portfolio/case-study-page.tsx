import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { caseStudies, type CaseStudy } from "@/lib/portfolio/content"
import { localizePath, type Locale } from "@/lib/portfolio/paths"
import { ActionLink } from "./ui"

export function CaseStudyPage({
  locale,
  study,
}: {
  locale: Locale
  study: CaseStudy
}) {
  const english = locale === "en"
  const related = caseStudies[locale].find((item) => item.slug !== study.slug)

  return (
    <>
      <div className="site-container case-breadcrumb">
        <Link href={localizePath(locale, "/work")}>
          <ArrowLeft aria-hidden="true" size={16} />
          {english ? "All projects" : "Todos os projetos"}
        </Link>
      </div>

      <article className="case-study site-container">
        <header className="case-header">
          <p className="eyebrow">{study.domain}</p>
          <h1>{study.title}</h1>
          <p className="case-summary">{study.caseDescription}</p>
          <div className="case-facts">
            <div>
              <span>{english ? "Role" : "Atuação"}</span>
              <strong>{study.role}</strong>
            </div>
            <div>
              <span>{english ? "Stack" : "Tecnologias"}</span>
              <strong>{study.stack.join(" · ")}</strong>
            </div>
          </div>
        </header>

        <figure className="case-cover">
          <Image
            alt={study.imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1440px"
            src={study.image}
          />
        </figure>

        <section aria-labelledby="case-context-title" className="case-context">
          <div className="case-context-label">
            <p className="eyebrow">{english ? "Overview" : "Visão geral"}</p>
            <h2 id="case-context-title">{english ? "The project" : "O projeto"}</h2>
          </div>
          <p>{study.overview}</p>
        </section>

        <section aria-labelledby="case-contributions-title" className="case-solution">
          <div>
            <p className="eyebrow">{english ? "What I worked on" : "O que desenvolvi"}</p>
            <h2 id="case-contributions-title">{study.contributionsTitle}</h2>
          </div>
          <ul className="case-contributions">
            {study.contributions.map((contribution) => (
              <li key={contribution}>
                <span className="decision-marker" aria-hidden="true" />
                <p>{contribution}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="case-decisions-title" className="case-decisions">
          <div className="section-heading">
            <p className="eyebrow">{english ? "Technical decisions" : "Decisões técnicas"}</p>
            <h2 id="case-decisions-title">{study.decisionsTitle}</h2>
          </div>
          <div className="decision-list">
            {study.decisions.map((decision) => (
              <article className="decision-row" key={decision.title}>
                <span className="decision-marker" aria-hidden="true" />
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="case-summary-title" className="case-outcome">
          <h2 id="case-summary-title">
            {english ? "Project summary" : "Resumo do projeto"}
          </h2>
          <p>{study.projectSummary}</p>
        </section>

        {related && (
          <section className="related-case">
            <div>
              <p className="eyebrow">{english ? "Next project" : "Próximo projeto"}</p>
              <h2>{related.title}</h2>
              <p>{related.summary}</p>
            </div>
            <Link
              className="related-case-link"
              href={localizePath(locale, `/work/${related.slug}`)}
              aria-label={`${english ? "View project" : "Ver projeto"}: ${related.title}`}
            >
              <ArrowRight aria-hidden="true" size={20} />
            </Link>
          </section>
        )}
      </article>

      <section className="closing-section">
        <div className="site-container closing-content">
          <p className="eyebrow">{english ? "Contact" : "Contato"}</p>
          <h2>{study.contactPrompt}</h2>
          <ActionLink href={localizePath(locale, "/contact")} variant="primary">
            {english ? "Get in touch" : "Entre em contato"}
            <ArrowUpRight aria-hidden="true" size={17} />
          </ActionLink>
        </div>
      </section>
    </>
  )
}
