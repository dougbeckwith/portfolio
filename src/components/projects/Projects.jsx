import ProjectList from './ProjectList.jsx'

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full pt-[100px] md:pt-[200px] bg-background text-gray-300'>
      <div className='container w-full h-full px-5 lg:px-0 mx-auto flex flex-col justify-center items-center'>
        <div className='text-left w-full '>
          <h2 className='text-4xl text-text font-bold inline border-b-4 border-highlight'>
            Projects
          </h2>
          <p className='pt-4 pb-9  text-[#3f3e3e] text-xl'>
            These are my personal projects I've completed or I'm currently
            working on.
          </p>

          <ProjectList />
        </div>
      </div>
    </div>
  )
}

export default Projects

// lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] px-5 lg:px-0 mx-auto
