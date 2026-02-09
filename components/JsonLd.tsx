export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "disi.rs",
    url: "https://disi.rs",
    logo: "https://disi.rs/logo.png",
    description:
      "Premium trakice za nos za bolje disanje i smanjenje hrkanja.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@disi.rs",
      contactType: "customer service",
      availableLanguage: ["Serbian", "English"],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "disi.rs",
    url: "https://disi.rs",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://disi.rs/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "disi Premium Trakice za Nos",
    description:
      "Premium nazalne trakice za bolje disanje i smanjenje hrkanja. Medicinski kvalitet, hipoalergenske, klinički testirane.",
    image: "https://disi.rs/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "disi",
    },
    sku: "disi-NS-001",
    offers: {
      "@type": "Offer",
      price: "1299",
      priceCurrency: "RSD",
      availability: "https://schema.org/InStock",
      url: "https://disi.rs",
      seller: {
        "@type": "Organization",
        name: "disi.rs",
      },
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Šta su trakice za nos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trakice za nos (nazalni flasteri) su medicinski proizvodi koji se lepe na spoljašnju stranu nosa. Nežno otvaraju nosne prolaze i poboljšavaju protok vazduha, što olakšava disanje kroz nos.",
        },
      },
      {
        "@type": "Question",
        name: "Kako se koriste disi trakice za nos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Očistite i osušite nos. Skinite zaštitnu foliju sa trakice. Postavite trakicu na sredinu nosa, preko nosnog mosta. Pritisnite blago da se dobro zalepi. Nosite tokom spavanja ili fizičke aktivnosti.",
        },
      },
      {
        "@type": "Question",
        name: "Da li trakice za nos pomažu kod hrkanja?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da! Klinička ispitivanja su pokazala da nazalne trakice mogu smanjiti hrkanje poboljšanjem protoka vazduha kroz nos do 31%. Idealne su za osobe koje hrču zbog začepljenog nosa.",
        },
      },
      {
        "@type": "Question",
        name: "Koliko dugo traje jedna trakica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jedna disi trakica je dizajnirana za jednokratnu upotrebu i traje do 12 sati. Preporučujemo korišćenje nove trakice svake noći za najbolje rezultate.",
        },
      },
      {
        "@type": "Question",
        name: "Da li su disi trakice bezbedne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apsolutno. disi trakice su napravljene od hipoalergenskih materijala medicinskog kvaliteta. Bezbedne su za svakodnevnu upotrebu i ne sadrže nikakve lekove.",
        },
      },
      {
        "@type": "Question",
        name: "Kolika je cena i kako mogu da poručim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cenu možete videti na našem sajtu disi.rs. Poručivanje je jednostavno - popunite formular na sajtu sa vašim podacima i adresom za dostavu. Dostava je brza, 2-3 radna dana na teritoriji Srbije.",
        },
      },
      {
        "@type": "Question",
        name: "Da li vršite dostavu u celoj Srbiji?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, vršimo dostavu na celoj teritoriji Republike Srbije. Rok dostave je 2-3 radna dana od momenta porudžbine.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Početna",
        item: "https://disi.rs",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
