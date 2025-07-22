"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import { motion } from "framer-motion"
import { Autoplay, Navigation } from "swiper/modules"

const slides = [
  {
    title: "Great deals on everything you need",
    description: "Discover millions of products with fast, free delivery on eligible orders",
    image: "/placeholder.svg?height=400&width=600",
    ctaPrimary: "Shop Now",
    ctaSecondary: "Learn More",
    bgGradient: "from-blue-600 to-purple-600",
  },
  {
    title: "New Arrivals Just Landed",
    description: "Be the first to shop our latest collections",
    image: "/placeholder2.svg?height=400&width=600",
    ctaPrimary: "Explore Now",
    ctaSecondary: "See Details",
    bgGradient: "from-pink-600 to-red-600",
  },
  {
    title: "Exclusive Discounts for Members",
    description: "Join now and save big on your favorite products",
    image: "/placeholder3.svg?height=400&width=600",
    ctaPrimary: "Join Now",
    ctaSecondary: "Learn More",
    bgGradient: "from-green-600 to-teal-600",
  },
]

export function HeroSection() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="mx-auto px-4 py-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative text-white p-6 md:p-16 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r ${slide.bgGradient}`}
            >
              <motion.div
                className="md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-lg">
                    {slide.ctaPrimary}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent shadow-lg"
                  >
                    {slide.ctaSecondary}
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl object-cover"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 shadow-md z-10"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-900" />
        </button>
        <button
          className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 shadow-md z-10"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-900" />
        </button>
      </Swiper>
    </div>
  )
}
