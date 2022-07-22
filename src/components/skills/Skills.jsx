import SkillsList from './SkillsList'

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full bg-background h-screen text-gray-300 py-[100px] lg:py-[300px] flex justify-center items-center'>
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] pb-[50px] px-5 lg:px-0 mx-auto flex flex-col w-full'>
        <div>
          <p className='text-4xl text-text font-bold inline border-b-4 border-highlight'>
            Experience
          </p>
          <p className='py-4  text-text font-light'>
            These are the technologies I've worked with. I'm interested in
            learning TypeScript next.
          </p>
        </div>
        <SkillsList />
      </div>
    </div>
  )
}

export default Skills
