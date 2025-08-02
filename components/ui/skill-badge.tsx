"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  children: React.ReactNode
  level?: "beginner" | "intermediate" | "advanced" | "expert"
  category?: "frontend" | "backend" | "cloud" | "database" | "mobile" | "design" | "soft"
  className?: string
  delay?: number
}

const levelColors = {
  beginner: "from-green-400 to-green-600",
  intermediate: "from-blue-400 to-blue-600", 
  advanced: "from-purple-400 to-purple-600",
  expert: "from-amber-400 to-amber-600"
}

const categoryIcons = {
  frontend: "🎨",
  backend: "⚙️", 
  cloud: "☁️",
  database: "🗃️",
  mobile: "📱",
  design: "✨",
  soft: "🧠"
}

export function SkillBadge({ 
  children, 
  level = "intermediate", 
  category = "frontend",
  className,
  delay = 0 
}: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.1, 
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 200
      }}
      viewport={{ once: true, margin: "-20px" }}
      className={cn(
        "group relative inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer",
        "bg-background/80 backdrop-blur-sm border border-border/50",
        "hover:border-primary/50 transition-all duration-300",
        className
      )}
    >
      {/* Gradient background */}
      <div className={cn(
        "absolute inset-0 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300",
        levelColors[level]
      )} />
      
      {/* Category icon */}
      <span className="text-sm group-hover:scale-110 transition-transform duration-200">
        {categoryIcons[category]}
      </span>
      
      {/* Skill name */}
      <span className="relative z-10 text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
        {children}
      </span>
      
      {/* Level indicator */}
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: delay + (i * 0.1), duration: 0.3 }}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-colors duration-200",
              i < Object.keys(levelColors).indexOf(level) + 1
                ? "bg-primary"
                : "bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
      
      {/* Hover glow */}
      <div className={cn(
        "absolute -inset-px rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm -z-10",
        levelColors[level]
      )} />
    </motion.div>
  )
}
