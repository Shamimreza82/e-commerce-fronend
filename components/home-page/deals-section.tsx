import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Star } from "lucide-react"
import Image from "next/image"

const deals = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    originalPrice: 199.99,
    salePrice: 79.99,
    discount: 60,
    rating: 4.5,
    reviews: 2847,
    image: "/placeholder.svg?height=200&width=200",
    timeLeft: "2h 15m",
  },
  {
    id: 2,
    title: "Smart Watch Series 8",
    originalPrice: 399.99,
    salePrice: 299.99,
    discount: 25,
    rating: 4.7,
    reviews: 1523,
    image: "/placeholder.svg?height=200&width=200",
    timeLeft: "5h 42m",
  },
  {
    id: 3,
    title: '4K Ultra HD Smart TV 55"',
    originalPrice: 899.99,
    salePrice: 549.99,
    discount: 39,
    rating: 4.3,
    reviews: 892,
    image: "/placeholder.svg?height=200&width=200",
    timeLeft: "1h 08m",
  },
  {
    id: 4,
    title: "Gaming Mechanical Keyboard",
    originalPrice: 149.99,
    salePrice: 89.99,
    discount: 40,
    rating: 4.6,
    reviews: 3421,
    image: "/placeholder.svg?height=200&width=200",
    timeLeft: "3h 33m",
  },
]

export function DealsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Lightning Deals</h2>
        <Button variant="outline">View All Deals</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <Card key={deal.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="destructive" className="bg-red-600">
                  {deal.discount}% OFF
                </Badge>
                <div className="flex items-center text-sm text-orange-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {deal.timeLeft}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Image
                src={deal.image || "/placeholder.svg"}
                alt={deal.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{deal.title}</h3>

              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({deal.reviews})</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-red-600">${deal.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
