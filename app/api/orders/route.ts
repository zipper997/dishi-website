import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { orderSchema } from "@/lib/validations"
import { orderRateLimit } from "@/lib/ratelimit"
import { sendOrderConfirmationEmail } from "@/lib/email"
import { isAuthenticated } from "@/lib/auth"

// Helper function to generate order number
function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `NS-${timestamp}${random}`
}

// Helper function to get client IP
function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
}

// POST /api/orders - Create new order
export async function POST(request: NextRequest) {
  try {
    // Rate limiting (skip if not configured)
    if (orderRateLimit) {
      const ip = getClientIp(request)
      const { success, limit, remaining, reset } = await orderRateLimit.limit(ip)

      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          {
            status: 429,
            headers: {
              "X-RateLimit-Limit": limit.toString(),
              "X-RateLimit-Remaining": remaining.toString(),
              "X-RateLimit-Reset": reset.toString(),
            },
          }
        )
      }
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = orderSchema.parse(body)

    // Get product price
    const product = await prisma.product.findUnique({
      where: { id: "default-product" },
    })

    if (!product || !product.inStock) {
      return NextResponse.json(
        { error: "Product is currently out of stock" },
        { status: 400 }
      )
    }

    const pricePerUnit = product.price
    const totalPrice = pricePerUnit * validatedData.quantity

    // Generate unique order number
    let orderNumber = generateOrderNumber()
    let isUnique = false
    while (!isUnique) {
      const existing = await prisma.order.findUnique({
        where: { orderNumber },
      })
      if (!existing) {
        isUnique = true
      } else {
        orderNumber = generateOrderNumber()
      }
    }

    // Create order
    const order = await prisma.order.create({
      data: {
        orderNumber,
        customerName: validatedData.customerName,
        customerEmail: validatedData.customerEmail,
        customerPhone: validatedData.customerPhone,
        shippingAddress: validatedData.shippingAddress,
        city: validatedData.city,
        state: validatedData.state,
        zipCode: validatedData.zipCode,
        quantity: validatedData.quantity,
        pricePerUnit,
        totalPrice,
        status: "PENDING",
      },
    })

    // Send confirmation email (don't fail the request if email fails)
    const emailResult = await sendOrderConfirmationEmail({
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      quantity: order.quantity,
      totalPrice: order.totalPrice,
      shippingAddress: order.shippingAddress,
      city: order.city,
      state: order.state,
      zipCode: order.zipCode,
    })

    if (!emailResult.success) {
      console.error("Failed to send confirmation email:", emailResult.error)
    }

    return NextResponse.json(
      {
        success: true,
        order: {
          id: order.id,
          orderNumber: order.orderNumber,
          totalPrice: order.totalPrice,
        },
        emailSent: emailResult.success,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating order:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid order data", details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    )
  }
}

// GET /api/orders - Get all orders (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get("status")

    // Build where clause
    const where: any = {}
    if (status && status !== "ALL") {
      where.status = status
    }

    // Fetch orders
    const orders = await prisma.order.findMany({
      where,
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({ orders }, { status: 200 })
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    )
  }
}
