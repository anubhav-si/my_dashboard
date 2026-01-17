import React, { useState,useEffect } from "react";
import ProductCard from "./component/cards";
import ShimmerUI from "./component/shimmerUI";
import { useSelector } from "react-redux";

const BestsellerPage = () => {
    
    const product = useSelector((store)=> store.product.productlist); 

     if (!product || product.length === 0) {
        return <ShimmerUI />;
      }

   
  return (

    <div>
      {/* {product.length === 0 && <ShimmerUI />} */}
      <div>
          <h1 className='my-7 mx-12 font-extrabold text-3xl'>Bestseller</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 m-10">
        {product.map((p)=> <ProductCard product={p}/>)}
    </div>
    </div>
  )
}

export default BestsellerPage;