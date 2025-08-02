"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Globe,
  Calendar,
  Code2
} from 'lucide-react'
import ContactForm from "./contact/contact-form"
import HomeSection from "./home-section"
import { SectionHeading } from "./ui/section-heading"
import { FloatingCard } from "./ui/floating-card"
import { useRef } from "react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "derikbosing@gmail.com",
    href: "mailto:derikbosing@gmail.com",
    description: "Best for detailed inquiries",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+55 51 999300707",
    href: "tel:+5551999300707",
    description: "Quick calls and urgent matters",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Professional Network",
    href: "https://www.linkedin.com/in/derik-sehn/",
    description: "Let's connect professionally",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "Code Repository",
    href: "https://github.com/DerikSehn",
    description: "Check out my projects",
    color: "from-gray-700 to-gray-900"
  }
]

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Porto Alegre, RS - Brazil",
    description: "UTC-3 Timezone"
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 9AM - 6PM",
    description: "Response within 24h"
  },
  {
    icon: Globe,
    label: "Languages",
    value: "Portuguese, English",
    description: "Fluent communication"
  },
  {
    icon: Calendar,
    label: "Response Time",
    value: "Within 24 hours",
    description: "Usually much faster"
  }
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const circuitProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const glowIntensity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])

  return (
    <div ref={ref}>
      <HomeSection id="contact">
        <div className="max-w-6xl mx-auto relative">
        {/* Circuit Background Effect */}
        <motion.div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)
            `,
            filter: useTransform(glowIntensity, [0, 1], ["blur(0px)", "blur(2px)"]),
            opacity: useTransform(circuitProgress, [0, 1], [0, 0.1])
          }}
        />

        {/* Header */}
        <SectionHeading subtitle="Let's connect and bring your ideas to life">
          Get In Touch
        </SectionHeading>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <FloatingCard delay={0.3}>
              <div className="relative">
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Send className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold">Send me a message</h3>
                    <p className="text-sm text-muted-foreground">
                      I'll get back to you as soon as possible
                    </p>
                  </div>
                </div>

                {/* Enhanced Contact Form */}
                <ContactForm />

                {/* Circuit decorations */}
                <motion.div
                  className="absolute -right-4 top-1/2 w-1 h-20 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-full"
                  style={{
                    opacity: useTransform(circuitProgress, [0, 1], [0, 0.6]),
                    height: useTransform(circuitProgress, [0, 1], ["0px", "80px"])
                  }}
                />
              </div>
            </FloatingCard>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FloatingCard delay={0.5}>
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold">Contact Methods</h3>
                </div>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        x: 5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-background/50 hover:bg-background/80 transition-all duration-200 group"
                    >
                      <motion.div 
                        className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white flex-shrink-0`}
                        whileHover={{ rotate: 10 }}
                      >
                        <method.icon className="w-4 h-4" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {method.label}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {method.value}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {method.description}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-primary"
                      >
                        →
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </FloatingCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FloatingCard delay={0.7}>
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Globe className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold">Information</h3>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                    >
                      <motion.div 
                        className="p-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 text-white flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <info.icon className="w-4 h-4" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{info.label}</p>
                        <p className="text-xs text-muted-foreground">{info.value}</p>
                        <p className="text-xs text-muted-foreground/70">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FloatingCard>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingCard delay={0.9}>
                <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-12 mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  >
                    <Send className="w-6 h-6" />
                  </motion.div>
                  <h4 className="font-semibold mb-2">Ready to collaborate?</h4>
                  <p className="text-sm text-muted-foreground">
                    Let's discuss your project and bring your ideas to life!
                  </p>
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </div>
    </HomeSection>
    </div>
  )
}

