import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5b8cff] relative overflow-hidden">
      
      {/* Background shapes (optional) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full -top-24 -left-24"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full -bottom-24 -right-24"></div>
      </div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-10 text-center z-10">

        {/* Fake browser header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
        </div>

        {/* 404 Box */}
        <div className="bg-blue-500 rounded-xl py-8 mb-6 relative">
          <h1 className="text-6xl font-extrabold text-orange-400 tracking-widest">
            404
          </h1>

          {/* dots */}
          <div className="absolute bottom-3 right-4 flex gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-700 text-lg font-medium mb-6">
          Looks like you’ve got lost....
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block w-full py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
