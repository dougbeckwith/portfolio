import React from 'react'
import {FaNodeJs, FaReact, FaJsSquare, FaGitAlt} from 'react-icons/fa'
import {SiTailwindcss, SiMongodb, SiExpress} from 'react-icons/si'

const About = () => {
  return (
    <div
      name='about'
      className='w-full bg-background py-[100px] md:py-[300px] 2xl:py-[400px] '>
      <div className='container w-full h-full px-5 lg:px-0 mx-auto flex flex-col justify-center items-center'>
        <div className='text-left w-full'>
          <h2 className='text-3xl md:text-4xl text-text font-bold inline border-b-4 border-highlight'>
            About
          </h2>
          <div className='max-w-[1000px]'>
            <section className='text-black text-lg pt-6'>
              Web Developer based in BC, Canada.
            </section>
            <section className='text-black pt-2'>
              Software Development started out as a hobby for me. I enjoyed it
              so much I’ve decided to make a career change. I’m currently
              building web apps using React and Node.js. Each new project I
              create, I learn something new that improves my developer skills.
            </section>
            <section className='text-black pt-2'>
              My favorite project so far is The Halo Infinite project below that
              I built with another software developer. I would love to share or
              demo the project for you. If I’m not working, you'll find me
              golfing or gaming with friends.
            </section>
            <section className='text-black pt-5 pb-2'>
              These are the technologies I've worked with.
            </section>
            <ul className='flex gap-5 flex-wrap text-highlight'>
              <div className='text-highlight flex items-center'>
                <FaJsSquare size={25} />
                <span className='pl-2'>JavaScript</span>
              </div>
              <div className='text-highlight flex items-center'>
                <FaReact size={25} />
                <span className='pl-2'>React</span>
              </div>
              <div className='text-highlight flex items-center'>
                <SiTailwindcss size={25} />
                <span className='pl-2 w-[129px]'>Tailwind CSS</span>
              </div>
              <div className='text-highlight flex items-center'>
                <FaNodeJs size={25} />
                <span className='pl-2'>Node.js</span>
              </div>
              <div className='text-highlight flex items-center'>
                <SiMongodb size={25} />
                <span className='pl-2'>MongoDB</span>
              </div>
              <div className='text-highlight flex items-center'>
                <FaGitAlt size={25} />
                <span className='pl-2'>Git</span>
              </div>
              <div className='text-highlight flex items-center'>
                <SiExpress size={25} />
                <span className='pl-2'>Express</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
