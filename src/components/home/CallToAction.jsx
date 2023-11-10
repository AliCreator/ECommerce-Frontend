import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='p-4 md:p-12 flex flex-col md:flex-row items-center md:justify-center gap-2'>
        <h2 className='font-bold text-xl text-center'>Get top deals, latest trends, and more</h2>
        <div className='flex flex-col items-center gap-3 md:flex-row md:justify-center'>
            <input type="email" className='outline-none px-4 py-1 bg-white text-xl font-semibold border border-slate-900 rounded-md' />
            <button className='px-3 py-1 bg-red-700 text-white outline-none rounded-md'>Sign up</button>
        </div>
        <Link to="/">Privacy policy</Link>
    </div>
  )
}

export default CallToAction