import React from 'react'
import Usercomponent from './component/usercomponent';
import { useState } from 'react';

const Inboxpage = () => {
  const [username, setusername] = useState();
  const users = [
  "anubhav singh",
  "ankit mishra",
  "harshit singh",
  "ankit yadav",

  // Added 20 more
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

  return (
    <div className=" flex items-start justify-center gap-10 h-full">

      {/* LEFT USER LIST */}
      <div className="w-4/12 rounded-2xl bg-white shadow-xl border border-gray-200">
        
        {/* HEADER */}
        <div className="bg-blue-600 text-white rounded-t-2xl flex justify-between items-center px-2 py-2 shadow">
          <h1 className="text-2xl font-bold">My Inbox</h1>

          <div className="mt-2 flex">
            <input
              className="w-6/12 rounded-l-xl px-3 py-2 bg-white border text-blue-600  focus:outline-none"
              type="text"
              placeholder="Search user"
            />
            <button className="bg-white text-blue-600 border border-blue-600 font-semibold px-4 rounded-r-xl">
              Search
            </button>
          </div>
        </div>

        {/* USER LIST */}
        <div className="h-[500px] overflow-y-auto scroll-none py-2">
          {users.map((n, i) => (
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
      <div className="w-7/12 rounded-2xl bg-white shadow-xl border border-gray-200">
        
        {/* CHAT HEADER */}
        <div className="bg-blue-600 text-white rounded-t-2xl px-6 py-4 shadow flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {username ? username : "Messages"}
          </h1>
        </div>

        {/* CHAT AREA */}
        <div className="h-[500px] flex flex-col justify-between p-6">
          
          {/* Messages Box */}
          <div className="border rounded-xl h-full overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">

            {/* Example static bubbles just for UI */}
            <div className="self-start bg-white border px-4 py-2 rounded-xl shadow-sm max-w-sm">
              Hi, how can I help you?
            </div>

            <div className="self-end bg-blue-600 text-white px-4 py-2 rounded-xl shadow max-w-sm">
              I wanted to know about my order status.
            </div>

            <div className="self-start bg-white border px-4 py-2 rounded-xl shadow-sm max-w-sm">
              Sure! Let me check that for you.
            </div>

          </div>

          {/* TYPE BOX */}
          <div className="mt-4 flex gap-2">
            <input
              className="flex-1 border rounded-xl px-4 py-3 focus:outline-blue-400"
              placeholder="Type a message..."
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow">
              Send
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Inboxpage;
