import React from 'react'

export default function Text({
  children,
  className,
  size = 'sm',
}: {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  const sizeStyle = {
    sm: 'text-base',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'max-sm:text-5xl sm: text-7xl',
  }

  return <p className={`max-w-3xl ${sizeStyle[size]} ${className}`}>{children}</p>
}
