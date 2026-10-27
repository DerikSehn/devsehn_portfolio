import Link from "next/link"
import type { ReactNode } from "react"

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "text" | "outline"
  download?: boolean
  className?: string
}

export function ActionLink({
  href,
  children,
  variant = "text",
  download,
  className = "",
}: ActionLinkProps) {
  return (
    <Link
      className={`action-link action-link-${variant} ${className}`.trim()}
      download={download}
      href={href}
    >
      {children}
    </Link>
  )
}

export function SectionHeading({
  title,
  description,
  label,
  id,
}: {
  title: string
  description?: string
  label?: string
  id?: string
}) {
  return (
    <div className="section-heading">
      {label && <p className="eyebrow">{label}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
