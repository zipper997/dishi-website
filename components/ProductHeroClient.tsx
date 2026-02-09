"use client"

import { useState, useEffect } from "react"
import { Check, Star, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/providers/LanguageProvider"

interface ProductHeroProps {
  product: {
    name: string
    description: string
    price: number
  }
}

export function ProductHeroClient({ product }: ProductHeroProps) {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative min-h-[100svh] md:min-h-screen overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        key={isMobile ? 'mobile' : 'desktop'}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: 0.6 }}
      >
        <source src={isMobile ? "/cinematicMOBILE.mp4" : "/cinematicDESK.mp4"} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/60 via-background/50 to-background/90" style={{ zIndex: 1 }}></div>

      {/* Content */}
      <div className="relative w-full container mx-auto px-4 py-6 md:py-12 lg:py-16" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto text-center space-y-3 md:space-y-5 lg:space-y-6">
          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs md:text-sm font-medium">
              <Zap className="w-3 h-3 mr-1 inline" />
              {t.hero.badge}
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in-up leading-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              {t.hero.title1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {product.description}
          </p>

          {/* Order Now Button */}
          <div className="pt-1 md:pt-3 animate-fade-in-up delay-300">
            <button
              onClick={() => {
                const orderSection = document.querySelector("#order")
                if (orderSection) {
                  orderSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group relative inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3.5 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all duration-300"
            >
              <Check className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
              <span>{t.nav.orderNow}</span>
              <svg
                className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 animate-fade-in-up delay-400">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 md:w-4 md:h-4 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
            <span className="text-[10px] md:text-xs text-muted-foreground">
              4.9/5 {t.hero.rating}
            </span>
          </div>

          {/* Price Card - Compact */}
          <div className="inline-block animate-fade-in-up delay-500">
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg md:rounded-xl px-4 py-2.5 md:px-6 md:py-4">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-0.5">
                {t.hero.startingAt}
              </div>
              <div className="flex items-baseline justify-center gap-1 md:gap-2">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  {new Intl.NumberFormat('sr-RS', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(Math.floor(product.price))}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">{t.hero.perPack}</span>
              </div>
            </div>
          </div>

          {/* Features - Simple chips on mobile, full cards on desktop */}
          <div className="flex md:hidden flex-wrap justify-center gap-2 max-w-xs mx-auto animate-fade-in-up delay-600">
            {[t.hero.premiumQuality, t.hero.fastShipping, t.hero.satisfaction].map((text, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted/40 border border-border/30 text-[10px] font-medium"
              >
                <Check className="w-2.5 h-2.5 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Features - Full cards on tablet+ */}
          <div className="hidden md:grid md:grid-cols-3 gap-2 lg:gap-3 max-w-3xl mx-auto animate-fade-in-up delay-600">
            {[
              { icon: Check, text: t.hero.premiumQuality },
              { icon: Check, text: t.hero.fastShipping },
              { icon: Check, text: t.hero.satisfaction },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-left p-2.5 lg:p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-primary" />
                </div>
                <span className="text-xs lg:text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
