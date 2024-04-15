import React from 'react'
import NavItem from './NavItem'

export default function NavBar() {
  const navItemProps = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <nav className="flex justify-end m-5 text-right">
      <div className="flex-1" />
      <div className="flex-1">
        {navItemProps.map((props) => (
          <NavItem key={props.href} {...props} />
        ))}
      </div>
    </nav>
  )
}
