import React,{useContext} from "react";
import { AuthContext } from "../../context/authcontect";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const handlesubmit = (e)=>{
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-400">
      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Login to Account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Please enter your email and password to continue
        </p>

        {/* Form */}
        <form 
        onSubmit={handlesubmit}
        className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email address</label>
            <input
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600">Password</label>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Forget Password?
              </span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm text-gray-600">Remember Password</span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
        <Link to="/signup">
          <span className="text-blue-500 cursor-pointer hover:underline">
            Create Account
          </span>
        </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
