import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Dostava",
  description: "Informacije o dostavi disi trakica za nos. Brza dostava 2-3 radna dana na celoj teritoriji Srbije.",
}

export default function DostavaPAge() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nazad na početnu
        </Link>

        <h1 className="text-4xl font-bold mb-8">Dostava</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Područje dostave</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vršimo dostavu na celoj teritoriji Republike Srbije. Bez obzira na to gde se nalazite, vaše disi trakice za nos će stići do vas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Rok dostave</h2>
            <p className="text-muted-foreground leading-relaxed">
              Standardni rok dostave je <strong className="text-foreground">2-3 radna dana</strong> od momenta potvrde porudžbine. Porudžbine primljene vikendom ili praznicima biće obrađene prvog narednog radnog dana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cena dostave</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dostava je <strong className="text-foreground">besplatna</strong> za sve porudžbine na teritoriji Srbije. Nema skrivenih troškova — cena koju vidite na sajtu je konačna cena.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Način dostave</h2>
            <p className="text-muted-foreground leading-relaxed">
              Paketi se dostavljaju putem kurirske službe na adresu koju ste naveli prilikom poručivanja. Kurir će vas kontaktirati telefonom pre dostave.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Praćenje pošiljke</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nakon slanja vaše porudžbine, dobićete email obaveštenje sa potvrdom da je paket poslat. Za sva pitanja u vezi sa dostavom, kontaktirajte nas na{" "}
              <a href="mailto:info@disi.rs" className="text-primary hover:underline">info@disi.rs</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Plaćanje</h2>
            <p className="text-muted-foreground leading-relaxed">
              Plaćanje se vrši pouzećem — prilikom preuzimanja paketa od kurira. Nije potrebna unapred uplata niti kartica.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
