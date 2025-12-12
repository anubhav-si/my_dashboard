import React ,{useState} from "react";
import img from "../assets/near_srh.png";
import icon from "../assets/icon_right.png";
import flag from "../assets/flag.png";
import usericon from "../assets/user_icon.png";
import ProfileDropdown from "./forMainPage/profileDropdown";


const Navigation_topbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className="w-full sticky top-0 left-52 z-50 bg-white shadow-xl flex items-center justify-between px-6 mb-10 h-16">

      {/* LEFT SECTION */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img className="w-20" src={img} alt="logo" />

        {/* Search Bar */}
        <div className="relative">
          <input
            className="w-72 h-9 rounded-full pl-4 pr-3 bg-gray-100 text-sm outline-none border border-gray-200 focus:border-gray-300 transition"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center space-x-6">

        {/* Notification Icon */}
        <img className="w-6 h-6 cursor-pointer" src={icon} alt="notification" />

        {/* Language Selector */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img className="w-6" src={flag} alt="flag" />
          <p className="text-sm text-gray-700">English</p>
        </div>

        {/* USER PROFILE */}
        <div 
        className="flex items-center space-x-3 cursor-pointer "
        onClick={()=> setOpen(!open) }>
          <img className="w-9 h-9 rounded-full" src={usericon} alt="user" />

          <div className="leading-tight">
            <h3 className="text-sm font-medium text-gray-800">anubhav singh</h3>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

      </div>
      {open && (<div className="absolute top-3 right-6 ">
        <ProfileDropdown/>
      </div>)}
    </div>
  );
};

export default Navigation_topbar;
