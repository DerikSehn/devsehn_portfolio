import { ArrowDownToLine, ArrowUpRight } from "lucide-react"
import { experience, skillGroups } from "@/lib/portfolio/content"
import { localizePath, type Locale } from "@/lib/portfolio/paths"
import { ActionLink, SectionHeading } from "./ui"

const education = {
  "pt-BR": [
    {
      title: "Ciência da Computação",
      institution: "FADERGS",
      period: "2025–2027",
    },
    {
      title: "Técnico em Tecnologia da Informação",
      institution: "Instituto Federal Sul-rio-grandense",
      period: "2018–2022",
    },
  ],
  en: [
    {
      title: "Computer Science",
      institution: "FADERGS",
      period: "2025–2027",
    },
    {
      title: "Information Technology",
      institution: "Instituto Federal Sul-rio-grandense",
      period: "2018–2022",
    },
  ],
}

export function AboutPage({ locale }: { locale: Locale }) {
  const english = locale === "en"

  return (
    <>
      <section className="page-intro about-intro site-container">
        <h1>{english ? "About" : "Sobre"}</h1>
        <div className="about-lede">
          <div className="about-copy">
            <p>
              {english
                ? "I'm Derik Sehn, a software engineer working across frontend development, backend systems, and cloud infrastructure."
                : "Sou Derik Sehn, engenheiro de software com experiência em desenvolvimento front-end, sistemas back-end e infraestrutura em nuvem."}
            </p>
            <p>
              {english
                ? "My experience spans industrial monitoring, digital commerce, enterprise logistics, and healthcare software. I enjoy working across the stack, understanding how a product is used, and making the technical decisions needed to ship and maintain it."
                : "Minha experiência inclui monitoramento industrial, comércio digital, logística corporativa e software para saúde. Gosto de trabalhar em diferentes partes da aplicação, entender como o produto é usado e tomar as decisões técnicas necessárias para colocá-lo em produção e mantê-lo."}
            </p>
          </div>
          <ActionLink download href="/Derik-Sehn-CV-en.pdf" variant="outline">
            <ArrowDownToLine aria-hidden="true" size={17} />
            {english ? "Download CV" : "Baixar CV"}
          </ActionLink>
        </div>
      </section>

      <section aria-labelledby="experience-title" className="section-space site-container">
        <SectionHeading
          id="experience-title"
          label={english ? "Experience" : "Experiência"}
          title={english ? "Professional experience" : "Experiência profissional"}
        />
        <div className="experience-list">
          {experience[locale].map((item) => (
            <article className="experience-row" id={item.id} key={item.id}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.organization}</h3>
                <p className="experience-role">{item.role}</p>
              </div>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-title" className="section-space site-container">
        <SectionHeading
          id="skills-title"
          title={english ? "Technical focus" : "Tecnologias"}
        />
        <div className="skills-groups">
          {skillGroups[locale].map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-title" className="education-section">
        <div className="site-container education-layout">
          <SectionHeading
            id="education-title"
            title={english ? "Education" : "Formação"}
          />
          <div className="education-list">
            {education[locale].map((item) => (
              <article className="education-row" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                </div>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="site-container closing-content">
          <p className="eyebrow">{english ? "Contact" : "Contato"}</p>
          <h2>
            {english ? "Interested in working together?" : "Quer conversar sobre uma oportunidade?"}
          </h2>
          <ActionLink href={localizePath(locale, "/contact")} variant="primary">
            {english ? "Get in touch" : "Entre em contato"}
            <ArrowUpRight aria-hidden="true" size={17} />
          </ActionLink>
        </div>
      </section>
    </>
  )
}
