import React from 'react'

const SmallSizeCatCard = () => {
  return (
    <div className="w-24 h-24 flex flex-col items-center justify-start">
    <img
      src="./images/vegetable.png"
      alt="vegetable"
      className="w-16 h-16 rounded-full"
    />
    <p className="font-semibold">Vegetables</p>
  </div>
  )
}

export default SmallSizeCatCard