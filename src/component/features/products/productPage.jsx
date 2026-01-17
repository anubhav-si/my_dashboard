import React, { useEffect, useState } from "react";
import ProductCard from "./component/productCards";
import AddNewProductCard from "./component/addNewProductCard.jsx";
import ShimmerProductCard from "./component/shimmerProductCard.jsx";
import { useDispatch } from "react-redux";
import { addProductList } from "../../../reduxToolKit/productSlice.js";

const ProductsPage = () => {
  const [responseMessage,setResponseMessage] = useState(null);
  const [productList,setProductList] = useState([]);
  const shimmerCount = [1,2,3,4,5,6,];
  const dispatch = useDispatch();
  
  const getProductList = async () =>{
    const res = await fetch("http://localhost:3001/product/getproducts",{
      credentials:"include",
    });
    const list  = await res.json();
    
    setProductList(list.products);
    dispatch(addProductList(list.products));
  }
  
  useEffect(()=>{
    getProductList();
    if (responseMessage) {
      const timer = setTimeout(()=>{
        setResponseMessage(null);
      },2000);
      return () => clearTimeout(timer);
    }

  },[responseMessage])
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
        <AddNewProductCard isopen={isopen} setisOpen={setisOpen} setResponseMessage={setResponseMessage}/>
      </div>
      }
      {
        responseMessage && 
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg transition">
          {responseMessage}
        </div>
      }
      {productList.length === 0 && (
        <div className="grid grid-cols-3 gap-6 mt-10">
          {shimmerCount.map((c) => (
            <ShimmerProductCard key={c} />
          ))}
        </div>
      )}

      
      {/* Product cards grid */}
      <div className="grid grid-cols-3 gap-6 mt-10">
        {productList.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
