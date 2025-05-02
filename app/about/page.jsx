
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
  },
}

export default function AboutPage() {
  return <AboutPageClient /> 
}

