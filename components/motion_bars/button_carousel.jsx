
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"


export default function ButtonCarousel() {
  // Array of classic 88x31 buttons
  const buttons = [
    { src: "/88x31/atwork.gif", alt: "At Work" },
    { src: "/88x31/bestenjoyed.gif", alt: "Best Enjoyed" },
    { src: "/88x31/blinkies.gif", alt: "Blinkies" },
    { src: "/88x31/donate.gif", alt: "Donate", href: "https://ko-fi.com/zaygana25", isExternal: true },
    { src: "/88x31/chum.gif", alt: "Chum" },
    { src: "/88x31/cyberrealm.gif", alt: "Cyber Realm" },
    { src: "/88x31/digitalme.gif", alt: "Digital Me" },
    { src: "/88x31/gingerbreadman.gif", alt: "Crazy Gingerbread Man" },
    { src: "/88x31/dotcomboom_new.gif", alt: "Bomb.Com" },
    { src: "/88x31/email.gif", alt: "E-mail Me" }, //, href: "mailto:ilugo@bushnell.edu", isExternal: false },
    { src: "/88x31/emptyhalls.gif", alt: "Empty Halls" },
    { src: "/88x31/folders.gif", alt: "Folders" },
    { src: "/88x31/hairdays.gif", alt: "No Bad Hair Days" },
    { src: "/88x31/madewithamac.gif", alt: "Made with Mac" },
    { src: "/88x31/madewithlove.gif", alt: "Made with Love" },
    { src: "/88x31/stat_counter.gif", alt: "Cool Site Stat" },
    { src: "/88x31/dontclick.gif", alt: "Don't Click", href: "/secret", isExternal: false},    
    { src: "/88x31/thetruth.gif", alt: "The Truth" },
    { src: "/88x31/warning.gif", alt: "Warning" },
    { src: "/88x31/working.gif", alt: "Working" },
    { src: "/88x31/nokia64.gif", alt: "Nokia64" },
  ]

  // Duplicate the buttons array to create a seamless loop
  const allButtons = [...buttons, ...buttons]

  const totalWidth = buttons.length * (88 + 16) // 88px button width + 16px gap

    // Function to render a button (with or without a link)
    const renderButton = (button, index) => {
      const buttonImage = (
        <Image
          src={button.src || "/placeholder.svg?height=31&width=88"}
          alt={button.alt}
          width={88}
          height={31}
          className="object-none w-[88px] h-[31px]"
          unoptimized={true} // Important for GIFs to animate
          style={{ width: "88px", height: "31px" }}
        />
      )
  
      // If the button has a href, wrap it in a link
      if (button.href) {
        if (button.isExternal) {
          return (
            <a
              key={index}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer"
              style={{ width: "88px", height: "31px", flexShrink: 0 }}
              aria-label={button.alt}
            >
              {buttonImage}
            </a>
          )
        } else {
          return (
            <Link
              key={index}
              href={button.href}
              className="inline-block cursor-pointer"
              style={{ width: "88px", height: "31px", flexShrink: 0 }}
              aria-label={button.alt}
            >
              {buttonImage}
            </Link>
          )
        }
      }
  
      // Otherwise, just return the button without a link
      return (
        <div key={index} className="inline-block" style={{ width: "88px", height: "31px", flexShrink: 0 }}>
          {buttonImage}
        </div>
      )
    }

  return (
    <div className="w-full overflow-hidden bg-secondary/30 py-6 border-t border-b border-border">
      <h2 className="text-center text-xl font-bold mb-4">88x31's</h2>

      <div className="relative">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{
            x: [totalWidth * -1, 0], // Move from left to right
          }}
          transition={{
            x: {
              duration: 45, // 45 seconds to loop through all the buttons
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        >
        {allButtons.map((button, index) => renderButton(button, index))}

        </motion.div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-4">
        A nostalgic collection of classic 88x31 buttons/gifs that I find amusing.
      </p>
    </div>
  )
}

