"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import HomeSection from "./home-section"

export function About() {
  return (
    <HomeSection id="about">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <Card>
          <CardContent className="p-6">
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Software engineer with 3 years of experience in the area. Proficient in NextJS, ReactJS, JavaScript, TypeScript, NodeJS, APIs, Microservices and Cloud technologies. I stand out for my commitment to excellence, proven by my performance during my career so far. I actively participated in the collaborative development of Unimed's hospital management system (JUNI III). I am recognized for my velocity, proactivity, cordiality, ease of communication, teamwork and focus on results.
            </motion.p>
          </CardContent>
        </Card>
    </HomeSection>
  )
}

