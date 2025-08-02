"use client"

import { motion } from "framer-motion"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Calendar, Clock } from "lucide-react"
import { format } from "date-fns"
import type { KanbanTask } from "./kanban-board"

interface KanbanCardProps {
  task: KanbanTask
  onEdit: () => void
  onDelete: () => void
  isDragging?: boolean
}

const priorityColors = {
  low: "bg-green-100 text-green-800 border-green-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-red-100 text-red-800 border-red-200",
}

export function KanbanCard({ task, onEdit, onDelete, isDragging = false }: KanbanCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: task.id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  }

  const isOverdue = task.dueDate && new Date() > task.dueDate
  const isDueSoon = task.dueDate && 
    new Date() < task.dueDate && 
    task.dueDate.getTime() - new Date().getTime() < 24 * 60 * 60 * 1000 // 24 hours

  const getBorderClass = () => {
    if (isOverdue) return "border-red-300"
    if (isDueSoon) return "border-yellow-300"
    return ""
  }

  const getDateTextClass = () => {
    if (isOverdue) return "text-red-600"
    if (isDueSoon) return "text-yellow-600"
    return "text-muted-foreground"
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      whileHover={{ scale: isDragging ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`cursor-grab active:cursor-grabbing hover:shadow-md transition-all duration-200 ${
        isDragging ? "shadow-2xl rotate-6" : ""
      } ${getBorderClass()}`}>
        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between">
              <h4 className="font-medium text-sm leading-tight flex-1 pr-2">
                {task.title}
              </h4>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onEdit()
                  }}
                  className="h-6 w-6 p-0 text-muted-foreground hover:text-primary"
                >
                  <Edit className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDelete()
                  }}
                  className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Description */}
            {task.description && (
              <p className="text-xs text-muted-foreground line-clamp-2">
                {task.description}
              </p>
            )}

            {/* Tags */}
            {task.tags && task.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {task.tags.slice(0, 3).map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-1.5 py-0.5"
                  >
                    {tag}
                  </Badge>
                ))}
                {task.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                    +{task.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              {/* Priority */}
              <Badge
                variant="outline"
                className={`text-xs ${priorityColors[task.priority]}`}
              >
                {task.priority}
              </Badge>

              {/* Due Date */}
              {task.dueDate && (
                <div className={`flex items-center gap-1 text-xs ${
                  isOverdue ? "text-red-600" : isDueSoon ? "text-yellow-600" : "text-muted-foreground"
                }`}>
                  {isOverdue ? (
                    <Clock className="w-3 h-3" />
                  ) : (
                    <Calendar className="w-3 h-3" />
                  )}
                  <span>{format(task.dueDate, "MMM d")}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
