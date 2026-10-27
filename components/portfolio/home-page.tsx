import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { caseStudies, experience } from "@/lib/portfolio/content"
import { localizePath, type Locale } from "@/lib/portfolio/paths"
import { ActionLink, SectionHeading } from "./ui"
import { SignalField } from "./signal-field"

export function HomePage({ locale }: { locale: Locale }) {
  const english = locale === "en"
  const featured = caseStudies[locale][0]
  const secondary = caseStudies[locale][1]

  return (
    <>
      <section className="hero-section">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <h1>
              {english ? (
                <>
                  <span className="hero-line">Software engineer</span>{" "}
                  <span className="hero-line">building web applications</span>{" "}
                  <span className="hero-line">
                    and backend systems<span className="hero-period">.</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="hero-line">Engenheiro de software</span>{" "}
                  <span className="hero-line">que desenvolve aplicações</span>{" "}
                  <span className="hero-line">
                    web e sistemas backend<span className="hero-period">.</span>
                  </span>
                </>
              )}
            </h1>
            <p className="hero-lede">
              {english
                ? "I'm Derik Sehn, a software engineer working across frontend, backend, and cloud infrastructure. I've worked on industrial monitoring, e-commerce, enterprise logistics, and healthcare software."
                : "Sou Derik Sehn, engenheiro de software com experiência em front-end, back-end e infraestrutura em nuvem. Já trabalhei com monitoramento industrial, comércio digital, logística corporativa e software para saúde."}
            </p>
            <div className="hero-actions">
              <ActionLink
                className="hero-primary"
                href={localizePath(locale, "/work")}
                variant="primary"
              >
                {english ? "View my work" : "Ver meus projetos"}
                <ArrowRight aria-hidden="true" size={18} />
              </ActionLink>
              <ActionLink href={localizePath(locale, "/contact")} variant="text">
                {english ? "Get in touch" : "Entre em contato"}
                <ArrowUpRight aria-hidden="true" size={17} />
              </ActionLink>
            </div>
          </div>
          <SignalField locale={locale} />
        </div>
      </section>

      <section aria-labelledby="featured-case-title" className="featured-section">
        <div className="site-container">
          <Link
            className="featured-case"
            href={localizePath(locale, `/work/${featured.slug}`)}
          >
            <div className="featured-case-image">
              <Image
                alt={featured.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 50vw"
                src={featured.image}
              />
            </div>
            <div className="featured-case-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                {english
                  ? "Featured project · Industrial software"
                  : "Projeto em destaque · Software industrial"}
              </p>
              <h2 id="featured-case-title">{featured.title}</h2>
              <p>{featured.summary}</p>
              <span className="inline-link">
                {english ? "View case" : "Ver case"}
                <ArrowRight aria-hidden="true" size={17} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section aria-labelledby="selected-work-title" className="section-space">
        <div className="site-container">
          <div className="section-topline">
            <SectionHeading
              id="selected-work-title"
              description={
                english
                  ? "A selection of software projects, from industrial monitoring to digital commerce."
                  : "Uma seleção de projetos de software, de monitoramento industrial a comércio digital."
              }
              label={english ? "Selected work" : "Projetos selecionados"}
              title={english ? "Projects I've worked on" : "Projetos em que trabalhei"}
            />
            <ActionLink href={localizePath(locale, "/work")} variant="text">
              {english ? "View all projects" : "Ver todos os projetos"}
              <ArrowUpRight aria-hidden="true" size={17} />
            </ActionLink>
          </div>

          <Link
            className="secondary-case"
            href={localizePath(locale, `/work/${secondary.slug}`)}
          >
            <div className="secondary-case-art">
              <Image
                alt={secondary.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 44vw"
                src={secondary.image}
              />
            </div>
            <div className="secondary-case-info">
              <p className="eyebrow">{secondary.domain}</p>
              <h3>{secondary.title}</h3>
              <p>{secondary.summary}</p>
              <span className="inline-link">
                {english ? "Read the case" : "Conhecer o case"}
                <ArrowRight aria-hidden="true" size={17} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section aria-labelledby="experience-preview-title" className="experience-preview">
        <div className="site-container experience-preview-grid">
          <div>
            <p className="eyebrow">
              {english ? "Experience" : "Experiência"}
            </p>
            <h2 id="experience-preview-title">
              {english ? "Where I've worked" : "Onde trabalhei"}
            </h2>
            <ActionLink href={localizePath(locale, "/about")} variant="text">
              {english ? "More about me" : "Mais sobre mim"}
              <ArrowUpRight aria-hidden="true" size={17} />
            </ActionLink>
          </div>
          <div className="experience-preview-list">
            {experience[locale].slice(0, 3).map((item) => (
              <article className="experience-preview-item" key={item.id}>
                <span className="experience-mark" aria-hidden="true" />
                <div>
                  <p className="experience-period">{item.period}</p>
                  <h3>{item.organization}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="site-container closing-content">
          <p className="eyebrow">{english ? "Contact" : "Contato"}</p>
          <h2>{english ? "Have a project in mind?" : "Tem um projeto em mente?"}</h2>
          <p className="closing-description">
            {english
              ? "I'm open to discussing software engineering opportunities and projects that need hands-on development."
              : "Estou aberto a conversar sobre oportunidades em engenharia de software e projetos que precisam de desenvolvimento prático."}
          </p>
          <ActionLink href={localizePath(locale, "/contact")} variant="primary">
            {english ? "Get in touch" : "Entre em contato"}
            <ArrowRight aria-hidden="true" size={18} />
          </ActionLink>
        </div>
      </section>
    </>
  )
}
