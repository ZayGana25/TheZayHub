"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Youtube } from "lucide-react"
import ButtonCarousel from "@/components/motion_bars/button_carousel";

export const metadata = {
  title: "About Me | TheZayHub",
  description: "Learn more about my background, education, experience, and journey as a software engineer and cybersecurity enthusiast.",
}

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    "/carousel/us.jpg?height=400&width=600",
    "/carousel/hit_ball.jpg?height=400&width=600",
    "/carousel/night_out.jpg?height=400&width=600",
    "/carousel/rico_rey.jpg?height=400&width=600",
    "/carousel/renotrip.jpg?height=400&width=600",
    "/carousel/family.jpg?height=400&width=600",
    "/carousel/handsome.jpg?height=400&width=600",
    "/carousel/film_selfie.jpg?height=400&width=600",
    "/carousel/snowboard.jpg?height=400&width=600",
    "/carousel/goducks.jpg?height=400&width=600",
    "/carousel/bushnell.jpg?height=400&width=600",
    "/carousel/theboys.jpg?height=400&width=600",
  ]

  const personalInfo = {
    name: "Isaiah P. Lugo",
    title: "Student at Bushnell University",
    location: "Eugene, OR",
    //email: "ilugo@bushnell.edu",
    bio: "I'm a student at Bushnell University pursuing a major in Computer Science: Software Engineering and a Minor in Mathematics. I'm passionate about technology and enjoy learning new things, with a focus on Cyber Security. Sports are a big part of my life, and I enjoy playing baseball and golf. Most of all, family is very important to me.",
    hobbies: [
      {
        title: "Sports",
        description: "I love a lot of sports including baseball, football, golf, etc. Nothing compares to being on a baseball diamond though.",
        icon: "⚾",
      },
      {
        title: "Gaming",
        description: "In my free time, I enjoy playing video games on my PC and PS5. I'm a big fan of game genres such as RPGs and shooters.",
        icon: "🎮",
      },
      {
        title: "Family Time",
        description: "Spending time with my family and partner is very important to me. I love going on trips and making memories with them.",
        icon: "👨‍👩‍👧‍👦",
      },
      {
        title: "Movies & Shows",
        description: "I enjoy watching many movies and shows ranging from horror to comedy. I also really enjoy watching Marvel movies for the thrill!",
        icon: "🎬",
      },
    ],
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <div className="space-y-16">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">{personalInfo.name}</h2>
            <p className="text-lg text-primary">{personalInfo.title}</p>
            <p className="text-muted-foreground">{personalInfo.location}</p>
            <p className="text-muted-foreground">{personalInfo.email}</p>
          </div>
          <p className="text-lg">{personalInfo.bio}</p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/ZayGana25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com/in/isaiah-lugo-22a933326/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://instagram.com/isaiahlugo25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.youtube.com/@MrBigZ25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube Profile"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative mx-auto w-full max-w-md aspect-square">
            <Image
              src="/pp/profile_pic.jpg?height=400&width=400"
              alt="Profile Image"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">My Hobbies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="text-3xl mb-2">{hobby.icon}</div>
                  <CardTitle>{hobby.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{hobby.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Photo Gallery</h2>
        <div className="space-y-6">
          {/* Visible Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[0, 1, 2].map((offset) => {
              const index = (currentImageIndex + offset) % carouselImages.length
              return (
                <motion.div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={carouselImages[index] || "/placeholder.jpg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
              aria-label="Previous photos"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to photo set ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)}
              aria-label="Next photos"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
       {/* 88x31 Button Carousel */}
      <ButtonCarousel />

    </div>
  )
}

