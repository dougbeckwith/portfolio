import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const SocialNavbar = () => {
  return (
    <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <a
          rel='noreferrer'
          target='_blank'
          className='flex justify-between items-center w-full text-gray-300'
          href='https://ca.linkedin.com/in/doug-beckwith-1284b9224'>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
            Linkedin <FaLinkedin size={30} />
          </li>
        </a>
        <a
          rel='noreferrer'
          target='_blank'
          className='flex justify-between items-center w-full text-gray-300'
          href='https://github.com/dougbeckwith'>
          <li className='w-[150px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-85px] hover:ml-[0px] duration-300'>
            Github <FaGithub size={30} />
          </li>
        </a>
        <Link
          className='flex justify-between items-center w-full text-gray-300'
          to='contact'
          smooth={true}
          duration={500}>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-95px] hover:ml-[0px] duration-300'>
            Mail <HiOutlineMail size={30} />
          </li>
        </Link>
        {/* <Link
            className='flex justify-between items-center w-full text-gray-300'
            to='home'
            smooth={true}
            duration={500}>
            <li className='w-[180px] h-[60px] flex justify-between items-center bg-[#565f59] ml-[-115px] hover:ml-[0px] duration-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </li>
          </Link> */}
      </ul>
    </div>
  )
}

export default SocialNavbar
