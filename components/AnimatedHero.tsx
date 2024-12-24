"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Mesh } from 'three'
import { useScroll } from '@react-three/drei'

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null!)
  const { viewport } = useThree()
  const scroll = useScroll()

  useFrame(() => {
    const t = scroll.offset * Math.PI * 2
    meshRef.current.position.y = Math.sin(t) * viewport.height / 2
    meshRef.current.scale.setScalar(1 + Math.sin(t) * 0.5)
    meshRef.current.material.color.setHSL((scroll.offset % 1), 0.5, 0.5)
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={'#3b82f6'} />
    </mesh>
  )
}

export function AnimatedHero() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

