"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { orderSchema, type OrderFormData } from "@/lib/validations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { useLanguage } from "@/components/providers/LanguageProvider"

interface OrderFormProps {
  productPrice: number
}

export function OrderForm({ productPrice }: OrderFormProps) {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [orderNumber, setOrderNumber] = useState<string>("")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  const quantity = watch("quantity") || 1
  const totalPrice = productPrice * quantity

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to create order")
      }

      setOrderSuccess(true)
      setOrderNumber(result.order.orderNumber)
      toast.success(`${t.orderSection.orderSuccess} #${result.order.orderNumber}`)
      reset()
    } catch (error) {
      console.error("Error creating order:", error)
      toast.error(error instanceof Error ? error.message : "Failed to place order")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (orderSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <CardTitle className="text-3xl">{t.orderSection.orderSuccess}</CardTitle>
          <CardDescription className="text-lg mt-2">
            {t.orderSection.orderNumber} <span className="font-bold text-primary">{orderNumber}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            {t.orderSection.thankYou}
          </p>
          <p className="text-muted-foreground">
            {t.orderSection.willProcess}
          </p>
          <Button onClick={() => setOrderSuccess(false)} className="mt-4">
            {t.orderSection.placeAnother}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">{t.orderSection.formTitle}</CardTitle>
        <CardDescription>{t.orderSection.formSubtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.orderSection.customerInfo}</h3>

            <div>
              <Label htmlFor="customerName">{t.orderSection.fullName}</Label>
              <Input
                id="customerName"
                {...register("customerName")}
                placeholder="Petar Petrović"
                className="mt-1"
              />
              {errors.customerName && (
                <p className="text-sm text-destructive mt-1">{errors.customerName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="customerEmail">{t.orderSection.email}</Label>
              <Input
                id="customerEmail"
                type="email"
                {...register("customerEmail")}
                placeholder="petar@primer.com"
                className="mt-1"
              />
              {errors.customerEmail && (
                <p className="text-sm text-destructive mt-1">{errors.customerEmail.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="customerPhone">{t.orderSection.phone}</Label>
              <Input
                id="customerPhone"
                type="tel"
                {...register("customerPhone")}
                placeholder="+381641234567"
                className="mt-1"
              />
              {errors.customerPhone && (
                <p className="text-sm text-destructive mt-1">{errors.customerPhone.message}</p>
              )}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.orderSection.shippingAddress}</h3>

            <div>
              <Label htmlFor="shippingAddress">{t.orderSection.streetAddress}</Label>
              <Input
                id="shippingAddress"
                {...register("shippingAddress")}
                placeholder="Knez Mihailova 12, Stan 4"
                className="mt-1"
              />
              {errors.shippingAddress && (
                <p className="text-sm text-destructive mt-1">{errors.shippingAddress.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">{t.orderSection.city}</Label>
                <Input
                  id="city"
                  {...register("city")}
                  placeholder="Beograd"
                  className="mt-1"
                />
                {errors.city && (
                  <p className="text-sm text-destructive mt-1">{errors.city.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="state">{t.orderSection.state}</Label>
                <Input
                  id="state"
                  {...register("state")}
                  placeholder="Beograd"
                  className="mt-1"
                />
                {errors.state && (
                  <p className="text-sm text-destructive mt-1">{errors.state.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="zipCode">{t.orderSection.zipCode}</Label>
                <Input
                  id="zipCode"
                  {...register("zipCode")}
                  placeholder="11000"
                  className="mt-1"
                />
                {errors.zipCode && (
                  <p className="text-sm text-destructive mt-1">{errors.zipCode.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.orderSection.orderDetails}</h3>

            <div>
              <Label htmlFor="quantity">{t.orderSection.quantity}</Label>
              <Input
                id="quantity"
                type="number"
                {...register("quantity", { valueAsNumber: true })}
                min="1"
                max="100"
                className="mt-1"
              />
              {errors.quantity && (
                <p className="text-sm text-destructive mt-1">{errors.quantity.message}</p>
              )}
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">{t.orderSection.pricePerUnit}</span>
                <span className="font-medium">
                  {new Intl.NumberFormat('sr-RS', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(Math.floor(productPrice))} RSD
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">{t.orderSection.quantity}</span>
                <span className="font-medium">{quantity}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{t.orderSection.total}</span>
                  <span className="text-2xl font-bold text-primary">
                    {new Intl.NumberFormat('sr-RS', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    }).format(Math.floor(totalPrice))} RSD
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
            {isSubmitting ? t.orderSection.placingOrder : t.orderSection.placeOrder}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {t.orderSection.termsText}
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
