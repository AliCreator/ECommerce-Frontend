import React from 'react'

const MyOrders = ({user}) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className="text-2xl font-bold">My Orders</h2>
      {user?.orders.length === 0 && (<h2 className='my-4 text-xl text-center font-semibold dark:text-white'>You don't have any orders yet.</h2>)}
    </div>
  )
}

export default MyOrders