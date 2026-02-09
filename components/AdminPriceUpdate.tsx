"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

interface AdminPriceUpdateProps {
  currentPrice: number
}

export function AdminPriceUpdate({ currentPrice }: AdminPriceUpdateProps) {
  const [price, setPrice] = useState(currentPrice.toString())
  const [isUpdating, setIsUpdating] = useState(false)

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      const newPrice = parseFloat(price)

      if (isNaN(newPrice) || newPrice <= 0) {
        toast.error("Unesite validnu cenu")
        setIsUpdating(false)
        return
      }

      const response = await fetch("/api/product/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: newPrice }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to update price")
      }

      toast.success(`Cena uspešno ažurirana na ${newPrice.toLocaleString('sr-RS')} RSD`)

      // Refresh the page to show updated price
      window.location.reload()
    } catch (error) {
      console.error("Error updating price:", error)
      toast.error(error instanceof Error ? error.message : "Greška pri ažuriranju cene")
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Podešavanje Cene Proizvoda</CardTitle>
        <CardDescription>
          Trenutna cena: {currentPrice.toLocaleString('sr-RS', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} RSD
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <Label htmlFor="price">Nova Cena (RSD)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="1299.99"
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Prikazaće se kao: {parseFloat(price || "0").toLocaleString('sr-RS', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })} RSD
            </p>
          </div>

          <Button type="submit" disabled={isUpdating} className="w-full">
            {isUpdating ? "Ažuriranje..." : "Ažuriraj Cenu"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
