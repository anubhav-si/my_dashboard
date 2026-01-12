import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../reduxToolKit/userSlice";

const LoginPage = () => {
  const [error,seterror] = useState({});
  const [formData,setFormData] = useState({
    email:"anubhav@gmail.com",
    password:"anubhav",

  })

  const dispatch = useDispatch();
  let isLoggedin = useSelector((Store)=>Store.User.islogedin);
  const navigate = useNavigate();

  const validate =() =>{
  const newErrors = {}

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!formData.email.includes("@")) {
    newErrors.email = "Enter a valid email address";
  }
  if(formData.password.length < 6 ) newErrors.password = "password must be minimum 6 character";
  seterror(newErrors);
  return Object.keys(newErrors).length === 0;
}

  const handlesubmit = async (e)=>{
    e.preventDefault();
    const {email,password} = formData;

    if(!validate()) return ;
    try {
     
      const res =  await fetch("http://localhost:3001/login",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData),
        credentials:"include",
      })

      const result = await res.json();
      if (!res.ok) {
        seterror({ api: result.error || "Login failed" });
        return;
      }
      const {user} = result;
      if(result.status === 'succesfull') {
        dispatch(userLogin(user));
        navigate("/");
        return;
      }
       seterror({ api: result.error });
    

    
      
    } catch (err) {
      console.log(`error ${err}`);
      
    }
    
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
              value={formData.email}
              onChange={(e)=>setFormData({...formData, email: e.target.value})}
              placeholder="esteban_schiller@gmail.com"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
             {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
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
              value={formData.password}
              onChange={(e)=>setFormData({...formData,password: e.target.value})}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
             {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
          {/* Remember */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm text-gray-600">Remember Password</span>
          </div>
          {error.api && (
            <p className="text-red-500 text-sm text-center">{error.api}</p>
          )}

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
