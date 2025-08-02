"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Menu, Home, User, Briefcase, GraduationCap, Code, Phone, Wrench } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#about", label: "About", icon: User },
  { href: "/#skills", label: "Skills", icon: Code },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#education", label: "Education", icon: GraduationCap },
  { href: "/tools", label: "Tools", icon: Wrench },
  { href: "/#contact", label: "Contact", icon: Phone },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) {
      return pathname === "/" && (typeof window !== "undefined" && window.location.hash === href.slice(1))
    }
    return pathname === href
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const section = href.slice(2)
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md border-b border-border/50" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
              DS
            </div>
            <div className="hidden sm:block text-sm text-muted-foreground">
              Portfolio
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>
                <Button 
                  variant={isActive(item.href) ? "default" : "ghost"} 
                  size="sm"
                  className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-center space-y-2">
                  <h2 className="text-xl font-bold">Navigation</h2>
                  <p className="text-sm text-muted-foreground">
                    Explore my portfolio and tools
                  </p>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>
                        <Button 
                          variant={isActive(item.href) ? "default" : "ghost"} 
                          className="w-full justify-start gap-3 text-left"
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </Button>
                      </Link>
                    )
                  })}
                </nav>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Built with Next.js 15 & TypeScript
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

