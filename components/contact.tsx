"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import ContactForm from "./contact/contact-form"
import HomeSection from "./home-section"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function Contact() {
  
  
  return (
    <HomeSection id="contact">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>derikbosing@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+55 51 999300707</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-5 w-5" />
                  <a href="https://www.linkedin.com/in/derik-sehn/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-5 w-5" />
                  <a href="https://github.com/DerikSehn" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
    </HomeSection>
  )
}

