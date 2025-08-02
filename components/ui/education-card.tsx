"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  location: string
  period: string
  status: "completed" | "in-progress" | "upcoming"
  icon: LucideIcon
  description?: string
  highlights?: string[]
  grade?: string
  delay?: number
  className?: string
}

const statusConfig = {
  completed: {
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/20",
    textColor: "text-green-600",
    label: "Completed",
    icon: "✓"
  },
  "in-progress": {
    color: "from-blue-500 to-purple-600", 
    bgColor: "from-blue-500/10 to-purple-500/5",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-600",
    label: "In Progress",
    icon: "⏳"
  },
  upcoming: {
    color: "from-amber-500 to-orange-600",
    bgColor: "from-amber-500/10 to-orange-500/5", 
    borderColor: "border-amber-500/20",
    textColor: "text-amber-600",
    label: "Upcoming",
    icon: "🎯"
  }
}

export function EducationCard({
  degree,
  institution,
  location,
  period,
  status,
  icon: Icon,
  description,
  highlights = [],
  grade,
  delay = 0,
  className
}: EducationCardProps) {
  const config = statusConfig[status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-gradient-to-br backdrop-blur-sm",
        "shadow-lg hover:shadow-2xl transition-all duration-500",
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
            "bg-background/80 backdrop-blur-sm border",
            config.borderColor,
            config.textColor
          )}
        >
          <span>{config.icon}</span>
          <span>{config.label}</span>
        </motion.div>
      </div>

      <div className="relative z-10 p-6">
        {/* Institution Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
          className={cn(
            "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4",
            "bg-gradient-to-br shadow-lg group-hover:shadow-xl transition-shadow duration-300",
            config.color
          )}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Degree */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.4 }}
          className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200"
        >
          {degree}
        </motion.h3>

        {/* Institution & Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
          className="mb-3"
        >
          <div className="font-medium text-foreground/80">{institution}</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>📍 {location}</span>
            <span>•</span>
            <span>📅 {period}</span>
            {grade && (
              <>
                <span>•</span>
                <span className={cn("font-medium", config.textColor)}>🎓 {grade}</span>
              </>
            )}
          </div>
        </motion.div>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.6 }}
            className="text-sm text-muted-foreground mb-4 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.7 }}
            className="space-y-2"
          >
            <h4 className="text-sm font-medium text-foreground/80 flex items-center gap-2">
              <span className="text-primary">✨</span>{" "}
              Key Highlights
            </h4>
            <div className="space-y-1">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: delay + 0.8 + (index * 0.1) }}
                  className="flex items-start gap-2 text-xs"
                >
                  <div className="mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Progress Bar for In-Progress */}
        {status === "in-progress" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.9 }}
            className="mt-4 pt-4 border-t border-border/30"
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>Progress</span>
              <span>~75%</span>
            </div>
            <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5, delay: delay + 1, ease: "easeOut" }}
                className={cn("h-full bg-gradient-to-r rounded-full", config.color)}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className={cn(
        "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm",
        config.color
      )} />
    </motion.div>
  )
}
