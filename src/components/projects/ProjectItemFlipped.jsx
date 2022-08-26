import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

const ProjectItem = ({project, divider}) => {
  return (
    <section className='text-gray-600 dark:bg-gray-700 dark:text-gray-500'>
      <h3 className='text-[28px] lg:text-[36px] pt-6 lg:pt-0 pb-5 font-semibold'>
        {project.name}
      </h3>
      <div className='flex flex-col xl:flex-row-reverse w-full justify-between'>
        <div>
          <img
            className='w-[400px] h-[300px] xl:w-[500px] xl:h-[400px] rounded shadow-2xl dark:shadow-none'
            src={project.image}
            alt='project'
          />
          <div className='flex pt-5'>
            <a
              rel='noreferrer'
              target='_blank'
              className='text-teal-200 hover:text-teal-100'
              href={project.demoLink}>
              <figure className='flex items-center pr-5'>
                <BiLinkExternal alt='new window link svg' size={40} />{' '}
                <figcaption className='pl-2 text-lg'>Demo</figcaption>
              </figure>
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              className='text-teal-200 hover:text-teal-100'
              href={project.githubLink}>
              <figure className='flex items-center'>
                <FaGithub alt='github link svg' size={40} />
                <figcaption className='pl-2 text-lg'>GitHub</figcaption>
              </figure>
            </a>
          </div>
        </div>
        <section className='pt-7 xl:pt-0  flex-col max-w-[700px] 2xl:max-w-[900px]'>
          <h4 className='dark:text-teal-200 font-semibold'>Description</h4>
          <p className='pb-3'>{project.description}</p>
          <h4 className='dark:text-teal-200 font-semibold'>
            Problems and Solutions
          </h4>
          <p className='pb-3'>{project.problemsSolutions}</p>
          <h4 className='dark:text-teal-200 font-semibold'>Lessons Learned</h4>
          <p className='pb-3'>{project.lessonsLearned}</p>
          <h4 className='dark:text-teal-200 font-semibold'>Technologies</h4>
          <p className='pb-3 font-light'>{project.technologies.join(', ')}</p>
        </section>
      </div>
      {divider && <hr className='opacity-20 mt-5 lg:mt-8 lg:mb-8' />}
    </section>
  )
}

export default ProjectItem
