import React from "react";
import { FaCamera } from "react-icons/fa";

const AddNewMember = () => {
  return (
    <div className="px-8">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Add Team Member
      </h1>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 max-w-5xl">
        
        {/* Upload Photo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <FaCamera className="text-gray-500 text-xl" />
          </div>
          <p className="text-blue-500 text-sm mt-2 cursor-pointer">
            Upload Photo
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* First Name */}
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="mt-2 w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="mt-2 w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="mt-2 w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-400"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm text-gray-600">Position</label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-400"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm text-gray-600">Gender</label>
            <select
              className="mt-2 w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-400"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="px-10 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition text-sm font-medium">
            Add Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewMember;
