// TSX
"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SectionTransitionManagerProps {
  children: React.ReactNode
}

export function SectionTransitionManager({
  children,
}: SectionTransitionManagerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Seleciona todas as seções dentro do container
    const sections = Array.from(container.querySelectorAll("section")) as HTMLElement[]

    sections.forEach((section) => {
      // Define o ponto de origem para o efeito de "página virando"
      gsap.set(section, { transformOrigin: "bottom center" })

      // Cria uma timeline que pína a seção e, ao rolar, anima a saída com rotação
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
          markers: true,
          onEnter: () => {
            document.body.setAttribute("data-current-section", section.id)
          },
          onLeaveBack: () => {
            document.body.setAttribute("data-current-section", section.id)
          },
        },
      }).to(section, {
        duration: 1,
        y: -section.offsetHeight,   // desloca a seção para cima
        rotationX: -15,             // simula a página se levantando
        opacity: 0,                 // desaparece gradualmente
        ease: "power2.inOut",
      })
    })
  }, [])

  return <div ref={containerRef}>{children}</div>
}