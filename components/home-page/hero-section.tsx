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
    image: "/window.svg",
    ctaPrimary: "Shop Now",
    ctaSecondary: "Learn More",
    bgGradient: "from-blue-600 to-purple-600",
  },
  {
    title: "New Arrivals Just Landed",
    description: "Be the first to shop our latest collections",
    image: "/globe.svg",
    ctaPrimary: "Explore Now",
    ctaSecondary: "See Details",
    bgGradient: "from-pink-600 to-red-600",
  },
  {
    title: "Exclusive Discounts for Members",
    description: "Join now and save big on your favorite products",
    image: "/file.svg",
    ctaPrimary: "Join Now",
    ctaSecondary: "Learn More",
    bgGradient: "from-green-600 to-teal-600",
  },
]

export function HeroSection() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`bg-gradient-to-r ${slide.bgGradient}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative text-white py-16 sm:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-12">
                  <motion.div
                    className="w-full md:w-1/2 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.h1
                      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="text-lg md:text-xl opacity-90 max-w-lg mx-auto md:mx-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-lg w-full sm:w-auto">
                        {slide.ctaPrimary}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent shadow-lg w-full sm:w-auto"
                      >
                        {slide.ctaSecondary}
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="hidden md:flex md:w-1/2 items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={500}
                      height={400}
                      className="rounded-lg shadow-2xl object-contain w-full h-auto max-h-[400px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 sm:p-3 shadow-md z-10 transition-colors duration-300"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 sm:p-3 shadow-md z-10 transition-colors duration-300"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </Swiper>
    </section>
  )
}
