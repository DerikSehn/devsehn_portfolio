'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Editor } from '@monaco-editor/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Play, 
  Download, 
  Share2, 
  Copy, 
  RotateCcw,
  FileCode,
  Terminal,
  Zap
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'

export interface CodeSnippet {
  id: string
  title: string
  language: string
  code: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

const SUPPORTED_LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', extension: 'js', icon: '🟨' },
  { id: 'typescript', name: 'TypeScript', extension: 'ts', icon: '🔷' },
  { id: 'python', name: 'Python', extension: 'py', icon: '🐍' },
  { id: 'html', name: 'HTML', extension: 'html', icon: '🌐' },
  { id: 'css', name: 'CSS', extension: 'css', icon: '🎨' },
  { id: 'json', name: 'JSON', extension: 'json', icon: '📋' },
  { id: 'markdown', name: 'Markdown', extension: 'md', icon: '📝' }
] as const

const DEFAULT_CODE_TEMPLATES = {
  javascript: `// Welcome to the Code Playground!
// Try running this JavaScript example

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 10 Fibonacci numbers
const numbers = Array.from({ length: 10 }, (_, i) => fibonacci(i));
console.log('Fibonacci sequence:', numbers);

// DOM manipulation example
document.body.style.background = 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)';
console.log('Background updated!');`,

  typescript: `// TypeScript example with interfaces and generics

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

class UserManager<T extends User> {
  private users: T[] = [];

  addUser(user: T): void {
    this.users.push(user);
    console.log(\`Added user: \${user.name}\`);
  }

  getUser(id: number): T | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): T[] {
    return [...this.users];
  }
}

// Usage example
const manager = new UserManager<User>();
manager.addUser({ id: 1, name: 'John Doe', email: 'john@example.com', age: 30 });
manager.addUser({ id: 2, name: 'Jane Smith', email: 'jane@example.com' });

console.log('All users:', manager.getAllUsers());`,

  python: `# Python example with classes and list comprehensions

class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def multiply(self, a, b):
        result = a * b
        self.history.append(f"{a} * {b} = {result}")
        return result
    
    def get_history(self):
        return self.history

# Create calculator instance
calc = Calculator()

# Perform calculations
print(calc.add(5, 3))
print(calc.multiply(4, 7))

# List comprehension example
squares = [x**2 for x in range(1, 11)]
print(f"Squares: {squares}")

# Dictionary comprehension
square_dict = {x: x**2 for x in range(1, 6)}
print(f"Square dictionary: {square_dict}")

print("Calculator history:")
for entry in calc.get_history():
    print(f"  {entry}")`,

  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Demo</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
        }
        .card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 30px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        button {
            background: #ff6b6b;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <h1>🚀 Welcome to Code Playground!</h1>
            <p>This is an interactive HTML demo. Click the button below!</p>
            <button onclick="showMessage()">Click Me!</button>
            <div id="message" style="margin-top: 20px;"></div>
        </div>
    </div>

    <script>
        function showMessage() {
            const messages = [
                "🎉 Awesome!",
                "✨ Keep exploring!",
                "🔥 You're doing great!",
                "💡 Creative coding!",
                "🌟 Amazing work!"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            document.getElementById('message').innerHTML = 
                \`<h2>\${randomMessage}</h2><p>Time: \${new Date().toLocaleTimeString()}</p>\`;
        }
    </script>
</body>
</html>`,

  css: `/* Modern CSS with animations and gradients */

:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ff6b6b;
  --text-color: #333;
  --bg-color: #f8fafc;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

.hero-section {
  height: 100vh;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.cta-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape:nth-child(2) {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.shape:nth-child(3) {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
}`,

  json: `{
  "name": "code-playground-demo",
  "version": "1.0.0",
  "description": "A demonstration of JSON structure and data organization",
  "author": {
    "name": "Developer",
    "email": "dev@example.com",
    "portfolio": "https://portfolio.example.com"
  },
  "config": {
    "theme": {
      "primary": "#667eea",
      "secondary": "#764ba2",
      "accent": "#ff6b6b",
      "backgrounds": {
        "light": "#ffffff",
        "dark": "#1a1a1a"
      }
    },
    "features": {
      "darkMode": true,
      "animations": true,
      "notifications": true,
      "autoSave": true
    },
    "editor": {
      "fontSize": 14,
      "tabSize": 2,
      "wordWrap": true,
      "minimap": false,
      "lineNumbers": true
    }
  },
  "supportedLanguages": [
    {
      "id": "javascript",
      "name": "JavaScript",
      "icon": "🟨",
      "extensions": [".js", ".mjs"]
    },
    {
      "id": "typescript", 
      "name": "TypeScript",
      "icon": "🔷",
      "extensions": [".ts", ".tsx"]
    },
    {
      "id": "python",
      "name": "Python", 
      "icon": "🐍",
      "extensions": [".py", ".pyw"]
    }
  ],
  "sampleData": {
    "users": [
      {
        "id": 1,
        "username": "john_doe",
        "email": "john@example.com",
        "profile": {
          "firstName": "John",
          "lastName": "Doe",
          "age": 30,
          "skills": ["JavaScript", "Python", "React"],
          "projects": 15,
          "rating": 4.8
        },
        "preferences": {
          "theme": "dark",
          "language": "en",
          "notifications": true
        }
      },
      {
        "id": 2,
        "username": "jane_smith",
        "email": "jane@example.com", 
        "profile": {
          "firstName": "Jane",
          "lastName": "Smith",
          "age": 28,
          "skills": ["TypeScript", "Vue.js", "Node.js"],
          "projects": 23,
          "rating": 4.9
        },
        "preferences": {
          "theme": "light",
          "language": "en",
          "notifications": false
        }
      }
    ],
    "statistics": {
      "totalUsers": 1250,
      "activeProjects": 89,
      "completedTasks": 5670,
      "averageRating": 4.7,
      "languages": {
        "JavaScript": 45,
        "TypeScript": 30,
        "Python": 25
      }
    }
  }
}`,

  markdown: `# 🚀 Code Playground Documentation

Welcome to the **Code Playground** - an interactive coding environment for learning, experimenting, and sharing code snippets!

## ✨ Features

### 🎯 Multi-Language Support
- **JavaScript** - Modern ES6+ syntax
- **TypeScript** - Type-safe development  
- **Python** - Data science and general programming
- **HTML** - Web structure and content
- **CSS** - Styling and animations
- **JSON** - Data configuration
- **Markdown** - Documentation (like this!)

### 🔧 Editor Capabilities
- **Syntax Highlighting** - Beautiful, theme-aware code display
- **Auto-completion** - Intelligent code suggestions
- **Error Detection** - Real-time syntax checking
- **Multiple Themes** - Light and dark mode support
- **Customizable** - Adjustable font size and settings

### 💾 Persistence & Sharing
- **Auto-save** - Your work is preserved locally
- **Export Options** - Download as files
- **Share Snippets** - Copy shareable links
- **Version History** - Track your changes

## 🏃‍♂️ Quick Start

1. **Choose Your Language** - Select from the language dropdown
2. **Start Coding** - Write your code in the editor
3. **Run & Test** - Execute your code to see results
4. **Save & Share** - Export or share your creations

## 📝 Code Examples

### JavaScript Function
\`\`\`javascript
function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

console.log(calculateFibonacci(10)); // 55
\`\`\`

### Python Class
\`\`\`python
class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
\`\`\`

### TypeScript Interface
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  skills: string[];
}

const user: User = {
  id: 1,
  name: "John Doe", 
  email: "john@example.com",
  skills: ["JavaScript", "TypeScript", "React"]
};
\`\`\`

## 🎨 Customization

### Themes
- **Light Theme** - Clean, bright interface
- **Dark Theme** - Eye-friendly coding in low light
- **Auto Theme** - Follows system preference

### Editor Settings
- Font size: 12px - 24px
- Tab size: 2 or 4 spaces
- Word wrap: On/Off
- Line numbers: Show/Hide
- Minimap: Enable/Disable

## 🔗 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Ctrl + S\` | Save current snippet |
| \`Ctrl + R\` | Run code |
| \`Ctrl + /\` | Toggle comment |
| \`Ctrl + D\` | Duplicate line |
| \`Alt + ↑/↓\` | Move line up/down |
| \`Ctrl + Shift + K\` | Delete line |

## 🛠️ Technical Details

Built with modern web technologies:
- **Monaco Editor** - VS Code's editor
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations

## 🤝 Contributing

Have ideas for new features or improvements? We'd love to hear from you!

- Submit bug reports
- Request new language support  
- Suggest UI/UX improvements
- Share interesting code snippets

---

## 📚 Learn More

### Resources
- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Python Documentation](https://docs.python.org/) - Python reference

### Tips for Success
1. **Experiment Freely** - Try new concepts without fear
2. **Read Documentation** - Understanding is key to mastery  
3. **Practice Regularly** - Consistency builds expertise
4. **Share Knowledge** - Teaching others reinforces learning

Happy coding! 🎉`
}

interface CodePlaygroundProps {
  className?: string
}

export default function CodePlayground({ className }: CodePlaygroundProps) {
  const { theme } = useTheme()
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const [code, setCode] = useState(DEFAULT_CODE_TEMPLATES.javascript)
  const [editorTheme, setEditorTheme] = useState<'vs-light' | 'vs-dark'>('vs-dark')
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<string>('')
  const [savedSnippets, setSavedSnippets] = useState<CodeSnippet[]>([])
  const editorRef = useRef<any>(null)

  // Update editor theme based on system theme
  useEffect(() => {
    setEditorTheme(theme === 'dark' ? 'vs-dark' : 'vs-light')
  }, [theme])

  // Load saved snippets from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('code-playground-snippets')
    if (saved) {
      try {
        const parsed = JSON.parse(saved).map((snippet: any) => ({
          ...snippet,
          createdAt: new Date(snippet.createdAt),
          updatedAt: new Date(snippet.updatedAt)
        }))
        setSavedSnippets(parsed)
      } catch (error) {
        console.error('Failed to load saved snippets:', error)
      }
    }
  }, [])

  // Auto-save current code
  useEffect(() => {
    const saveTimer = setTimeout(() => {
      localStorage.setItem(`code-playground-current-${selectedLanguage}`, code)
    }, 1000)

    return () => clearTimeout(saveTimer)
  }, [code, selectedLanguage])

  // Load saved code when language changes
  useEffect(() => {
    const saved = localStorage.getItem(`code-playground-current-${selectedLanguage}`)
    if (saved) {
      setCode(saved)
    } else {
      setCode(DEFAULT_CODE_TEMPLATES[selectedLanguage as keyof typeof DEFAULT_CODE_TEMPLATES] || '')
    }
  }, [selectedLanguage])

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId)
    setOutput('')
  }

  const handleRunCode = async () => {
    setIsRunning(true)
    setOutput('')

    try {
      if (selectedLanguage === 'javascript') {
        // Create a sandbox for JavaScript execution
        const logs: string[] = []
        const originalConsoleLog = console.log
        
        // Override console.log to capture output
        console.log = (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '))
          originalConsoleLog(...args)
        }

        try {
          // Execute the code in a try-catch to handle errors
          eval(code)
          setOutput(logs.join('\n') || 'Code executed successfully (no output)')
        } catch (error) {
          setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`)
        } finally {
          // Restore original console.log
          console.log = originalConsoleLog
        }
      } else if (selectedLanguage === 'html') {
        // For HTML, we'll show a preview instead of running
        setOutput('HTML preview would be shown in a separate panel')
        toast.success('HTML code ready for preview!')
      } else {
        setOutput(`Code execution for ${selectedLanguage} is not supported in the browser environment.\nThis feature would require a backend service.`)
      }
    } catch (error) {
      setOutput(`Execution Error: ${error instanceof Error ? error.message : String(error)}`)
    }

    setIsRunning(false)
  }

  const handleSaveSnippet = () => {
    const currentLang = SUPPORTED_LANGUAGES.find(lang => lang.id === selectedLanguage)
    const title = prompt('Enter a title for this snippet:')
    
    if (!title?.trim()) {
      toast.error('Please provide a title for the snippet')
      return
    }

    const newSnippet: CodeSnippet = {
      id: `snippet-${Date.now()}`,
      title: title.trim(),
      language: selectedLanguage,
      code,
      description: `${currentLang?.name} code snippet`,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const updatedSnippets = [...savedSnippets, newSnippet]
    setSavedSnippets(updatedSnippets)
    
    localStorage.setItem('code-playground-snippets', JSON.stringify(updatedSnippets))
    toast.success('Snippet saved successfully!')
  }

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      toast.success('Code copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy code:', error)
      toast.error('Failed to copy code')
    }
  }

  const handleDownloadCode = () => {
    const currentLang = SUPPORTED_LANGUAGES.find(lang => lang.id === selectedLanguage)
    const filename = `code-snippet.${currentLang?.extension || 'txt'}`
    
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast.success(`Code downloaded as ${filename}`)
  }

  const handleResetCode = () => {
    const template = DEFAULT_CODE_TEMPLATES[selectedLanguage as keyof typeof DEFAULT_CODE_TEMPLATES]
    if (template) {
      setCode(template)
      setOutput('')
      toast.success('Code reset to template')
    }
  }

  const currentLanguage = SUPPORTED_LANGUAGES.find(lang => lang.id === selectedLanguage)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`space-y-6 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <CardHeader>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FileCode className="h-6 w-6 text-blue-500" />
            Code Playground
          </h2>
          <p className="text-muted-foreground">
            Interactive code editor with live execution
          </p>
        </CardHeader>
        
        {/* Language Selector */}
        <CardContent className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {currentLanguage?.icon} {currentLanguage?.name}
          </Badge>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {SUPPORTED_LANGUAGES.map(lang => (
              <option key={lang.id} value={lang.id}>
                {lang.icon} {lang.name}
              </option>
            ))}
          </select>
        </CardContent>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor Panel */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Editor
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleResetCode}
                  className="h-8 px-2"
                >
                  <RotateCcw className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyCode}
                  className="h-8 px-2"
                >
                  <Copy className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownloadCode}
                  className="h-8 px-2"
                >
                  <Download className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <div className="h-full border rounded-b-lg overflow-hidden">
              <Editor
                height="100%"
                language={selectedLanguage}
                theme={editorTheme}
                value={code}
                onChange={(value) => setCode(value || '')}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: 'on',
                  fontFamily: 'Fira Code, Consolas, Monaco, "Courier New", monospace'
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Output
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="h-8 px-3"
                >
                  {isRunning ? (
                    <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Play className="h-3 w-3" />
                  )}
                  {isRunning ? 'Running...' : 'Run'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleSaveSnippet}
                  className="h-8 px-3"
                >
                  <Share2 className="h-3 w-3 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-3">
            <div className="h-full bg-muted/30 rounded-lg p-4 font-mono text-sm overflow-auto">
              {output ? (
                <pre className="whitespace-pre-wrap text-foreground">
                  {output}
                </pre>
              ) : (
                <div className="text-muted-foreground italic">
                  Click "Run" to execute your code and see the output here...
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Saved Snippets */}
      {savedSnippets.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="h-4 w-4" />
              Saved Snippets ({savedSnippets.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {savedSnippets.slice(-6).map((snippet) => {
                const lang = SUPPORTED_LANGUAGES.find(l => l.id === snippet.language)
                return (
                  <motion.div
                    key={snippet.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 border border-border rounded-lg bg-muted/20 cursor-pointer hover:bg-muted/40 transition-colors"
                    onClick={() => {
                      setSelectedLanguage(snippet.language)
                      setCode(snippet.code)
                      toast.success(`Loaded: ${snippet.title}`)
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{lang?.icon}</span>
                      <span className="font-medium text-sm truncate">{snippet.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {snippet.updatedAt.toLocaleDateString()}
                    </p>
                    <code className="text-xs bg-muted/50 px-2 py-1 rounded block truncate">
                      {snippet.code.split('\n')[0] || 'Empty snippet'}
                    </code>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  )
}
