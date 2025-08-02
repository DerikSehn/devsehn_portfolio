"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  label: string
  percentage: number
  color?: "primary" | "secondary" | "success" | "warning" | "danger"
  showPercentage?: boolean
  animated?: boolean
  delay?: number
  className?: string
}

const colorVariants = {
  primary: "from-primary to-primary/80",
  secondary: "from-secondary to-secondary/80", 
  success: "from-green-500 to-green-400",
  warning: "from-yellow-500 to-yellow-400",
  danger: "from-red-500 to-red-400"
}

export function ProgressBar({ 
  label, 
  percentage, 
  color = "primary",
  showPercentage = true,
  animated = true,
  delay = 0,
  className 
}: ProgressBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn("space-y-2", className)}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showPercentage && (
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            className="text-sm text-muted-foreground"
          >
            {percentage}%
          </motion.span>
        )}
      </div>
      
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        {/* Background glow */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-20 rounded-full",
          colorVariants[color]
        )} />
        
        {/* Progress fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ 
            duration: animated ? 1.5 : 0, 
            delay: delay + 0.2,
            ease: "easeOut"
          }}
          className={cn(
            "h-full bg-gradient-to-r rounded-full relative overflow-hidden",
            colorVariants[color]
          )}
        >
          {/* Shimmer effect */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 1 }}
          className={cn(
            "absolute top-0 h-full bg-gradient-to-r rounded-full blur-sm opacity-50 -z-10",
            colorVariants[color]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </motion.div>
  )
}
