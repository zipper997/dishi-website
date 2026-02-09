import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { isAuthenticated } from "@/lib/auth"

// PATCH /api/orders/[id]/ship - Mark order as shipped
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { id } = await params

    // Parse request body
    const body = await request.json()
    const { shipped, notes } = body

    // Find the order
    const order = await prisma.order.findUnique({
      where: { id },
    })

    if (!order) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      )
    }

    // Update order
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: {
        status: shipped ? "SHIPPED" : "PENDING",
        shippedAt: shipped ? new Date() : null,
        notes: notes !== undefined ? notes : order.notes,
      },
    })

    return NextResponse.json(
      {
        success: true,
        order: updatedOrder,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error updating order:", error)
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    )
  }
}
