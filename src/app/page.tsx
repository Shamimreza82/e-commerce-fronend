

import { Header } from "@/components/home-page/header"
import { HeroSection } from "@/components/home-page/hero-section"
import { CategoryGrid } from "@/components/home-page/category-grid"
import { DealsSection } from "@/components/home-page/deals-section"
import { ProductGrid } from "@/components/home-page/product-grid"
import { Footer } from "@/components/home-page/footer"


export default function HomePage() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
          <CategoryGrid />
          <DealsSection />
          <ProductGrid />
          
        </div>
      </main>
      <Footer />
    </div>
  )
}
