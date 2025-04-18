"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ProgressBar() {
  const controlsLeft = useAnimation()
  const controlsRight = useAnimation()
  const pathname = usePathname()

  useEffect(() => {
    // Reset and animate the progress bars on route change
    controlsLeft.set({ width: "0%" })
    controlsRight.set({ width: "0%" })

    // Animate both sides simultaneously
    controlsLeft.start({
      width: "50%",
      transition: { duration: 1.5, ease: "easeOut" },
    })

    controlsRight.start({
      width: "50%",
      transition: { duration: 1.5, ease: "easeOut" },
    })
  }, [pathname, controlsLeft, controlsRight])

  return (
    <div className="w-full h-8 bg-secondary border-t border-b border-border flex items-center overflow-hidden">
      <div className="w-full h-1 bg-muted relative flex justify-center">
        {/* Left side progress bar */}
        <motion.div
          className="absolute top-0 right-1/2 h-full bg-primary origin-right"
          animate={controlsLeft}
          style={{ transformOrigin: "right" }}
        />

        {/* Right side progress bar */}
        <motion.div
          className="absolute top-0 left-1/2 h-full bg-primary origin-left"
          animate={controlsRight}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </div>
  )
}

