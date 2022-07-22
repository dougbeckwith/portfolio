import React from 'react'
import {Link} from 'react-scroll'
const MobileNavItem = ({link, handleClick = null}) => {
  return (
    <li className={`text-text py-6 text-4xl hover:text-highlight`}>
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

export default MobileNavItem
