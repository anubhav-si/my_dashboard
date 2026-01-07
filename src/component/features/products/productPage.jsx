import React, { useState } from "react";

import ProductCard from "./component/productCards";
import products from "./utils/productdata";
import AddNewProductCard from "./component/addNewProductCard.jsx";
import { use } from "react";

const ProductsPage = () => {
  const [resp,setResp] = useState("")
  const [isopen,setisOpen] = useState(false);
  return (
    <div className="px-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className=" pl-4 font-extrabold mb-7 text-3xl">Products</h1>
        {!isopen && 
        <div 
              onClick={()=>setisOpen(!isopen)}
              className="shadow rounded-full flex  px-4 py-2 mr-10 mb-7 font-bold text-white bg-blue-600">
              <button>Add Product</button>
        </div>}
         
      </div>
      { 
        isopen && 
        <div>
        <AddNewProductCard isopen={isopen} setisOpen={setisOpen} setResp={setResp}/>
      </div>
      }
      
      
      {/* Product cards grid */}
      <div className="grid grid-cols-3 gap-6 mt-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} img={p.img}/>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
