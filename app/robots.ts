import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://kresaut.com.br"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/auth/", "/admin/", "/.well-known/", "/temp/", "/private/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot"],
        allow: "/",
      },
      {
        userAgent: ["AhrefsBot", "MJ12bot", "DotBot", "SemrushBot", "MajesticSEO"],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
