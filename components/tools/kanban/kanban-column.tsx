"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
 import type { KanbanTask, KanbanColumn as KanbanColumnType } from "./kanban-board"
import { KanbanCard } from "./kanban-card"

interface KanbanColumnProps {
  column: KanbanColumnType
  tasks: KanbanTask[]
  onTaskEdit: (task: KanbanTask) => void
  onTaskDelete: (taskId: string) => void
  onColumnDelete?: (columnId: string) => void
}

export function KanbanColumn({
  column,
  tasks,
  onTaskEdit,
  onTaskDelete,
  onColumnDelete,
}: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  })

  const taskIds = tasks.map((task) => task.id)

  return (
    <Card
      ref={setNodeRef}
      className={`w-72 h-fit min-h-[400px] transition-all duration-200 ${
        isOver ? "ring-2 ring-primary ring-offset-2" : ""
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${column.color}`} />
            <h3 className="font-semibold text-sm">{column.title}</h3>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {tasks.length}
            </span>
          </div>
          {onColumnDelete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onColumnDelete(column.id)}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <KanbanCard
                    task={task}
                    onEdit={() => onTaskEdit(task)}
                    onDelete={() => onTaskDelete(task.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {tasks.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 text-muted-foreground"
              >
                <div className="space-y-2">
                  <div className="text-sm">No tasks yet</div>
                  <div className="text-xs">Drag tasks here or create a new one</div>
                </div>
              </motion.div>
            )}
          </div>
        </SortableContext>
      </CardContent>
    </Card>
  )
}
