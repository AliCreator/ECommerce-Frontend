import React from 'react'
import HeroCategory from '../components/home/HeroCategory'
import Paragraph from '../components/home/Paragraph'
import Featured from '../components/home/Featured'
import Discount from '../components/home/Discount'
import CategoryDiscount from '../components/home/CategoryDiscount'
import FeaturedCategories from '../components/home/FeaturedCategories'
import CallToAction from '../components/home/CallToAction'

const HomeScreen = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <HeroCategory />
      <Paragraph text="Most trusted name in the market! East Market And Restaurant" />
      <Featured />
      <Paragraph text="Halal and Fresh. The combination to health and happiness" />
      <CategoryDiscount />
      <Discount />
      <Paragraph text="Halal and Fresh. The combination to health and happiness" />
      <FeaturedCategories />
      <CallToAction />
    </div>
  )
}

export default HomeScreen