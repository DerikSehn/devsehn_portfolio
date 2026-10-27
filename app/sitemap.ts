import type { MetadataRoute } from "next"

const siteUrl = "https://www.devsehn.com.br"
const routes = [
  "",
  "/work",
  "/work/eli-control",
  "/work/eli-pecas",
  "/about",
  "/contact",
  "/en",
  "/en/work",
  "/en/work/eli-control",
  "/en/work/eli-pecas",
  "/en/about",
  "/en/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    changeFrequency: route.includes("/work/") ? "monthly" : "yearly",
    priority: route === "" || route === "/en" ? 1 : 0.7,
  }))
}
