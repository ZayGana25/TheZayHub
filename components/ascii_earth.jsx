"use client"

import { useEffect, useRef, useState } from "react"

export default function AsciiEarth() {
  const canvasRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState("Loading globe...")

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Earth parameters
    const radius = Math.min(width, height) * 0.45
    const cellSize = 6 // Smaller cell size for more detail

    // ASCII characters for different terrain types
    const oceanChars = [" ", ".", ":", "~", "-"]
    const landChars = ["#", "#", "#", "#", "#"] // Using consistent characters for land

    // Pre-calculate grid positions
    const gridWidth = Math.ceil(width / cellSize)
    const gridHeight = Math.ceil(height / cellSize)
    const grid = new Array(gridHeight).fill().map(() => new Array(gridWidth).fill(0))

    // Create a world map (180x360 array representing lat/lng)
    // 1 = land, 0 = ocean
    const worldMap = new Array(180).fill().map(() => new Array(360).fill(0))

    // Load world map image and use it to create the worldMap array
    const worldMapImage = new Image()
    worldMapImage.crossOrigin = "anonymous" // Avoid CORS issues
    worldMapImage.src =
      "/globe.jpg" // Using the provided image URL

    worldMapImage.onload = () => {
      setLoadingProgress("Processing map image...")

      // Create a temporary canvas to process the image
      const tempCanvas = document.createElement("canvas")
      tempCanvas.width = 360 // One pixel per longitude
      tempCanvas.height = 180 // One pixel per latitude
      const tempCtx = tempCanvas.getContext("2d")

      // Draw the world map image to the temporary canvas, scaling it to match our worldMap dimensions
      tempCtx.drawImage(worldMapImage, 0, 0, 360, 180)

      // Get the image data
      const imageData = tempCtx.getImageData(0, 0, 360, 180)
      const data = imageData.data

      // First pass: Process the image data to create the initial worldMap array
      for (let y = 0; y < 180; y++) {
        for (let x = 0; x < 360; x++) {
          const idx = (y * 360 + x) * 4
          // Check if the pixel is land (green) vs water (white)
          const r = data[idx]
          const g = data[idx + 1]
          const b = data[idx + 2]

          // Improved land detection with stronger threshold
          // Green land has higher green value than red and blue by a significant margin
          if (g > r + 30 && g > b + 30 && g > 100) {
            worldMap[y][x] = 1 // Land
          }
        }
      }

      // Second pass: Apply smoothing to reduce speckling
      const smoothedMap = new Array(180).fill().map(() => new Array(360).fill(0))

      for (let y = 0; y < 180; y++) {
        for (let x = 0; x < 360; x++) {
          // Count land pixels in 3x3 neighborhood
          let landCount = 0
          let totalCount = 0

          for (let ny = Math.max(0, y - 1); ny <= Math.min(179, y + 1); ny++) {
            for (let nx = Math.max(0, x - 1); nx <= Math.min(359, x + 1); nx++) {
              landCount += worldMap[ny][nx]
              totalCount++
            }
          }

          // Apply smoothing rules:
          // 1. If center is land and has few land neighbors, remove it (isolated pixel)
          // 2. If center is water and has many land neighbors, make it land (fill small gaps)
          if (worldMap[y][x] === 1 && landCount < 3) {
            // Remove isolated land pixels (reduces speckling)
            smoothedMap[y][x] = 0
          } else if (worldMap[y][x] === 0 && landCount > totalCount * 0.6) {
            // Fill in small gaps in land masses
            smoothedMap[y][x] = 1
          } else {
            smoothedMap[y][x] = worldMap[y][x]
          }
        }
      }

      // Third pass: One more smoothing iteration for better results
      for (let y = 0; y < 180; y++) {
        for (let x = 0; x < 360; x++) {
          // Count land pixels in 3x3 neighborhood
          let landCount = 0
          let totalCount = 0

          for (let ny = Math.max(0, y - 1); ny <= Math.min(179, y + 1); ny++) {
            for (let nx = Math.max(0, x - 1); nx <= Math.min(359, x + 1); nx++) {
              landCount += smoothedMap[ny][nx]
              totalCount++
            }
          }

          // Apply final smoothing
          if (smoothedMap[y][x] === 1 && landCount < 3) {
            worldMap[y][x] = 0
          } else if (smoothedMap[y][x] === 0 && landCount > totalCount * 0.7) {
            worldMap[y][x] = 1
          } else {
            worldMap[y][x] = smoothedMap[y][x]
          }
        }
      }

      // Start the animation once the map is processed
      isGlobeLoaded = true
      setIsLoading(false)
      startAnimation()
    }

    worldMapImage.onerror = () => {
      console.error("Error loading world map image. Using fallback continent definitions.")
      // Define simplified continents as fallback
      defineSimplifiedContinents()
      startAnimation()
    }

    function defineSimplifiedContinents() {
      // North America
      for (let lat = 30; lat <= 75; lat++) {
        const width = 25 + (lat - 30) * 0.5
        const center = -95
        for (let lng = center - width; lng <= center + width; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      // Central America
      for (let lat = 10; lat < 30; lat++) {
        const width = 5
        const center = -85
        for (let lng = center - width; lng <= center + width; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      // South America
      for (let lat = -55; lat <= 10; lat++) {
        let width
        if (lat < -40) width = 5 + (lat + 55) * 0.5
        else if (lat < -10) width = 15 + (lat + 40) * 0.5
        else width = 20 - (lat + 10) * 1

        const center = -60
        for (let lng = center - width; lng <= center + width; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      // Europe
      for (let lat = 35; lat <= 70; lat++) {
        let width = 15
        const center = 15
        if (lat > 60) width = 10
        for (let lng = center - width; lng <= center + width; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      // Africa
      for (let lat = -35; lat <= 35; lat++) {
        let width
        if (lat < -20) width = 10 + (lat + 35) * 0.5
        else if (lat < 0) width = 20
        else if (lat < 20) width = 25
        else width = 25 - (lat - 20) * 0.5

        const center = 20
        for (let lng = center - width; lng <= center + width; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      // Asia
      for (let lat = 0; lat <= 75; lat++) {
        let width, center

        if (lat < 20) {
          width = 20
          center = 100
        } else if (lat < 40) {
          width = 40
          center = 90
        } else if (lat < 60) {
          width = 50
          center = 80
        } else {
          width = 40
          center = 70
        }

        for (let lng = center - width; lng <= center + width; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      // Australia
      for (let lat = -40; lat <= -10; lat++) {
        const width = 15
        const center = 135
        for (let lng = center - width; lng <= center + width; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      // Antarctica
      for (let lat = -90; lat <= -65; lat++) {
        for (let lng = -180; lng <= 180; lng++) {
          const mapLat = lat + 90
          const mapLng = lng + 180
          if (mapLat >= 0 && mapLat < 180 && mapLng >= 0 && mapLng < 360) {
            worldMap[mapLat][mapLng] = 1
          }
        }
      }

      isGlobeLoaded = true
      setIsLoading(false)
    }

    // Animation variables
    let angle = 0
    let isGlobeLoaded = false

    function drawASCIIEarth() {
      // Clear canvas
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, width, height)

      if (!isGlobeLoaded) {
        // Draw loading message
        ctx.fillStyle = "white"
        ctx.font = "16px monospace"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(loadingProgress, width / 2, height / 2)
        requestAnimationFrame(drawASCIIEarth)
        return
      }

      // Set text properties
      ctx.font = `${cellSize}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Calculate Earth surface for current rotation
      for (let j = 0; j < gridHeight; j++) {
        for (let i = 0; i < gridWidth; i++) {
          const x = (i + 0.5) * cellSize
          const y = (j + 0.5) * cellSize

          // Calculate 3D coordinates
          const centerX = width / 2
          const centerY = height / 2
          const dx = (x - centerX) / radius
          const dy = (y - centerY) / radius
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Only process points on the sphere
          if (dist < 1) {
            // Calculate 3D z-coordinate
            const dz = Math.sqrt(1 - dist * dist)

            // Apply rotation around y-axis
            const rx = dx * Math.cos(angle) + dz * Math.sin(angle)
            const ry = dy
            const rz = -dx * Math.sin(angle) + dz * Math.cos(angle)

            // Convert 3D coordinates back to lat/lng
            let lat = (Math.asin(ry) * 180) / Math.PI
            let lng = (Math.atan2(rx, rz) * 180) / Math.PI

            // Adjust for map array indices
            lat = Math.round(lat + 90)
            lng = Math.round(lng + 180)

            // Clamp to valid indices
            lat = Math.max(0, Math.min(179, lat))
            lng = Math.max(0, Math.min(359, lng))

            // New lighting model: brightest in center, darker at edges
            // Calculate distance from center of visible disk
            const distFromCenter = Math.sqrt(dx * dx + dy * dy)

            // Brightness falls off toward the edges (simulating a sphere)
            let brightness = 1 - distFromCenter * 0.7
            brightness = Math.max(0.3, Math.min(brightness, 1))

            // Determine if this point is land or ocean using the world map
            const isOnLand = worldMap[lat][lng] === 1

            // Store brightness and land/ocean info in grid
            grid[j][i] = { brightness, isOnLand, visible: true }
          } else {
            grid[j][i] = { visible: false } // Outside the sphere
          }
        }
      }

      // Draw the ASCII Earth
      for (let j = 0; j < gridHeight; j++) {
        for (let i = 0; i < gridWidth; i++) {
          const cell = grid[j][i]

          if (cell.visible) {
            // Choose character set based on land/ocean
            const charSet = cell.isOnLand ? landChars : oceanChars

            // Map brightness to ASCII character
            const charIndex = Math.floor(cell.brightness * (charSet.length - 1))
            const char = charSet[charIndex]

            // Draw the character
            const x = (i + 0.5) * cellSize
            const y = (j + 0.5) * cellSize

            // Use different colors for land and ocean
            if (cell.isOnLand) {
              // Green for land
              ctx.fillStyle = `hsl(120, 100%, ${40 + cell.brightness * 40}%)`
            } else {
              // Blue for ocean
              ctx.fillStyle = `hsl(210, 100%, ${30 + cell.brightness * 40}%)`
            }

            ctx.fillText(char, x, y)
          }
        }
      }

      // Update rotation angle
      angle += 0.02

      // Continue animation
      requestAnimationFrame(drawASCIIEarth)
    }

    function startAnimation() {
      // Start the animation
      drawASCIIEarth()
    }

    // Start the animation loop immediately to show loading progress
    drawASCIIEarth()

    // Cleanup function
    return () => {
      // No specific cleanup needed
    }
  }, [])

  return <canvas ref={canvasRef} width={500} height={500} className="bg-black rounded-lg mx-auto" />
}

