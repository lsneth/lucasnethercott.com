import React from 'react'
import NavItem from './NavItem'
import Image from 'next/image'

export default function NavBar() {
  const navItemProps = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <nav className="flex justify-end m-5 text-right">
      <Image src="/logo.jpg" alt="lucasnethercott.com logo" width={32} height={32} className="flex-1 max-w-8 max-h-8" />
      <div className="flex-1">
        {navItemProps.map((props) => (
          <NavItem key={props.href} {...props} />
        ))}
      </div>
    </nav>
  )
}
