import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Stranica nije pronađena
        </h2>
        <p className="text-muted-foreground">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Nazad na početnu
        </Link>
      </div>
    </main>
  )
}
