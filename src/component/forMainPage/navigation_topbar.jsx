import React ,{useState} from "react";
import img from "../../assets/icons/near_srh.png";
import icon from "../../assets/icons/icon_right.png";
import usericon from "../../assets/icons/user_icon.png";
import ProfileDropdown from "./profileDropdown";
import NotificationDropdown from "./notificationDropdown";


const Navigation_topbar = ({setloginStatus}) => {
  const [open,setOpen] = useState(false);
  const [active,setactive] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="w-full sticky top-0 left-52 z-50 bg-white shadow-[6px_6px_20px_rgba(0,0,0,0.08)] flex items-center justify-between px-6 mb-10 h-16">

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
        <img 
        onClick={()=>{setOpen(!open) 
           setactive("notification")}}
        className="w-6 h-6 cursor-pointer" 
        src={icon} alt="notification" />

        {/* Language Selector */}
       <div
          onClick={() => setDarkMode(prev => !prev)}
          className="flex items-center space-x-2 cursor-pointer px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          {darkMode ? (
            <span className="text-lg">🌙</span>
          ) : (
            <span className="text-lg">☀️</span>
          )}

          <p className="text-sm text-gray-700">
            {darkMode ? "Dark" : "Light"}
          </p>
        </div>


        {/* USER PROFILE */}
        <div 
        className="flex items-center space-x-3 cursor-pointer "
        onClick={()=> {setOpen(!open)
          setactive("profile")
        } }>
          <img className="w-9 h-9 rounded-full" src={usericon} alt="user" />

          <div className="leading-tight">
            <h3 className="text-sm font-medium text-gray-800">anubhav singh</h3>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

      </div>
      {open && active === "profile" && (<div className="absolute top-3 right-6 ">
        <ProfileDropdown setloginStatus={setloginStatus} setOpen={setOpen} open={open}/>
      </div>)}
      {open && active === "notification" && (<div className="absolute top-3 right-6 ">
        <NotificationDropdown setOpen={setOpen} open={open}/>
      </div>)}
    </div>
  );
};

export default Navigation_topbar;
