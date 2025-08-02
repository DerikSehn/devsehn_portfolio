"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

interface BentoGridItemProps {
  title?: string
  description?: string
  header?: ReactNode
  icon?: ReactNode
  className?: string
  children?: ReactNode
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoGridItem({
  title,
  description,
  header,
  icon,
  className,
  children,
}: BentoGridItemProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300",
        "hover:border-primary/20 hover:shadow-primary/5",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      {header && (
        <div className="relative overflow-hidden rounded-lg mb-4">
          {header}
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        )}
      </div>
      
      {description && (
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
      )}
      
      {children}
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export const BentoGridSizes = {
  small: "md:col-span-1 md:row-span-1",
  medium: "md:col-span-2 md:row-span-1",
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-3 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
  featured: "md:col-span-2 lg:col-span-3 md:row-span-2",
}
