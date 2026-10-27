import Link from "next/link"
import { localizePath, type Locale } from "@/lib/portfolio/paths"

export function SiteFooter({ locale }: { locale: Locale }) {
  const english = locale === "en"

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link className="footer-brand" href={localizePath(locale, "/")}>
          DevSehn
        </Link>
        <p>
          {english
            ? "Derik Sehn · Software Engineer"
            : "Derik Sehn · Engenheiro de software"}
        </p>
        <div className="footer-links">
          <a href="mailto:derikbosing@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/derik-sehn/" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/DerikSehn" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
