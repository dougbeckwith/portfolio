import {navbarData} from './data/navbarData'
import {v4 as uuidv4} from 'uuid'
import DesktopNavItem from './DesktopNavItem'

const DesktopNavbar = () => {
  return (
    <ul className='hidden md:flex'>
      {navbarData.map((link) => {
        return <DesktopNavItem key={uuidv4()} link={link} />
      })}
    </ul>
  )
}

export default DesktopNavbar
