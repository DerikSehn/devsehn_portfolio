"use client"

import { useEffect, useRef, useState } from "react"

interface CircuitPath {
  id: string
  points: { x: number; y: number }[]
  isActive: boolean
  activationTime: number
  glowIntensity: number
  type: 'horizontal' | 'vertical' | 'diagonal' | 'corner'
}

interface CircuitNode {
  x: number
  y: number
  isActive: boolean
  connections: string[]
}

interface ElectricCircuitsProps {
  className?: string
  opacity?: number
  gridSize?: number
  interactionRadius?: number
}

export function ElectricCircuits({ 
  className = "", 
  opacity = 0.6,
  gridSize = 80,
  interactionRadius = 100
}: ElectricCircuitsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const mousePosRef = useRef({ x: 0, y: 0 })
  const pathsRef = useRef<CircuitPath[]>([])
  const nodesRef = useRef<CircuitNode[]>([])

  // Update ref whenever state changes
  useEffect(() => {
    mousePosRef.current = mousePos
  }, [mousePos])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateCircuitPattern()
    }

    const generateCircuitPattern = () => {
      const paths: CircuitPath[] = []
      const nodes: CircuitNode[] = []
      
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      // Generate grid nodes
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (Math.random() > 0.3) { // Not every grid point has a node
            nodes.push({
              x: col * gridSize + (Math.random() - 0.5) * 20,
              y: row * gridSize + (Math.random() - 0.5) * 20,
              isActive: false,
              connections: []
            })
          }
        }
      }

      // Generate circuit paths between nodes
      nodes.forEach((node, nodeIndex) => {
        const nearbyNodes = nodes.filter((otherNode, otherIndex) => {
          if (otherIndex === nodeIndex) return false
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          )
          return distance < gridSize * 1.8 && Math.random() > 0.6
        })

        nearbyNodes.forEach(targetNode => {
          const pathId = `path-${nodeIndex}-${nodes.indexOf(targetNode)}`
          
          // Create path with multiple segments for more complex routing
          const points = generatePathPoints(node, targetNode)
          
          paths.push({
            id: pathId,
            points,
            isActive: false,
            activationTime: 0,
            glowIntensity: 0,
            type: determinePathType(node, targetNode)
          })

          node.connections.push(pathId)
          targetNode.connections.push(pathId)
        })
      })

      // Add some decorative standalone segments
      for (let i = 0; i < 30; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const length = 30 + Math.random() * 80
        const angle = (Math.floor(Math.random() * 8) * 45) * (Math.PI / 180) // 8 directions

        paths.push({
          id: `decoration-${i}`,
          points: [
            { x: startX, y: startY },
            { x: startX + Math.cos(angle) * length, y: startY + Math.sin(angle) * length }
          ],
          isActive: false,
          activationTime: 0,
          glowIntensity: 0,
          type: 'diagonal'
        })
      }

      pathsRef.current = paths
      nodesRef.current = nodes
    }

    const generatePathPoints = (start: CircuitNode, end: CircuitNode): { x: number; y: number }[] => {
      const points = [{ x: start.x, y: start.y }]
      
      // Create L-shaped or stepped paths for more circuit-like appearance
      if (Math.random() > 0.5) {
        // L-shaped path
        if (Math.random() > 0.5) {
          points.push({ x: end.x, y: start.y }) // Horizontal then vertical
        } else {
          points.push({ x: start.x, y: end.y }) // Vertical then horizontal
        }
      } else {
        // Add a middle point for stepped paths
        const midX = start.x + (end.x - start.x) * 0.5 + (Math.random() - 0.5) * 40
        const midY = start.y + (end.y - start.y) * 0.5 + (Math.random() - 0.5) * 40
        points.push({ x: midX, y: start.y })
        points.push({ x: midX, y: midY })
        points.push({ x: end.x, y: midY })
      }
      
      points.push({ x: end.x, y: end.y })
      return points
    }

    const determinePathType = (start: CircuitNode, end: CircuitNode): 'horizontal' | 'vertical' | 'diagonal' | 'corner' => {
      const dx = Math.abs(end.x - start.x)
      const dy = Math.abs(end.y - start.y)
      
      if (dx > dy * 2) return 'horizontal'
      if (dy > dx * 2) return 'vertical'
      if (dx > 20 || dy > 20) return 'corner'
      return 'diagonal'
    }

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    const updateCircuitActivation = () => {
      const currentTime = Date.now()
      const currentMousePos = mousePosRef.current
      
      pathsRef.current.forEach(path => {
        // Check if mouse is near any point in the path
        const isNearPath = path.points.some(point => {
          const distance = Math.sqrt(
            Math.pow(currentMousePos.x - point.x, 2) + Math.pow(currentMousePos.y - point.y, 2)
          )
          return distance < interactionRadius
        })

        if (isNearPath) {
          if (!path.isActive) {
            path.isActive = true
            path.activationTime = currentTime
          }
          path.glowIntensity = Math.min(1, path.glowIntensity + 0.1)
        } else {
          path.glowIntensity = Math.max(0, path.glowIntensity - 0.05)
          if (path.glowIntensity <= 0) {
            path.isActive = false
          }
        }
      })

      // Update nodes based on connected paths
      nodesRef.current.forEach(node => {
        const hasActivePath = node.connections.some(pathId => 
          pathsRef.current.find(p => p.id === pathId)?.isActive
        )
        node.isActive = hasActivePath
      })
    }

    const drawCircuits = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw paths
      pathsRef.current.forEach(path => {
        if (path.points.length < 2) return

        const intensity = path.glowIntensity
        const baseAlpha = 0.2
        const glowAlpha = intensity * 0.8

        // Draw base path
        ctx.strokeStyle = `rgba(59, 130, 246, ${baseAlpha})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(path.points[0].x, path.points[0].y)
        
        for (let i = 1; i < path.points.length; i++) {
          ctx.lineTo(path.points[i].x, path.points[i].y)
        }
        ctx.stroke()

        // Draw glow effect when active
        if (intensity > 0) {
          // Outer glow
          ctx.shadowColor = '#3b82f6'
          ctx.shadowBlur = 15
          ctx.strokeStyle = `rgba(96, 165, 250, ${glowAlpha})`
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.moveTo(path.points[0].x, path.points[0].y)
          
          for (let i = 1; i < path.points.length; i++) {
            ctx.lineTo(path.points[i].x, path.points[i].y)
          }
          ctx.stroke()
          
          // Inner bright line
          ctx.shadowBlur = 5
          ctx.strokeStyle = `rgba(147, 197, 253, ${intensity})`
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(path.points[0].x, path.points[0].y)
          
          for (let i = 1; i < path.points.length; i++) {
            ctx.lineTo(path.points[i].x, path.points[i].y)
          }
          ctx.stroke()
          
          ctx.shadowBlur = 0
        }
      })

      // Draw nodes
      nodesRef.current.forEach(node => {
        if (node.isActive) {
          // Active node with pulsing effect
          const pulseScale = 1 + Math.sin(Date.now() * 0.005) * 0.3
          
          // Outer glow
          ctx.shadowColor = '#3b82f6'
          ctx.shadowBlur = 20
          ctx.beginPath()
          ctx.arc(node.x, node.y, 4 * pulseScale, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(96, 165, 250, 0.8)`
          ctx.fill()
          
          // Inner core
          ctx.shadowBlur = 10
          ctx.beginPath()
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(147, 197, 253, 1)`
          ctx.fill()
          
          ctx.shadowBlur = 0
        } else {
          // Inactive node
          ctx.beginPath()
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(59, 130, 246, 0.3)`
          ctx.fill()
        }
      })
    }

    const animate = () => {
      updateCircuitActivation()
      drawCircuits()
      requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    document.addEventListener('mousemove', handleGlobalMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [gridSize, interactionRadius])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  )
}
