

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Vigilancia 24/7",
      subtitle: "Protección constante para tu negocio",
      image: "/1.jpg",
    },
    {
      id: 2,
      title: "Tecnología IA Avanzada",
      subtitle: "Detección inteligente de amenazas",
      image: "/2.jpg",
    },
    {
      id: 3,
      title: "Acceso Remoto",
      subtitle: "Controla tu seguridad desde cualquier lugar",
      image: "/3.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="hero" className="relative w-full h-1/3 md:h-3/4 overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">{slides[currentSlide].title}</h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl text-balance">{slides[currentSlide].subtitle}</p>
        <button className="bg-[#990100] hover:bg-[#b90504] px-6 py-3 rounded-lg text-white font-medium transition-colors shadow-lg hover:shadow-red-500/20">
            Contactar Ahora
          </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
        aria-label="Siguiente slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
