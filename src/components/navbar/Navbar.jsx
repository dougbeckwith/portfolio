import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import SocialNavbar from './SocialNavbar'

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const handleClick = () => {
    setIsMobileMenu(!isMobileMenu)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <p className='text-pink-600 text-2xl'>Portfolio</p>
      </div>
      <DesktopNavbar />
      {/* Toggle Hamburger Icon / X Icon*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {isMobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <MobileNavbar isMobileMenu={isMobileMenu} handleClick={handleClick} />
      <SocialNavbar />
    </div>
  )
}

export default Navbar
