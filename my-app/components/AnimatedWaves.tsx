"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { MeshWobbleMaterial } from '@react-three/drei'

function Wave({ position, color, speed, wobble }: { position: [number, number, number], color: string, speed: number, wobble: number }) {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.1
  })

  return (
    <mesh ref={meshRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <MeshWobbleMaterial color={color} factor={wobble} speed={1} />
    </mesh>
  )
}

export function AnimatedWaves() {
  const waves = useMemo(() => [
    { position: [0, -0.2, 0], color: '#3b82f6', speed: 0.5, wobble: 0.2 },
    { position: [0, -0.1, 0], color: '#60a5fa', speed: 0.3, wobble: 0.1 },
    { position: [0, 0, 0], color: '#93c5fd', speed: 0.2, wobble: 0.05 },
    { position: [0, 0.1, 0], color: '#e5e7eb', speed: 0.4, wobble: 0.15 },
    { position: [0, 0.2, 0], color: '#f3f4f6', speed: 0.6, wobble: 0.25 },
  ], [])

  return (
    <div className="absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {waves.map((wave, index) => (
          <Wave key={index} {...wave} />
        ))}
      </Canvas>
    </div>
  )
}

