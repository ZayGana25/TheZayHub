import ChatClientPage from "./ChatClientPage"

export const metadata = {
  title: "ChatWithMe",
  description: 
    "Talk with my custom AI chatbot trained on my background and interests. Ask about my projects, skills, journey or just chat!",
  keywords: ["AI", "Chatbot", "TheZayHub", "ChatWithMe"],
  alternates: {
    canonical: "/chat",
  },
  openGraph: {
    title: "ChatWithMe | TheZayHub",
    description:
      "Talk with my custom AI chatbot trained on my background and interests. Ask about my projects, skills, journey or just chat!",
    images: [
      {
         url: "https://www.thezayhub.com/metadata/og-image.png",  
        width: 1200,
        height: 630,
        alt: "ChatWithMe | TheZayHub",
      },
    ],
  },
}

export default function ChatPage() {
  return <ChatClientPage />
}

