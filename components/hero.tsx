"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, MapPin, Phone, Mail, Linkedin, GitBranch } from 'lucide-react'
import HomeSection from "./home-section"
import Link from "next/link"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <HomeSection id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
    

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            DERIK SEHN
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto max-w-xs"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Software Engineer @ Ford Motor Company
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Delivering enterprise-grade solutions with Angular, Spring Boot, and modern cloud infrastructure. 
          Passionate about creating innovative web experiences that push the boundaries of what's possible.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Capão da Canoa, RS, Brasil
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            +55 51 999300707
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            derikbosing@gmail.com
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#experience" passHref>
            <Button size="lg" className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <div className="flex gap-3">
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://www.linkedin.com/in/derik-sehn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://github.com/DerikSehn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <GitBranch className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </HomeSection>
  )
}

