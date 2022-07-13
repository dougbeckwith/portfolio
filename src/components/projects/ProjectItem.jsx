import React from 'react'

const ProjectItem = ({project}) => {
  return (
    <div className='max-w-[380px] pb-5 bg-[#0a192f] flex items-center flex-col text-md'>
      <div>
        <img
          className='w-[380px] h-[300px] rounded'
          src={project.image}
          alt=''
        />
      </div>
      <p className='py-4'>{project.description}</p>
      <div className='flex w-full items-center py-2'>
        {/* <TechnologyList technologies={project.technologies} /> */}
        <div className='h-full'>
          <p className='text-md'>{project.technologies.join(', ')}</p>
        </div>
      </div>
      <div className='flex w-full'>
        <a rel='noreferrer' target='_blank' href={project.demoLink}>
          {/* If there is demo link create link to project */}
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
          {/* If there is github link create link to github */}
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
}

export default ProjectItem
