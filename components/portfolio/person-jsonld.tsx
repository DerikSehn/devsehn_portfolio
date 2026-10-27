export function PersonJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Derik Sehn",
    jobTitle: "Software Engineer",
    url: "https://www.devsehn.com.br",
    sameAs: [
      "https://www.linkedin.com/in/derik-sehn/",
      "https://github.com/DerikSehn",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  )
}
