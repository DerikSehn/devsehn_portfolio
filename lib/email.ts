import nodemailer from 'nodemailer'

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export interface KanbanTask {
  id: string
  title: string
  description: string
  column: string
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
  dueDate?: Date
}

export class EmailService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  /**
   * Send a general email
   */
  async sendEmail({ to, subject, html, text }: EmailOptions): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
        text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
      })
      return true
    } catch (error) {
      console.error('Error sending email:', error)
      return false
    }
  }

  /**
   * Send Kanban tasks as email
   */
  async sendKanbanTasks(
    tasks: KanbanTask[],
    userEmail: string,
    userName?: string
  ): Promise<boolean> {
    const tasksByColumn = tasks.reduce((acc, task) => {
      if (!acc[task.column]) acc[task.column] = []
      acc[task.column].push(task)
      return acc
    }, {} as Record<string, KanbanTask[]>)

    const html = this.generateKanbanEmailHTML(tasksByColumn, userName)
    
    return this.sendEmail({
      to: process.env.SMTP_USER!, // Send to yourself
      subject: `Kanban Tasks from ${userName || userEmail}`,
      html,
    })
  }

  /**
   * Generate HTML for Kanban tasks email
   */
  private generateKanbanEmailHTML(
    tasksByColumn: Record<string, KanbanTask[]>,
    userName?: string
  ): string {
    const priorityColors = {
      low: '#10B981',
      medium: '#F59E0B',
      high: '#EF4444',
    }

    const columns = Object.keys(tasksByColumn)
    
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Kanban Tasks Export</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background-color: #f8fafc; }
            .container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
            .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
            .header h1 { color: #1f2937; margin: 0; font-size: 28px; }
            .header p { color: #6b7280; margin: 10px 0 0 0; }
            .columns { display: flex; gap: 20px; flex-wrap: wrap; }
            .column { flex: 1; min-width: 300px; background: #f9fafb; border-radius: 8px; padding: 20px; }
            .column-header { font-size: 18px; font-weight: 600; color: #374151; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px; }
            .task { background: white; border-radius: 6px; padding: 15px; margin-bottom: 15px; border-left: 4px solid #e5e7eb; box-shadow: 0 1px 3px rgb(0 0 0 / 0.1); }
            .task-title { font-weight: 600; color: #1f2937; margin-bottom: 8px; }
            .task-description { color: #4b5563; margin-bottom: 10px; line-height: 1.5; }
            .task-meta { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #6b7280; }
            .priority { padding: 2px 8px; border-radius: 12px; color: white; font-weight: 500; text-transform: uppercase; font-size: 10px; }
            .priority-low { background-color: ${priorityColors.low}; }
            .priority-medium { background-color: ${priorityColors.medium}; }
            .priority-high { background-color: ${priorityColors.high}; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 Kanban Tasks Export</h1>
              <p>From: ${userName || 'Portfolio Visitor'} • Generated: ${new Date().toLocaleString()}</p>
            </div>
            
            <div class="columns">
              ${columns.map(column => `
                <div class="column">
                  <div class="column-header">${column}</div>
                  ${tasksByColumn[column].map(task => `
                    <div class="task">
                      <div class="task-title">${task.title}</div>
                      <div class="task-description">${task.description}</div>
                      <div class="task-meta">
                        <span class="priority priority-${task.priority}">${task.priority}</span>
                        ${task.dueDate ? `<span>Due: ${new Date(task.dueDate).toLocaleDateString()}</span>` : ''}
                      </div>
                    </div>
                  `).join('')}
                </div>
              `).join('')}
            </div>
            
            <div class="footer">
              <p>This email was generated from the Portfolio Kanban Tool</p>
              <p>Visit <a href="${process.env.NEXT_PUBLIC_SITE_URL}">Dérik Sehn's Portfolio</a> for more interactive tools</p>
            </div>
          </div>
        </body>
      </html>
    `
  }
}

// Export singleton instance
export const emailService = new EmailService()
