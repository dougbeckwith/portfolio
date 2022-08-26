import {navbarData} from './data/navbarData'
import {v4 as uuidv4} from 'uuid'
import MobileNavbarItem from './MobileNavItem'

const MobileNavbar = ({isMobileMenu, handleClick}) => {
  return (
    <nav
      className={
        isMobileMenu
          ? `dark:bg-gray-700 absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col items-center justify-center cursor-pointer`
          : 'hidden'
      }>
      <ul>
        {navbarData.map((link) => {
          return (
            <MobileNavbarItem
              key={uuidv4()}
              link={link}
              handleClick={handleClick}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default MobileNavbar
