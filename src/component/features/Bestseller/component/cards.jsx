import React from "react";
import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";


const ProductCard = ({product}) => {

  
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 relative transition hover:shadow-lg">
      
      {/* Product Image + Arrows */}
      <div className="relative flex items-center justify-center">
        <button className="absolute left-0 bg-white shadow p-2 rounded-full">
          <ChevronLeft size={18} />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-[180px] object-contain"
        />

        <button className="absolute right-0 bg-white shadow p-2 rounded-full">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>

      {/* Price */}
      <p className="text-blue-600 font-semibold mt-1">{product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={16} className="text-orange-400 fill-orange-400" />
        ))}
        <Star size={16} className="text-gray-300 fill-gray-300" />

        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
      </div>

      {/* Edit Button */}
      <button className="mt-5 w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-xl text-sm font-medium">
        Edit Product
      </button>

      {/* Favorite Icon */}
      <button className="absolute bottom-5 right-5 bg-white shadow p-2 rounded-full hover:bg-gray-50">
        <Heart size={18} className="text-gray-600" />
      </button>
    </div>
  );
};

export default ProductCard;
