"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CourseGridProps {
  courses: Array<{
    title: string
    provider: string
    year: string
    category: "certification" | "course" | "bootcamp" | "workshop"
    level: "beginner" | "intermediate" | "advanced"
    duration?: string
    skills?: string[]
  }>
  title?: string
  delay?: number
}

const categoryConfig = {
  certification: {
    icon: "🏆",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    textColor: "text-amber-700 dark:text-amber-300"
  },
  course: {
    icon: "📚",
    color: "from-blue-500 to-cyan-600", 
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    textColor: "text-blue-700 dark:text-blue-300"
  },
  bootcamp: {
    icon: "🚀",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20", 
    textColor: "text-purple-700 dark:text-purple-300"
  },
  workshop: {
    icon: "🛠️",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    textColor: "text-green-700 dark:text-green-300"
  }
}

const levelConfig = {
  beginner: { dots: 1, color: "bg-green-500" },
  intermediate: { dots: 2, color: "bg-blue-500" },
  advanced: { dots: 3, color: "bg-purple-500" }
}

export function CourseGrid({ courses, title = "Courses & Certifications", delay = 0 }: CourseGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <span className="text-xl">🎓</span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => {
          const categoryData = categoryConfig[course.category]
          const levelData = levelConfig[course.level]
          
          return (
            <motion.div
              key={`${course.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.3 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="absolute top-2 right-2 z-10">
                <div className={cn(
                  "flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium border",
                  categoryData.bgColor,
                  categoryData.textColor
                )}>
                  <span>{categoryData.icon}</span>
                  <span className="capitalize">{course.category}</span>
                </div>
              </div>

              <div className="p-4">
                {/* Title */}
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: delay + 0.4 + (index * 0.1) }}
                  className="font-semibold text-foreground text-left mb-2 pr-20 group-hover:text-primary transition-colors duration-200 leading-tight"
                >
                  {course.title}
                </motion.h4>

                {/* Provider & Year */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: delay + 0.5 + (index * 0.1) }}
                  className="flex items-center gap-2 text-xs text-muted-foreground mb-3"
                >
                  <span className="font-medium">{course.provider}</span>
                  <span>•</span>
                  <span>{course.year}</span>
                  {course.duration && (
                    <>
                      <span>•</span>
                      <span>{course.duration}</span>
                    </>
                  )}
                </motion.div>

                {/* Level Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: delay + 0.6 + (index * 0.1) }}
                  className="flex items-center gap-2 mb-3"
                >
                  <span className="text-xs text-muted-foreground">Level:</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors duration-200",
                          i < levelData.dots 
                            ? levelData.color 
                            : "bg-muted-foreground/20"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground capitalize">{course.level}</span>
                </motion.div>

                {/* Skills */}
                {course.skills && course.skills.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: delay + 0.7 + (index * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="text-xs text-left text-muted-foreground">Skills:</div>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-muted/30 text-xs rounded-md text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="px-2 py-1 bg-muted/30 text-xs rounded-md text-muted-foreground">
                          +{course.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Hover Gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl",
                categoryData.color
              )} />

              {/* Border Glow */}
              <div className={cn(
                "absolute -inset-px rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm",
                categoryData.color
              )} />

              {/* Bottom-right background absolute icon */}
              <div className="absolute -bottom-2 -right-2 p-1 -z-10 -rotate-12">
                  <span className="text-8xl text-muted-foreground grayscale brightness-[.3] opacity-30">{categoryData.icon}</span>
               </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
