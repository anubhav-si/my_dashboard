import React from "react";
import { FiSettings } from "react-icons/fi";
import { MdEventNote, MdErrorOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const NotificationDropdown = ({open,setOpen}) => {
  return (
    <div 
    onClick={()=>setOpen(!open)}
    className="absolute right-24 top-14 w-70 bg-white rounded-2xl shadow-xl z-50 overflow-hidden">

      {/* HEADER */}
      <div className="px-5 py-3 border-b">
        <h3 className="text-sm font-semibold text-gray-800">Notification</h3>
      </div>

      {/* LIST */}
      <div className="py-2">

        {/* ITEM 1 */}
        <div className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FiSettings />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Settings</p>
            <p className="text-xs text-gray-500">Update Dashboard</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-100 text-pink-500">
            <MdEventNote />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Event Update</p>
            <p className="text-xs text-gray-500">An event date update again</p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-500">
            <FaUserCircle />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Profile</p>
            <p className="text-xs text-gray-500">Update your profile</p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-500">
            <MdErrorOutline />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Application Error</p>
            <p className="text-xs text-gray-500">Check your running application</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t text-center py-3">
        <p className="text-xs text-gray-500 hover:text-blue-500 cursor-pointer">
          See all notification
        </p>
      </div>
    </div>
  );
};

export default NotificationDropdown;
