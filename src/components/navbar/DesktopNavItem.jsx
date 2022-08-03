import React from 'react'
import {Link} from 'react-scroll'

const DesktopNavItem = ({link, handleClick = null}) => {
  return (
    <li className='dark:text-gray-500 dark:hover:text-teal-200 text-gray-600 text-md 2xl:text-lg hover:text-teal-200 px-4 cursor-pointer'>
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
