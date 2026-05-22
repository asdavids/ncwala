import React from 'react'

export default function SkeletonLoader({ count = 3, variant = 'article' }) {
  if (variant === 'article') {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {Array(count).fill(0).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="skeleton h-64 rounded-lg"></div>
            <div className="skeleton h-6 w-3/4 rounded"></div>
            <div className="skeleton h-4 w-full rounded"></div>
            <div className="skeleton h-4 w-2/3 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'gallery') {
    return (
      <div className="grid md:grid-cols-4 gap-4">
        {Array(count).fill(0).map((_, i) => (
          <div key={i} className="skeleton h-48 rounded-lg"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className="skeleton h-4 w-full rounded"></div>
      ))}
    </div>
  )
}
