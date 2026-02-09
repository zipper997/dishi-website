import { z } from "zod"

// Order creation validation
export const orderSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  customerEmail: z.string().email("Please enter a valid email address"),
  customerPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  shippingAddress: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().length(2, "State must be 2 characters (e.g., CA, NY)").toUpperCase(),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)"),
  quantity: z.number().int().min(1, "Quantity must be at least 1").max(100, "Quantity must be less than 100"),
})

export type OrderFormData = z.infer<typeof orderSchema>

// Admin login validation
export const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Order update validation
export const orderUpdateSchema = z.object({
  status: z.enum(["PENDING", "SHIPPED", "CANCELLED"]).optional(),
  notes: z.string().optional(),
})

export type OrderUpdateData = z.infer<typeof orderUpdateSchema>
