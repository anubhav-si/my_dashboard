import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductHero = () => {
  return (
    <div className="relative bg-blue-500 text-white rounded-2xl h-[250px] flex items-center justify-between px-10 overflow-hidden shadow-md">

      {/* Left arrow */}
      <button className="bg-white/30 hover:bg-white/50 p-3 rounded-full text-white">
        <ChevronLeft size={20} />
      </button>

      {/* Center Content */}
      <div>
        <p className="text-sm opacity-80 mb-2">September 12–22</p>
        <h2 className="text-3xl font-bold leading-snug mb-3">
          Enjoy free home <br /> delivery in this summer
        </h2>
        <p className="text-sm opacity-80 mb-5">
          Designer Dresses – Pick from trendy Designer Dress.
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-xl font-medium shadow">
          Get Started
        </button>
      </div>

      {/* Right arrow */}
      <button className="bg-white/30 hover:bg-white/50 p-3 rounded-full text-white">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ProductHero;
