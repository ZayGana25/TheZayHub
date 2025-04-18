"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function JourneyImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // If no images or only one image, render a static image
  if (!images || images.length === 0) {
    return null
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[0].src || "/placeholder.svg"}
          alt={images[0].alt || "Journey image"}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-background/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
