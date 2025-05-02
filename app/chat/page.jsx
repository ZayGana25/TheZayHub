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
  },
}

export default function ChatPage() {
  return <ChatClientPage />
}

