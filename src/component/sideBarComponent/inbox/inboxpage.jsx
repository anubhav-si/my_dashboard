import React, { useEffect, useState } from "react";
import Usercomponent from "./component/usercomponent";

const Inboxpage = () => {
  const [username, setusername] = useState();
  
  const users = [
    "anubhav singh",
    "ankit mishra",
    "harshit singh",
    "ankit yadav",
    "rahul verma",
    "shivam pandey",
    "aditya kumar",
    "rohit sharma",
    "siddharth gupta",
    "vijay thakur",
    "arjun patel",
    "deepak sharma",
    "manish raj",
    "kartik mehra",
    "saurabh saxena",
    "kunal joshi",
    "yash rajput",
    "chirag sharma",
    "gagan singh",
    "prateek jain",
    "abhishek rana",
    "mohit chauhan",
    "vivek tiwari",
    "shubham dubey",
  ];
const [user,setuser] = useState('');
const [serchedUser,setserchedUser] = useState(users);
const handleSearchUser = ()=>{
  const searchedUser = users.filter((u)=>
    u.trim().toLocaleLowerCase().includes(user.trim().toLocaleLowerCase())
  )
  setserchedUser(searchedUser);
}
  useEffect(()=>{
    handleSearchUser();
  } ,[user]);
  return (
    <div className="h-[calc(93vh-64px)] mx-10 flex bg-[#e5ddd5] rounded-xl overflow-hidden">

      {/* LEFT SIDEBAR (Chats) */}
      <div className="w-[30%] bg-white border-r flex flex-col">

        {/* Header */}
        <div className="h-16 bg-blue-600 text-white flex items-center px-4 text-xl font-bold">
          Chats
        </div>

        {/* Search */}
        <div className="p-3 bg-gray-100">
          <input
            onChange={(e)=>setuser(e.target.value)}
            value={user}
            type="text"
            placeholder="Search or start new chat"
            className="w-full px-4 py-2 rounded-full bg-white border focus:outline-none"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {serchedUser.map((n) => (
            <Usercomponent
              key={n}
              name={n}
              lastMessage="Tap to view messages"
              avatar={`https://ui-avatars.com/api/?name=${n}&background=random`}
              onClick={() => setusername(n)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="flex-1 flex flex-col bg-[#efeae2]">

        {/* Chat Header */}
        <div className="h-16 bg-blue-600 text-white flex items-center px-6 text-xl font-bold">
          {username ? username : "Select a chat"}
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-3">

          {/* Incoming */}
          <div className="self-start bg-white px-4 py-2 rounded-lg shadow max-w-sm">
            Hi, how can I help you?
          </div>

          {/* Outgoing */}
          <div className="self-end bg-[#dcf8c6] px-4 py-2 rounded-lg shadow max-w-sm">
            I wanted to know about my order status.
          </div>

          <div className="self-start bg-white px-4 py-2 rounded-lg shadow max-w-sm">
            Sure! Let me check that for you.
          </div>
        </div>

        {/* Input Box */}
        <div className="h-16 bg-white flex items-center px-4 gap-3 border-t">
          <input
            className="flex-1 px-4 py-2 rounded-full border focus:outline-none"
            placeholder="Type a message"
          />
          <button className="bg-[#075e54] text-white px-6 py-2 rounded-full hover:bg-[#064c45]">
            Send
          </button>
        </div>
      </div>

    </div>
  );
};

export default Inboxpage;
