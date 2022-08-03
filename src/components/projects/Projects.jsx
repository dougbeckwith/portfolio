import ProjectList from './ProjectList.jsx'

const Projects = () => {
  return (
    <div
      name='projects'
      className='dark:bg-gray-700 dark:text-gray-500 w-full pt-[100px] lg:pt-[200px] bg-gray-100 text-gray-600'>
      <div className='container w-full h-full px-5 lg:px-0 mx-auto flex flex-col justify-center items-center  '>
        <div className='text-left w-full '>
          <h2 className='text-3xl md:text-4xl font-bold inline border-b-4 border-teal-200'>
            Projects
          </h2>
          <p className='pt-4 pb-0 lg:pb-6 md:text-lg '>
            These are my personal projects I've completed, or I'm currently
            working on. Please allow for slow load time on projects deployed on
            Heroku.
          </p>
          <ProjectList />
        </div>
      </div>
    </div>
  )
}

export default Projects
