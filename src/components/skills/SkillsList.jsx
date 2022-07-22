import skillsData from './data/skillsData'
import SkillItem from './SkillItem'
import {AiOutlineHtml5} from 'react-icons/ai'
import {v4 as uuidv4} from 'uuid'

const SkillsList = () => {
  return (
    <div className=' pt-5 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {skillsData.map((skill) => {
        // return <SkillItem key={uuidv4()} skill={skill} />
        return (
          <div className='text-highlight w-[150px] h-[60px] flex items-center'>
            <AiOutlineHtml5 size={30} />
            <span className='pl-2'>Node.js</span>
          </div>
        )
      })}
    </div>
  )
}

export default SkillsList
