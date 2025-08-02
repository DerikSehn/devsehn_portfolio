"use client"

import { motion } from "framer-motion"
import { 
  GraduationCap, 
  Building2, 
  Award, 
  BookOpen, 
  Target,
  Users,
  Star
} from "lucide-react"
import HomeSection from "./home-section"
import { EducationCard } from "./ui/education-card"
import { CourseGrid } from "./ui/course-grid"
import { EducationStats } from "./ui/education-stats"
import { FloatingCard } from "./ui/floating-card"
import { SectionHeading } from "./ui/section-heading"

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "UniRitter",
    location: "Porto Alegre, Brasil",
    period: "2023 - 2025",
    status: "in-progress" as const,
    icon: Building2,
    description: "Comprehensive computer science program focusing on software engineering, algorithms, and modern development practices.",
    highlights: [
      "Software Engineering and Architecture",
      "Advanced Algorithms and Data Structures", 
      "Database Design and Management",
      "Web and Mobile Development",
      "Cybersecurity and Data Protection",
      "Project Management and Agile Methodologies"
    ],
    grade: "GPA 8.5/10"
  },
  {
    degree: "Technical High School in Information Technology",
    institution: "Instituto Federal Sul Rio-Grandense (IFSUL)",
    location: "Venâncio Aires, Brasil", 
    period: "2018 - 2022",
    status: "completed" as const,
    icon: GraduationCap,
    description: "Integrated technical education combining high school curriculum with specialized IT training and hands-on experience.",
    highlights: [
      "Programming Fundamentals (Java, SQL, Web)",
      "Network Infrastructure and Administration",
      "Hardware and Systems Maintenance",
      "Software Development Projects",
      "Robotics and Automation",
      "Research and Innovation Projects"
    ],
    grade: "Top 5% of class"
  }
]

const courses = [
  {
    title: "React Advanced Concepts",
    provider: "Rocketseat",
    year: "2023",
    category: "course" as const,
    level: "advanced" as const,
    duration: "40h",
    skills: ["React", "Context API", "Hooks", "Performance"]
  },
  {
    title: "NLW Java Journey",
    provider: "Rocketseat", 
    year: "2023",
    category: "bootcamp" as const,
    level: "intermediate" as const,
    duration: "1 week",
    skills: ["Java", "Spring Boot", "REST APIs", "Maven"]
  },
  {
    title: "Next.js Best Practices",
    provider: "Next.js ORG",
    year: "2024",
    category: "course" as const,
    level: "advanced" as const,
    duration: "30h",
    skills: ["Next.js", "SSR", "API Routes", "Performance"]
  },
  {
    title: "EF SET C1 Advanced Certificate",
    provider: "EF Education First",
    year: "2024",
    category: "certification" as const,
    level: "advanced" as const,
    skills: ["English", "Business Communication", "Technical Writing"]
  },
  {
    title: "Web Development, Mobile and Games",
    provider: "UniRitter",
    year: "2024",
    category: "course" as const,
    level: "intermediate" as const,
    duration: "60h",
    skills: ["React Native", "Game Development", "UI/UX"]
  },
  {
    title: "Computational Solutions Programming", 
    provider: "UniRitter",
    year: "2024",
    category: "course" as const,
    level: "intermediate" as const,
    duration: "45h",
    skills: ["Algorithms", "Data Structures", "Problem Solving"]
  },
  {
    title: "Ford Angular.js Mastery",
    provider: "Ford Motor Company",
    year: "2025",
    category: "certification" as const,
    level: "advanced" as const,
    skills: ["Angular", "TypeScript", "Enterprise Development"]
  },
  {
    title: "Ford Spring Boot Mastery",
    provider: "Ford Motor Company", 
    year: "2025",
    category: "certification" as const,
    level: "advanced" as const,
    skills: ["Spring Boot", "Microservices", "REST APIs"]
  },
  {
    title: "Certified Scrum Developer",
    provider: "Ford Motor Company",
    year: "2025",
    category: "certification" as const,
    level: "intermediate" as const,
    skills: ["Scrum", "Agile", "Project Management"]
  },
  {
    title: "42Crunch API Security Mastery",
    provider: "Ford Motor Company",
    year: "2025",
    category: "certification" as const,
    level: "advanced" as const,
    skills: ["API Security", "Cybersecurity", "REST APIs"]
  },
  {
    title: "Clean Architecture",
    provider: "Ford Motor Company",
    year: "2025",
    category: "course" as const,
    level: "advanced" as const,
    skills: ["Clean Architecture", "Software Design", "SOLID Principles"]
  },
  {
    title: "Developer Cybersecurity",
    provider: "Ford Motor Company",
    year: "2025",
    category: "course" as const,
    level: "advanced" as const,
    skills: ["Cybersecurity", "Secure Coding", "OWASP"]
  },
  {
    title: "Entra ID Identity & Access Management",
    provider: "Microsoft Learn",
    year: "2025",
    category: "certification" as const,
    level: "intermediate" as const,
    skills: ["Entra ID", "IAM", "Azure"]
  },
  {
    title: "Spring Boot Deployment on Azure",
    provider: "Microsoft Learn",
    year: "2025",
    category: "course" as const,
    level: "intermediate" as const,
    skills: ["Spring Boot", "Azure", "DevOps"]
  },
  {
    title: "MFA Security",
    provider: "Microsoft Learn",
    year: "2025",
    category: "course" as const,
    level: "intermediate" as const,
    skills: ["MFA", "Security", "Authentication"]
  },
  {
    title: "SSPR (Self-Service Password Reset)",
    provider: "Microsoft Learn",
    year: "2025",
    category: "course" as const,
    level: "intermediate" as const,
    skills: ["SSPR", "Password Reset", "Security"]
  },
  {
    title: "User & Group Management",
    provider: "Microsoft Learn",
    year: "2025",
    category: "course" as const,
    level: "intermediate" as const,
    skills: ["User Management", "Group Management", "Azure"]
  },
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "AWS",
    year: "2023",
    category: "certification" as const,
    level: "beginner" as const,
    skills: ["AWS", "Cloud Computing", "Cloud Services"]
  },
  {
    title: "Usability & Game Dev",
    provider: "UniRitter",
    year: "2024",
    category: "course" as const,
    level: "intermediate" as const,
    duration: "60h",
    skills: ["Usability", "Game Development", "UI/UX"]
  },
  {
    title: "UX/UI",
    provider: "UniRitter",
    year: "2024",
    category: "course" as const,
    level: "intermediate" as const,
    duration: "60h",
    skills: ["UX", "UI", "Design"]
  },
]

