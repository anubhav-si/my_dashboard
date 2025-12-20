import React from "react";

const Usercomponent = ({ name, onClick, avatar, lastMessage }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer px-4"
    >
      <div className="
        flex items-center gap-4 
        p-3 mb-2 
        bg-white border rounded-xl 
        hover:bg-blue-50 hover:border-blue-400 
        transition-all duration-200 shadow-sm
      ">
        
        {/* Avatar */}
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full border shadow"
        />

        {/* Name + Last Message */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-500">{lastMessage}</p>
        </div>

      </div>
    </div>
  );
};
export default Usercomponent;