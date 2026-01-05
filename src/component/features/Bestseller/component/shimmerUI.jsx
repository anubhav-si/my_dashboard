import React from 'react'
import ProductCard from './cards'
import ShimmerProductCard from './shimmerProductCard';

const ShimmerUI = () => {
  return (
     <div className="grid grid-cols-3 gap-6 m-10">
      {[...Array(6)].map((_, i) => (
        <ShimmerProductCard key={i} />
      ))}
    </div>
  )
}

export default ShimmerUI;