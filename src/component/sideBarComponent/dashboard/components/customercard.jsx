import React from "react";

const CustomersCard = () => {
  return (
    <div className="bg-white w-[390px] p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Customers</h2>

      {/* Round Circle */}
      <div className="flex justify-center">
        <div className="relative w-36 h-36">
          <div className="absolute inset-0 rounded-full border-[10px] border-blue-100"></div>

          {/* Dots */}
          <span className="absolute top-1/2 -translate-y-1/2 -left-1 w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></span>
        </div>
      </div>

      {/* Numbers */}
      <div className="flex justify-between mt-6 px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold">34,249</h3>
          <p className="text-sm flex items-center gap-2 text-blue-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            New Customers
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold">1420</h3>
          <p className="text-sm flex items-center gap-2 text-gray-500">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            Repeated
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
