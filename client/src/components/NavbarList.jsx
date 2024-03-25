import { useState } from 'react'
import { navData } from '../utils/navbarData'
const NavbarList = () => {
  const [selected, setSelected] = useState(null)
  const handleClick = (id) => {
    setSelected(id)
  }
  return (
    <>
      {navData.map((data) => {
        const { id, label, href } = data
        return (
          <li key={id}>
            <a href={href}>
              <span className="text-base">{label}</span>
            </a>
          </li>
        )
      })}
    </>
  )
}

export default NavbarList
