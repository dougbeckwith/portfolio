import React from 'react'
import projectsData from '../projects.js'
import { useState } from 'react'

const Work = () => {
  //Creates project JSX from projectsData file
  const [projects, setProjects] = useState(projectsData)
  const projectElements = projects.map((project) => {
    return (
      <div
        key={project.id}
        className='max-w-[380px] mb-10 mr-10  bg-[#0a192f] flex items-center flex-col'
      >
        <div>
          <img src={project.image.img1} alt='' />
        </div>
        <p className='py-4'>{project.description}</p>
        <div className='flex w-full'>
          <a rel='noreferrer' target='_blank' href={project.demoLink}>
            <button
              className={
                project.demo
                  ? 'text-white border-2 px-6 py-3 mr-3 hover:bg-pink-600 border-pink-600 duration-200'
                  : 'hidden'
              }
            >
              Demo
            </button>
          </a>

          <a rel='noreferrer' target='_blank' href={project.githubLink}>
            <button className='text-white border-2 px-6 py-3 hover:bg-pink-600 border-pink-600 duration-200'>
              GitHub
            </button>
          </a>
        </div>
      </div>
    )
  })

  return (
    <div
      name='projects'
      className='w-full py-[100px] bg-[#0a192f] text-gray-300'
    >
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] px-5 lg:px-0 mx-auto'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Projects
          </p>
          <p className='pt-4 pb-9'>
            These are my personal projects ive completed
          </p>
        </div>
        <div className='flex flex-wrap'>{projectElements}</div>
      </div>
    </div>
  )
}

export default Work
