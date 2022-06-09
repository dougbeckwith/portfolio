import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] py-[200px] lg:py-[400px]'>
      {/* Container */}
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] px-5 lg:px-0 mx-auto flex flex-col justify-center h-full w-full'>
        <p className='text-pink-600 text-lg'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl 2xl:text-7xl font-bold text-[#ccd6f6]'>
          Doug Beckwith
        </h1>
        <h2 className='text-4xl sm:text-5xl 2xl:text-6xl pt-[10px] font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I love exploring and learning new technologies. User experience, and
          writing clean accessible code matters to me. Currently I'm working on
          building responsive full stack web applications.
        </p>
        <div>
          <Link to='projects' smooth={true} duration={500}>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200'>
              View Work <HiArrowNarrowRight className='ml-3' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
