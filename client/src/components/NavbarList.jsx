import React from 'react'
import { navData } from '../utils/navbarData'
const NavbarList = () => {
  return (
    <>
      {navData.map((data) => {
        const { id, label, href } = data
        return (
          <li key={id}>
            <a href={href}>{label}</a>
          </li>
        )
      })}
    </>
  )
}

export default NavbarList
