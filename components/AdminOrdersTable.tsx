"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "sonner"

interface Order {
  id: string
  orderNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: string
  city: string
  state: string
  zipCode: string
  quantity: number
  totalPrice: number
  status: string
  shippedAt: Date | null
  notes: string | null
  createdAt: Date
}

interface AdminOrdersTableProps {
  initialOrders: Order[]
}

export function AdminOrdersTable({ initialOrders }: AdminOrdersTableProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [filter, setFilter] = useState<string>("ALL")
  const [updatingOrderId, setUpdatingOrderId] = useState<string | null>(null)
  const [deletingOrderId, setDeletingOrderId] = useState<string | null>(null)
  const router = useRouter()

  const filteredOrders = orders.filter((order) => {
    if (filter === "ALL") return true
    return order.status === filter
  })

  const handleMarkShipped = async (orderId: string, shipped: boolean) => {
    setUpdatingOrderId(orderId)

    try {
      const response = await fetch(`/api/orders/${orderId}/ship`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shipped }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to update order")
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? result.order : order
        )
      )

      toast.success(`Order ${shipped ? "marked as shipped" : "marked as pending"}`)
    } catch (error) {
      console.error("Error updating order:", error)
      toast.error(error instanceof Error ? error.message : "Failed to update order")
    } finally {
      setUpdatingOrderId(null)
    }
  }

  const handleDeleteOrder = async (orderId: string, orderNumber: string) => {
    if (!confirm(`Da li ste sigurni da želite da obrišete narudžbinu ${orderNumber}?`)) {
      return
    }

    setDeletingOrderId(orderId)

    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || "Failed to delete order")
      }

      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId))
      toast.success(`Narudžbina ${orderNumber} je obrisana`)
      router.refresh()
    } catch (error) {
      console.error("Error deleting order:", error)
      toast.error(error instanceof Error ? error.message : "Greška pri brisanju narudžbine")
    } finally {
      setDeletingOrderId(null)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge variant="secondary">Pending</Badge>
      case "SHIPPED":
        return <Badge className="bg-green-500 hover:bg-green-600">Shipped</Badge>
      case "CANCELLED":
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={filter === "ALL" ? "default" : "outline"}
          onClick={() => setFilter("ALL")}
          size="sm"
        >
          All Orders ({orders.length})
        </Button>
        <Button
          variant={filter === "PENDING" ? "default" : "outline"}
          onClick={() => setFilter("PENDING")}
          size="sm"
        >
          Pending ({orders.filter((o) => o.status === "PENDING").length})
        </Button>
        <Button
          variant={filter === "SHIPPED" ? "default" : "outline"}
          onClick={() => setFilter("SHIPPED")}
          size="sm"
        >
          Shipped ({orders.filter((o) => o.status === "SHIPPED").length})
        </Button>
      </div>

      {/* Orders Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  No orders found
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">
                    {order.orderNumber}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.customerEmail}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{order.customerPhone}</TableCell>
                  <TableCell className="text-sm">
                    <div>{order.shippingAddress}</div>
                    <div className="text-muted-foreground">
                      {order.city}, {order.state} {order.zipCode}
                    </div>
                  </TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell className="font-medium">
                    {order.totalPrice.toLocaleString('sr-RS', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })} RSD
                  </TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {order.status === "PENDING" ? (
                        <Button
                          size="sm"
                          onClick={() => handleMarkShipped(order.id, true)}
                          disabled={updatingOrderId === order.id}
                        >
                          {updatingOrderId === order.id ? "..." : "Pošalji"}
                        </Button>
                      ) : order.status === "SHIPPED" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleMarkShipped(order.id, false)}
                          disabled={updatingOrderId === order.id}
                        >
                          {updatingOrderId === order.id ? "..." : "Vrati"}
                        </Button>
                      ) : (
                        <span className="text-sm text-muted-foreground">-</span>
                      )}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteOrder(order.id, order.orderNumber)}
                        disabled={deletingOrderId === order.id}
                      >
                        {deletingOrderId === order.id ? "..." : "Obriši"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
