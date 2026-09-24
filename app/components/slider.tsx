"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Allura } from "next/font/google"

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
})

interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "健康で健やかな暮らしを ",
    subtitle: "Having a healthy life every day.",
    description: "",
    image: "/top_slide_001.jpg"
  },
  {
    id: 2,
    title: "笑顔きらめく毎日を",
    subtitle: "Every day with a smile.",
    description: "",
    image: "/2.jpg"
  },
  {
    id: 3,
    title: "私たちは地球と人の健康を考えています",
    subtitle: "We care about the health of people and planet.",
    description: "",
    image: "/3.jpg"
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-[clamp(220px,56vw,600px)] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl sm:pb-4">
                  <div
                    className={`transform transition-all duration-1000 delay-300 ${
                      index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    <p className={`${allura.className} text-[#0071bc] text-base sm:text-2xl md:text-4xl font-medium mb-1 sm:mb-2`}>{slide.subtitle} </p>
                    <h1 className="max-w-[85vw] text-xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-6 leading-tight">{slide.title}</h1>
                    <p className="text-sm sm:text-xl text-gray-200 mb-4 sm:mb-8 leading-relaxed">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}
