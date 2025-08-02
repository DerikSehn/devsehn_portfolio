"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
    closestCorners,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Plus, Mail } from "lucide-react"
import { toast } from "sonner"
import { KanbanColumn } from "./kanban-column"
import { KanbanCard } from "./kanban-card"
import { TaskEditor } from "./task-editor"

export interface KanbanTask {
    id: string
    title: string
    description: string
    column: string
    priority: "low" | "medium" | "high"
    createdAt: Date
    dueDate?: Date
    tags?: string[]
}

export interface KanbanColumn {
    id: string
    title: string
    color: string
}

const defaultColumns: KanbanColumn[] = [
    { id: "todo", title: "To Do", color: "bg-blue-500" },
    { id: "in-progress", title: "In Progress", color: "bg-yellow-500" },
    { id: "review", title: "Review", color: "bg-purple-500" },
    { id: "done", title: "Done", color: "bg-green-500" },
]

export function KanbanBoard() {
    const [tasks, setTasks] = useState<KanbanTask[]>([])
    const [columns, setColumns] = useState<KanbanColumn[]>(defaultColumns)
    const [activeTask, setActiveTask] = useState<KanbanTask | null>(null)
    const [newColumnTitle, setNewColumnTitle] = useState("")
    const [showTaskEditor, setShowTaskEditor] = useState(false)
    const [editingTask, setEditingTask] = useState<KanbanTask | null>(null)
    const [mounted, setMounted] = useState(false)

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    )

    // Load data from localStorage on mount
    useEffect(() => {
        const savedTasks = localStorage.getItem("kanban-tasks")
        const savedColumns = localStorage.getItem("kanban-columns")
        
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
                ...task,
                createdAt: new Date(task.createdAt),
                dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
            }))
            setTasks(parsedTasks)
        }
        
        if (savedColumns) {
            setColumns(JSON.parse(savedColumns))
        }
        
        setMounted(true)
    }, [])

    // Save to localStorage whenever tasks or columns change
    useEffect(() => {
        if (mounted) {
            localStorage.setItem("kanban-tasks", JSON.stringify(tasks))
        }
    }, [tasks, mounted])

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("kanban-columns", JSON.stringify(columns))
        }
    }, [columns, mounted])

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event
        const task = tasks.find((task) => task.id === active.id)
        if (task) {
            setActiveTask(task)
        }
    }

    const handleDragOver = (event: DragOverEvent) => {
        const { active, over } = event
        if (!over) return

        const activeId = active.id
        const overId = over.id

        const activeTask = tasks.find((task) => task.id === activeId)
        if (!activeTask) return

        const overTask = tasks.find((task) => task.id === overId)
        const overColumn = columns.find((col) => col.id === overId)

        if (overTask && activeTask.column !== overTask.column) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((task) => task.id === activeId)
                const overIndex = tasks.findIndex((task) => task.id === overId)

                return arrayMove(
                    tasks.map((task) =>
                        task.id === activeId
                            ? { ...task, column: overTask.column }
                            : task
                    ),
                    activeIndex,
                    overIndex
                )
            })
        } else if (overColumn && activeTask.column !== overColumn.id) {
            setTasks((tasks) =>
                tasks.map((task) =>
                    task.id === activeId
                        ? { ...task, column: overColumn.id }
                        : task
                )
            )
        }
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        setActiveTask(null)

        if (!over) return

        const activeId = active.id
        const overId = over.id

        if (activeId === overId) return

        const activeTask = tasks.find((task) => task.id === activeId)
        if (!activeTask) return

        const overTask = tasks.find((task) => task.id === overId)
        const overColumn = columns.find((col) => col.id === overId)

        if (overTask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((task) => task.id === activeId)
                const overIndex = tasks.findIndex((task) => task.id === overId)

                if (activeTask.column === overTask.column) {
                    return arrayMove(tasks, activeIndex, overIndex)
                } else {
                    return arrayMove(
                        tasks.map((task) =>
                            task.id === activeId
                                ? { ...task, column: overTask.column }
                                : task
                        ),
                        activeIndex,
                        overIndex
                    )
                }
            })
        } else if (overColumn) {
            setTasks((tasks) =>
                tasks.map((task) =>
                    task.id === activeId
                        ? { ...task, column: overColumn.id }
                        : task
                )
            )
        }
    }

    const addColumn = () => {
        if (!newColumnTitle.trim()) return

        const newColumn: KanbanColumn = {
            id: Date.now().toString(),
            title: newColumnTitle,
            color: "bg-gray-500",
        }

        setColumns([...columns, newColumn])
        setNewColumnTitle("")
        toast.success("Column added successfully!")
    }

    const createTask = (taskData: Partial<KanbanTask>) => {
        const newTask: KanbanTask = {
            id: Date.now().toString(),
            title: taskData.title || "New Task",
            description: taskData.description || "",
            column: taskData.column || "todo",
            priority: taskData.priority || "medium",
            createdAt: new Date(),
            dueDate: taskData.dueDate,
            tags: taskData.tags || [],
        }

        setTasks([...tasks, newTask])
        toast.success("Task created successfully!")
    }

    const updateTask = (taskId: string, updates: Partial<KanbanTask>) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, ...updates } : task
        ))
        toast.success("Task updated successfully!")
    }

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
        toast.success("Task deleted successfully!")
    }

    const exportTasks = async () => {
        try {
            // This would integrate with your email service
            const tasksByColumn = columns.map(column => ({
                column: column.title,
                tasks: tasks.filter(task => task.column === column.id)
            }))

            // For now, we'll just copy to clipboard
            const exportData = JSON.stringify(tasksByColumn, null, 2)
            await navigator.clipboard.writeText(exportData)
            toast.success("Tasks copied to clipboard!")
        } catch (error) {
            console.error("Export failed:", error)
            toast.error("Failed to export tasks")
        }
    }

    if (!mounted) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        )
    }

  return (
    <div className="w-full h-full p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Kanban Board</h2>
          <div className="flex gap-2">
            <Button
              onClick={() => setShowTaskEditor(true)}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Task
            </Button>
            <Button
              onClick={exportTasks}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Add Column Input */}
        <div className="flex gap-2 mb-6">
          <Input
            placeholder="New column title..."
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addColumn()}
            className="max-w-xs"
          />
          <Button onClick={addColumn} variant="outline">
            Add Column
          </Button>
        </div>
      </motion.div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 overflow-x-auto pb-6 kanban-scrollbar">
          <AnimatePresence>
            {columns.map((column) => (
              <motion.div
                key={column.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex-shrink-0"
              >
                <KanbanColumn
                  column={column}
                  tasks={tasks.filter((task) => task.column === column.id)}
                  onTaskEdit={(task: KanbanTask) => {
                    setEditingTask(task)
                    setShowTaskEditor(true)
                  }}
                  onTaskDelete={deleteTask}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {createPortal(
          <DragOverlay>
            {activeTask && (
              <Card className="w-72 p-4 rotate-6 shadow-2xl">
                <KanbanCard
                  task={activeTask}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  isDragging
                />
              </Card>
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>

      <TaskEditor
        isOpen={showTaskEditor}
        onClose={() => {
          setShowTaskEditor(false)
          setEditingTask(null)
        }}
        onSave={(taskData: Partial<KanbanTask>) => {
          if (editingTask) {
            updateTask(editingTask.id, taskData)
          } else {
            createTask(taskData)
          }
          setShowTaskEditor(false)
          setEditingTask(null)
        }}
        initialData={editingTask}
        columns={columns}
      />
    </div>
  )
}
