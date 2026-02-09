"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingBag, Info, Phone, Sun, Moon, Languages, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { useTheme } from "@/components/providers/ThemeProvider"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { label: t.nav.home, href: "/", icon: ShoppingBag },
    { label: t.nav.about, href: "#about", icon: Info },
    { label: t.nav.faq, href: "#faq", icon: HelpCircle },
    { label: t.nav.contact, href: "#contact", icon: Phone },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "sr" ? "en" : "sr")
  }

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-7 w-16">
              <Image
                src="/logo.png"
                alt="disi - Premium Trakice za Nos"
                fill
                sizes="64px"
                className={`object-contain transition-all ${theme === "dark" ? "invert" : ""}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground transition-colors"
                asChild={!item.href.startsWith("#")}
                onClick={
                  item.href.startsWith("#")
                    ? () => scrollToSection(item.href)
                    : undefined
                }
              >
                {item.href.startsWith("#") ? (
                  <span className="cursor-pointer">{item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </Button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="relative"
              title={language === "sr" ? "Switch to English" : "Prebaci na Srpski"}
            >
              <Languages className="h-5 w-5" />
              <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground rounded px-1">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              title={theme === "dark" ? "Svetla tema" : "Tamna tema"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col space-y-3">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="justify-start text-base h-12"
                      asChild={!item.href.startsWith("#")}
                      onClick={
                        item.href.startsWith("#")
                          ? () => scrollToSection(item.href)
                          : () => setIsOpen(false)
                      }
                    >
                      {item.href.startsWith("#") ? (
                        <span className="cursor-pointer flex items-center">
                          <Icon className="mr-3 h-5 w-5" />
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center"
                        >
                          <Icon className="mr-3 h-5 w-5" />
                          {item.label}
                        </Link>
                      )}
                    </Button>
                  )
                })}

                <div className="pt-4 border-t border-border space-y-3">
                  {/* Language Toggle - Mobile */}
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={toggleLanguage}
                  >
                    <Languages className="mr-3 h-5 w-5" />
                    {language === "sr" ? "English" : "Srpski"}
                  </Button>

                  {/* Theme Toggle - Mobile */}
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="mr-3 h-5 w-5" />
                        {language === "sr" ? "Svetla tema" : "Light Mode"}
                      </>
                    ) : (
                      <>
                        <Moon className="mr-3 h-5 w-5" />
                        {language === "sr" ? "Tamna tema" : "Dark Mode"}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
