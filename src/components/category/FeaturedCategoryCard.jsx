import React from 'react'

const FeaturedCategoryCard = () => {
  return (
    <div className="min-w-[10rem] max-w-[20rem] min-h-[24rem] h-full  w-full flex flex-col gap-4 bg-pink-300 rounded-md">
            <div className="basis-1/3 flex flex-col gap-0 p-4">
              <p className="text-[20px]">Coca Cola</p>
              <p className="font-semibold">from</p>
              <h3 className="text-4xl font-bold">$4</h3>
              <p className="text-sm">Get it today with free Drive Up</p>
            </div>
            <figure className="basis-2/3">
              <img src="https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg" alt="" className="w-full object-cover rounded-b-md"/>
            </figure>
          </div>
  )
}

export default FeaturedCategoryCard