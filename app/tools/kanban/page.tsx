'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Kanban, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { KanbanBoard } from '@/components/tools/kanban/kanban-board'
import { Toaster } from 'sonner'

export default function KanbanPage() {
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
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <Kanban className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Kanban Task Manager</h1>
                <p className="text-sm text-muted-foreground">
                  Organize your projects with drag-and-drop functionality
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
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Info className="w-5 h-5" />
                Features & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Key Features:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Drag & Drop Tasks</Badge>
                  <Badge variant="secondary">Custom Columns</Badge>
                  <Badge variant="secondary">Priority Levels</Badge>
                  <Badge variant="secondary">Local Storage</Badge>
                  <Badge variant="secondary">Real-time Updates</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Built with:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>@dnd-kit</Badge>
                  <Badge>Framer Motion</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Kanban Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg border p-6"
        >
          <KanbanBoard />
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            💡 Tip: Your tasks are automatically saved to local storage. 
            Drag tasks between columns to update their status.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
