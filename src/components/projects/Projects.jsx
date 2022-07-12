import React from 'react'
import ProjectList from './ProjectList.jsx'

const Work = () => {
  //Creates project JSX from projectsData file

  return (
    <div
      name='projects'
      className='w-full py-[100px] bg-[#0a192f] text-gray-300'>
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] px-5 lg:px-0 mx-auto'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Projects
          </p>
          <p className='pt-4 pb-9  text-[#8892b0]'>
            These are my personal projects I've completed.
          </p>
        </div>
        <div className='flex gap-20 flex-wrap  text-[#8892b0]'>
          <ProjectList />
        </div>
      </div>
    </div>
  )
}

export default Work
