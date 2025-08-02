"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TechStackProps {
  technologies: Array<{
    name: string
    category: "frontend" | "backend" | "cloud" | "database" | "tool"
  }>
  title?: string
  delay?: number
}

const categoryColors = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500", 
  cloud: "from-orange-500 to-red-500",
  database: "from-purple-500 to-violet-500",
  tool: "from-gray-500 to-slate-500"
}

const categoryIcons = {
  frontend: "🎨",
  backend: "⚙️",
  cloud: "☁️", 
  database: "🗃️",
  tool: "🔧"
}

export function TechStack({ technologies, title = "Tech Stack", delay = 0 }: TechStackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className="text-sm font-medium text-foreground/80 flex items-center gap-2"
      >
        <span className="text-primary">⚡</span>
        {title}
      </motion.h4>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              transition: { type: "spring", stiffness: 400 }
            }}
            transition={{ 
              duration: 0.3, 
              delay: delay + 0.3 + (index * 0.05),
              type: "spring"
            }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                "bg-background/60 backdrop-blur-sm border border-border/50",
                "hover:border-primary/30 transition-all duration-200 cursor-pointer"
              )}
            >
              <span className="text-xs group-hover:scale-110 transition-transform duration-200">
                {categoryIcons[tech.category]}
              </span>
              <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                {tech.name}
              </span>
            </div>
            
            {/* Hover glow */}
            <div className={cn(
              "absolute -inset-px rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-sm",
              categoryColors[tech.category]
            )} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
