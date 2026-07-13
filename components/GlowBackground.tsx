'use client'

import { useMouseGlow } from '@/hooks/useMouseGlow'

export function GlowBackground() {
  const { x, y } = useMouseGlow()

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle 300px at ${x}px ${y}px, rgba(0, 240, 255, 0.08) 0%, transparent 80%)`,
      }}
    />
  )
}
