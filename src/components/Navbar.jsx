import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

  
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <p className='text-pink-600 text-2xl'>Logo</p>
      </div>
      <div>
        {/*Main Nav Links*/}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Mobile Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {/* Display Icon based on Mobile nav state */}
        {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>

      {/* Mobile Nav Links */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
      {/* Social Icon Side Bar */}
      <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          
          <li className='w-[150px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-85px] hover:ml-[0px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-95px] hover:ml-[0px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Mail <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[180px] h-[60px] flex justify-between items-center bg-[#565f59] ml-[-115px] hover:ml-[0px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
