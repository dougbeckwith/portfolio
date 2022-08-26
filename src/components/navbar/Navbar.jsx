import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {useDarkMode} from '../../hooks/useDarkMode'
import {useEffect} from 'react'

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [theme, themeToggler] = useDarkMode()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [theme])

  const handleClick = () => {
    setIsMobileMenu(!isMobileMenu)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    themeToggler(newTheme)
  }

  return (
    <header
      className={`dark:bg-gray-700 dark:text-gray-500 w-full fixed z-10 h-[80px] flex justify-between items-center px-4 bg-gray-100`}>
      <div className='flex items-center'>
        <h1 className='text-teal-200 text-xl pr-2'>Portfolio</h1>
        {theme === 'light' ? (
          <MdDarkMode
            onClick={toggleTheme}
            size={25}
            color='#9ca3af'
            className='cursor-pointer'
          />
        ) : (
          <MdLightMode
            onClick={toggleTheme}
            size={25}
            color='#9ca3af'
            className='cursor-pointer'
          />
        )}
      </div>
      <DesktopNavbar />
      {/* Toggle Hamburger Icon / X Icon*/}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {isMobileMenu ? (
          <FaTimes size={30} color='#9ca3af' />
        ) : (
          <FaBars size={30} color='#9ca3af' />
        )}
      </div>
      <MobileNavbar isMobileMenu={isMobileMenu} handleClick={handleClick} />
    </header>
  )
}

export default Navbar
