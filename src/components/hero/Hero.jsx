import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Hero = () => {
  return (
    <div
      name='hero'
      className='dark:bg-gray-700 dark:text-gray-500 bg-gray-100 pt-5 md:pt-[0px] h-screen text-gray-600'>
      <div className='container w-full h-full px-5 mx-auto flex flex-col justify-center items-center'>
        <article className='text-left w-full'>
          <h2 className='text-teal-200 font-bold sm:text-xl text-lg xl:pl-1'>
            Hi, my name is
          </h2>
          <h2 className='text-3xl md:text-4xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-bold '>
            Doug Beckwith
          </h2>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl pt-[10px] font-bold '>
            I'm a <span className='text-teal-200'>Full Stack Developer.</span>
          </h2>
          <p className='max-w-[800px] pt-4 pb-1'>
            I love exploring and learning new technologies. User experience, and
            writing clean accessible code, matters to me. Currently, I'm working
            on building responsive full stack web applications.
          </p>
          <div className='flex flex-wrap'>
            <a
              rel='noreferrer'
              target='_blank'
              className='text-teal-200 hover:text-teal-100'
              href='https://linkedin.com/in/dougbeckwith22'>
              <figure className='w-[165px] h-[60px] flex items-center'>
                <FaLinkedin alt='LinkedIn svg' size={30} />{' '}
                <figcaption className='pl-2'>LinkedIn</figcaption>
              </figure>
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              className={`text-teal-200 hover:text-teal-100 `}
              href='https://github.com/dougbeckwith'>
              <figure className='w-[150px] h-[60px] flex items-center'>
                <FaGithub alt='GitHub svg' size={30} />
                <figcaption className='pl-2'>GitHub</figcaption>
              </figure>
            </a>
          </div>
          <div className='max-w-max pt-2'>
            <Link to='projects' smooth={true} duration={500}>
              <button className='dark:shadow-none dark:text-gray-200 text-white shadow-[#747773]  shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-teal-100  bg-teal-200 duration-200'>
                View Work{' '}
                <HiArrowNarrowRight alt='Arrow svg' className='ml-3' />
              </button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Hero
