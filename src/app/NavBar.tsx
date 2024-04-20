'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Text from './_components/Text'

export default function NavBar() {
  const navItemProps = [
    { href: '/', text: 'Home' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <nav className="flex justify-end items-center text-right my-5 pb-5 border-b-2 border-gray">
      <Link href="/">
        <div className="bg-gray py-1 px-3.5 rounded-full">
          <Text size="md">L</Text>
        </div>
      </Link>
      <div className="flex-1">
        {navItemProps.map((props) => (
          <NavItem key={props.href} {...props} />
        ))}
      </div>
    </nav>
  )
}

function NavItem({ href, text }: { href: string; text: string }) {
  const isCurrentPage = usePathname() === href
  let linkStyle = 'ml-10'
  if (isCurrentPage) linkStyle += ' text-accent1'

  return (
    <Link href={href} className={linkStyle}>
      {text}
    </Link>
  )
}
