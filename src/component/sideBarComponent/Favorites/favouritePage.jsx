import React, { useState,useEffect } from "react";
import ProductCard from "./component/cards";

const FavouritePage = () => {
    const [product , setproduct] = useState([]);
    const productApiData = async () =>{
       const  data =  await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        setproduct(json);
    }
    useEffect(()=>{
        productApiData();
    });
  return (
    <div>
      <div>
          <h1 className='my-7 mx-12 font-extrabold text-3xl'>Favorites</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 m-10">
        {product.map((p)=> <ProductCard product={p}/>)}
    </div>
    </div>
  )
}

export default FavouritePage