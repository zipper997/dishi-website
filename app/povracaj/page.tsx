import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Povraćaj",
  description: "Politika povraćaja za disi trakice za nos. Jednostavan proces vraćanja proizvoda u roku od 14 dana.",
}

export default function PovracajPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nazad na početnu
        </Link>

        <h1 className="text-4xl font-bold mb-8">Povraćaj</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Pravo na povraćaj</h2>
            <p className="text-muted-foreground leading-relaxed">
              U skladu sa Zakonom o zaštiti potrošača Republike Srbije, imate pravo da odustanete od ugovora u roku od <strong className="text-foreground">14 dana</strong> od dana prijema proizvoda, bez navođenja razloga.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Uslovi za povraćaj</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Proizvod mora biti u originalnom, neotvorenom pakovanju</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Zahtev za povraćaj mora biti podnet u roku od 14 dana od prijema</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Proizvod ne sme biti korišćen ili oštećen</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kako da vratite proizvod?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">1.</strong> Pošaljite nam email na <a href="mailto:info@disi.rs" className="text-primary hover:underline">info@disi.rs</a> sa brojem porudžbine i razlogom povraćaja.</p>
              <p><strong className="text-foreground">2.</strong> Dobićete uputstva za slanje paketa nazad.</p>
              <p><strong className="text-foreground">3.</strong> Po prijemu i proveri proizvoda, izvršićemo povraćaj novca.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Povraćaj novca</h2>
            <p className="text-muted-foreground leading-relaxed">
              Povraćaj novca biće izvršen u roku od <strong className="text-foreground">14 dana</strong> od dana prijema vraćenog proizvoda. Novac će biti vraćen istim putem kojim je izvršeno plaćanje.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Troškovi povraćaja</h2>
            <p className="text-muted-foreground leading-relaxed">
              Troškove slanja pri povraćaju proizvoda snosi kupac, osim u slučaju kada je isporučen pogrešan ili oštećen proizvod — tada troškove povraćaja snosi disi.rs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reklamacije</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ukoliko ste primili oštećen ili pogrešan proizvod, kontaktirajte nas odmah na{" "}
              <a href="mailto:info@disi.rs" className="text-primary hover:underline">info@disi.rs</a>. Reklamaciju ćemo rešiti u najkraćem mogućem roku.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
