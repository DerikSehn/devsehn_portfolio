"use client"

import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { MapPin, Briefcase, GraduationCap, User, Globe, Award, Target } from "lucide-react"
import HomeSection from "./home-section"
import { FloatingCard } from "./ui/floating-card"
import { SectionHeading } from "./ui/section-heading"

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

// Item animation variants
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      mass: 1
    }
  }
}

export function About() {
  return (
    <HomeSection id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeading subtitle="Software Engineer passionate about creating innovative solutions and pushing technological boundaries">
          About Me
        </SectionHeading>

        {/* Main Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main Description - Takes 2 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <FloatingCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Professional Journey</h3>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Software Engineer with a <strong className="text-foreground">strong foundation in Java and web development since 2018</strong>. 
                  Specializing in delivering enterprise-grade solutions using Next.js, Angular, and Spring Boot 
                  on modern cloud infrastructure (GCP, Kubernetes) with automated CI/CD.
                </p>
                
                <p className="text-lg">
                  Contributed to <strong className="text-foreground">strategic systems at global companies like Ford and Unimed</strong>, delivering 
                  high-impact solutions for international logistics and hospital management. Passionate about 
                  creating innovative web experiences that push the boundaries of what's possible.
                </p>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <Globe className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-foreground">Global Impact</p>
                      <p className="text-sm">International logistics & healthcare</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <Target className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-foreground">Innovation Focus</p>
                      <p className="text-sm">Cutting-edge web technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* Quick Info Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Current Role */}
            <FloatingCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Current Role</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Software Engineer</p>
                <p className="text-muted-foreground">Ford Motor Company</p>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                  Feb 2025 - Present
                </Badge>
              </div>
            </FloatingCard>

            {/* Location */}
            <FloatingCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground">Capão da Canoa, Rio Grande do Sul, Brasil</p>
            </FloatingCard>

            {/* Languages */}
            <FloatingCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">English</span>
                  <Badge variant="secondary">Bilingual</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Portuguese</span>
                  <Badge variant="secondary">Native</Badge>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold mb-8 flex items-center gap-3"
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            Education Background
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <FloatingCard className="h-full">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white mt-1">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Bachelor's degree, UniRitter</p>
                      <Badge variant="outline" className="mt-2">2023 – 2025</Badge>
                    </div>
                  </div>
                  
                  <div className="ml-9 space-y-2">
                    <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    <p className="text-sm text-muted-foreground">
                      Focusing on software engineering, algorithms, and modern development practices.
                    </p>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FloatingCard className="h-full">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white mt-1">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">Information Technology</h4>
                      <p className="text-sm text-muted-foreground">Technical High School, IFSUL</p>
                      <Badge variant="outline" className="mt-2">2018 - 2022</Badge>
                    </div>
                  </div>
                  
                  <div className="ml-9 space-y-2">
                    <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                    <p className="text-sm text-muted-foreground">
                      Integrated technical education with specialized IT training and hands-on experience.
                    </p>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </HomeSection>
  )
}

