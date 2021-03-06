import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Contact = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')

  // function handleSubmit() {
  //   setName('')
  //   setEmail('')
  //   setMessage('')
  // }

  return (
    <div
      name='contact'
      className='lg:pt-[300px] lg:pb-[200px] w-full bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] pb-[50px] px-5 lg:px-0 mx-auto flex flex-col w-full'>
        <form
          method='POST'
          action='https://getform.io/f/3a755a98-e52f-48f7-b897-002c8105c161'
          className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-2'>
            <p className=' text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
              Contact
            </p>
            <p className='pt-4  text-[#8892b0]'>
              Contact me by the form below or send me an email -
              dougcbeckwith@gmail.com
            </p>
            <div className='flex xl:hidden'>
              <a
                rel='noreferrer'
                target='_blank'
                className='text-gray-300 hover:text-pink-600'
                href='https://linkedin.com/in/dougbeckwith22'>
                <div className='w-[165px] h-[60px] flex items-center bg-[#0a192f]'>
                  <p className='pr-2'>Linkedin</p> <FaLinkedin size={30} />
                </div>
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                className='text-gray-300 hover:text-pink-600'
                href='https://github.com/dougbeckwith'>
                <div className='w-[150px] h-[60px] flex items-center bg-[#0a192f]'>
                  <p className='pr-2'>Github</p> <FaGithub size={30} />
                </div>
              </a>
            </div>
          </div>
          <input
            className='bg-[#ccd6f6] p-2'
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            className='my-4 p-2 bg-[#ccd6f6]'
            type='email'
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-[#ccd6f6] p-2'
            name='message'
            rows='10'></textarea>
          <button
            type='submit'
            className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
