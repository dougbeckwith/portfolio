import React from 'react'
import {Link} from 'react-scroll'

const DesktopNavItem = ({link, handleClick = null}) => {
  return (
    <li className={`text-text hover:text-highlight px-4 cursor-pointer`}>
      <Link
        onClick={handleClick}
        to={link.elementName}
        smooth={true}
        duration={500}>
        {link.text}
      </Link>
    </li>
  )
}

export default DesktopNavItem
