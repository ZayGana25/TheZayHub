"use client"

import { useEffect, useState } from "react"

export default function RickRolled() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState("Loading surprise...")

  useEffect(() => {
    // Simulate loading for effect
    const loadingTimer = setTimeout(() => {
      setLoadingProgress("Preparing secret content...")
    }, 1000)

    // Finish loading after a delay
    const finishTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(finishTimer)
    }
  }, [])

  return (
    <div className="w-full max-w-[500px] aspect-square mx-auto bg-black rounded-lg overflow-hidden relative">
      {isLoading ? (
        // Loading state - keep the original loading display
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-lg mb-2">{loadingProgress}</p>
            <div className="w-32 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{
                  width: loadingProgress.includes("Preparing") ? "75%" : "30%",
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        // YouTube video embed
        <div className="w-full h-full">
          <iframe
            src="https://www.youtube.com/watch?v=vybook6hBqY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </div>
  )
}