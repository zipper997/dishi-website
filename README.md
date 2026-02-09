# Nose Strips E-commerce Website

A fully functional, dark-themed e-commerce website for selling nose strips with order management and admin dashboard.

## Features

- **Customer Features:**
  - Dark-themed landing page with product showcase
  - Order form with real-time validation
  - Email confirmation after order placement
  - Responsive design for all devices

- **Admin Features:**
  - Secure admin authentication with session management
  - Dashboard with order statistics
  - View all orders with filtering (All/Pending/Shipped)
  - Mark orders as shipped/pending
  - Rate limiting to prevent spam

- **Security:**
  - Password hashing with bcrypt
  - Session-based authentication with iron-session
  - Rate limiting with Upstash Redis
  - Form validation with Zod
  - Protected admin routes

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** iron-session
- **Email:** Resend
- **Rate Limiting:** Upstash Redis
- **Form Handling:** React Hook Form + Zod
- **UI Components:** Shadcn/ui

## Getting Started

### 1. Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or hosted)
- Upstash Redis account (free tier available)
- Resend account (free tier: 100 emails/day)

### 2. Clone and Install

```bash
cd /mnt/e/dishi
npm install ts-node
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
DATABASE_URL="your-postgresql-connection-string"
SESSION_SECRET="generate-with-openssl-rand-base64-32"
RESEND_API_KEY="your-resend-api-key"
UPSTASH_REDIS_REST_URL="your-upstash-redis-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-redis-token"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-secure-password"
NEXT_PUBLIC_PRODUCT_PRICE="19.99"
```

### 4. Set Up Database

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database with admin user and product
npx prisma db seed
```

### 5. Run Development Server

```bash
npm run dev
```

Visit:
- Customer site: http://localhost:3000
- Admin login: http://localhost:3000/admin/login
- Admin dashboard: http://localhost:3000/admin

### 6. Admin Login Credentials

Use the credentials you set in `.env.local`:
- **Username:** admin (or your ADMIN_USERNAME)
- **Password:** your-secure-password (or your ADMIN_PASSWORD)

## Database Schema

### Order Model
- Order number (unique)
- Customer information (name, email, phone)
- Shipping address
- Order details (quantity, price)
- Status (PENDING, SHIPPED, CANCELLED)
- Timestamps

### Admin Model
- Username (unique)
- Hashed password
- Timestamps

### Product Model
- Name, description, price
- In stock status
- Optional image URL

## API Endpoints

### Public Endpoints
- `POST /api/orders` - Create new order (rate limited: 3 per 15 min)

### Protected Endpoints (Admin Only)
- `GET /api/orders` - List all orders
- `PATCH /api/orders/[id]/ship` - Update order status
- `POST /api/auth/login` - Admin login (rate limited: 5 per 15 min)
- `POST /api/auth/logout` - Admin logout

## Deployment

### Recommended: Vercel + Neon PostgreSQL

1. **Set up Database:**
   - Create a Neon PostgreSQL database (free tier available)
   - Copy the connection string

2. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

3. **Add Environment Variables:**
   - Go to Vercel dashboard → Project Settings → Environment Variables
   - Add all variables from `.env.example`

4. **Run Database Setup:**
   - In Vercel dashboard, go to Deployments
   - Open terminal in deployment
   - Run: `npx prisma db push && npx prisma db seed`

### Alternative: Railway, Render, or VPS

Follow similar steps:
1. Set up PostgreSQL database
2. Set up Upstash Redis
3. Configure environment variables
4. Deploy application
5. Run Prisma migrations

## Customization

### Update Product Information

Edit the product in the database or modify `prisma/seed.ts`:

```typescript
create: {
  name: 'Your Product Name',
  description: 'Your product description',
  price: 29.99,
}
```

Then run: `npx prisma db seed`

### Change Email Template

Edit `/lib/email.ts` to customize the order confirmation email.

### Update Product Logo/Image

1. Add your logo image to `/public` folder
2. Update `ProductHero` component to use the image
3. Update email template in `/lib/email.ts`

### Modify Dark Theme Colors

Edit `tailwind.config.ts` and `app/globals.css` to change color scheme.

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Check DATABASE_URL format
- Verify database exists

### Rate Limiting Not Working
- Ensure Upstash Redis credentials are correct
- Check UPSTASH_REDIS_REST_URL and TOKEN

### Emails Not Sending
- Verify RESEND_API_KEY is correct
- Update "from" email in `/lib/email.ts` with your verified domain
- Check Resend dashboard for logs

### Admin Can't Login
- Ensure database was seeded: `npx prisma db seed`
- Check ADMIN_USERNAME and ADMIN_PASSWORD match
- Verify SESSION_SECRET is set (32+ characters)

## Security Notes

- Change ADMIN_PASSWORD before deploying to production
- Use a strong, random SESSION_SECRET (generated with `openssl rand -base64 32`)
- Keep all API keys and secrets secure
- Never commit `.env.local` to version control
- Enable HTTPS in production (automatic on Vercel)

## Future Enhancements

- Payment processing with Stripe
- Multiple products/variants
- Order tracking for customers
- Email notifications to admin on new orders
- Export orders to CSV
- Analytics dashboard
- Customer accounts

## Support

For issues or questions, refer to the documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Resend Documentation](https://resend.com/docs)
- [Upstash Documentation](https://docs.upstash.com)

## License

This project is provided as-is for your use.
