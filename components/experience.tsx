"use client"

import { 
  Building2, 
  Calendar, 
  Users, 
  Trophy, 
  Code, 
  Globe,
  Briefcase,
  GraduationCap
} from "lucide-react"
import HomeSection from "./home-section"
import { TimelineItem } from "./ui/timeline-item"
import { ExperienceStat } from "./ui/experience-stat"
import { TechStack } from "./ui/tech-stack"
import { FloatingCard } from "./ui/floating-card"
import { SectionHeading } from "./ui/section-heading"

const experiences = [
  {
    title: "Software Engineer",
    company: "Ford Motor Company", 
    period: "Feb 2025 - Present",
    isActive: true,
    description: "Develop and maintain critical features for a global logistics platform using Angular and Spring Boot, delivering robust and scalable solutions.",
    achievements: [
      "Boost software quality and security through rigorous code reviews, systematic validation with SonarQube, and API protection using 42Crunch and Apigee.",
      "Leverage a Pipelines-as-Code (PaC) model with Tekton to automate CI/CD workflows, deploying applications efficiently to Kubernetes (GCP).",
      "Apply advanced Git version control techniques, including history manipulation in critical situations to maintain repository integrity and remediate security risks."
    ],
    technologies: [
      { name: "Angular", category: "frontend" as const },
      { name: "Spring Boot", category: "backend" as const },
      { name: "Java", category: "backend" as const },
      { name: "TypeScript", category: "frontend" as const },
      { name: "Kubernetes", category: "cloud" as const },
      { name: "GCP", category: "cloud" as const },
      { name: "Tekton", category: "tool" as const },
      { name: "SonarQube", category: "tool" as const },
      { name: "Apigee", category: "tool" as const }
    ]
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "DevSehn",
    period: "Mar 2024 – Feb 2025",
    isActive: false,
    description: "Architected and launched innovative full-stack solutions for diverse clients, specializing in modern web technologies and automation.",
    achievements: [
      "Architected and launched 'DevSehn SaaS' an open-source SaaS template with features like user authentication and e-commerce, which served as a foundation for various client projects.",
      "Developed a comprehensive dashboard for the Unimed Vale do Caí Employees Association, improving contact between members and associates by 36%.",
      "Built a Pokedex application using Next.js, Tailwind CSS, and GSAP to demonstrate advanced Redux concepts and complex UI interactions.",
      "Built and deployed a full-stack e-commerce platform (Next.js, Strapi) that automated an entire business workflow, featuring an interactive quote generator, a secure admin dashboard, and custom APIs with business-critical logic."
    ],
    technologies: [
      { name: "Next.js", category: "frontend" as const },
      { name: "React", category: "frontend" as const },
      { name: "Node.js", category: "backend" as const },
      { name: "Strapi", category: "backend" as const },
      { name: "PostgreSQL", category: "database" as const },
      { name: "Tailwind CSS", category: "frontend" as const },
      { name: "GSAP", category: "frontend" as const },
      { name: "Redux", category: "frontend" as const }
    ]
  },
  {
    title: "Junior Full-Stack Developer",
    company: "Unimed, Vale do Caí",
    period: "Aug 2022 - Mar 2024",
    isActive: false,
    description: "Developed full-stack features for a large-scale hospital management system serving a central hospital and 150+ external clinics.",
    achievements: [
      "Engineered a preventive maintenance module from the ground up, collaborating with hospital engineers to maintain process efficiency.",
      "Created 'UniChat,' an internal messaging application for over 850 employees, with features mirroring native chat platforms.",
      "Demonstrated adaptability by delivering solutions across both legacy (Java 8) and modern (React.js) technology stacks."
    ],
    technologies: [
      { name: "React", category: "frontend" as const },
      { name: "Java 8", category: "backend" as const },
      { name: "Spring", category: "backend" as const },
      { name: "MySQL", category: "database" as const },
      { name: "JavaScript", category: "frontend" as const },
      { name: "CSS3", category: "frontend" as const }
    ]
  },
  {
    title: "Technical Project Developer",
    company: "IFSUL (Technical High School), Venancio Aires",
    period: "2018 - 2022",
    isActive: false,
    description: "Led research teams in developing software and robotics projects, presenting them at national and international technology fairs.",
    achievements: [
      "Led a research team in developing software and robotics projects, presenting them at national and international technology fairs.",
      "Developed foundational full-stack projects using Java, SQL, and core web technologies.",
      "Managed the complete IT infrastructure for all computer labs, including network configuration and system maintenance.",
      "Obtained medals (2nd place in robotics championship 2021)."
    ],
    technologies: [
      { name: "Java", category: "backend" as const },
      { name: "SQL", category: "database" as const },
      { name: "HTML5", category: "frontend" as const },
      { name: "CSS3", category: "frontend" as const },
      { name: "Arduino", category: "tool" as const },
      { name: "Robotics", category: "tool" as const }
    ]
  }
]

const experienceStats = [
  {
    icon: Calendar,
    value: "3+",
    label: "Years Experience",
    description: "Professional software development",
    color: "primary" as const
  },
  {
    icon: Building2,
    value: "4",
    label: "Companies",
    description: "Enterprise & startups",
    color: "secondary" as const
  },
  {
    icon: Code,
    value: "20+",
    label: "Projects",
    description: "Full-stack applications",
    color: "success" as const
  },
  {
    icon: Users,
    value: "1000+",
    label: "End Users",
    description: "Across all platforms",
    color: "warning" as const
  }
]

export function Experience() {
  return (
    <HomeSection id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeading subtitle="A journey through my professional development and technical achievements">
          Work Experience
        </SectionHeading>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {experienceStats.map((stat, index) => (
            <ExperienceStat
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <FloatingCard delay={0.4}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Career Timeline</h3>
              </div>
              
              <div className="space-y-0">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    achievements={exp.achievements}
                    isActive={exp.isActive}
                    delay={0.5 + index * 0.2}
                  >
                    <TechStack 
                      technologies={exp.technologies}
                      delay={0.7 + index * 0.2}
                    />
                  </TimelineItem>
                ))}
              </div>
            </FloatingCard>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Current Focus */}
            <FloatingCard delay={0.6}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Current Focus</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>🎯 Building enterprise-scale logistics platforms at Ford</p>
                <p>☁️ Mastering cloud-native technologies (GCP, Kubernetes)</p>
                <p>🔒 Implementing robust security practices</p>
                <p>🚀 Exploring modern DevOps workflows</p>
              </div>
            </FloatingCard>

            {/* Education Highlight */}
            <FloatingCard delay={0.8}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-foreground">Computer Science</div>
                  <div className="text-muted-foreground">IFSUL - Technical High School</div>
                  <div className="text-xs text-muted-foreground">2018 - 2022</div>
                </div>
              </div>
            </FloatingCard>

            {/* Achievements */}
            <FloatingCard delay={1.0}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Key Achievements</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">🥈</span>
                  <span className="text-muted-foreground">2nd place in Robotics Championship 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">📈</span>
                  <span className="text-muted-foreground">36% improvement in user engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🏗️</span>
                  <span className="text-muted-foreground">Built and launched 20+ applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">👥</span>
                  <span className="text-muted-foreground">Led teams of 3-5 developers</span>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}

