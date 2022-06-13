import React from 'react'

const Technologies = ({text}) => {
  return (
    <div className='h-full'>
      <p className='text-md'>{text.join(', ')}</p>
    </div>
  )
}

export default Technologies
