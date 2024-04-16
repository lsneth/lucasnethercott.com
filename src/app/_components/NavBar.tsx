import React from 'react'
import NavItem from './NavItem'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  const navItemProps = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <nav className="flex justify-end items-center my-5 mx-8 text-right">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="lucasnethercott.com logo"
          width={32}
          height={32}
          className="flex-1 max-w-8 max-h-8"
        />
      </Link>
      <div className="flex-1">
        {navItemProps.map((props) => (
          <NavItem key={props.href} {...props} />
        ))}
      </div>
    </nav>
  )
}
