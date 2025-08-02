"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate" | "wave"
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  animation = "slideUp" 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const animations = {
    slideUp: {
      y: useTransform(smoothProgress, [0, 1], [100, -100]),
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    },
    slideLeft: {
      x: useTransform(smoothProgress, [0, 1], [100, -100]),
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    },
    slideRight: {
      x: useTransform(smoothProgress, [0, 1], [-100, 100]),
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    },
    scale: {
      scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]),
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    },
    rotate: {
      rotate: useTransform(smoothProgress, [0, 1], [0, 360]),
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    },
    wave: {
      y: useTransform(smoothProgress, [0, 0.5, 1], [0, -50, 0]),
      rotate: useTransform(smoothProgress, [0, 0.5, 1], [0, 5, 0]),
      opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    }
  }

  const currentAnimation = animations[animation]

  return (
    <motion.div
      ref={ref}
      className={className}
      style={currentAnimation}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxText({ 
  children, 
  baseVelocity = 100 
}: { 
  children: string
  baseVelocity?: number 
}) {
  const baseX = useRef(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useTransform(scrollY, [0, 1000], [0, baseVelocity])
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(velocityFactor, (latest) => {
    let moveBy = latest * -1
    if (baseX.current < -100) {
      baseX.current = 0
    }
    baseX.current += moveBy
    return baseX.current
  })

  return (
    <div className="parallax overflow-hidden whitespace-nowrap flex">
      <motion.div 
        className="text-6xl md:text-8xl font-bold text-primary/10 uppercase"
        style={{ x }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="mr-8">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function MagneticButton({ 
  children, 
  className = "",
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = ref.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button 
      ref={ref} 
      className={`transition-transform cursor-hover ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SplitText({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: string
  className?: string
  delay?: number 
}) {
  const words = children.split(' ')

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.215, 0.61, 0.355, 1]
          }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
