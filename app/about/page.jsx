
import AboutPageClient from "./AboutPageClient"

export const metadata = {
  title: "AboutMe ",
  description: 
    "Learn more about my background, education, experience, and journey as a software engineer and cybersecurity enthusiast.",
  keywords: ["About Me", "Background", "Education", "Experience", "Journey", "Software Engineer", "Cybersecurity"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "AboutMe | TheZayHub",
    description:
      "Learn more about my background, education, experience, and journey as a software engineer and cybersecurity enthusiast.",
    images: [
      {
        url: "https://www.thezayhub.com/metadata/og-image.png",  
        width: 1200,
        height: 630,
        alt: "AboutMe | TheZayHub",
      },
    ],
  },
  
}

export default function AboutPage() {
  return <AboutPageClient /> 
}

