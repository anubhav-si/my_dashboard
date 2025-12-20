import React from "react";

const FeaturedProductCard = () => {
  return (
    <div className="bg-white w-[390px] p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Featured Product</h2>

      {/* Arrows */}
      <div className="flex justify-between w-full">
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xl">
          {"<"}
        </button>

        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xl">
          {">"}
        </button>
      </div>

      {/* Product Content */}
      <div className="mt-6 text-center">
        <h3 className="font-semibold">Beats Headphone 2019</h3>
        <p className="text-blue-600 font-bold">$89.00</p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
