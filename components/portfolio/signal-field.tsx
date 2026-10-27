"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { Component } from "react"
import type { CSSProperties, ErrorInfo, PointerEvent, ReactNode } from "react"
import { localizePath, type Locale } from "@/lib/portfolio/paths"

export type SignalMode = "telemetry" | "flow" | "network"

const SignalCanvas = dynamic(
  () => import("./signal-field-canvas").then((module) => module.SignalFieldCanvas),
  { ssr: false },
)

const points = {
  "pt-BR": [
    { label: "Telemetria", path: "/work/eli-control", x: "17%", y: "20%", mode: "telemetry" },
    { label: "Logística", path: "/about#ford", x: "70%", y: "13%", mode: "flow" },
    { label: "Refrigeração", path: "/work/eli-control", x: "10%", y: "69%", mode: "telemetry" },
    { label: "Saúde", path: "/about#unimed", x: "51%", y: "82%", mode: "network" },
    { label: "Plataformas", path: "/work/eli-pecas", x: "73%", y: "68%", mode: "flow" },
  ],
  en: [
    { label: "Telemetry", path: "/work/eli-control", x: "17%", y: "20%", mode: "telemetry" },
    { label: "Logistics", path: "/about#ford", x: "70%", y: "13%", mode: "flow" },
    { label: "Refrigeration", path: "/work/eli-control", x: "10%", y: "69%", mode: "telemetry" },
    { label: "Healthcare", path: "/about#unimed", x: "51%", y: "82%", mode: "network" },
    { label: "Platforms", path: "/work/eli-pecas", x: "73%", y: "68%", mode: "flow" },
  ],
} satisfies Record<Locale, Array<{
  label: string
  path: string
  x: string
  y: string
  mode: SignalMode
}>>

function StaticSignalField() {
  return (
    <svg aria-hidden="true" className="signal-fallback" viewBox="0 0 720 460">
      <defs>
        <linearGradient id="signal-teal" x1="0" x2="1">
          <stop offset="0" stopColor="#08766f" stopOpacity=".08" />
          <stop offset=".52" stopColor="#08766f" stopOpacity=".9" />
          <stop offset="1" stopColor="#08766f" stopOpacity=".2" />
        </linearGradient>
        <linearGradient id="signal-amber" x1="0" x2="1">
          <stop offset="0" stopColor="#08766f" stopOpacity=".2" />
          <stop offset=".55" stopColor="#b8741c" stopOpacity=".8" />
          <stop offset="1" stopColor="#b8741c" stopOpacity=".12" />
        </linearGradient>
        <radialGradient id="signal-core">
          <stop stopColor="#08766f" stopOpacity=".28" />
          <stop offset="1" stopColor="#08766f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="360" cy="230" rx="112" ry="95" fill="url(#signal-core)" />
      <g fill="none" strokeLinecap="round">
        {Array.from({ length: 9 }, (_, index) => {
          const offset = index * 17
          const y = 110 + index * 30
          return (
            <path
              d={`M 356 230 C ${270 - offset} ${y - 20}, ${190 + offset} ${y + 28}, 24 ${y} C 210 ${y - 38}, 420 ${y + 36}, 710 ${y - 14}`}
              key={index}
              stroke={index % 3 === 0 ? "url(#signal-amber)" : "url(#signal-teal)"}
              strokeWidth={index % 3 === 0 ? 1.25 : 1.6}
              opacity={0.28 + (index % 4) * 0.12}
            />
          )
        })}
      </g>
      <g fill="#08766f">
        <circle cx="359" cy="230" r="8" />
        <circle cx="205" cy="154" r="3" />
        <circle cx="526" cy="139" r="3" />
        <circle cx="490" cy="323" r="3" />
        <circle cx="248" cy="319" r="2.5" />
      </g>
    </svg>
  )
}

class SignalCanvasBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Signal field could not start.", error, info.componentStack)
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

export function SignalField({
  locale,
  mode = "telemetry",
}: {
  locale: Locale
  mode?: SignalMode
}) {
  const fieldRef = useRef<HTMLDivElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [webglSupported, setWebglSupported] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [canvasFailed, setCanvasFailed] = useState(false)
  const [activeMode, setActiveMode] = useState<SignalMode>(mode)
  const pointerRef = useRef({ x: 0, y: 0 })
  const labels = points[locale]

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(preference.matches)

    updatePreference()
    preference.addEventListener("change", updatePreference)
    return () => preference.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    const testCanvas = document.createElement("canvas")
    const context =
      testCanvas.getContext("webgl2") ?? testCanvas.getContext("webgl")

    setWebglSupported(Boolean(context))
    context?.getExtension("WEBGL_lose_context")?.loseContext()
  }, [])

  useEffect(() => {
    const target = fieldRef.current
    if (!target || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setActiveMode(mode)
  }, [mode])

  const handleCanvasError = useCallback((error: Error) => {
    console.error("Signal field fell back to its static illustration.", error)
    setCanvasFailed(true)
  }, [])

  const useCanvas =
    webglSupported && !prefersReducedMotion && isVisible && !canvasFailed
  const fallback = <StaticSignalField />
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    if (!bounds.width || !bounds.height) return
    pointerRef.current.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
    pointerRef.current.y = 1 - ((event.clientY - bounds.top) / bounds.height) * 2
  }

  return (
    <div className="signal-field" onPointerMove={handlePointerMove} ref={fieldRef}>
      <div className="signal-field-visual" aria-hidden="true">
        <div className="signal-grid" />
        {useCanvas ? (
          <SignalCanvasBoundary fallback={fallback}>
            <SignalCanvas
              active={isVisible}
              mode={activeMode}
              onError={handleCanvasError}
              pointerRef={pointerRef}
            />
          </SignalCanvasBoundary>
        ) : (
          fallback
        )}
      </div>

      <nav
        aria-label={
          locale === "en"
            ? "Explore work by field"
            : "Explore trabalhos por área"
        }
        className="signal-nodes"
      >
        {labels.map((point) => (
          <Link
            className={`signal-node signal-node-${point.mode}`}
            href={localizePath(locale, point.path)}
            key={point.label}
            onFocus={() => setActiveMode(point.mode)}
            onMouseEnter={() => setActiveMode(point.mode)}
            style={
              {
                left: point.x,
                top: point.y,
              } as CSSProperties
            }
          >
            <span className="signal-node-dot" aria-hidden="true" />
            {point.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
