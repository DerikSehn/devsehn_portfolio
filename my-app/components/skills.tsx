"use client"

import { motion } from "framer-motion"
import { Badge } from "./ui/badge"

const technicalSkills = [
  "NextJS", "TypeScript", "JavaScript", "Java", "React", "PostgreSQL", "MySQL", "Oracle", "SQL Server", "Git", "TailwindCSS", "BootStrap", "JSON", "Axios", "Microservices", "AWS", "Amazon EC2", "ECS", "CloudFront", "S3 bucket", "Scrum", "Bash", "Jest", "Figma", "Docker", "WebFlow", "UI/UX", "GSAP"
]

const softSkills = [
  "Committed", "Motivated", "Expectation Management", "Workplace Resilience", "Emotional Intelligence", "Adaptability", "Flexibility", "Brainstorming", "Innovation", "Creativity", "Intellectual Curiosity", "Time Management", "Autonomy", "Priority Management", "Focus", "Assertive Communication", "Cooperation"
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary">{skill}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge>{skill}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

