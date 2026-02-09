"use client"

import { ReactNode } from "react"
import { LanguageProvider } from "./LanguageProvider"
import { ThemeProvider } from "./ThemeProvider"
import { Toaster } from "sonner"

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
        <Toaster position="top-center" richColors />
      </LanguageProvider>
    </ThemeProvider>
  )
}
