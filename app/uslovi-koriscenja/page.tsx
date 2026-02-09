import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Uslovi Korišćenja",
  description: "Uslovi korišćenja za disi.rs - pravila i odredbe za kupovinu i korišćenje našeg sajta.",
}

export default function UsloviKoriscenjaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nazad na početnu
        </Link>

        <h1 className="text-4xl font-bold mb-2">Uslovi Korišćenja</h1>
        <p className="text-muted-foreground mb-8">Poslednje ažuriranje: februar 2025.</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Opšte odredbe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ovi Uslovi korišćenja regulišu upotrebu veb sajta disi.rs i kupovinu proizvoda putem istog. Pristupanjem sajtu i korišćenjem naših usluga, prihvatate ove uslove u celosti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Proizvodi</h2>
            <p className="text-muted-foreground leading-relaxed">
              disi.rs prodaje premium trakice za nos (nazalne flastere) namenjene poboljšanju disanja i smanjenju hrkanja. Proizvodi su namenjeni za spoljašnju upotrebu i nisu lekovi. U slučaju zdravstvenih problema, konsultujte lekara.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Poručivanje</h2>
            <p className="text-muted-foreground leading-relaxed">
              Porudžbinu možete izvršiti popunjavanjem formulara na našem sajtu. Podnošenjem porudžbine, potvrđujete da su svi uneti podaci tačni i potpuni. Zadržavamo pravo da odbijemo ili otkažemo porudžbinu u slučaju netačnih podataka ili nedostupnosti proizvoda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cene</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sve cene na sajtu su izražene u srpskim dinarima (RSD) i uključuju PDV. Dostava je besplatna za sve porudžbine. Zadržavamo pravo promene cena bez prethodne najave, ali cena važeća u trenutku porudžbine ostaje nepromenjiva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Plaćanje</h2>
            <p className="text-muted-foreground leading-relaxed">
              Plaćanje se vrši pouzećem, prilikom preuzimanja paketa od kurira. Nije potrebna unapred uplata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Dostava</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dostava se vrši na celoj teritoriji Republike Srbije u roku od 2-3 radna dana. Detaljne informacije o dostavi možete pronaći na našoj{" "}
              <Link href="/dostava" className="text-primary hover:underline">stranici za dostavu</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Povraćaj i reklamacije</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pravo na povraćaj i reklamacije regulisano je u skladu sa Zakonom o zaštiti potrošača. Detaljne informacije možete pronaći na našoj{" "}
              <Link href="/povracaj" className="text-primary hover:underline">stranici za povraćaj</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Intelektualna svojina</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sav sadržaj na sajtu disi.rs, uključujući tekstove, slike, logotipe, grafiku i video zapise, je vlasništvo disi.rs i zaštićen je zakonom o autorskim pravima. Neovlašćeno kopiranje, distribucija ili korišćenje sadržaja je zabranjeno.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Ograničenje odgovornosti</h2>
            <p className="text-muted-foreground leading-relaxed">
              disi.rs ne snosi odgovornost za štetu nastalu nepravilnom upotrebom proizvoda ili korišćenjem proizvoda suprotno uputstvima. Naši proizvodi nisu zamena za medicinsku terapiju.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Izmene uslova</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zadržavamo pravo izmene ovih Uslova korišćenja u bilo kom trenutku. Izmene stupaju na snagu momentom objavljivanja na sajtu. Nastavak korišćenja sajta nakon izmena podrazumeva prihvatanje novih uslova.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Za sva pitanja u vezi sa ovim Uslovima korišćenja, kontaktirajte nas na:{" "}
              <a href="mailto:info@disi.rs" className="text-primary hover:underline">info@disi.rs</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
