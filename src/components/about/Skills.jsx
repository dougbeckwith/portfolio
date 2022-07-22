import {
  FaNodeJs,
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from 'react-icons/fa'
import {SiTailwindcss, SiMongodb, SiExpress} from 'react-icons/si'

import img from './html.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-background py-[200px]'>
      <div className='container px-5 lg:px-0 mx-auto w-full flex flex-col justify-center items-center'>
        <div className='text-left w-full'>
          <p className='text-4xl text-text font-bold inline border-b-4 border-highlight'>
            Skills
          </p>
          <section className='py-4  text-text text-xl'>
            These are the technologies I've worked with.
          </section>

          <ul className='flex flex-wrap gap-8 text-highlight'>
            {/* <div className='text-highlight flex items-center'>
              <FaHtml5 size={30} />
              <span className='pl-2'>HTML</span>
            </div> */}
            <div className='text-highlight flex items-center'>
              <FaJsSquare size={30} />
              <span className='pl-2'>JavaScript</span>
            </div>
            <div className='text-highlight flex items-center'>
              <FaReact size={30} />
              <span className='pl-2'>React</span>
            </div>
            <div className='text-highlight flex items-center'>
              <SiTailwindcss size={30} />
              <span className='pl-2 w-[130px]'>Tailwind CSS</span>
            </div>

            <div className='text-highlight flex items-center'>
              <FaNodeJs size={30} />
              <span className='pl-2'>Node.js</span>
            </div>

            <div className='text-highlight flex items-center'>
              <SiMongodb size={30} />
              <span className='pl-2'>MongoDB</span>
            </div>
            <div className='text-highlight flex items-center'>
              <FaGitAlt size={30} />
              <span className='pl-2'>Git</span>
            </div>
            <div className='text-highlight flex items-center'>
              <SiExpress size={25} />

              <span className='pl-2'>Express</span>
            </div>
          </ul>
          {/* <h3 className='font-light'>Frontend</h3>
          <ul className='flex gap-8 text-highlight'>
            <li className='h-[40px] text-highlight flex items-center'>
              <FaHtml5 size={30} />
              <span className='pl-2'>HTML</span>
            </li>
            <li className='h-[40px] text-highlight flex items-center'>
              <FaCss3Alt size={30} />
              <span className='pl-2'>CSS</span>
            </li>
            <li className='h-[40px] text-highlight flex items-center'>
              <FaJsSquare size={30} />
              <span className='pl-2'>JavaScript</span>
            </li>
            <li className='h-[40px] text-highlight w-[150px] flex items-center'>
              <FaReact size={30} />
              <span className='pl-2'>React</span>
            </li>
          </ul>
          <h3 className='text-lg'>Backend</h3>
          <ul className='flex gap-4 text-highlight'>
            <li className='text-highlight w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <span className='pl-2'>GitHub</span>
            </li>
            <li className='text-highlight w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <span className='pl-2'>GitHub</span>
            </li>
            <li className='text-highlight w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <span className='pl-2'>GitHub</span>
            </li>
            <li className='text-highlight w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <span className='pl-2'>GitHub</span>
            </li>
          </ul>
          <h3 className='text-lg'>Tools</h3>
          <ul className='flex gap-4 text-highlight'>
            <div className='text-highlight w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <span className='pl-2'>GitHub</span>
            </div>
            <div className='text-highlight w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <span className='pl-2'>GitHub</span>
            </div>
            <div className='text-highlight w-[150px] h-[60px] flex items-center'>
              <FaGithub size={30} />
              <span className='pl-2'>GitHub</span>
            </div>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
