'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Code2, Info, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CodePlayground from '@/components/tools/code-playground/CodePlayground'
import { Toaster } from 'sonner'

export default function CodePlaygroundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-4 py-20 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <Link href="/tools">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Tools
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Code Playground</h1>
                <p className="text-sm text-muted-foreground">
                  Interactive code editor with live execution
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Info className="w-5 h-5" />
                Features & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Key Features:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Monaco Editor</Badge>
                  <Badge variant="secondary">Multi-Language Support</Badge>
                  <Badge variant="secondary">Live Code Execution</Badge>
                  <Badge variant="secondary">Syntax Highlighting</Badge>
                  <Badge variant="secondary">Save & Share Snippets</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Supported Languages:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JSON</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Built with:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Monaco Editor</Badge>
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Framer Motion</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Code Playground */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg border overflow-hidden"
        >
          <CodePlayground />
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground space-y-2"
        >
          <p className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            Pro Tip: Use Ctrl+S to save your code and Ctrl+Enter to run it
          </p>
          <p>
            🚀 Your code snippets are automatically saved to local storage
          </p>
        </motion.div>
      </div>
    </div>
  )
}
