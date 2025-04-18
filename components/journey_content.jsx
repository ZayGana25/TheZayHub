"use client"

import { useEffect, useRef, useState } from "react"
import JourneyImageCarousel from "./journey_image_carousel"

export default function journeyContent({ content, carousels }) {
  const contentRef = useRef(null)
  const [processedContent, setProcessedContent] = useState(content)

  useEffect(() => {
    // Process code blocks after the content is rendered
    if (contentRef.current) {
      const preElements = contentRef.current.querySelectorAll("pre")

      preElements.forEach((pre) => {
        // Add a class to ensure proper styling
        pre.classList.add("code-block")

        // Make sure code elements inside pre have proper styling
        const codeElements = pre.querySelectorAll("code")
        codeElements.forEach((code) => {
          code.classList.add("code-content")
        })
      })
    }
  }, [processedContent])

  // If there are no carousels, just render the content as is
  if (!carousels || Object.keys(carousels).length === 0) {
    return <div ref={contentRef} className="journey-content space-y-6" dangerouslySetInnerHTML={{ __html: content }} />
  }

  // Split the content by carousel placeholders and render carousels in between
  const contentParts = []
  let remainingContent = content

  // Sort carousel IDs by their position in the content to ensure correct order
  const carouselIds = Object.keys(carousels).sort((a, b) => {
    const posA = remainingContent.indexOf(`[CAROUSEL:${a}]`)
    const posB = remainingContent.indexOf(`[CAROUSEL:${b}]`)
    return posA - posB
  })

  carouselIds.forEach((id) => {
    const placeholder = `[CAROUSEL:${id}]`
    const parts = remainingContent.split(placeholder)

    if (parts.length > 1) {
      contentParts.push(parts[0])
      contentParts.push(<JourneyImageCarousel key={id} images={carousels[id]} />)
      remainingContent = parts.slice(1).join(placeholder)
    }
  })

  // Add any remaining content
  if (remainingContent) {
    contentParts.push(remainingContent)
  }

  return (
    <div ref={contentRef} className="journey-content space-y-6">
      {contentParts.map((part, index) => {
        if (typeof part === "string") {
          return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />
        }
        return part
      })}
    </div>
  )
}

