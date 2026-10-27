"use client"

import { useEffect, useRef } from "react"
import type { MutableRefObject } from "react"

type SignalMode = "telemetry" | "flow" | "network"

const vertexShaderSource = `
  attribute vec2 aPosition;
  varying vec2 vUv;

  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision mediump float;

  uniform float uTime;
  uniform float uAspect;
  uniform float uMode;
  uniform vec2 uPointer;
  varying vec2 vUv;

  float curveDistance(float x, float y, float endX, float endY, float bend) {
    float t = clamp(x / endX, 0.0, 1.0);
    float curveY = endY * t + bend * 4.0 * t * (1.0 - t);
    return abs(y - curveY);
  }

  void main() {
    vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
    float strands = 0.0;
    float particles = 0.0;
    float rightSide = step(0.0, p.x);
    float leftSide = step(p.x, 0.0);

    for (int i = 0; i < 7; i++) {
      float index = float(i) / 6.0;
      float endY = mix(-0.48, 0.48, index);
      float endX = uAspect * 0.63;
      float bend = (index - 0.5) * 0.34;
      float distanceToCurve = curveDistance(
        p.x,
        p.y,
        endX,
        endY,
        bend
      );
      strands += rightSide * (1.0 - smoothstep(0.002, 0.015, distanceToCurve));

      float pulseT = fract(uTime * 0.045 + index * 0.31);
      float pulseY = endY * pulseT + bend * 4.0 * pulseT * (1.0 - pulseT);
      vec2 pulseDelta = p - vec2(endX * pulseT, pulseY);
      particles += 1.0 - smoothstep(0.00004, 0.00045, dot(pulseDelta, pulseDelta));
    }

    for (int i = 0; i < 4; i++) {
      float index = float(i) / 3.0;
      float endY = mix(-0.42, 0.42, index);
      float endX = -uAspect * 0.58;
      float distanceToCurve = curveDistance(
        p.x,
        p.y,
        endX,
        endY,
        (0.5 - index) * 0.2
      );
      strands +=
        leftSide * 0.65 * (1.0 - smoothstep(0.002, 0.015, distanceToCurve));
    }

    float core = exp(-dot(p, p) * 12.0);
    vec2 pointerPoint = vec2(uPointer.x * uAspect * 0.5, uPointer.y * 0.5);
    vec2 pointerDelta = p - pointerPoint;
    float pointerGlow = exp(-dot(pointerDelta, pointerDelta) * 12.0) * 0.13;
    float amberMix = smoothstep(-0.12, 0.62, p.x);

    if (uMode > 1.5) {
      amberMix = smoothstep(-0.35, 0.42, p.y) * 0.3;
    } else if (uMode > 0.5) {
      amberMix = smoothstep(-0.2, 0.4, p.x) * 0.82;
    }

    vec3 teal = vec3(0.035, 0.43, 0.40);
    vec3 amber = vec3(0.67, 0.37, 0.08);
    vec3 color = mix(teal, amber, amberMix);
    float alpha = clamp(
      strands * 0.25 + core * 0.38 + pointerGlow + particles * 0.08,
      0.0,
      0.64
    );
    gl_FragColor = vec4(
      color + core * 0.18 + vec3(0.02, 0.05, 0.02) * particles,
      alpha
    );
  }
`

function compileShader(
  context: WebGLRenderingContext,
  kind: number,
  source: string,
): WebGLShader {
  const shader = context.createShader(kind)
  if (!shader) throw new Error("WebGL could not create a shader.")

  context.shaderSource(shader, source)
  context.compileShader(shader)

  if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
    const details = context.getShaderInfoLog(shader) ?? "Unknown shader error."
    context.deleteShader(shader)
    throw new Error(`Signal shader compilation failed: ${details}`)
  }

  return shader
}

function getModeValue(mode: SignalMode): number {
  if (mode === "flow") return 1
  if (mode === "network") return 2
  return 0
}

