import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Politika Privatnosti",
  description: "Politika privatnosti za disi.rs - kako prikupljamo, koristimo i štitimo vaše lične podatke.",
}

export default function PolitikaPrivatnostiPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nazad na početnu
        </Link>

        <h1 className="text-4xl font-bold mb-2">Politika Privatnosti</h1>
        <p className="text-muted-foreground mb-8">Poslednje ažuriranje: februar 2025.</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Uvod</h2>
            <p className="text-muted-foreground leading-relaxed">
              disi.rs (u daljem tekstu: &quot;mi&quot;, &quot;naš&quot;) poštuje privatnost svojih korisnika. Ova Politika privatnosti objašnjava koje podatke prikupljamo, kako ih koristimo i kako ih štitimo u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Podaci koje prikupljamo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Prilikom poručivanja, prikupljamo sledeće podatke:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Ime i prezime</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Email adresa</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Broj telefona</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Adresa za dostavu (ulica, grad, poštanski broj)</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Kako koristimo vaše podatke</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Vaše podatke koristimo isključivo za:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Obradu i dostavu vaših porudžbina</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Slanje potvrde porudžbine putem email-a</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Komunikaciju u vezi sa vašom porudžbinom</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Poboljšanje naših usluga</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Deljenje podataka</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vaše lične podatke ne prodajemo, ne iznajmljujemo niti delimo sa trećim licima, osim sa kurirskim službama koje vrše dostavu vaših porudžbina i sa provajderima usluga koji su neophodni za funkcionisanje našeg sajta (hosting, email servis).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Zaštita podataka</h2>
            <p className="text-muted-foreground leading-relaxed">
              Primenjujemo tehničke i organizacione mere zaštite kako bismo osigurali bezbednost vaših podataka. Svi podaci se prenose putem šifrovane HTTPS veze, a pristup podacima je ograničen samo na ovlašćena lica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Čuvanje podataka</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vaše podatke čuvamo onoliko dugo koliko je potrebno za ispunjenje svrhe za koju su prikupljeni, kao i radi ispunjavanja zakonskih obaveza. Podatke o porudžbinama čuvamo u skladu sa zakonskim rokovima za čuvanje poslovne dokumentacije.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Vaša prava</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">U skladu sa zakonom, imate pravo na:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Pristup vašim ličnim podacima</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Ispravku netačnih podataka</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Brisanje vaših podataka</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Prigovor na obradu podataka</span></li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Za ostvarivanje bilo kog od navedenih prava, kontaktirajte nas na{" "}
              <a href="mailto:info@disi.rs" className="text-primary hover:underline">info@disi.rs</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Za sva pitanja u vezi sa ovom Politikom privatnosti, kontaktirajte nas na:{" "}
              <a href="mailto:info@disi.rs" className="text-primary hover:underline">info@disi.rs</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
