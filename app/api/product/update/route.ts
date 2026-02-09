import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { z } from 'zod'

const updateProductSchema = z.object({
  price: z.number().positive().min(0.01),
})

export async function PATCH(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getSession()
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Parse and validate request body
    const body = await request.json()
    const validation = updateProductSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: validation.error.errors },
        { status: 400 }
      )
    }

    const { price } = validation.data

    // Update product price
    const product = await prisma.product.update({
      where: { id: 'default-product' },
      data: { price },
    })

    // Revalidate homepage so the new price shows immediately
    revalidatePath('/')

    return NextResponse.json({
      success: true,
      product,
    })
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}
