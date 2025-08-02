import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
   <>
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