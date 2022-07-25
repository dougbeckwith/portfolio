import React from 'react'
import {FaLinkedin} from 'react-icons/fa'

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
      className='w-full bg-background pt-[100px] pb-[100px] md:pb-[200px] '>
      <div className='container w-full h-full px-5 lg:px-0 mx-auto flex flex-col justify-center items-center'>
        <div className='text-left w-full'>
          <form
            method='POST'
            action='https://getform.io/f/3a755a98-e52f-48f7-b897-002c8105c161'
            className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2'>
              <p className='text-text text-3xl md:text-4xl font-bold inline border-b-4 border-highlight'>
                Contact
              </p>
              <div className='flex pt-5 items-center flex-wrap'>
                <p className='text-text font-light pr-2'>Connect with me</p>
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='text-highlight hover:text-pink'
                  href='https://linkedin.com/in/dougbeckwith22'>
                  <div className='flex items-center'>
                    <FaLinkedin size={30} />{' '}
                    <span className='pl-2'>LinkedIn</span>
                  </div>
                </a>
              </div>
            </div>
            <input
              className='border rounded border-text p-2'
              type='text'
              placeholder='Name'
              name='name'
            />
            <input
              className='my-4 p-2 border rounded border-text'
              type='email'
              placeholder='Email'
              name='email'
            />
            <textarea
              className='placeholder:text-opacity-50 border rounded border-text p-2'
              name='message'
              placeholder='Message'
              rows='10'></textarea>
            <button
              type='submit'
              className='text-[white] shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-pink  bg-highlight duration-200 mx-auto'>
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
