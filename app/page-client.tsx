"use client"

import { Navigation } from "@/components/Navigation"
import { ProductHeroClient } from "@/components/ProductHeroClient"
import { OrderForm } from "@/components/OrderForm"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { useTheme } from "@/components/providers/ThemeProvider"
import Image from "next/image"

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

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home">
        <ProductHeroClient product={product} />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
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
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-20">
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
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">{t.contact.title}</h2>
            <p className="text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  icon: Mail,
                  title: t.contact.email,
                  value: "support@nosestrips.com",
                  href: "mailto:support@nosestrips.com",
                },
                {
                  icon: Phone,
                  title: t.contact.phone,
                  value: "+381 60 123 4567",
                  href: "tel:+381601234567",
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
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="relative h-8 w-24">
                <Image
                  src="/logo.png"
                  alt="ДИШИМ"
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
            <div>
              <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#home" className="hover:text-foreground transition-colors">{t.nav.home}</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">{t.nav.about}</a></li>
                <li><a href="#order" className="hover:text-foreground transition-colors">{t.nav.order}</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.support}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.faq}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.shipping}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.returns}</a></li>
                <li><a href="/admin/login" className="hover:text-foreground transition-colors">{t.footer.admin}</a></li>
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
            <p>© 2026 диши. Сва права задржана.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
