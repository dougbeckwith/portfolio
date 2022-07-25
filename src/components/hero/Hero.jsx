import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Hero = () => {
  return (
    //  w-full md:w-9/12 2xl:w-8/12
    <div
      name='hero'
      className={`bg-background pt-[100px] md:pt-[0px] h-screen min-h-[700px]`}>
      <div className='container w-full h-full px-5 lg:px-0 mx-auto flex flex-col justify-center items-center'>
        <div className='text-left w-full'>
          <span className='text-highlight font-bold sm:text-xl text-lg pb-2'>
            Hi, my name is
          </span>
          <h1 className='text-3xl md:text-4xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-text'>
            Doug Beckwith
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl pt-[10px] font-bold text-text'>
            I'm a <span className='text-highlight'>Full Stack Developer.</span>
          </h2>
          <div className='max-w-[800px]  pt-4 pb-1'>
            <span className='text-text'>
              I love exploring and learning new technologies. User experience,
              and writing clean accessible code, matters to me. Currently, I'm
              working on building responsive full stack web applications.
            </span>
          </div>

          <div className='flex flex-wrap'>
            <a
              rel='noreferrer'
              target='_blank'
              className='text-highlight hover:text-pink'
              href='https://linkedin.com/in/dougbeckwith22'>
              <div className='w-[165px] h-[60px] flex items-center'>
                <FaLinkedin size={30} /> <span className='pl-2'>LinkedIn</span>
              </div>
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              className={`text-highlight hover:text-pink `}
              href='https://github.com/dougbeckwith'>
              <div className='w-[150px] h-[60px] flex items-center'>
                <FaGithub size={30} />
                <span className='pl-2'>GitHub</span>
              </div>
            </a>
          </div>
          <div className='max-w-max pt-2'>
            <Link to='projects' smooth={true} duration={500}>
              <button
                className={`text-[white] shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-pink  bg-highlight duration-200`}>
                View Work <HiArrowNarrowRight className='ml-3' />
              </button>
            </Link>
            {/* <Link to='projects' smooth={true} duration={500}>
            <button
              className={`text-highlight shadow-[#747773] border-2 rounded  px-6 py-3 my-2 flex items-center hover:text-pink  bg-white duration-200`}>
              View Work <HiArrowNarrowRight className='ml-3' />
            </button>
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
