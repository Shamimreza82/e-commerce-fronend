import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const categories = [
  { name: "Electronics", image: "/placeholder.svg?height=200&width=200", items: "1M+ items" },
  { name: "Fashion", image: "/placeholder.svg?height=200&width=200", items: "500K+ items" },
  { name: "Home & Garden", image: "/placeholder.svg?height=200&width=200", items: "800K+ items" },
  { name: "Books", image: "/placeholder.svg?height=200&width=200", items: "2M+ items" },
  { name: "Sports", image: "/placeholder.svg?height=200&width=200", items: "300K+ items" },
  { name: "Beauty", image: "/placeholder.svg?height=200&width=200", items: "200K+ items" },
  { name: "Toys", image: "/placeholder.svg?height=200&width=200", items: "400K+ items" },
  { name: "Automotive", image: "/placeholder.svg?height=200&width=200", items: "600K+ items" },
]

export function CategoryGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={200}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-sm">{category.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{category.items}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
