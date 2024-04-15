'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function NavItem({ href, text }: { href: string; text: string }) {
  const isCurrentPage = usePathname() === href

  return (
    <Link href={href} className={isCurrentPage ? 'text-slate-500' : ''}>
      {text}
    </Link>
  )
}
