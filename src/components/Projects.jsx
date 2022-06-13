import React from 'react'
import projectsData from '../projects.js'
import Technologies from './Technologies.jsx'

const Work = () => {
  //Creates project JSX from projectsData file
  const projects = projectsData

  const projectElements = projects.map((project) => {
    const list = project.technologies
    console.log(list)
    return (
      <div
        key={project.id}
        className='max-w-[380px] pb-5 bg-[#0a192f] flex items-center flex-col text-md'>
        <div>
          <img
            className='w-[380px] h-[300px] rounded'
            src={project.image}
            alt=''
          />
        </div>
        <p className='py-4'>{project.description}</p>
        <div className='flex w-full items-center py-2'>
          <Technologies text={list} />
        </div>
        <div className='flex w-full'>
          <a rel='noreferrer' target='_blank' href={project.demoLink}>
            <button
              className={
                project.demo
                  ? 'text-white border-2 px-3 py-2 mr-3 hover:bg-pink-600 border-pink-600 duration-200'
                  : 'hidden'
              }>
              Demo
            </button>
          </a>

          <a rel='noreferrer' target='_blank' href={project.githubLink}>
            <button
              className={
                project.github
                  ? 'text-white border-2 px-3 py-2 mr-3 hover:bg-pink-600 border-pink-600 duration-200'
                  : 'hidden'
              }>
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
          {projectElements}
        </div>
      </div>
    </div>
  )
}

export default Work
