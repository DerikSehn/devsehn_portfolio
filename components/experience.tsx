"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const experiences = [
  {
    title: "Autonomous Front-end Developer",
    company: "DevSehn",
    period: "03/2024 - now",
    description: "As a freelance developer, I work on developing dashboards, Landing Pages with Native CMS, complete, personalized and interactive websites to promote the growth and management of various companies, using technologies such as Next.js, Prisma and Tailwind CSS.",
    achievements: [
      "Created an open source web application called devsehn_saas, with features such as user authentication, dynamic forms and E-commerce.",
      "Developed a comprehensive dashboard for the management of the Unimed Vale do Caí Employees Association.",
      "Participated in an interview challenge at VersoTech, creating a Pokedex in Next.js with Redux Toolkit, Tailwind CSS and GSAP.",
      "Developed the administrative website for gastronomic events for Chef Daniela Bosing."
    ]
  },
  {
    title: "Junior Front-end Developer",
    company: "Unimed, Vale do Caí",
    period: "08/2022 - 03/2024",
    description: "Worked as a fullstack programmer in Java 8 (backend) and Javascript (React.js, frontend) for the hospital management webApps included in JUNI III.",
    achievements: [
      "Developed Unimed's preventive maintenance system.",
      "Created UniChat, a communication platform for more than 700 hospital employees and 150 practices."
    ]
  },
  {
    title: "Graphic Design Trainee",
    company: "Sra K.",
    period: "08/2021 - 11/2021",
    description: "Produced high quality designs using Photoshop and CorelDRAW for Mrs. K Graphics and Photography.",
    achievements: [
      "Gained practical experience in graphic design principles and techniques.",
      "Contributed to the team's creative and project success."
    ]
  },
  {
    title: "IT Trainee and Project Leader",
    company: "IFSUL, Venâncio Aires",
    period: "07/2021 - 08/2021",
    description: "Performed formatting in computer labs and carried out preventive maintenance. Dealt with Network Architecture, Active Directory, G4Linux, among other tools.",
    achievements: [
      "Led research projects and presented them at national and international technology exhibitions.",
      "Obtained medals (2nd place in robotics championship 2021)."
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

