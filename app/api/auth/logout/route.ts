import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// POST /api/auth/logout - Admin logout
export async function POST() {
  try {
    // Get session and destroy it
    const session = await getSession()
    session.destroy()

    return NextResponse.json(
      { success: true, message: "Logged out successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error logging out:", error)
    return NextResponse.json(
      { error: "Failed to logout" },
      { status: 500 }
    )
  }
}
