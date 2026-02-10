"use client"

import { Navigation } from "@/components/Navigation"
import { ProductHeroClient } from "@/components/ProductHeroClient"
import { OrderForm } from "@/components/OrderForm"
import { Mail, MapPin, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { useTheme } from "@/components/providers/ThemeProvider"
import Image from "next/image"
import { useState } from "react"

interface PageClientProps {
  product: {
    id: string
    name: string
    description: string
    price: number
  }
}

export function PageClient({ product }: PageClientProps) {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      <main id="main-content">
        {/* Hero Section */}
        <section id="home" aria-label="Hero">
          <ProductHeroClient product={product} />
        </section>

        {/* How It Works Section */}
        <section id="kako-funkcionise" className="py-24 relative overflow-hidden" aria-label={t.howItWorks.title}>
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              {/* Section header */}
              <div className="text-center space-y-4 mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {t.howItWorks.title}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {t.howItWorks.title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t.howItWorks.subtitle}
                </p>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connection line (desktop) */}
                <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

                {[
                  {
                    step: "1",
                    title: t.howItWorks.step1Title,
                    desc: t.howItWorks.step1Desc,
                    icon: (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    ),
                  },
                  {
                    step: "2",
                    title: t.howItWorks.step2Title,
                    desc: t.howItWorks.step2Desc,
                    icon: (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.5a2.25 2.25 0 0 1 2.25-2.25h.75" />
                      </svg>
                    ),
                  },
                  {
                    step: "3",
                    title: t.howItWorks.step3Title,
                    desc: t.howItWorks.step3Desc,
                    icon: (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 0-.668-.668 1.667 1.667 0 0 1-1.667-1.667V8.25a1.575 1.575 0 0 0-3.15 0" />
                      </svg>
                    ),
                  },
                  {
                    step: "4",
                    title: t.howItWorks.step4Title,
                    desc: t.howItWorks.step4Desc,
                    icon: (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div key={item.step} className="relative group">
                    <div className="flex flex-col items-center text-center">
                      {/* Step number badge with icon */}
                      <div className="relative z-10 mb-6">
                        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/10">
                          <div className="text-primary">
                            {item.icon}
                          </div>
                        </div>
                        {/* Step number */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                          {item.step}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow connector (mobile/tablet) */}
                    {index < 3 && (
                      <div className="flex justify-center my-4 lg:hidden">
                        <svg className="w-6 h-6 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden" aria-label={t.about.title}>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              {/* Section header */}
              <div className="text-center space-y-4 mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                  {t.nav.about}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {t.about.title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t.about.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                {[
                  {
                    title: t.about.medicalGrade,
                    description: t.about.medicalDesc,
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                    ),
                  },
                  {
                    title: t.about.clinicallyTested,
                    description: t.about.clinicalDesc,
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    ),
                  },
                  {
                    title: t.about.easyToUse,
                    description: t.about.easyDesc,
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 0-.668-.668 1.667 1.667 0 0 1-1.667-1.667V8.25a1.575 1.575 0 0 0-3.15 0" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <article
                    key={i}
                    className={`group relative p-10 text-center ${
                      i === 1
                        ? "bg-primary text-primary-foreground md:rounded-2xl md:scale-105 md:shadow-2xl md:shadow-primary/20 md:z-10 rounded-2xl"
                        : "bg-card md:border md:border-border/50 rounded-2xl md:rounded-none " + (i === 0 ? "md:rounded-l-2xl" : "md:rounded-r-2xl")
                    } transition-all duration-300`}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 ${
                      i === 1 ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}>
                      <div className={i === 1 ? "text-primary-foreground" : "text-primary"}>
                        {item.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-4 ${i === 1 ? "" : "group-hover:text-primary transition-colors"}`}>
                      {item.title}
                    </h3>
                    <p className={`leading-relaxed ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20" aria-label={t.faq.title}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">{t.faq.title}</h2>
                <p className="text-xl text-muted-foreground">{t.faq.subtitle}</p>
              </div>

              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <FAQItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section id="order" className="py-20 bg-muted/30" aria-label={t.orderSection.title}>
          <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t.orderSection.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.orderSection.subtitle}
              </p>
            </div>
            <OrderForm productPrice={product.price} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20" aria-label={t.contact.title}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">{t.contact.title}</h2>
              <p className="text-xl text-muted-foreground">
                {t.contact.subtitle}
              </p>

              <address className="not-italic grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 max-w-2xl mx-auto">
                {[
                  {
                    icon: Mail,
                    title: t.contact.email,
                    value: "info@disi.rs",
                    href: "mailto:info@disi.rs",
                  },
                  {
                    icon: MapPin,
                    title: t.contact.address,
                    value: "Beograd, Srbija",
                    href: "#",
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={i}
                      href={item.href}
                      className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </a>
                  )
                })}
              </address>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="relative h-8 w-24">
                <Image
                  src="/logo.png"
                  alt="disi - Premium Trakice za Nos"
                  fill
                  sizes="96px"
                  className={`object-contain ${theme === "dark" ? "invert" : ""}`}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {t.footer.description}
              </p>
              {/* Social Media */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/disi.rs_?igsh=MTk2dm13NXhxcjZqdA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@disi.rs?_r=1&_t=ZS-93oIlS810t8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.15a8.16 8.16 0 005.58 2.2v-3.45a4.85 4.85 0 01-1.72-.32 4.83 4.83 0 01-1.72-1.27v-.01l.03.01a.09.09 0 00-.02-.02V6.69h3.43z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#home" className="hover:text-foreground transition-colors">{t.nav.home}</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">{t.nav.about}</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">{t.nav.faq}</a></li>
                <li><a href="#order" className="hover:text-foreground transition-colors">{t.nav.order}</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">{t.nav.contact}</a></li>
              </ul>
            </nav>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.support}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-foreground transition-colors">{t.footer.faq}</a></li>
                <li><a href="/dostava" className="hover:text-foreground transition-colors">{t.footer.shipping}</a></li>
                <li><a href="/povracaj" className="hover:text-foreground transition-colors">{t.footer.returns}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/politika-privatnosti" className="hover:text-foreground transition-colors">{t.footer.privacy}</a></li>
                <li><a href="/uslovi-koriscenja" className="hover:text-foreground transition-colors">{t.footer.terms}</a></li>
                <li><a href="/politika-kolacica" className="hover:text-foreground transition-colors">{t.footer.cookies}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground space-y-2">
            <p>&copy; {new Date().getFullYear()} disi.rs - Sva prava zadržana.</p>
            <p>Developed by: <a href="https://www.instagram.com/codehydrastack?igsh=MWF4M3dkZHUxczltZQ==" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@codehydrastack</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border/50 rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  )
}
