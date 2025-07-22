import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    title: "Premium Coffee Maker with Grinder",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.4,
    reviews: 1247,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Best Seller",
    freeShipping: true,
  },
  {
    id: 2,
    title: "Ergonomic Office Chair",
    price: 189.99,
    rating: 4.2,
    reviews: 856,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Amazon's Choice",
    freeShipping: true,
  },
  {
    id: 3,
    title: "Wireless Charging Pad",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.1,
    reviews: 2341,
    image: "/placeholder.svg?height=250&width=250",
    freeShipping: false,
  },
  {
    id: 4,
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    rating: 4.6,
    reviews: 3892,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Eco-Friendly",
    freeShipping: true,
  },
  {
    id: 5,
    title: "Bluetooth Portable Speaker",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.3,
    reviews: 1654,
    image: "/placeholder.svg?height=250&width=250",
    freeShipping: true,
  },
  {
    id: 6,
    title: "LED Desk Lamp with USB Charging",
    price: 39.99,
    rating: 4.5,
    reviews: 987,
    image: "/placeholder.svg?height=250&width=250",
    badge: "New Arrival",
    freeShipping: true,
  },
  {
    id: 7,
    title: "Fitness Tracker Watch",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.0,
    reviews: 2156,
    image: "/placeholder.svg?height=250&width=250",
    freeShipping: true,
  },
  {
    id: 8,
    title: "Noise Cancelling Earbuds",
    price: 149.99,
    rating: 4.7,
    reviews: 4321,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Premium Quality",
    freeShipping: true,
  },
]

export function ProductGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recommended for You</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow group">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                {product.badge && (
                  <Badge
                    className={`absolute top-2 left-2 ${
                      product.badge === "Best Seller"
                        ? "bg-orange-500"
                        : product.badge === "Amazon's Choice"
                          ? "bg-blue-600"
                          : product.badge === "Eco-Friendly"
                            ? "bg-green-600"
                            : "bg-purple-600"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>

              <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{product.title}</h3>

              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {product.freeShipping && <p className="text-sm text-green-600 font-medium">FREE Shipping</p>}

                <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
