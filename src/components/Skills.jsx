import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'

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
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className=' w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <div className='hover:bg-[#061a38] p-2 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={HTML} alt='' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={CSS} alt='' />
            <p className='mt-4'>CSS</p>
          </div>
          <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={JavaScript} alt='' />
            <p className='mt-4'>JavaScript</p>
          </div>
          <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={ReactImg} alt='' />
            <p className='mt-4'>React</p>
          </div>
          <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={Node} alt='' />
            <p className='mt-4'>Node</p>
          </div>
          <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={Mongo} alt='' />
            <p className='mt-4'>MongoDB</p>
          </div>
          <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={Tailwind} alt='' />
            <p className='mt-4'>Tailwind</p>
          </div>
          <div className='hover:bg-[#061a38] p-4 flex flex-col justify-center items-center w-[150px] sm:w-[200px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20' src={GitHub} alt='' />
            <p className='mt-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
