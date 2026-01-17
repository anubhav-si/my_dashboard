import React ,{useState} from "react";
import { useSelector } from "react-redux";
import icon from "../../assets/icons/icon_right.png";
import usericon from "../../assets/icons/user_icon.png";
import ProfileDropdown from "./profileDropdown";
import NotificationDropdown from "./notificationDropdown";

const Navigation_topbar = ({setloginStatus}) => {
  const [open,setOpen] = useState(false);
  const [active,setactive] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const {username,designation} = useSelector((Store)=>Store.User.profile)

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-[6px_6px_20px_rgba(0,0,0,0.08)] flex items-center justify-between px-4 md:px-6 mb-6 h-16">

      <div className="flex items-center gap-20">
        <div>
                <h1 className="m-auto py-3 font-extrabold text-3xl"> My Dashboard</h1>
        </div>
        {/* <img className="w-14 md:w-20" src={img} alt="logo" /> */}

        <div className="relative hidden md:block">
          <input
            className="w-72 h-9 rounded-full pl-4 pr-3 bg-gray-100 text-sm outline-none border border-gray-200 focus:border-gray-300 transition"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">

        <img 
          onClick={()=>{setOpen(!open); setactive("notification")}}
          className="w-6 h-6 cursor-pointer" 
          src={icon} 
          alt="notification" 
        />

        <div
          onClick={() => setDarkMode(prev => !prev)}
          className="hidden md:flex items-center space-x-2 cursor-pointer px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <span className="text-lg">{darkMode ? "🌙" : "☀️"}</span>
          <p className="text-sm text-gray-700">
            {darkMode ? "Dark" : "Light"}
          </p>
        </div>

        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={()=> {setOpen(!open); setactive("profile")}}
        >
          <img className="w-9 h-9 rounded-full" src={usericon} alt="user" />

          <div className=" leading-tight">
            <h3 className="text-sm font-medium text-gray-800">{username}</h3>
            <p className="text-xs text-gray-500">{designation}</p>
          </div>
        </div>

      </div>

      {open && active === "profile" && (
        <div className="absolute top-16 right-4">
          <ProfileDropdown setloginStatus={setloginStatus} setOpen={setOpen} open={open}/>
        </div>
      )}

      {open && active === "notification" && (
        <div className="absolute top-16 right-4">
          <NotificationDropdown setOpen={setOpen} open={open}/>
        </div>
      )}
    </div>
  );
};

export default Navigation_topbar;
