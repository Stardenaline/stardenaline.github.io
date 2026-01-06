'use client'

import { useEffect, useState } from 'react'

export default function GlowEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div 
        className="fixed w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none z-0"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          animation: 'float-glow 8s ease-in-out infinite',
        }}
      />
      <div 
        className="fixed w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none z-0"
        style={{
          bottom: '15%',
          right: '10%',
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          animation: 'float-glow 10s ease-in-out infinite 2s',
        }}
      />
    </>
  )
}