const educationStats = [
  {
    icon: GraduationCap,
    value: "2",
    label: "Degrees",
    description: "Academic credentials",
    percentage: 100,
    color: "#3b82f6"
  },
  {
    icon: Award,
    value: "8+",
    label: "Certifications",
    description: "Professional credentials",
    percentage: 85,
    color: "#f59e0b"
  },
  {
    icon: BookOpen,
    value: "200+",
    label: "Study Hours",
    description: "Continuous learning",
    percentage: 90,
    color: "#10b981"
  },
  {
    icon: Target,
    value: "95%",
    label: "Success Rate",
    description: "Course completion",
    percentage: 95,
    color: "#8b5cf6"
  }
]

export function Education() {
  return (
    <HomeSection id="education">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeading subtitle="Continuous learning and academic excellence in computer science and technology">
          Education & Learning
        </SectionHeading>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <EducationStats stats={educationStats} delay={0.3} />
        </motion.div>

        {/* Formal Education */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              period={edu.period}
              status={edu.status}
              icon={edu.icon}
              description={edu.description}
              highlights={edu.highlights}
              grade={edu.grade}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Courses & Certifications */}
          <div className="lg:col-span-2">
            <FloatingCard delay={0.8}>
              <CourseGrid courses={courses} delay={0.9} />
            </FloatingCard>
          </div>

          {/* Learning Philosophy */}
          <div className="space-y-6">
            <FloatingCard delay={1.0}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Learning Philosophy</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>🎯 <strong>Continuous Learning:</strong> Technology evolves rapidly, so I stay current with emerging trends and best practices.</p>
                <p>🛠️ <strong>Hands-on Practice:</strong> Learning by building real projects and solving practical problems.</p>
                <p>🤝 <strong>Knowledge Sharing:</strong> Teaching others and contributing to the developer community.</p>
                <p>🚀 <strong>Innovation Focus:</strong> Exploring cutting-edge technologies and their practical applications.</p>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Academic Achievements</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">🥈</span>
                  <span className="text-muted-foreground">2nd Place - National Robotics Championship 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🏆</span>
                  <span className="text-muted-foreground">Dean's List - Top 5% Academic Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">🎓</span>
                  <span className="text-muted-foreground">Technical High School Valedictorian</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">📊</span>
                  <span className="text-muted-foreground">Research Project Leader - 3 Publications</span>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.4}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Next Goals</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📈 Complete Bachelor's Degree</p>
                <p>☁️ AWS Solutions Architect Certification</p>
                <p>🧠 Master's in Software Engineering</p>
                <p>🌍 International tech conference speaker</p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}

