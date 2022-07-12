import {navbarData} from './data/navbarData'
import {v4 as uuidv4} from 'uuid'
import NavItem from './NavItem'

const MobileNavbar = ({isMobileMenu, handleClick}) => {
  return (
    <ul
      className={
        isMobileMenu
          ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          : 'hidden'
      }>
      {navbarData.map((link) => {
        return (
          <NavItem
            key={uuidv4()}
            link={link}
            className={'py-6 text-4xl'}
            handleClick={handleClick}
          />
        )
      })}
    </ul>
  )
}

export default MobileNavbar
