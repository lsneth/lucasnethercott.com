import React from 'react'

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className="text-center p-10 ${className}">
      <p>©2024 Lucas Nethercott</p>
    </footer>
  )
}
