import React from 'react'

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
      className='lg:pt-[300px] lg:pb-[200px] w-full bg-background flex justify-center items-center p-4'>
      <div className='lg:max-w-[1000px] xl:max-w-[1110px] 2xl:max-w-[1400px] pb-[50px] px-5 lg:px-0 mx-auto flex flex-col w-full'>
        <form
          method='POST'
          action='https://getform.io/f/3a755a98-e52f-48f7-b897-002c8105c161'
          className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-2'>
            <p className=' text-4xl font-bold inline border-b-4 border-highlight'>
              Contact
            </p>
            <p className='pt-4  text-text font-light'>
              Contact me by the form below or send me an email -
              dougcbeckwith@gmail.com
            </p>
          </div>
          <input
            className='border rounded border-highlight p-2'
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            className='my-4 p-2 border rounded border-highlight'
            type='email'
            placeholder='Email'
            name='email'
          />
          <textarea
            className='border rounded border-highlight p-2'
            name='message'
            rows='10'></textarea>
          <button
            type='submit'
            className='text-[white] shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-pink  bg-highlight duration-200 mx-auto'>
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
