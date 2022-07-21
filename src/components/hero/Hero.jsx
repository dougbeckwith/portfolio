import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Hero = () => {
  return (
    <div name='hero' className={`bg-background h-[900px] lg:h-screen`}>
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] px-5 lg:px-0 mx-auto flex flex-col justify-center h-full'>
        <p className='text-highlight font-bold text-xl pb-2'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl 2xl:text-7xl font-bold text-[#232323]'>
          Doug Beckwith
        </h1>
        <h2 className='text-3xl sm:text-4xl 2xl:text-6xl pt-[10px] font-bold text-[#232323]'>
          I'm a <span className='text-highlight'>Full Stack Developer.</span>
        </h2>
        <p className='text-text py-4 max-w-[700px]'>
          I love exploring and learning new technologies. User experience, and
          writing clean accessible code, matters to me. Currently, I'm working
          on building responsive full stack web applications.
        </p>
        <div className='flex'>
          <a
            rel='noreferrer'
            target='_blank'
            className='text-highlight hover:text-pink'
            href='https://linkedin.com/in/dougbeckwith22'>
            <div className='w-[165px] h-[60px] flex items-center'>
              <FaLinkedin size={30} /> <p className='pl-2'>Linkedin</p>
            </div>
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            className={`text-highlight hover:text-pink `}
            href='https://github.com/dougbeckwith'>
            <div className='w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <p className='pl-2'>Github</p>
            </div>
          </a>
        </div>
        <div className='max-w-max'>
          <Link to='projects' smooth={true} duration={500}>
            <button
              className={`text-[white] shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-pink  bg-highlight duration-200`}>
              View Work <HiArrowNarrowRight className='ml-3' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
