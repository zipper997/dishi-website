import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientProviders } from "@/components/providers/ClientProviders"
import { JsonLd } from "@/components/JsonLd"
import { GoogleAnalytics } from "@/components/GoogleAnalytics"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s | disi.rs - Trakice za Nos",
    default: "disi.rs - Premium Trakice za Nos za Bolje Disanje | Nazalni Flasteri",
  },
  description:
    "Premium trakice za nos za bolje disanje i smanjenje hrkanja. Medicinski kvalitet, klinički testirano. Brza dostava u Srbiji. Poručite na disi.rs!",
  keywords: [
    "trakice za nos",
    "nazalni flasteri",
    "bolje disanje",
    "protiv hrkanja",
    "nose strips srbija",
    "disi",
    "disi",
    "flasteri za nos",
    "poboljšanje disanja",
    "smanjenje hrkanja",
    "nazalne trakice",
    "anti hrkanje",
    "nosne trakice",
  ],
  authors: [{ name: "disi.rs" }],
  creator: "disi.rs",
  publisher: "disi.rs",
  metadataBase: new URL("https://disi.rs"),
  alternates: {
    canonical: "https://disi.rs",
    languages: {
      sr: "https://disi.rs",
      en: "https://disi.rs",
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://disi.rs",
    siteName: "disi.rs",
    title: "disi.rs - Premium Trakice za Nos za Bolje Disanje",
    description:
      "Premium trakice za nos za bolje disanje i smanjenje hrkanja. Medicinski kvalitet, klinički testirano. Poručite na disi.rs!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "disi - Premium Trakice za Nos za Bolje Disanje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "disi.rs - Premium Trakice za Nos za Bolje Disanje",
    description:
      "Premium trakice za nos za bolje disanje i smanjenje hrkanja. Poručite na disi.rs!",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  other: {
    "geo.region": "RS",
    "geo.placename": "Serbia",
    "content-language": "sr",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Preskoči na sadržaj
        </a>
        <JsonLd />
        <GoogleAnalytics />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
