import { Check, Star, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProductHeroProps {
  product: {
    name: string
    description: string
    price: number
  }
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-medium">
              <Zap className="w-3 h-3 mr-1 inline" />
              #1 Best Selling Nose Strips
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Breathe Better.
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              Sleep Deeper.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 animate-fade-in-up delay-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              4.9/5 from 2,847 reviews
            </span>
          </div>

          {/* Price Card */}
          <div className="inline-block animate-fade-in-up delay-400">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              {/* Price card */}
              <div className="relative bg-card border border-border/50 rounded-2xl p-8 shadow-2xl">
                <div className="text-sm text-muted-foreground mb-2">
                  Starting at
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-muted-foreground">/pack</span>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Free shipping on all orders
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 animate-fade-in-up delay-500">
            {[
              { icon: Check, text: "Premium Quality Materials" },
              { icon: Check, text: "Fast 2-3 Day Shipping" },
              { icon: Check, text: "100% Satisfaction Guaranteed" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-left p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground animate-fade-in-up delay-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-500 border-2 border-background"
                  />
                ))}
              </div>
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Instant Relief</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
