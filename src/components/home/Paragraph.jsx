import React from 'react'

const Paragraph = ({text}) => {
  return (
    <div className='my-1 px-16 py-3 bg-red-700 text-white text-center'>
        <h2 className='italic tracking-tighter font-bold'>{text}</h2>
    </div>
  )
}

export default Paragraph