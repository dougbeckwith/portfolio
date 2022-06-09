import React from 'react'

const About = () => {
  return (
    <div
      name='about'
      className='w-full bg-[#0a192f] text-[#8892b0] py-[200px] lg:py-[400px] flex flex-col justify-around'>
      <div className='flex flex-col justify-center items-center w-full mx-auto'>
        <div className='w-full lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] px-5 lg:px-0  grid grid-cols-2 gap-8'>
          <div className='pb-8'>
            <p className='text-4xl text-[#ccd6f6] font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className=' lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] px-5 lg:px-0  w-full grid sm:grid-cols-2 gap-8'>
          <div className='text-2xl sm:text-4xl font-bold'>
            <p>Hi, I'm Doug, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className='lg:max-w-[500px] xl:max-w-[600px]'>
              Over the last couple of years, I’ve come to know the world of
              software development and have fallen in love. I’ve decided I enjoy
              it so much that I wanted to make a career change. I’m currently
              enjoying building apps using React. Each new project I create I
              try to learn something new to improve my developer skills. My
              favorite project so far is The Halo Infinite project below i built
              with another software developer. I would love to share or demo the
              project with you if you personally don’t play the game. I'm
              currently pursuing a job in Web Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
