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
    <nav className="">
      <div className="grid grid-cols-2 m-5">
        <div />
        <div className="grid grid-cols-4">
          {navItemProps.map((props) => (
            <NavItem key={props.href} {...props} />
          ))}
        </div>
      </div>
    </nav>
  )
}
