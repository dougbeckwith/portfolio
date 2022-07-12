import {navbarData} from './data/navbarData'
import NavItem from './NavItem'
import {v4 as uuidv4} from 'uuid'

const DesktopNavbar = () => {
  return (
    <ul className='hidden md:flex'>
      {navbarData.map((link) => {
        return <NavItem key={uuidv4()} link={link} />
      })}
    </ul>
  )
}

export default DesktopNavbar
