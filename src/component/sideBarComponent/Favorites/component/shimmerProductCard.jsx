import React from "react";

const ShimmerProductCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 animate-pulse">
      
      {/* Image */}
      <div className="h-[180px] bg-gray-200 rounded-xl"></div>

      {/* Title */}
      <div className="mt-4 h-5 bg-gray-200 rounded w-3/4"></div>

      {/* Price */}
      <div className="mt-2 h-4 bg-gray-200 rounded w-1/4"></div>

      {/* Rating */}
      <div className="flex gap-2 mt-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 bg-gray-200 rounded"></div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-5 h-10 bg-gray-200 rounded-xl"></div>

      {/* Favorite Icon */}
      <div className="absolute bottom-5 right-5 h-9 w-9 bg-gray-200 rounded-full"></div>
    </div>
  );
};

export default ShimmerProductCard;
