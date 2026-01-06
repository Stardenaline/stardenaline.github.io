'use client';

import { useEffect, useState } from 'react';

export default function GlowEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed w-64 h-64 rounded-full bg-radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0) 70%) pointer-events-none z-[-1]"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          animation: 'float-glow 8s ease-in-out infinite'
        }}
      />
      <div 
        className="fixed w-64 h-64 rounded-full bg-radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0) 70%) pointer-events-none z-[-1]"
        style={{
          bottom: '15%',
          right: '10%',
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          animation: 'float-glow-delayed 10s ease-in-out infinite'
        }}
      />
    </>
  );
}
