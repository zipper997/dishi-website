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
        <section id="kako-funkcionise" className="py-20" aria-label={t.howItWorks.title}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.howItWorks.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.howItWorks.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
                {[
                  { step: "1", title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
                  { step: "2", title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
                  { step: "3", title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
                  { step: "4", title: t.howItWorks.step4Title, desc: t.howItWorks.step4Desc },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30" aria-label={t.about.title}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.about.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.about.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {[
                  {
                    title: t.about.medicalGrade,
                    description: t.about.medicalDesc,
                  },
                  {
                    title: t.about.clinicallyTested,
                    description: t.about.clinicalDesc,
                  },
                  {
                    title: t.about.easyToUse,
                    description: t.about.easyDesc,
                  },
                ].map((item, i) => (
                  <article
                    key={i}
                    className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
          <div className="container mx-auto px-4">
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
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.shipping}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.returns}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.privacy}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.terms}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.cookies}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} disi.rs - Сва права задржана.</p>
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
