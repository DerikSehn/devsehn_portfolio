import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import type { Locale } from "@/lib/portfolio/paths"
import { ContactForm } from "./contact-form"

export function ContactPage({ locale }: { locale: Locale }) {
  const english = locale === "en"

  return (
    <>
      <section className="page-intro contact-intro site-container">
        <h1>{english ? "Contact" : "Contato"}</h1>
        <p className="page-intro-copy">
          {english
            ? "For software engineering opportunities, freelance projects, or questions about my work, you can reach me here."
            : "Para oportunidades em engenharia de software, projetos freelance ou dúvidas sobre meu trabalho, fale comigo por aqui."}
        </p>
      </section>

      <section className="site-container contact-layout">
        <div className="contact-details">
          <h2>{english ? "Get in touch." : "Fale comigo."}</h2>
          <a className="contact-detail-link" href="mailto:derikbosing@gmail.com">
            <Mail aria-hidden="true" size={19} />
            <span>
              <small>{english ? "Email" : "E-mail"}</small>
              derikbosing@gmail.com
            </span>
          </a>
          <a
            className="contact-detail-link"
            href="https://www.linkedin.com/in/derik-sehn/"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin aria-hidden="true" size={19} />
            <span>
              <small>LinkedIn</small>
              {english ? "Connect professionally" : "Conexão profissional"}
            </span>
          </a>
          <a
            className="contact-detail-link"
            href="https://github.com/DerikSehn"
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={19} />
            <span>
              <small>GitHub</small>
              DerikSehn
            </span>
          </a>
          <p className="contact-location">
            <MapPin aria-hidden="true" size={17} />
            {english ? "Capão da Canoa, Brazil" : "Capão da Canoa, Brasil"}
          </p>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <h2>{english ? "Send a message" : "Envie uma mensagem"}</h2>
            <p>
              {english
                ? "For opportunities, freelance projects, or questions about my work."
                : "Para oportunidades, projetos freelance ou dúvidas sobre meu trabalho."}
            </p>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </>
  )
}
