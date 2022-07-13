import projectsData from './data/projectsData'
import ProjectItem from './ProjectItem'
import {v4 as uuidv4} from 'uuid'

const ProjectList = () => {
  return (
    <div className='flex gap-20 flex-wrap  text-[#8892b0]'>
      {projectsData
        .slice(0)
        .reverse()
        .map((project) => {
          return <ProjectItem key={uuidv4()} project={project} />
        })}
    </div>
  )
}

export default ProjectList
