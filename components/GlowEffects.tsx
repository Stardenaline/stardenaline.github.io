'use client'

import { useEffect, useState } from 'react'

export default function GlowEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Animated Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Main Glow 1 */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animation: 'float-glow 15s ease-in-out infinite',
          }}
        />
        
        {/* Main Glow 2 */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            animation: 'float-glow 20s ease-in-out infinite 2s',
          }}
        />
        
        {/* Moving Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 7}s ease-in-out infinite ${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #00ffff 1px, transparent 1px),
                             linear-gradient(to bottom, #00ffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * -0.005}px)`,
          }}
        />
      </div>
    </>
  )
}
