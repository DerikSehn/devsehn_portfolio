import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { ElectricCircuits } from "@/components/ui/electric-circuits"

export default function Home() {
  return (
   <>
     {/* Electric Circuits Background */}
      <ElectricCircuits 
        className="opacity-80 fixed" 
        gridSize={100}
        interactionRadius={150}
      />
     {/*  <SectionTransitionManager> */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
{/*       </SectionTransitionManager>
 */}      <Footer />
   </>
    
  )
}