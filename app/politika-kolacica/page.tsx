import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Politika Kolačića",
  description: "Politika kolačića za disi.rs - informacije o korišćenju kolačića na našem sajtu.",
}

export default function PolitikaKolacicaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nazad na početnu
        </Link>

        <h1 className="text-4xl font-bold mb-2">Politika Kolačića</h1>
        <p className="text-muted-foreground mb-8">Poslednje ažuriranje: februar 2025.</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Šta su kolačići?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kolačići (cookies) su mali tekstualni fajlovi koje veb sajtovi čuvaju na vašem uređaju. Oni služe za poboljšanje korisničkog iskustva, pamćenje vaših podešavanja i analizu korišćenja sajta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Koje kolačiće koristimo?</h2>

            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Neophodni kolačići</h3>
                <p className="text-sm text-muted-foreground">
                  Ovi kolačići su neophodni za funkcionisanje sajta. Uključuju kolačiće za sesiju i osnovne funkcionalnosti. Ne mogu se isključiti.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Funkcionalni kolačići</h3>
                <p className="text-sm text-muted-foreground">
                  Ovi kolačići pamte vaša podešavanja kao što su izbor jezika (srpski/engleski) i tema (svetla/tamna). Pomažu da sajt radi onako kako vi želite.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Analitički kolačići</h3>
                <p className="text-sm text-muted-foreground">
                  Koristimo analitičke kolačiće (Google Analytics) za razumevanje kako posetioci koriste naš sajt. Ovi podaci su anonimni i pomažu nam da poboljšamo korisničko iskustvo.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Upravljanje kolačićima</h2>
            <p className="text-muted-foreground leading-relaxed">
              Možete kontrolisati i brisati kolačiće putem podešavanja vašeg veb pregledača. Imajte na umu da isključivanje kolačića može uticati na funkcionalnost sajta.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Uputstva za upravljanje kolačićima u popularnim pregledačima:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-2">
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Google Chrome: Podešavanja → Privatnost i bezbednost → Kolačići</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Mozilla Firefox: Podešavanja → Privatnost i bezbednost</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Safari: Podešavanja → Privatnost</span></li>
              <li className="flex items-start"><span className="text-primary mr-2 mt-1">•</span><span>Microsoft Edge: Podešavanja → Kolačići i dozvole sajta</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kolačići trećih lica</h2>
            <p className="text-muted-foreground leading-relaxed">
              Na našem sajtu mogu biti prisutni kolačići trećih lica, kao što je Google Analytics. Ovi kolačići su regulisani politikama privatnosti odgovarajućih kompanija.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Izmene politike</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zadržavamo pravo izmene ove Politike kolačića. Sve izmene biće objavljene na ovoj stranici sa ažuriranim datumom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Za sva pitanja u vezi sa kolačićima, kontaktirajte nas na:{" "}
              <a href="mailto:info@disi.rs" className="text-primary hover:underline">info@disi.rs</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
