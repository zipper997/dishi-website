import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Get admin credentials from environment variables
  const adminUsername = process.env.ADMIN_USERNAME || 'admin'
  const adminPassword = process.env.ADMIN_PASSWORD || 'changeme123'

  // Hash the admin password
  const hashedPassword = await bcrypt.hash(adminPassword, 12)

  // Create or update admin user
  const admin = await prisma.admin.upsert({
    where: { username: adminUsername },
    update: { password: hashedPassword },
    create: {
      username: adminUsername,
      password: hashedPassword,
    },
  })

  console.log('✅ Admin user created/updated:', { username: admin.username, id: admin.id })

  // Get product details from environment variables
  const productPrice = parseFloat(process.env.NEXT_PUBLIC_PRODUCT_PRICE || '19.99')

  // Create or update product
  const product = await prisma.product.upsert({
    where: { id: 'default-product' },
    update: {
      name: 'Flasteri za Nos',
      description: 'Premium flasteri za nos za bolje disanje i smanjeno hrkanje. Udobni, prozračni i efikasni.',
      price: productPrice,
      inStock: true,
    },
    create: {
      id: 'default-product',
      name: 'Flasteri za Nos',
      description: 'Premium flasteri za nos za bolje disanje i smanjeno hrkanje. Udobni, prozračni i efikasni.',
      price: productPrice,
      inStock: true,
    },
  })

  console.log('✅ Product created/updated:', { name: product.name, price: product.price, id: product.id })
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
