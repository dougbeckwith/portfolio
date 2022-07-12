import projectsData from './data/projectsData'
import TechnologyList from './TechnologyList'
import {v4 as uuidv4} from 'uuid'

const ProjectList = () => {
  return projectsData
    .slice(0)
    .reverse()
    .map((project) => {
      return (
        <div
          key={uuidv4()}
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
            <TechnologyList technologies={project.technologies} />
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
    })
}

export default ProjectList
