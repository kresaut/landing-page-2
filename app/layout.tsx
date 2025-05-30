import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kresaut | Criação de Sites e Sistemas Sob Medida em Gaspar - SC",
  description:
    "A Kresaut é uma Software House em Gaspar (SC) que cria sites, sistemas e soluções digitais personalizadas. Desenvolvemos projetos profissionais, rápidos e com foco em resultados reais para empresas em crescimento.",
  keywords: [
    "Kresaut",
    "software house Gaspar",
    "criação de sites profissionais",
    "sistemas personalizados",
    "sites para empresas",
    "desenvolvimento de sistemas web",
    "empresa de tecnologia em SC",
    "e-commerce personalizado",
    "criação de lojas virtuais",
    "sistema sob medida",
    "agência digital em Gaspar",
    "sites rápidos e responsivos",
    "Next.js para empresas",
    "desenvolvimento web Santa Catarina",
    "software sob demanda",
    "consultoria em tecnologia",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kresaut.com.br",
    siteName: "Kresaut",
    title: "Kresaut | Criação de Sites e Sistemas Sob Medida em Gaspar - SC",
    description:
      "Software House em Gaspar, SC especializada em desenvolvimento de sites profissionais, sistemas web, e-commerce e aplicações personalizadas. Transforme sua ideia em realidade digital.",
    images: [
      {
        url: "https://kresaut.com.br/logo.png",
        width: 1200,
        height: 630,
        alt: "Kresaut - Software House e Desenvolvimento Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kresaut | Criação de Sites e Sistemas Sob Medida em Gaspar - SC",
    description:
      "Software House especializada em desenvolvimento de sites profissionais, sistemas web e aplicações personalizadas em Gaspar, SC.",
    images: ["https://kresaut.com.br/logo.png"],
  },
  alternates: {
    canonical: "https://kresaut.com.br",
  },
  verification: {
    google: "COLE-O-CÓDIGO-AQUI",
  },
  generator: "v0.dev",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://kresaut.com.br" />
        <meta name="geo.region" content="BR-SC" />
        <meta name="geo.placename" content="Gaspar" />
        <meta name="geo.position" content="-26.9344;-49.0669" />
        <meta name="ICBM" content="-26.9344, -49.0669" />
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
