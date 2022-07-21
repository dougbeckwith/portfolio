import React from 'react'
import {Link} from 'react-scroll'
import {main} from '../../colors'
const MobileNavItem = ({link, handleClick = null}) => {
  return (
    <li className={`text-[${main}] py-6 text-4xl`}>
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
