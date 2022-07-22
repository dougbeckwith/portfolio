import SkillsList from './SkillsList'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-background h-screen pt-[100px]'>
      <div className='container px-5 lg:px-0 mx-auto w-full flex flex-col justify-center items-center'>
        <div className='text-left w-full md:w-9/12 2xl:w-8/12'>
          <p className='text-4xl text-text font-bold inline border-b-4 border-highlight'>
            Skills
          </p>
          <section className='py-4  text-text'>
            These are the technologies I've worked with. I'm interested in
            learning TypeScript next.
          </section>
          <SkillsList />
        </div>
      </div>
    </div>
  )
}

export default Skills
