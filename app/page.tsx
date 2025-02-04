"use client"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { SectionTransitionManager } from "@/components/section-transition-manager"

export default function Home() {
  return (
    <main className="bg-black text-foreground relative min-h-screen">
      <Header />
      <SectionTransitionManager>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </SectionTransitionManager>
      <Footer />
    </main>
  )
}