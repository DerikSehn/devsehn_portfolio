"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card"
 
const education = [
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "UniRitter",
    location: "Brasil",
    period: "2023 - 2025"
  },
  {
    degree: "Technician integrated into high school, Information Technology",
    institution: "Instituto Federal Sul Rio-Grandense",
    location: "Brasil",
    period: "2018 - 2022"
  }
]

const courses = [
  "Rocketseat, React Advanced Concepts, 2023",
  "Rocketseat, NLW Java Journey, 2023",
  "Next.js ORG, Best Practices Course, 2024",
  "EF SET, C1 Advanced Certificate, 2024",
  "UniRitter, USABILITY, WEB DEVELOPMENT, MOBILE AND GAMES, 2024",
  "UniRitter, PROGRAMAÇÃO DE SOLUÇÕES COMPUTACIONAIS, 2024"
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.institution}, {edu.location}</p>
                </CardHeader>
                <CardContent>
                  <p>{edu.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.h3 
          className="text-2xl font-bold mt-12 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Courses and Certifications
        </motion.h3>
        <ul className="list-disc pl-5 space-y-2">
          {courses.map((course, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {course}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

