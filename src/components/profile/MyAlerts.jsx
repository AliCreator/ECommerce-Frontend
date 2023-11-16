import React from 'react'

const MyAlerts = ({events}) => {
  return (
    <div className='flex flex-col gap-4'>
    <h2 className="text-2xl font-bold">My Alerts</h2>
    {events  === null && (<h2 className='my-4 text-xl text-center font-semibold dark:text-white'>You don't have any events recorded yet.</h2>)}
  </div>
  )
}

export default MyAlerts