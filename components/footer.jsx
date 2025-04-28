"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Footer() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const openContactForm = () => {
    // Dispatch a custom event that the header component will listen for
    window.dispatchEvent(new CustomEvent("openContactForm"))
  }

  if (!mounted) {
    return (
      <footer className="border-t py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} TheZayHub. Dream Big</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              {/* Theme buttons placeholder during SSR */}
              <div className="w-10 h-10" />
              <div className="w-10 h-10" />
              <div className="w-10 h-10" />
            </div>
            <div>
              <button onClick={openContactForm} className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </button>
              <span className="text-muted-foreground mx-2"> | </span>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} TheZayHub. Dream Big</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme("light")}
              aria-label="Light mode"
              className={theme === "light" ? "bg-secondary" : ""}
            >
              <Sun className="h-5 w-5" />
              <span className="sr-only">Light Mode</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme("dark")}
              aria-label="Dark mode"
              className={theme === "dark" ? "bg-secondary" : ""}
            >
              <Moon className="h-5 w-5" />
              <span className="sr-only">Dark Mode</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme("system")}
              aria-label="System theme"
              className={theme === "system" ? "bg-secondary" : ""}
            >
              <Laptop className="h-5 w-5" />
              <span className="sr-only">System Theme</span>
            </Button>
          </div>
          <div>
            <button onClick={openContactForm} className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </button>
            <span className="text-muted-foreground mx-2"> | </span>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}