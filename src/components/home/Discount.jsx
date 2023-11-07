import React from 'react'
import Carousel from '../Carousel'
import ProductCard from './ProductCard'
import { FEATURED_PRODUCTS } from '../../data'



const Discount = () => {
  return (
    <div className='bg-black text-white p-4 flex flex-col items-center gap-6'>
        <h2 className='text-2xl font-bold italic tracking-tighter'>Top Black Friday Picks</h2>
        <div className='text-black'>
            <Carousel>
            {FEATURED_PRODUCTS.map(p => <ProductCard key={p.id} image={p.image} price={p.price} description={p.description} discount="129.99"/>)}
            </Carousel>
        </div>
    </div>
  )
}

export default Discount