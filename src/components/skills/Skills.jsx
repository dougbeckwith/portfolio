import SkillsList from './SkillsList'

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full bg-[#0a192f] text-gray-300 py-[100px] lg:py-[300px] flex justify-center items-center'>
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] pb-[50px] px-5 lg:px-0 mx-auto flex flex-col w-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Experience
          </p>
          <p className='py-4  text-[#8892b0]'>
            These are the technologies I've worked with. Interested in learning
            TypeScript next.
          </p>
        </div>
        <SkillsList />
      </div>
    </div>
  )
}

export default Skills
