import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {

  const handleSignup = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    };

    const res = await fetch("http://localhost:3001/signup",{
      method:"post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data),
    })
    const result = await res.json();
    console.log(result);
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Create an Account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Create an account to continue
        </p>

        {/* Form */}
        <form 
        onSubmit={handleSignup}
        className="mt-6 space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email address</label>
            <input
              name="email"
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm text-gray-600">Password</label>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Forget Password?
              </span>
            </div>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">
              I accept terms and conditions
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-500 text-white font-medium 
            hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
        <Link to="/login">
            <span className="text-blue-500 cursor-pointer hover:underline">
             Login
          </span>
        </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
