import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kresaut - Software House | Desenvolvimento de Sites e Sistemas | Gaspar, SC",
  description:
    "Software House em Gaspar, SC especializada em desenvolvimento de sites profissionais, sistemas web, e-commerce e aplicações personalizadas. Transforme sua ideia em realidade digital com tecnologia de ponta.",
  keywords: [
    "software house",
    "desenvolvimento de sites",
    "criação de sites",
    "desenvolvimento web",
    "sistemas web",
    "e-commerce",
    "aplicações web",
    "desenvolvimento de software",
    "programação",
    "Gaspar SC",
    "Santa Catarina",
    "sites responsivos",
    "desenvolvimento frontend",
    "desenvolvimento backend",
    "React",
    "Next.js",
    "Node.js",
  ].join(", "),
  authors: [{ name: "Kresaut", url: "https://kresaut.com.br" }],
  creator: "Kresaut",
  publisher: "Kresaut",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kresaut.com.br",
    siteName: "Kresaut",
    title: "Kresaut - Software House | Desenvolvimento de Sites e Sistemas | Gaspar, SC",
    description:
      "Software House em Gaspar, SC especializada em desenvolvimento de sites profissionais, sistemas web, e-commerce e aplicações personalizadas. Transforme sua ideia em realidade digital.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kresaut - Software House e Desenvolvimento Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kresaut - Software House | Desenvolvimento de Sites e Sistemas | Gaspar, SC",
    description:
      "Software House especializada em desenvolvimento de sites profissionais, sistemas web e aplicações personalizadas em Gaspar, SC.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://kresaut.com.br",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* SEO Meta Tags */}
        <link rel="canonical" href="https://kresaut.com.br" />
        <meta name="geo.region" content="BR-SC" />
        <meta name="geo.placename" content="Gaspar" />
        <meta name="geo.position" content="-26.9344;-49.0669" />
        <meta name="ICBM" content="-26.9344, -49.0669" />

        {/* Theme Color */}
        <meta name="theme-color" content="#053768" />
        <meta name="msapplication-TileColor" content="#053768" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kresaut",
              url: "https://kresaut.com.br",
              logo: "https://kresaut.com.br/logo.png",
              description:
                "Software House especializada em desenvolvimento de sites profissionais, sistemas web, e-commerce e aplicações personalizadas",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gaspar",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-47-98859-2850",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://www.facebook.com/kresaut",
                "https://www.instagram.com/kresaut",
                "https://www.linkedin.com/company/kresaut",
              ],
              foundingDate: "2018",
              areaServed: {
                "@type": "Country",
                name: "Brazil",
              },
              serviceType: [
                "Desenvolvimento de Sites",
                "Criação de E-commerce",
                "Desenvolvimento de Sistemas Web",
                "Aplicações Personalizadas",
                "Desenvolvimento Frontend",
                "Desenvolvimento Backend",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
