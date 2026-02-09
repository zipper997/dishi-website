import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { isAuthenticated, getSession } from "@/lib/auth"
import { AdminOrdersTable } from "@/components/AdminOrdersTable"
import { AdminPriceUpdate } from "@/components/AdminPriceUpdate"
import { RefreshButton } from "@/components/RefreshButton"

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/admin/login")
  }

  const session = await getSession()

  // Fetch product
  const product = await prisma.product.findUnique({
    where: { id: "default-product" },
  })

  // Fetch all orders
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  })

  // Get stats
  const totalOrders = orders.length
  const pendingOrders = orders.filter((o) => o.status === "PENDING").length
  const shippedOrders = orders.filter((o) => o.status === "SHIPPED").length
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalPrice, 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back, {session.username}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <RefreshButton />
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Total Orders</div>
            <div className="text-3xl font-bold">{totalOrders}</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Pending</div>
            <div className="text-3xl font-bold text-yellow-500">{pendingOrders}</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Shipped</div>
            <div className="text-3xl font-bold text-green-500">{shippedOrders}</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Total Revenue</div>
            <div className="text-3xl font-bold text-primary">
              {totalRevenue.toLocaleString('sr-RS', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })} RSD
            </div>
          </div>
        </div>

        {/* Price Management */}
        {product && (
          <div className="max-w-md">
            <AdminPriceUpdate currentPrice={product.price} />
          </div>
        )}

        {/* Orders Table */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">All Orders</h2>
          <AdminOrdersTable initialOrders={orders} />
        </div>
      </main>
    </div>
  )
}
