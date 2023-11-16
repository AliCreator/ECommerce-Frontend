import React from 'react'

const MyWishlist = ({user}) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className="text-2xl font-bold">My Wishlist</h2>
      {user?.wishList.length === 0 && (<h2 className='my-4 text-xl text-center font-semibold dark:text-white'>You don't have any wishlist yet.</h2>)}
    </div>
  )
}

export default MyWishlist