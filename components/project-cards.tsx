"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BentoGridItem, BentoGridSizes } from "@/components/ui/bento-grid"
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Calendar,
  Code,
  TrendingUp
} from "lucide-react"
import { Repository } from "@/lib/github"
import { cn } from "@/lib/utils"

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  React: "#61dafb",
  "Next.js": "#000000",
  Vue: "#4FC08D",
  PHP: "#777bb4",
  Go: "#00ADD8",
  Rust: "#dea584",
  Swift: "#fa7343",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#239120",
  HTML: "#e34c26",
  CSS: "#1572b6",
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
}

interface ProjectCardProps {
  repo: Repository
  size?: keyof typeof BentoGridSizes
}

export function ProjectCard({ repo, size = "small" }: ProjectCardProps) {
  return (
    <BentoGridItem
      title={repo.name}
      description={repo.description || "No description available"}
      className={cn(BentoGridSizes[size], "group")}
      icon={<Code className="h-5 w-5" />}
      header={
        <div className="relative h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-2 left-2 flex gap-2">
            {repo.language && (
              <Badge 
                variant="secondary" 
                className="text-xs"
                style={{ 
                  backgroundColor: languageColors[repo.language] + "20",
                  color: languageColors[repo.language],
                  borderColor: languageColors[repo.language] + "40"
                }}
              >
                {repo.language}
              </Badge>
            )}
          </div>
        </div>
      }
    >
      <div className="space-y-3">
        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            {repo.stargazers_count}
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-3 w-3" />
            {repo.forks_count}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(repo.updated_at)}
          </div>
        </div>

        {/* Topics */}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {repo.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
            {repo.topics.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{repo.topics.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="h-3 w-3 mr-1" />
              Code
            </a>
          </Button>
          {repo.homepage && (
            <Button size="sm" variant="outline" asChild className="flex-1">
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </BentoGridItem>
  )
}

interface StatsCardProps {
  stats: {
    totalRepos: number
    totalStars: number
    totalForks: number
    languages: { [key: string]: number }
    mostStarredRepo: Repository | null
  }
}

export function StatsCard({ stats }: StatsCardProps) {
  return (
    <BentoGridItem
      title="GitHub Statistics"
      className={BentoGridSizes.medium}
      icon={<TrendingUp className="h-5 w-5" />}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{stats.totalRepos}</div>
          <div className="text-sm text-muted-foreground">Repositories</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{stats.totalStars}</div>
          <div className="text-sm text-muted-foreground">Total Stars</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{stats.totalForks}</div>
          <div className="text-sm text-muted-foreground">Total Forks</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{Object.keys(stats.languages).length}</div>
          <div className="text-sm text-muted-foreground">Languages</div>
        </div>
      </div>
    </BentoGridItem>
  )
}

export { languageColors }
