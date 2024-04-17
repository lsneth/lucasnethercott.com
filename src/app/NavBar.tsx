'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Text from './_components/Text'

export default function NavBar() {
  const navItemProps = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <nav className="flex justify-end items-center text-right my-10">
      <Link href="/">
        <div className="bg-gray py-1 px-3.5 rounded-full">
          <Text color="primary" size="md">
            L
          </Text>
        </div>
        {/* <Image src="/logo.png" alt="lucasnethercott.com logo" width={32} height={32} className="flex-1" /> */}
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
  if (isCurrentPage) linkStyle += ' text-primary'

  return (
    <Link href={href} className={linkStyle}>
      {text}
    </Link>
  )
}
