"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useChat } from "ai/react"
import ReactMarkdown from "react-markdown"


export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Chat With Me</h1>
          <p className="text-muted-foreground">Feel free to ask me anything about my work, interests, or background!</p>
        </div>

        <Card className="border shadow-md">
          <CardHeader className="border-b">
            <CardTitle>AI Assistant: Zay</CardTitle>
            <CardDescription>Powered by OpenAI GPT-4.1</CardDescription>
          </CardHeader>
          <CardContent className="h-[500px] overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center text-center p-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">No messages yet</h3>
                    <p className="text-sm text-muted-foreground">Start the conversation by sending a message below.</p>
                  </div>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] w-fit rounded-lg px-4 py-2 ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                        style={{
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
                          hyphens: "auto",
                          maxWidth: "calc(100% - 2rem)",
                        }}
                      >
                        {message.role === "user" ? (
                          <div>{message.content}</div>
                        ) : (
                          <div className="chat-markdown">
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <input
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

