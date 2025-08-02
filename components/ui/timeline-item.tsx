"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  readonly title: string
  readonly company: string
  readonly period: string
  readonly description: string
  readonly achievements: readonly string[]
  readonly isActive?: boolean
  readonly delay?: number
  readonly children?: React.ReactNode
}

export function TimelineItem({
  title,
  company, 
  period,
  description,
  achievements,
  isActive = false,
  delay = 0,
  children
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Circuit animation based on scroll progress
  const circuitProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const circuitOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5])
  const glowIntensity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: memoizedDelay, // Reduced delay for more fluidity
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-20px" }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Enhanced Timeline line with circuit effect */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-border/30 via-border/20 to-transparent" />
      
      {/* Animated circuit line */}
      <motion.div 
        className="absolute left-0 top-0 w-px bg-gradient-to-b from-primary via-blue-400 to-purple-500"
        style={{ 
          height: useTransform(circuitProgress, [0, 1], ["0%", "100%"]),
          opacity: circuitOpacity,
          filter: useTransform(glowIntensity, [0, 1], ["blur(0px)", "blur(1px)"]),
          boxShadow: useTransform(glowIntensity, [0, 1], [
            "0 0 0px rgba(59, 130, 246, 0)",
            "0 0 8px rgba(59, 130, 246, 0.6)"
          ])
        }}
      />

      {/* Enhanced Timeline dot with circuit effect */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 360 }}
        transition={{ 
          duration: 0.5, 
          delay: delay * 0.5 + 0.1,
          type: "spring",
          stiffness: 200
        }}
        className={cn(
          "absolute left-0 top-2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10",
          "border-4 border-background shadow-lg",
          isActive 
            ? "bg-primary shadow-primary/20" 
            : "bg-muted-foreground shadow-muted/20"
        )}
        style={{
          boxShadow: useTransform(glowIntensity, [0, 1], [
            "0 0 0px rgba(59, 130, 246, 0)",
            "0 0 12px rgba(59, 130, 246, 0.8)"
          ])
        }}
      >
        {/* Pulsing effect for active items */}
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-primary/20"
          />
        )}
        
        {/* Circuit sparks */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: useTransform(glowIntensity, [0, 1], [
              "transparent",
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)"
            ])
          }}
        />
      </motion.div>

      {/* Enhanced Content card */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ 
          duration: 0.4, 
          delay: delay * 0.5 + 0.15,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
        className={cn(
          "relative ml-4 p-6 rounded-xl border border-border/50",
          "bg-background/90 backdrop-blur-sm shadow-lg hover:shadow-xl",
          "transition-all duration-200 group cursor-pointer overflow-hidden",
          isActive && "ring-2 ring-primary/20 border-primary/30"
        )}
        style={{
          boxShadow: useTransform(glowIntensity, [0, 1], [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            "0 8px 25px -3px rgba(59, 130, 246, 0.1)"
          ])
        }}
      >
        {/* Circuit pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            background: `
              linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
              linear-gradient(0deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)
            `,
            backgroundSize: "20px 20px",
            opacity: useTransform(circuitProgress, [0, 1], [0, 0.1])
          }}
        />

        {/* Gradient overlay */}
        <div className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-200",
          isActive ? "from-primary/20 to-secondary/20" : "from-muted/20 to-muted/10"
        )} />
        
        {/* Header */}
        <div className="relative z-10 mb-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay * 0.5 + 0.2 }}
            className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200"
          >
            {title}
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay * 0.5 + 0.25 }}
            className="flex flex-wrap items-center gap-2 text-sm"
          >
            <span className="font-medium text-primary">{company}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{period}</span>
            {isActive && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                Current
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay * 0.5 + 0.3 }}
          className="relative z-10 text-muted-foreground mb-4 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: delay * 0.5 + 0.35 }}
          className="relative z-10 space-y-2"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: delay * 0.5 + 0.4 + (index * 0.05) 
              }}
              className="flex items-start gap-3 text-sm"
            >
              <motion.div 
                className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 4px rgba(59, 130, 246, 0.6)",
                    "0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <span className="text-muted-foreground leading-relaxed">{achievement}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay * 0.5 + 0.5 }}
            className="relative z-10 mt-4 pt-4 border-t border-border/30"
          >
            {children}
          </motion.div>
        )}

        {/* Enhanced hover glow effect */}
        <motion.div 
          className={cn(
            "absolute -inset-px rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10",
            isActive ? "from-primary to-secondary" : "from-muted to-muted/50"
          )}
          style={{
            filter: "blur(2px)"
          }}
        />
      </motion.div>
    </motion.div>
  )
}
