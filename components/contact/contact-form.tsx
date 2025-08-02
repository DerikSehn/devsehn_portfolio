"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, Loader2, User, Mail, MessageSquare, AlertCircle } from "lucide-react"
import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    if (success || loading) return
    e.preventDefault()
    
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }
      
      setSuccess(true)
      setFormData({ from_name: '', from_email: '', message: '' })
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 8000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setError(error instanceof Error ? error.message : 'An error occurred while sending the message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = formData.from_name.trim() && formData.from_email.trim() && formData.message.trim()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative"
      >
        <label htmlFor="from_name" className="block text-sm font-medium text-foreground mb-2">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Name
          </div>
        </label>
        <Input 
          type="text" 
          id="from_name" 
          name="from_name" 
          value={formData.from_name}
          onChange={handleInputChange}
          className="transition-all duration-200 border-border/50 focus:border-primary focus:ring-primary/20 bg-background/50 hover:bg-background/80" 
          placeholder="Your full name"
          required 
          disabled={loading || success}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: formData.from_name ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="relative"
      >
        <label htmlFor="from_email" className="block text-sm font-medium text-foreground mb-2">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email
          </div>
        </label>
        <Input 
          type="email" 
          id="from_email" 
          name="from_email" 
          value={formData.from_email}
          onChange={handleInputChange}
          className="transition-all duration-200 border-border/50 focus:border-primary focus:ring-primary/20 bg-background/50 hover:bg-background/80" 
          placeholder="your.email@example.com"
          required 
          disabled={loading || success}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: formData.from_email ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="relative"
      >
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            Message
          </div>
        </label>
        <Textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleInputChange}
          className="min-h-[120px] transition-all duration-200 border-border/50 focus:border-primary focus:ring-primary/20 bg-background/50 hover:bg-background/80 resize-none" 
          placeholder="Tell me about your project, ideas, or how I can help you..."
          required 
          disabled={loading || success}
          maxLength={1000}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: formData.message ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
          {formData.message.length}/1000
        </div>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                className="flex-shrink-0"
              >
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  Error sending message
                </p>
                <p className="text-xs text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Button 
          type="submit" 
          disabled={loading || success || !isFormValid}
          className={`
            w-full relative overflow-hidden transition-all duration-300
            ${success 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <AnimatePresence mode="wait">
            {(() => {
              if (loading) {
                return (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </motion.div>
                )
              }
              
              if (success) {
                return (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </motion.div>
                )
              }
              
              return (
                <motion.div
                  key="send"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.div>
              )
            })()}
          </AnimatePresence>

          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="flex-shrink-0"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Message sent successfully!
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  I'll get back to you soon. You'll also receive a confirmation email. Thank you for reaching out!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFormValid ? 1 : 0.3 }}
        className="flex items-center gap-2 text-xs text-muted-foreground"
      >
        <div className="flex gap-1">
          {[formData.from_name, formData.from_email, formData.message].map((field, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                field.trim() ? 'bg-primary' : 'bg-muted-foreground/20'
              }`}
              animate={{ scale: field.trim() ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        <span>
          {[formData.from_name, formData.from_email, formData.message].filter(field => field.trim()).length}/3 fields completed
        </span>
      </motion.div>
    </form>
  )
}