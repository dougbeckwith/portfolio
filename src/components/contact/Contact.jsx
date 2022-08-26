import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {useState} from 'react'
import {useEffect} from 'react'

const Contact = ({setShow}) => {
  // Input field state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [textarea, setTextarea] = useState('')

  // Input error state
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [textareaError, setTextareaError] = useState(false)

  // Check if input is empty and set error message
  const inputValid = (input) => {
    if (input !== '') {
      return true
    } else {
      // If name input is empty string set error message
      if (input === name) {
        setNameError(true)
      }
      // If name input is empty string set error message
      if (input === email) {
        setEmailError(true)
      }
      // If textarea input is empty string set error message
      if (input === textarea) {
        setTextareaError(true)
      }
    }
  }

  useEffect(() => {
    setName('')
    setEmail('')
    setTextarea('')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, email, textarea)

    if (inputValid(name) && inputValid(email) && inputValid(textarea)) {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('message', textarea)

      fetch('https://getform.io/f/3a755a98-e52f-48f7-b897-002c8105c161', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          console.log(response)
          if (response.ok) {
            setShow(true)
            setName('')
            setEmail('')
            setTextarea('')
          }
        })
        .catch((error) => console.log(error))
    }
  }

  const handleNameChange = (e) => {
    setNameError(false)
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmailError(false)
    setEmail(e.target.value)
  }
  const handleMessageChange = (e) => {
    setTextareaError(false)
    setTextarea(e.target.value)
  }

  return (
    <div
      name='contact'
      className='dark:bg-gray-700 dark:text-gray-500 w-full bg-gray-100 pt-[100px] pb-[100px] md:py-[200px] xl:py-[300px] text-gray-600'>
      <div className='container w-full h-full px-5 mx-auto flex flex-col justify-center items-center'>
        <article className='text-left w-full'>
          <form
            method='POST'
            onSubmit={handleSubmit}
            className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2'>
              <h2 className=' text-3xl md:text-4xl font-bold inline border-b-4 border-teal-200'>
                Contact
              </h2>
              <section className='flex pt-5 items-center flex-wrap'>
                <p className=' pr-2'>Connect with me through</p>
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='text-teal-200 hover:text-teal-100'
                  href='https://linkedin.com/in/dougbeckwith22'>
                  <div className='flex items-center'>
                    <FaLinkedin size={30} />{' '}
                    <span className='pl-2'>LinkedIn</span>
                  </div>
                </a>
              </section>
            </div>
            <label htmlFor='name'>Name</label>
            <input
              className='dark:bg-dark-300 dark:text-gray-400 focus:outline-none focus:border-teal-200  focus:ring-teal-200 dark:placeholder:text-placeholder dark:placeholder:opacity-50 placeholder:text-gray-600 placeholder:text-opacity-50 p-2 border rounded border-gray-600'
              type='text'
              placeholder='John Doe'
              name='name'
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            <p
              className={
                nameError ? 'text-sm h-4 text-teal-200' : 'invisible h-4'
              }>
              Please enter a name.
            </p>
            <label htmlFor='email' className='pt-2'>
              Email
            </label>
            <input
              className='dark:bg-dark-300 dark:text-gray-400 focus:outline-none focus:border-teal-200  focus:ring-teal-200 dark:placeholder:text-placeholder dark:placeholder:opacity-50 placeholder:text-gray-600 placeholder:text-opacity-50 p-2 border rounded border-gray-600'
              type='email'
              placeholder='john@gmail.com'
              name='email'
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <p
              className={
                emailError ? 'text-sm h-4 text-teal-200' : 'invisible h-4'
              }>
              Please enter a email.
            </p>
            <label htmlFor='message' className='mt-2'>
              Message
            </label>
            <textarea
              className='dark:bg-dark-300 dark:text-gray-400 focus:outline-none focus:border-teal-200  focus:ring-teal-200 dark:placeholder:text-placeholder dark:placeholder:opacity-50 placeholder:text-gray-600 placeholder:text-opacity-50 p-2 border rounded border-gray-600'
              name='message'
              placeholder='Message...'
              rows='10'
              value={textarea}
              onChange={(e) => handleMessageChange(e)}
            />
            <p
              className={
                textareaError ? 'text-sm h-4 text-teal-200' : 'invisible h-4'
              }>
              Please enter a message.
            </p>
            <button className='dark:shadow-none dark:text-gray-400 text-white shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-teal-100  bg-teal-200 duration-200 mx-auto'>
              Let's Collaborate
            </button>
          </form>
        </article>
      </div>
    </div>
  )
}

export default Contact
