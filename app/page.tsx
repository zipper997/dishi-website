import { prisma } from "@/lib/prisma"
import { PageClient } from "./page-client"

export default async function HomePage() {
  // Fetch product from database
  const product = await prisma.product.findUnique({
    where: { id: "default-product" },
  })

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">Proizvod nije pronađen</h1>
          <p className="text-muted-foreground mt-2">
            Molimo pokrenite seed skriptu da postavite proizvod.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            npx prisma db seed
          </p>
        </div>
      </main>
    )
  }

  return <PageClient product={product} />
}
