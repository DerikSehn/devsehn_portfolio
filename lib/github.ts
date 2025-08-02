import { Octokit } from '@octokit/rest'

// Initialize GitHub API client
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export interface Repository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  languages_url: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  topics: string[]
  visibility: string
  default_branch: string
}

export interface RepositoryLanguages {
  [language: string]: number
}

export interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export class GitHubAPI {
  private username: string

  constructor(username: string = 'DerikSehn') {
    this.username = username
  }

  /**
   * Fetch user's public repositories
   */
  async getRepositories(): Promise<Repository[]> {
    try {
      const { data } = await octokit.rest.repos.listForUser({
        username: this.username,
        type: 'public',
        sort: 'updated',
        per_page: 100,
      })

      return data.map(repo => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        languages_url: repo.languages_url,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        forks_count: repo.forks_count,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
        topics: repo.topics || [],
        visibility: repo.visibility,
        default_branch: repo.default_branch,
      }))
    } catch (error) {
      console.error('Error fetching repositories:', error)
      return []
    }
  }

  /**
   * Fetch languages for a specific repository
   */
  async getRepositoryLanguages(repo: string): Promise<RepositoryLanguages> {
    try {
      const { data } = await octokit.rest.repos.listLanguages({
        owner: this.username,
        repo,
      })
      return data
    } catch (error) {
      console.error(`Error fetching languages for ${repo}:`, error)
      return {}
    }
  }

  /**
   * Fetch user's GitHub stats
   */
  async getUserStats(): Promise<GitHubStats | null> {
    try {
      const { data } = await octokit.rest.users.getByUsername({
        username: this.username,
      })

      return {
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        created_at: data.created_at,
      }
    } catch (error) {
      console.error('Error fetching user stats:', error)
      return null
    }
  }

  /**
   * Get filtered repositories by criteria
   */
  async getFilteredRepositories(filters: {
    language?: string
    minStars?: number
    topic?: string
    hasHomepage?: boolean
  } = {}): Promise<Repository[]> {
    const repos = await this.getRepositories()
    
    return repos.filter(repo => {
      if (filters.language && repo.language !== filters.language) return false
      if (filters.minStars && repo.stargazers_count < filters.minStars) return false
      if (filters.topic && !repo.topics.includes(filters.topic)) return false
      if (filters.hasHomepage && !repo.homepage) return false
      return true
    })
  }

  /**
   * Get repository statistics summary
   */
  async getRepositoryStats(): Promise<{
    totalRepos: number
    totalStars: number
    totalForks: number
    languages: { [key: string]: number }
    mostStarredRepo: Repository | null
  }> {
    const repos = await this.getRepositories()
    
    const stats = {
      totalRepos: repos.length,
      totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
      languages: {} as { [key: string]: number },
      mostStarredRepo: repos.reduce((max, repo) => 
        repo.stargazers_count > (max?.stargazers_count || 0) ? repo : max, 
        null as Repository | null
      ),
    }

    // Count languages
    repos.forEach(repo => {
      if (repo.language) {
        stats.languages[repo.language] = (stats.languages[repo.language] || 0) + 1
      }
    })

    return stats
  }
}

// Export singleton instance
export const githubAPI = new GitHubAPI()
