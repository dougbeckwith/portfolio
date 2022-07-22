import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

const ProjectItem = ({project}) => {
  return (
    <div className='pb-10'>
      <h3 className='text-[36px] pt-4 lg:pt-0 pb-5 font-semibold text-[#393a39]'>
        {project.name}
      </h3>
      <div className='flex flex-col lg:flex-row w-full justify-between'>
        <img
          className='w-[500px] h-[400px] rounded shadow-2xl'
          src={project.image}
          alt=''
        />

        <div className='flex-col max-w-[900px]'>
          <p className='font-semibold'>Description</p>
          <p className='pb-3'>{project.description}</p>
          <p className='font-semibold'>Problems and Solutions</p>
          <p className='pb-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut
            ratione officiis obcaecati, iste, exercitationem incidunt quasi sint
            pariatur dignissimos quibusdam quae placeat iure consequatur aliquid
            harum ad eaque quod.
          </p>
          <p className='font-semibold'>Lessons Learned</p>
          <p className='pb-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut
            ratione officiis obcaecati, iste, exercitationem incidunt quasi sint
            pariatur dignissimos quibusdam quae placeat iure consequatur aliquid
            harum ad eaque quod.
          </p>
          <p className='font-semibold'>Technologies</p>

          <p className='pb-3 text-text font-light'>
            {project.technologies.join(', ')}
          </p>

          {/* <div className='flex w-full gap-2'> */}
          {/* <a rel='noreferrer' target='_blank' href={project.demoLink}> */}
          {/* If there is demo link create link to project */}
          {/* <button
              className={
                project.demo
                  ? 'text-[white] shadow-[#747773] shadow-md rounded  px-3 py-2 my-2 flex items-center hover:bg-pink  bg-highlight duration-200'
                  : 'hidden'
              }>
              Demo
            </button>
          </a>
          <a rel='noreferrer' target='_blank' href={project.githubLink}> */}
          {/* If there is github link create link to github */}
          {/* <button
              className={
                project.github
                  ? 'text-[white] shadow-[#747773] shadow-md rounded  px-3 py-2 my-2 flex items-center hover:bg-pink  bg-highlight duration-200'
                  : 'hidden'
              }>
              GitHub
            </button>
          </a> */}
          {/* </div> */}
          <div className='flex'>
            <a
              rel='noreferrer'
              target='_blank'
              className='text-highlight hover:text-pink'
              href='https://linkedin.com/in/dougbeckwith22'>
              <div className='w-[165px] h-[60px] flex items-center'>
                <BiLinkExternal size={30} /> <p className='pl-2'>Demo</p>
              </div>
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              className={`text-highlight hover:text-pink `}
              href='https://github.com/dougbeckwith'>
              <div className='w-[150px] h-[60px] flex items-center'>
                <FaGithub size={30} />
                <p className='pl-2'>GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='w-full border border-text mt-20 border-opacity-10'></div>
    </div>
  )
}

export default ProjectItem

// <div className='px-8 pt-4 shadow-md rounded shadow-[#040c16] max-w-[500px] pb-5 bg-background flex items-center flex-col text-md'>
//       <div>
//         <img
//           className='w-[380px] h-[300px] rounded'
//           src={project.image}
//           alt=''
//         />
//       </div>
//       <p className='py-4'>{project.description}</p>
//       <div className='flex w-full items-center py-2'>
//         <div className='h-full'>
//           <p className='text-md'>{project.technologies.join(', ')}</p>
//         </div>
//       </div>
//       <div className='flex w-full gap-2'>
//         <a rel='noreferrer' target='_blank' href={project.demoLink}>
//           {/* If there is demo link create link to project */}
//           <button
//             className={
//               project.demo
//                 ? 'text-[white] shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-pink  bg-highlight duration-200'
//                 : 'hidden'
//             }>
//             Demo
//           </button>
//         </a>
//         <a rel='noreferrer' target='_blank' href={project.githubLink}>
//           {/* If there is github link create link to github */}
//           <button
//             className={
//               project.github
//                 ? 'text-[white] shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-pink  bg-highlight duration-200'
//                 : 'hidden'
//             }>
//             GitHub
//           </button>
//         </a>
//       </div>
//     </div>
