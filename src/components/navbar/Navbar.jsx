import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

// Colors

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const handleClick = () => {
    setIsMobileMenu(!isMobileMenu)
  }

  return (
    <div
      className={`w-full fixed z-10 h-[80px] flex justify-between items-center px-4 bg-background`}>
      <div>
        <p className={`text-highlight text-xl`}>Portfolio</p>
      </div>
      <DesktopNavbar />
      {/* Toggle Hamburger Icon / X Icon*/}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {isMobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <MobileNavbar isMobileMenu={isMobileMenu} handleClick={handleClick} />
      {/* <SocialNavbar /> */}
    </div>
  )
}

export default Navbar
