import React from 'react'
import Carousel from '../Carousel'
import { FEATURED_PRODUCTS } from '../../data'
import ProductCard from '../home/ProductCard'

const SimilarItem = () => {
  return (
    <div className="text-black">
          <Carousel product={true}>
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard
                key={p.id}
                image={p.image}
                price={p.price}
                description={p.description}
                discount="129.99"
              />
            ))}
          </Carousel>
        </div>
  )
}

export default SimilarItem