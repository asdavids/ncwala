import React, { useEffect, useState } from 'react'

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, 3500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-ncwala-black z-[9999] flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <div className="mb-8 animate-zoom-in">
          <div className="text-7xl font-cinzel-decorative text-ncwala-gold">
            ✦
          </div>
        </div>
        <h1 className="text-4xl font-cinzel-decorative text-ncwala-white mb-4 animate-fade-in">
          Ncwala
        </h1>
        <p className="text-xl text-ncwala-gold font-cinzel animate-fade-in">
          Welcome to Royalty
        </p>
      </div>
    </div>
  )
}