export function SignalFieldCanvas({
  active,
  mode,
  onError,
  pointerRef,
}: {
  active: boolean
  mode: SignalMode
  onError: (error: Error) => void
  pointerRef: MutableRefObject<{ x: number; y: number }>
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modeRef = useRef(mode)
  const onErrorRef = useRef(onError)

  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  useEffect(() => {
    onErrorRef.current = onError
  }, [onError])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !active) return

    const context = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    })
    if (!context) {
      onErrorRef.current(new Error("WebGL is unavailable for the signal field."))
      return
    }

    let vertexShader: WebGLShader | null = null
    let fragmentShader: WebGLShader | null = null
    let program: WebGLProgram | null = null
    let buffer: WebGLBuffer | null = null
    let frame = 0

    try {
      vertexShader = compileShader(context, context.VERTEX_SHADER, vertexShaderSource)
      fragmentShader = compileShader(context, context.FRAGMENT_SHADER, fragmentShaderSource)
      program = context.createProgram()
      if (!program) throw new Error("WebGL could not create a signal program.")

      context.attachShader(program, vertexShader)
      context.attachShader(program, fragmentShader)
      context.linkProgram(program)

      if (!context.getProgramParameter(program, context.LINK_STATUS)) {
        const details = context.getProgramInfoLog(program) ?? "Unknown shader link error."
        throw new Error(`Signal shader linking failed: ${details}`)
      }

      buffer = context.createBuffer()
      if (!buffer) throw new Error("WebGL could not create the signal buffer.")

      const position = context.getAttribLocation(program, "aPosition")
      const time = context.getUniformLocation(program, "uTime")
      const aspect = context.getUniformLocation(program, "uAspect")
      const fieldMode = context.getUniformLocation(program, "uMode")
      const pointer = context.getUniformLocation(program, "uPointer")

      if (position < 0 || !time || !aspect || !fieldMode || !pointer) {
        throw new Error("The signal shader is missing a required input.")
      }

      context.bindBuffer(context.ARRAY_BUFFER, buffer)
      context.bufferData(
        context.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        context.STATIC_DRAW,
      )
      context.enableVertexAttribArray(position)
      context.vertexAttribPointer(position, 2, context.FLOAT, false, 0, 0)
      context.useProgram(program)
      context.enable(context.BLEND)
      context.blendFunc(context.SRC_ALPHA, context.ONE_MINUS_SRC_ALPHA)

      const resize = () => {
        const bounds = canvas.getBoundingClientRect()
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1)
        const width = Math.max(1, Math.round(bounds.width * pixelRatio))
        const height = Math.max(1, Math.round(bounds.height * pixelRatio))

        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
        }
      }

      let lastFrame = 0
      const draw = (timestamp: number) => {
        if (timestamp - lastFrame < 32) {
          frame = window.requestAnimationFrame(draw)
          return
        }
        lastFrame = timestamp
        resize()
        context.viewport(0, 0, canvas.width, canvas.height)
        context.clearColor(0, 0, 0, 0)
        context.clear(context.COLOR_BUFFER_BIT)
        context.useProgram(program)
        context.uniform1f(time, timestamp * 0.001)
        context.uniform1f(aspect, canvas.width / canvas.height)
        context.uniform1f(fieldMode, getModeValue(modeRef.current))
        context.uniform2f(pointer, pointerRef.current.x, pointerRef.current.y)
        context.drawArrays(context.TRIANGLES, 0, 3)
        frame = window.requestAnimationFrame(draw)
      }

      const handleContextLost = (event: Event) => {
        event.preventDefault()
        onErrorRef.current(new Error("The signal field WebGL context was lost."))
      }

      canvas.addEventListener("webglcontextlost", handleContextLost)
      const observer =
        typeof ResizeObserver === "undefined"
          ? null
          : new ResizeObserver(resize)
      observer?.observe(canvas)
      window.addEventListener("resize", resize)
      resize()
      frame = window.requestAnimationFrame(draw)

      return () => {
        window.cancelAnimationFrame(frame)
        window.removeEventListener("resize", resize)
        canvas.removeEventListener("webglcontextlost", handleContextLost)
        observer?.disconnect()
        if (program) context.deleteProgram(program)
        if (buffer) context.deleteBuffer(buffer)
        if (vertexShader) context.deleteShader(vertexShader)
        if (fragmentShader) context.deleteShader(fragmentShader)
      }
    } catch (error) {
      if (program) context.deleteProgram(program)
      if (buffer) context.deleteBuffer(buffer)
      if (vertexShader) context.deleteShader(vertexShader)
      if (fragmentShader) context.deleteShader(fragmentShader)
      onErrorRef.current(
        error instanceof Error ? error : new Error("The signal shader could not start."),
      )
    }
  }, [active, pointerRef])

  return <canvas aria-hidden="true" className="signal-canvas" ref={canvasRef} />
}
