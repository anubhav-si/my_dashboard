import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  email: "",
  username: "",
  password: "",
  terms: false
});
const [error,seterror] = useState({});
const handlechange = (e) =>{
  const {name,value,type,checked} = e.target;
  setFormData({...formData,
    [name] : type === "checkbox" ? checked : value,

  });
};
const validate =() =>{
  const newErrors = {}

  if(!formData.email) newErrors.email ="Email is required";
  if(!formData.username) newErrors.username = "username is required";
  if(formData.password.length < 6 ) newErrors.password = "password must be minimum 6 character";
  if(!formData.terms) newErrors.terms = "accept Terms & Condition";

  seterror(newErrors);
  return Object.keys(newErrors).length === 0;
}

  const handleSignup = async(e) => {
    e.preventDefault();

    if(!validate()) return;

    
    const res = await fetch("http://localhost:3001/signup",{
      method:"post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData),
    })
    const result = await res.json();
    if(result.status === 'ok') navigate("/login");
    
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
              value={formData.email}
              onChange={handlechange}
              placeholder="esteban_schiller@gmail.com"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
             {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handlechange}
              placeholder="Username"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
             {error.username && (
              <p className="text-red-500 text-sm">{error.username}</p>
            )}
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
              value={formData.password}
              onChange={handlechange}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
            
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input 
            type="checkbox" 
            name="terms"
            checked={formData.terms}
            onChange={handlechange}
            className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">
              I accept terms and conditions
            </span>
            {error.terms && (
              <p className="text-red-500 text-sm">{error.terms}</p>
            )}
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
