import React from 'react'
import { navData } from '../utils/navbarData'
const NavbarList = () => {
  return (
    <>
      {navData.map((data) => {
        const { label, href } = data
        return (
          <li>
            <a href={href}>{label}</a>
          </li>
        )
      })}
    </>
  )
}

export default NavbarList
