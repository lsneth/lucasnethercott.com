import React from 'react'

export default function Text({
  children,
  size = 'sm',
  color = '',
}: {
  children: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | ''
}) {
  const stylingSize = size === 'lg' ? 'text-6xl' : size === 'md' ? 'text-3xl' : 'text-base'
  const stylingColor = 'text-' + color

  const styling = stylingSize + ' ' + stylingColor

  return <p className={styling}>{children}</p>
}
