import projectsData from './data/projectsData'
import ProjectItem from './ProjectItem'
import ProjectItemFlipped from './ProjectItemFlipped'

const ProjectList = () => {
  return (
    <div>
      <ProjectItem project={projectsData[3]} divider={true} />
      <ProjectItemFlipped project={projectsData[2]} divider={true} />
      <ProjectItem project={projectsData[1]} divider={true} />
      <ProjectItemFlipped project={projectsData[0]} divider={false} />
    </div>
  )
}

export default ProjectList
