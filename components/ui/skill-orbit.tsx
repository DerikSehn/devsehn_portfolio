"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface OrbitingElementProps {
  icon: LucideIcon
  label: string
  radius: number
  duration: number
  delay?: number
  className?: string
}

export function OrbitingElement({ 
  icon: Icon, 
  label, 
  radius, 
  duration, 
  delay = 0,
  className 
}: OrbitingElementProps) {
  return (
    <motion.div
      className="absolute"
      style={{
        transformOrigin: `${radius}px ${radius}px`
      }}
      animate={{
        rotate: 360
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay
      }}
    >
      <motion.div
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full",
          "bg-background/80 backdrop-blur-sm border border-border/50",
          "shadow-lg hover:shadow-xl transition-all duration-300",
          "hover:scale-110 hover:border-primary/50",
          className
        )}
        style={{
          transform: `translate(${radius}px, 0) rotate(-360deg)`
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(var(--primary), 0.1)"
        }}
        title={label}
      >
        <Icon className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.div>
  )
}

interface SkillOrbitProps {
  centerIcon: LucideIcon
  centerLabel: string
  orbitingSkills: Array<{
    icon: LucideIcon
    label: string
    level: number // 1-3 for different orbit levels
  }>
  className?: string
}

export function SkillOrbit({ 
  centerIcon: CenterIcon, 
  centerLabel, 
  orbitingSkills,
  className 
}: SkillOrbitProps) {
    // Orbital levels with radii that fit within container bounds
  // Container is 320px (w-80), so center is at 160px
  // Element width is 48px (w-12), so we need radius + 24px <= 160px
  // Maximum safe radius is 136px, so we use [50, 90, 130] for better containment
  const orbitLevels = [50, 90, 130];

  return (
    <div className={cn("relative w-80 h-80 mx-auto overflow-hidden", className)}>
      {/* Center element */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl">
          <CenterIcon className="w-8 h-8 text-white mb-1" />
          <span className="text-xs text-white font-medium">{centerLabel}</span>
        </div>
      </motion.div>

      {/* Orbiting elements */}
      {orbitingSkills.map((skill, index) => {
        const radius = orbitLevels[skill.level - 1] || orbitLevels[0]
        const duration = 20 + (skill.level * 5) // Different speeds for each orbit
        const delay = index * 2 // Stagger the start times
        
        return (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <OrbitingElement
              icon={skill.icon}
              label={skill.label}
              radius={radius}
              duration={duration}
              delay={delay}
            />
          </motion.div>
        )
      })}

      {/* Orbit rings */}
      {orbitLevels.map((radius, index) => (
        <motion.div
          key={radius}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-primary/20 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2
          }}
        />
      ))}
    </div>
  )
}
