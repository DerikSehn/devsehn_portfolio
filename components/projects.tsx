"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BentoGrid } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { 
  Filter,
  Github
} from "lucide-react"
import { Repository, githubAPI } from "@/lib/github"
import { ProjectCard, StatsCard, languageColors } from "@/components/project-cards"
import { cn } from "@/lib/utils"
import HomeSection from "./home-section"
import { SectionHeading } from "./ui/section-heading"


interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All")
  const [stats, setStats] = useState<{
    totalRepos: number
    totalStars: number
    totalForks: number
    languages: { [key: string]: number }
    mostStarredRepo: Repository | null
  } | null>(null)

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const [repos, repoStats] = await Promise.all([
          githubAPI.getRepositories(),
          githubAPI.getRepositoryStats()
        ])
        
        setRepositories(repos)
        setFilteredRepos(repos)
        setStats(repoStats)
      } catch (error) {
        console.error("Error loading repositories:", error)
      } finally {
        setLoading(false)
      }
    }

    loadRepositories()
  }, [])

  useEffect(() => {
    if (selectedLanguage === "All") {
      setFilteredRepos(repositories)
    } else {
      setFilteredRepos(repositories.filter(repo => repo.language === selectedLanguage))
    }
  }, [selectedLanguage, repositories])

  const languages = Array.from(
    new Set(repositories.map(repo => repo.language).filter((lang): lang is string => lang !== null))
  ).sort()

  if (loading) {
    return (
      <HomeSection id="projects" className="flex items-center justify-center">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-lg">Loading projects...</span>
        </motion.div>
      </HomeSection>
    )
  }

  return (
    <HomeSection id="projects" className={cn("space-y-8", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <SectionHeading 
          subtitle="Explore my latest work and contributions. Each project represents a journey of learning and innovation."
        >
          Featured Projects
          </SectionHeading>
      </motion.div>

      {/* Language Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-2 flex-wrap justify-center mb-4"
      >
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Button
          variant={selectedLanguage === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedLanguage("All")}
        >
          All
        </Button>
        {languages.map((language) => (
          <Button
            key={language}
            variant={selectedLanguage === language ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLanguage(language)}
            className="text-xs"
          >
            <div
              className="w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: languageColors[language] || "#666" }}
            />
            {language}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <BentoGrid>
          {/* Stats Card */}
          {stats && <StatsCard stats={stats} />}
          
          {/* Featured Project (Most starred) */}
          {stats?.mostStarredRepo && (
            <ProjectCard repo={stats.mostStarredRepo} size="large" />
          )}
          
          {/* Other Projects */}
          {filteredRepos
            .filter(repo => repo.id !== stats?.mostStarredRepo?.id)
            .slice(0, 8)
            .map((repo, index) => (
              <ProjectCard 
                key={repo.id} 
                repo={repo} 
                size={index % 3 === 0 ? "medium" : "small"}
              />
            ))}
        </BentoGrid>
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Button size="lg" variant="outline" asChild>
          <a href="https://github.com/DerikSehn" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </a>
        </Button>
      </motion.div>
    </HomeSection>
  )
}
