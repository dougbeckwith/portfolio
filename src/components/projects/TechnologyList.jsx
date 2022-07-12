import React from 'react'

const Technologies = ({technologies}) => {
  return (
    <div className='h-full'>
      <p className='text-md'>{technologies.join(', ')}</p>
    </div>
  )
}

export default Technologies
