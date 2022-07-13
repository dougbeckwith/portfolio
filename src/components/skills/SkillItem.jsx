const SkillItem = ({skill}) => {
  return (
    <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <img className='w-20' src={skill.image} alt='' />
      <p className='mt-4'>{skill.skillName}</p>
    </div>
  )
}

export default SkillItem
