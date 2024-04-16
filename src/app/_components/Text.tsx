import React from 'react'

export default function Text({
  children,
  size = 'sm',
  color = 'default',
  align = 'left',
}: {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'default'
  align?: 'left' | 'center' | 'right'
}) {
  const stylesMap = {
    default: {
      sm: {
        left: 'text-base text-left',
        center: 'text-base text-center',
        right: 'text-base text-right',
      },
      md: {
        left: 'text-3xl text-left',
        center: 'text-3xl text-center',
        right: 'text-3xl text-right',
      },
      lg: {
        left: 'text-7xl text-left',
        center: 'text-7xl text-center',
        right: 'text-7xl text-right',
      },
    },
    primary: {
      sm: {
        left: 'text-base text-left text-primary',
        center: 'text-base text-center text-primary',
        right: 'text-base text-right text-primary',
      },
      md: {
        left: 'text-3xl text-left text-primary',
        center: 'text-3xl text-center text-primary',
        right: 'text-3xl text-right text-primary',
      },
      lg: {
        left: 'text-7xl text-left text-primary',
        center: 'text-7xl text-center text-primary',
        right: 'text-7xl text-right text-primary',
      },
    },
  }

  return <p className={stylesMap[color][size][align]}>{children}</p>
}
