export type Locale = "pt-BR" | "en"

export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  if (locale === "en") {
    return normalized === "/" ? "/en" : `/en${normalized}`
  }
  return normalized
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const portuguesePath =
    pathname === "/en"
      ? "/"
      : pathname.startsWith("/en/")
        ? pathname.slice(3)
        : pathname

  return localizePath(locale, portuguesePath)
}
