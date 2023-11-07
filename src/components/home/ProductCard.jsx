import React from 'react'

const ProductCard = ({image, price, description, discount}) => {
  return (
    <div className='flex flex-col gap-3 p-2 min-w-[10rem] max-w-[12rem] md:min-w-[12rem] md:max-w-[15rem] min-h-[10rem] border border-slate-600 rounded-md bg-white pb-5'>
        <figure className='w-full bg-green-50/30  rounded-md'>
            <img src={image} alt={description.slice(0,8)} className='w-full object-cover' />
        </figure>
        <h2 className='font-bold'>${price}</h2>
        {discount && (
        <h3 className="flex items-center gap-1 text-red-700 font-bold">
          <span className="text-gray-700 text-sm tracking-tighter">reg</span>{" "}
          <span className="text-base text-gray-900 line-through font-semibold italic">$129.99</span> Sale
        </h3>
      )}
        <p className='italic'>{description.slice(0,50)}...</p>
        <button className='bg-red-700 text-white border-none px-4 py-1 rounded-md font-semibold cursor-pointer'>Add to cart</button>
    </div>
  )
}

export default ProductCard