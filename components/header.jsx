
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import MotionBar from "./motion_bars/progress"
import ContactForm from "./contact_form"


const navigation = [
  { name: "Home", href: "/" },
  { name: "AboutMe", href: "/about" },
  { name: "CV", href: "/cv" },
  { name: "Journey", href: "/journey" },
  { name: "ChatWithMe", href: "/chat" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => {
    const handleOpenContactForm = () => {
      setContactFormOpen(true)
    }

    window.addEventListener("openContactForm", handleOpenContactForm)

    return () => {
      window.removeEventListener("openContactForm", handleOpenContactForm)
    }
  }, [])

  return (
    <header className="bg-background border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold flex items-center gap-3">
              <Image
                src="/88x31/www2.gif"
                alt="Animated Button"
                width={88}
                height={31}
                className="object-contain"
                unoptimized={true} // Important for GIFs to animate
              />
              TheZayHub
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-semibold leading-6 ${
                pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-primary"
                />
              )}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline" size="sm" onClick={() => setContactFormOpen(true)}>
            Contact
          </Button>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold flex items-center gap-3">
              <Image
                src="/www2.gif"
                alt="Animated Button"
                width={88}
                height={31}
                className="object-contain"
                unoptimized={true} // Important for GIFs to animate
              />
              TheZayHub
            </span>
          </Link>
          <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-border">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button
                className="w-full"
                variant="outline"
                size="sm"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setContactFormOpen(true)
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>

      <MotionBar />
      {/* Contact Form Modal */}
      {contactFormOpen && <ContactForm onClose={() => setContactFormOpen(false)} />}
    </header>
  )
}