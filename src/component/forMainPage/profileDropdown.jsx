import React from "react";
import { FaUserCog, FaKey, FaHistory, FaSignOutAlt } from "react-icons/fa";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-4 top-14 w-56 bg-white shadow-xl rounded-xl border border-gray-200 py-2 z-50 animate-fadeIn">

      {/* OPTION */}
      <div className="group flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
        <FaUserCog className="text-blue-500 text-base mr-3 group-hover:scale-110 transition" />
        <p className="text-sm text-gray-700 group-hover:text-black">Manage Account</p>
      </div>

      <div className="group flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
        <FaKey className="text-pink-500 text-base mr-3 group-hover:scale-110 transition" />
        <p className="text-sm text-gray-700 group-hover:text-black">Change Password</p>
      </div>

      <div className="group flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
        <FaHistory className="text-purple-500 text-base mr-3 group-hover:scale-110 transition" />
        <p className="text-sm text-gray-700 group-hover:text-black">Activity Log</p>
      </div>

      {/* DIVIDER */}
      <div className="border-t my-1"></div>

      <div className="group flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
        <FaSignOutAlt className="text-red-500 text-base mr-3 group-hover:scale-110 transition" />
        <p className="text-sm text-gray-700 group-hover:text-black">Log out</p>
      </div>
    </div>
  );
};

export default ProfileDropdown;
