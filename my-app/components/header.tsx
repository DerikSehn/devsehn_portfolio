"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DS</h1>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" href="#about">About</Button>
          <Button variant="ghost" href="#skills">Skills</Button>
          <Button variant="ghost" href="#experience">Experience</Button>
          <Button variant="ghost" href="#education">Education</Button>
          <Button variant="ghost" href="#contact">Contact</Button>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <Button variant="ghost" href="#about">About</Button>
                <Button variant="ghost" href="#skills">Skills</Button>
                <Button variant="ghost" href="#experience">Experience</Button>
                <Button variant="ghost" href="#education">Education</Button>
                <Button variant="ghost" href="#contact">Contact</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

