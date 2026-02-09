import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { loginSchema } from "@/lib/validations"
import { loginRateLimit } from "@/lib/ratelimit"
import { getSession, verifyPassword } from "@/lib/auth"

// Helper function to get client IP
function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
}

// POST /api/auth/login - Admin login
export async function POST(request: NextRequest) {
  try {
    // Rate limiting (skip if not configured)
    if (loginRateLimit) {
      const ip = getClientIp(request)
      const { success, limit, remaining, reset } = await loginRateLimit.limit(ip)

      if (!success) {
        return NextResponse.json(
          { error: "Too many login attempts. Please try again later." },
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
    const validatedData = loginSchema.parse(body)

    // Find admin user
    const admin = await prisma.admin.findUnique({
      where: { username: validatedData.username },
    })

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      )
    }

    // Verify password
    const isPasswordValid = await verifyPassword(
      validatedData.password,
      admin.password
    )

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      )
    }

    // Create session
    const session = await getSession()
    session.adminId = admin.id
    session.username = admin.username
    session.isLoggedIn = true
    await session.save()

    return NextResponse.json(
      {
        success: true,
        admin: {
          id: admin.id,
          username: admin.username,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error logging in:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid login data" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to login" },
      { status: 500 }
    )
  }
}
