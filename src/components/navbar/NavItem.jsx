import React from 'react'
import {Link} from 'react-scroll'

const NavItem = ({link, className = '', handleClick = null}) => {
  return (
    <li className={className}>
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

export default NavItem
