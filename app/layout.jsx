import { JetBrains_Mono } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// browser tab title
export const metadata = {
  title: "TheZayHub | Portfolio Website",
  description: 
    "Personal portfolio website showcasing my web development projects, skills, and experience.",
  keywords: ["Portfolio", "Web Development", "Projects", "Skills", "Experience", "TheZayHub", "Zay", "Isaiah Lugo"],
  authors: [{ name: "Isaiah Lugo" }],
  creator: "Isaiah Lugo",
  metadataBase: new URL("https://thezayhub.com"),
  icons: {
    icons: "/metadata/chill_guy.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thezayhub.com",
    title: "TheZayHub | Portfolio Website",
    description: "Personal portfolio website showcasing my web development projects, skills, and experience.",
    siteName: "My Portfolio",
    images: [
      {
        url: "/metadata/og-image.png", // You'll need to create this image in your public folder
        width: 1200,
        height: 630,
        alt: "My Portfolio Website",
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

