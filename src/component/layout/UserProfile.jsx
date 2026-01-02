
import React ,{useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {userLogin} from "../../reduxToolKit/userSlice";
export default function UserProfile({ }) {
    const dispatch = useDispatch();
    const [user,setUser] = useState({});
    const getProfileData =  async () => {
         const res = await fetch("http://localhost:3001/me",{
                        credentials:"include",
                    })
        const userdata = await res.json();
        setUser(userdata);
        dispatch(userLogin(userdata));
    }
    useEffect( ()=>{
      getProfileData();
    },[])
  // user = data fetched from backendu
  return (
    <div className="h-full bg-[#bfdbfe] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-4">
          <div className="h-14 w-14 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xl font-bold">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.username}
            </h2>
            <p className="text-sm text-gray-500">{user?.designation}</p>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-4">
          <InfoRow label="Email" value={user?.email || "email.com"} />
          <InfoRow label="User ID" value={user?._id || "my name"} />
          <InfoRow
            label="Joined On"
            value={new Date(user?.createdAt).toLocaleDateString()}
          />
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-xl bg-indigo-600 text-white py-2 text-sm font-medium hover:bg-indigo-700 transition">
            Edit Profile
          </button>
          <button className="flex-1 rounded-xl border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm text-gray-800 font-medium break-all text-right">
        {value}
      </span>
    </div>
  );
}
