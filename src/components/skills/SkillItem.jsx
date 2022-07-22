const SkillItem = ({skill}) => {
  return (
    <div className='bg-[#fff] rounded p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px]  shadow-md'>
      <img className='w-20' src={skill.image} alt='' />
      <p className='mt-4'>{skill.skillName}</p>
    </div>
  )
}

export default SkillItem
