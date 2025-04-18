"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import AsciiEarth from "@/components/ascii_earth"

export default function SecretPage() {
  const [prompt, setPrompt] = useState("")

  // Array of secret prompts
  const secretPrompts = [
    "The universe is vast, but you found this little corner of it.",
    "Not all who wander are lost, but you definitely took a detour.",
    "Curiosity may have killed the cat, but satisfaction brought it back.",
    "You've discovered the secret page. What will you do with this knowledge?",
    "Sometimes the best treasures are found by those who don't follow instructions.",
    "Congratulations on your rebellious spirit!",
    "This is where all the secrets are kept. Well, not really, but it sounds cool.",
    "You're either very curious or very disobedient. Either way, welcome!",
    "The Earth spins, time passes, and you're here reading this message.",
    "This page doesn't exist. You're actually dreaming right now.",
  ]

  useEffect(() => {
    // Select a random prompt
    const randomIndex = Math.floor(Math.random() * secretPrompts.length)
    setPrompt(secretPrompts[randomIndex])
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-black text-white p-4">
     <div className="text-center max-w-2xl relative">
      <div className="mb-6 text-left">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="text-white flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Return Quietly
          </Link>
        </Button>
      </div>

        <h1 className="text-2xl font-bold mb-4 text-primary">You Found The Secret Page</h1>

        <div className="relative mb-8">
          <AsciiEarth />
        </div>

        <motion.p
          className="text-lg italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          {prompt}
        </motion.p>
      </div>
    </div>
  )
}

