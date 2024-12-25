"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import * as THREE from "three"

function SpiralWave() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (meshRef.current) {
        gsap.to(meshRef.current.rotation, {
          y: window.scrollY * 0.005,
          duration: 0.5,
          ease: "power2.out"
        })
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const points = []
  for (let i = 0; i < 200; i++) {
    points.push(new THREE.Vector3(
      Math.sin(i * 0.1) * 1,
      i * 0.2,
      Math.cos(i * 0.1) * 1
    ))
  }
  const geometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(points),
    200,
    0.2,
    8,
    false
  )

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color="white" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

function PlasmaSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sphereRef.current) {
        gsap.to(sphereRef.current.rotation, {
          y: window.scrollY * 0.005,
          duration: 0.5,
          ease: "power2.out"
        })
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <mesh ref={sphereRef} position={[0, 5, 0]} castShadow receiveShadow>
      <sphereGeometry args={[.5, 32, 32]} />
      <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} metalness={0.5} roughness={0.5} />
      <pointLight color="#00ffff" intensity={2} distance={5} />
    </mesh>
  )
}

export default function Home() {
  return (
    <main className="min-h-[800vh] bg-black text-foreground relative">
      <div className="sticky top-0 w-full h-screen">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 5, 10]} />
          <ambientLight intensity={0.2} color="#0a0a0a" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#00ffff" castShadow />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" castShadow />
          <directionalLight
            castShadow
            position={[2.5, 8, 1]}
            intensity={1.5}
            color="#ffffff"
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <SpiralWave />
          <PlasmaSphere />
        </Canvas>
      </div>
      {/* <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer /> */}
    </main>
  )
}

