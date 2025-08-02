"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface EducationStatsProps {
  stats: Array<{
    icon: LucideIcon
    value: string
    label: string
    description: string
    percentage: number
    color: string
  }>
  delay?: number
}

export function EducationStats({ stats, delay = 0 }: EducationStatsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        const circumference = 2 * Math.PI * 40 // radius = 40
        const strokeDasharray = circumference
        const strokeDashoffset = circumference - (stat.percentage / 100) * circumference

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
            transition={{ 
              duration: 0.5, 
              delay: delay + (index * 0.1),
              type: "spring",
              stiffness: 200
            }}
            viewport={{ once: true }}
            className="group relative p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300"
          >
            {/* Circular Progress */}
            <div className="relative w-20 h-20 mx-auto mb-4">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted/20"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={stat.color}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={strokeDasharray}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  transition={{ 
                    duration: 1.5, 
                    delay: delay + (index * 0.1) + 0.5,
                    ease: "easeOut" 
                  }}
                  className="drop-shadow-sm"
                />
              </svg>
              
              {/* Icon in Center */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: delay + (index * 0.1) + 0.3,
                  type: "spring"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <IconComponent 
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" 
                  style={{ color: stat.color }}
                />
              </motion.div>
            </div>

            {/* Value */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: delay + (index * 0.1) + 0.7 }}
              className="text-center mb-2"
            >
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                {stat.value}
              </div>
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: delay + (index * 0.1) + 0.8 }}
              className="text-center mb-2"
            >
              <div className="text-sm font-medium text-foreground/80">
                {stat.label}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: delay + (index * 0.1) + 0.9 }}
              className="text-center"
            >
              <div className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </motion.div>

            {/* Hover Glow */}
            <div 
              className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm"
              style={{ 
                background: `linear-gradient(135deg, ${stat.color}40, ${stat.color}20)` 
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
