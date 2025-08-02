"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  hover?: boolean
}

export function FloatingCard({ 
  children, 
  className, 
  delay = 0, 
  direction = "up",
  hover = true 
}: FloatingCardProps) {
  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  }

  const hoverVariants = hover ? {
    scale: 1.02,
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  } : {}

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      whileHover={hoverVariants}
      transition={{ 
        duration: 0.4, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "relative rounded-xl backdrop-blur-sm border border-border/50 bg-background/80 p-6 shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  )
}
