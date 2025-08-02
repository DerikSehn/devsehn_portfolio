"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ExperienceStatProps {
  icon: LucideIcon
  value: string
  label: string
  description?: string
  color?: "primary" | "secondary" | "success" | "warning"
  delay?: number
}

const colorVariants = {
  primary: {
    icon: "text-primary",
    bg: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    glow: "from-primary/30 to-primary/10"
  },
  secondary: {
    icon: "text-secondary",
    bg: "from-secondary/10 to-secondary/5", 
    border: "border-secondary/20",
    glow: "from-secondary/30 to-secondary/10"
  },
  success: {
    icon: "text-green-500",
    bg: "from-green-500/10 to-green-500/5",
    border: "border-green-500/20", 
    glow: "from-green-500/30 to-green-500/10"
  },
  warning: {
    icon: "text-amber-500",
    bg: "from-amber-500/10 to-amber-500/5",
    border: "border-amber-500/20",
    glow: "from-amber-500/30 to-amber-500/10"
  }
}

export function ExperienceStat({
  icon: Icon,
  value,
  label,
  description,
  color = "primary",
  delay = 0
}: ExperienceStatProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
      className={cn(
        "relative p-6 rounded-xl bg-gradient-to-br border backdrop-blur-sm",
        "hover:shadow-lg transition-all duration-300 group cursor-pointer",
        colors.bg,
        colors.border
      )}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.2, type: "spring" }}
        className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4",
          "bg-background/50 group-hover:bg-background/80 transition-colors duration-200"
        )}
      >
        <Icon className={cn("w-6 h-6", colors.icon)} />
      </motion.div>

      {/* Value */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
        className="mb-2"
      >
        <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
          {value}
        </div>
      </motion.div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.4 }}
        className="mb-2"
      >
        <div className="text-sm font-medium text-foreground/80">
          {label}
        </div>
      </motion.div>

      {/* Description */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
        >
          <div className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </div>
        </motion.div>
      )}

      {/* Hover glow */}
      <div className={cn(
        "absolute -inset-px rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 blur-sm",
        colors.glow
      )} />
    </motion.div>
  )
}
