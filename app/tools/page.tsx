'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Kanban,
  Layers3,
  Play,
  Sparkles,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { Toaster } from 'sonner'

const tools = [
  {
    id: 'kanban',
    title: 'Kanban Task Manager',
    description: 'Organize your projects with a powerful drag-and-drop task board. Built with modern React patterns and real-time updates.',
    longDescription: 'A fully-featured task management system with drag-and-drop functionality, custom columns, priority levels, and persistent local storage.',
    icon: Kanban,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600',
    href: '/tools/kanban',
    features: [
      'Drag & Drop Tasks',
      'Custom Columns',
      'Priority Levels',
      'Local Storage',
      'Real-time Updates'
    ],
    tech: ['React', '@dnd-kit', 'Framer Motion', 'LocalStorage']
  },
  {
    id: 'code-playground',
    title: 'Code Playground',
    description: 'Interactive code editor with live execution and multi-language support. Perfect for testing code snippets and prototyping.',
    longDescription: 'A powerful Monaco Editor-based code playground supporting multiple programming languages with syntax highlighting and live execution.',
    icon: Code2,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-green-600',
    href: '/tools/code-playground',
    features: [
      'Monaco Editor',
      'Multi-Language Support',
      'Live Code Execution',
      'Syntax Highlighting',
      'Save & Share Snippets'
    ],
    tech: ['Monaco Editor', 'TypeScript', 'JavaScript', 'Python']
  }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white">
              <Layers3 className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Interactive Tools
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a collection of powerful, interactive tools built with modern web technologies. 
            Each tool demonstrates different aspects of full-stack development and user experience design.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  {/* Background Gradient */}
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${tool.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                            {tool.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                      <Sparkles className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Long Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {tool.longDescription}
                    </p>

                    {/* Features */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Key Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-primary" />
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tool.tech.map((tech) => (
                          <Badge key={tech} className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Link href={tool.href} className="flex-1">
                        <Button className="w-full group/btn">
                          <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                          Open Tool
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </Link>
                      <Link href={tool.href}>
                        <Button variant="outline" size="icon" className="shrink-0">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                  <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${tool.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center space-y-4 pt-8"
        >
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-lg font-semibold">More Tools Coming Soon</h3>
            <p className="text-muted-foreground text-sm">
              I'm constantly working on new interactive tools and utilities. 
              Stay tuned for more exciting additions to this collection!
            </p>
          </div>
          
          <div className="flex justify-center gap-4 text-xs text-muted-foreground">
            <span>🚀 Built with Next.js 15</span>
            <span>⚡ TypeScript</span>
            <span>🎨 Tailwind CSS</span>
            <span>✨ Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
