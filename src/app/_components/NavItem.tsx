'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function NavItem({ href, text }: { href: string; text: string }) {
  const isCurrentPage = usePathname() === href
  let linkStyle = 'ml-10'
  if (isCurrentPage) linkStyle += ' text-primary'

  return (
    <Link href={href} className={linkStyle}>
      {text}
    </Link>
  )
}
