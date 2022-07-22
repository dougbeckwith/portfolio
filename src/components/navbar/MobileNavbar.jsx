import {navbarData} from './data/navbarData'
import {v4 as uuidv4} from 'uuid'
import MobileNavbarItem from './MobileNavItem'

const MobileNavbar = ({isMobileMenu, handleClick}) => {
  return (
    <ul
      className={
        isMobileMenu
          ? `absolute top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center cursor-pointer`
          : 'hidden'
      }>
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
  )
}

export default MobileNavbar
