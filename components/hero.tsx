"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from 'lucide-react'
import { AnimatedHero } from "./AnimatedHero"
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
     
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dérik Bosing Sehn
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Engineer | NextJS Specialist | Cloud Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

