"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Cloud, 
  Database, 
  Palette, 
  Settings, 
  Brain,
  Award,
  Star,
  Zap,
  Layers,
  Monitor,
  Server
} from "lucide-react"
import HomeSection from "./home-section"
import { FloatingCard } from "./ui/floating-card"
import { SkillBadge } from "./ui/skill-badge"
import { SectionHeading } from "./ui/section-heading"
import { SkillOrbit } from "./ui/skill-orbit"
import { ProgressBar } from "./ui/progress-bar"

const technicalSkillCategories = {
  "Frontend Development": {
    icon: Monitor,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "React", level: "expert", category: "frontend" },
      { name: "Next.js", level: "expert", category: "frontend" },
      { name: "Angular", level: "expert", category: "frontend" },
      { name: "TypeScript", level: "expert", category: "frontend" },
      { name: "Tailwind CSS", level: "advanced", category: "design" },
      { name: "Framer Motion", level: "advanced", category: "design" },
      { name: "GSAP", level: "advanced", category: "design" }
    ]
  },
  "Backend Development": {
    icon: Server,
    color: "from-green-500 to-blue-600",
    skills: [
      { name: "Java", level: "expert", category: "backend" },
      { name: "Spring Boot", level: "expert", category: "backend" },
      { name: "Node.js", level: "advanced", category: "backend" },
      { name: "PostgreSQL", level: "advanced", category: "database" },
      { name: "Prisma", level: "intermediate", category: "database" },
      { name: "REST APIs", level: "expert", category: "backend" },
      { name: "Microservices", level: "advanced", category: "backend" }
    ]
  },
  "Cloud & DevOps": {
    icon: Cloud,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "GCP", level: "advanced", category: "cloud" },
      { name: "AWS", level: "intermediate", category: "cloud" },
      { name: "Kubernetes", level: "advanced", category: "cloud" },
      { name: "Docker", level: "expert", category: "cloud" },
      { name: "CI/CD", level: "advanced", category: "cloud" },
      { name: "Tekton", level: "intermediate", category: "cloud" }
    ]
  }
}

// Skills for orbiting animation
const orbitingSkills = [
  { icon: Code2, label: "React", level: 1 },
  { icon: Database, label: "PostgreSQL", level: 2 },
  { icon: Cloud, label: "GCP", level: 3 },
  { icon: Settings, label: "Spring Boot", level: 1 },
  { icon: Palette, label: "Design", level: 2 },
  { icon: Zap, label: "TypeScript", level: 3 },
  { icon: Layers, label: "Next.js", level: 1 },
  { icon: Brain, label: "Angular", level: 2 }
]

const skillLevels = {
  "Frontend Frameworks": 95,
  "Backend Development": 90,
  "Cloud Platforms": 85,
  "Database Design": 88,
  "DevOps & CI/CD": 82,
  "UI/UX Design": 78
}

const softSkills = [
  { name: "Problem Solving", category: "soft" },
  { name: "Fast Learning", category: "soft" },
  { name: "Teamwork", category: "soft" },
  { name: "Leadership", category: "soft" },
  { name: "Communication", category: "soft" },
  { name: "Adaptability", category: "soft" }
]

const certifications = [
  { name: "Ford: Certified Scrum Developer", icon: "🎓", year: "2024" },
  { name: "AWS Certified Cloud Practitioner", icon: "☁️", year: "2024" },
  { name: "Angular.js Mastery", icon: "🅰️", year: "2023" },
  { name: "Spring Boot Mastery", icon: "🍃", year: "2023" },
  { name: "EF SET C1 Advanced", icon: "🌍", year: "2023" }
]

export function Skills() {
  return (
    <HomeSection id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeading subtitle="A comprehensive overview of my technical abilities and professional expertise">
          Skills & Expertise
        </SectionHeading>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Technical Skills Categories */}
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(technicalSkillCategories).map(([category, data], categoryIndex) => {
              const IconComponent = data.icon
              return (
                <FloatingCard 
                  key={category}
                  delay={categoryIndex * 0.2}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${data.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {data.skills.map((skill, index) => (
                      <SkillBadge
                        key={skill.name}
                        level={skill.level as any}
                        category={skill.category as any}
                        delay={categoryIndex * 0.2 + index * 0.1}
                      >
                        {skill.name}
                      </SkillBadge>
                    ))}
                  </div>
                </FloatingCard>
              )
            })}
          </div>

          {/* Skill Orbit Visualization */}
          <div className="lg:col-span-1">
            <FloatingCard delay={0.4} className="h-fit p-6">
              <h3 className="text-xl font-semibold text-center mb-8">Tech Stack</h3>
              <SkillOrbit
                centerIcon={Code2}
                centerLabel="Full Stack"
                orbitingSkills={orbitingSkills}
              />
            </FloatingCard>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skill Proficiency Levels */}
          <FloatingCard delay={0.6}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Proficiency Levels</h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(skillLevels).map(([skill, percentage], index) => {
                let color: "primary" | "success" | "warning" = "primary"
                if (percentage >= 90) color = "success"
                else if (percentage < 80) color = "warning"
                
                return (
                  <ProgressBar
                    key={skill}
                    label={skill}
                    percentage={percentage}
                    delay={0.6 + index * 0.1}
                    color={color}
                  />
                )
              })}
            </div>
          </FloatingCard>

          {/* Soft Skills */}
          <FloatingCard delay={0.8}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  category={skill.category as any}
                  delay={0.8 + index * 0.1}
                  level="advanced"
                >
                  {skill.name}
                </SkillBadge>
              ))}
            </div>
          </FloatingCard>
        </div>

        {/* Certifications */}
        <FloatingCard delay={1.0}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Certifications & Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 1.0 + index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                    {cert.icon}
                  </span>
                  <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors duration-200">
                  {cert.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </FloatingCard>
      </div>
    </HomeSection>
  )
}

