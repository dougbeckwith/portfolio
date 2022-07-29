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
      className='w-full bg-background pt-[100px] pb-[100px] md:py-[200px] xl:py-[300px] '>
      <div className='container w-full h-full px-5 lg:px-0 mx-auto flex flex-col justify-center items-center'>
        <div className='text-left w-full'>
          <form
            method='POST'
            onSubmit={handleSubmit}
            className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2'>
              <p className='text-text text-3xl md:text-4xl font-bold inline border-b-4 border-highlight'>
                Contact
              </p>
              <div className='flex pt-5 items-center flex-wrap'>
                <p className='text-text font-light pr-2'>
                  Connect with me through
                </p>
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
            <label htmlFor='name'>Name</label>
            <input
              className='border rounded border-text p-2'
              type='text'
              placeholder='John Deer'
              name='name'
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            <p className={nameError ? 'text-sm h-4 text-red' : 'invisible h-4'}>
              Please enter a name.
            </p>
            <label htmlFor='email' className='pt-2'>
              Email
            </label>
            <input
              className=' p-2 border rounded border-text'
              type='email'
              placeholder='john@gmail.com'
              name='email'
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <p
              className={emailError ? 'text-sm h-4 text-red' : 'invisible h-4'}>
              Please enter a email.
            </p>
            <label htmlFor='message' className='mt-2'>
              Message
            </label>
            <textarea
              className='placeholder:text-opacity-50 border rounded border-text p-2'
              name='message'
              placeholder='Message...'
              rows='10'
              value={textarea}
              onChange={(e) => handleMessageChange(e)}
            />
            <p
              className={
                textareaError ? 'text-sm h-4 text-red' : 'invisible h-4'
              }>
              Please enter a message.
            </p>

            <button className='text-[white] shadow-[#747773] shadow-md rounded  px-6 py-3 my-2 flex items-center hover:bg-pink  bg-highlight duration-200 mx-auto'>
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
