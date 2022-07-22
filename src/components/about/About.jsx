import React from 'react'
import {BsController} from 'react-icons/bs'
import {IoGolfOutline} from 'react-icons/io5'

const About = () => {
  return (
    <div
      name='about'
      className='w-full bg-background py-[100px] lg:py-[400px] h-screen'>
      <div className='w-full lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] mx-auto px-5 lg:px-0'>
        <h2 className='text-4xl text-text font-bold inline border-b-4 border-highlight'>
          About
        </h2>
        <h3 className='text-[#3f3e3e] pt-8 text-xl md:text-3xl pb-10'>
          Web Developer based in Canada, BC.
        </h3>
        <h3 className='text-[#3f3e3e] text-lg max-w-3xl'>
          Software Development started out as a hobbie for me about a year ago.
          I enjoyed it so much I’ve decided that I wanted to make a career
          change. I’m currently building apps using React and Node.js. Each new
          project I create, I learn something new that improves my developer
          skills.
          <br />
          <br />
          <span className=''>
            My favorite project so far is The Halo Infinite project below that I
            built with another software developer. I would love to share or demo
            the project for you. If im not working you'll find me golfing, or
            gaming with friends.
          </span>
        </h3>

        <div>
          {/* <p className='lg:max-w-[500px] xl:max-w-[600px] font-light '>
              Software Development started out as a hobbie for me about a year
              ago. I enjoyed it so much I’ve decided that I wanted to make a
              career change. I’m currently building apps using React and
              Node.js. Each new project I create, I learn something new that
              improves my developer skills.
              <br />
              <br />
              <span className=''>
                My favorite project so far is The Halo Infinite project below
                that I built with another software developer. I would love to
                share or demo the project for you.
              </span>
            </p> */}
        </div>
      </div>

      {/* <h3 className='text-[#3f3e3e] text-2xl md:text-3xl'>
              Web Developer based in Canada, BC. I love creating web
              applications that people can enjoy and use.
            </h3>
            <div className='text-highlight font-light pt-5 flex gap-4'>
              <IoGolfOutline size={50} />
              <BsController size={50} />
            </div> */}
    </div>
  )
}

export default About
