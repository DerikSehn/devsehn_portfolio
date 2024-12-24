"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { useState } from "react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    let errors = {}
    if (!formState.name) errors.name = "Name is required"
    if (!formState.email) errors.email = "Email is required"
    if (!/\S+@\S+\.\S+/.test(formState.email)) errors.email = "Email is invalid"
    if (!formState.message) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                {submitSuccess && (
                  <p className="text-green-500 mt-4">Message sent successfully!</p>
                )}
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
      </div>
    </section>
  )
}

