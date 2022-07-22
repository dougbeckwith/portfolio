import skillsData from './data/skillsData'
import SkillItem from './SkillItem'
import {v4 as uuidv4} from 'uuid'

const SkillsList = () => {
  return (
    <div className=' pt-5 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {skillsData.map((skill) => {
        return <SkillItem key={uuidv4()} skill={skill} />
      })}
    </div>
  )
}

export default SkillsList
