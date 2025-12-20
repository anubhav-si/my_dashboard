import React from "react";
import ProductHero from "./component/herobanner";
import ProductCard from "./component/productCards";
import {products} from "./utils/productdata";

const ProductsPage = () => {
  
  return (
    <div className="px-6 w-full">
      <h1 className=" pl-4 font-extrabold mb-7 text-3xl">Products</h1>

      <ProductHero />

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
