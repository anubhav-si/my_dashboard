import React ,{useEffect,useState}from "react";
import { use } from "react";
import { tasks } from "./utils/data";



const TOdoPage = () => {
    const [task,settask] = useState([]);
    
    const taskHandler = ()=>{
      
    }
    useEffect(()=>{
        taskHandler();
    },[task]);

  return (
    <div className="mx-10 min-h-screen  ">
      {/* Page Title */}
     
      {/* Search */}
      <div className="w-full  sticky top-0 z-30 flex justify-between items-center  mb-10">
        <h2 className="text-3xl font-extrabold  items-center">To-Do List</h2>

        <div className="shadow rounded-full flex  px-4 py-2 mr-10  font-bold text-white bg-blue-600">
              <button>Add new task</button>
        </div>
      </div>

            {tasks.map((t)=>{
                return (
                    <div key={t.id} className="w-full bg-white rounded-xl border my-6 border-gray-200 p-4 flex items-center justify-between hover:shadow-sm transition-all">
                        {/* Left side: checkbox + text */}
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded border bg-blue-500 border-gray-300"></div>

                            <h1 className=" text-gray-800 font-medium text-l">{t.task}</h1>
                        </div>

                        {/* Right side: star + close */}
                        <div className="flex items-center gap-4">
                                {/* star icon */}
                                <button className="p-2 rounded-full hover:bg-gray-100 transition">
                                ⭐
                                </button>

                                {/* X button */}
                                <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
                                ✖
                                </button>
                        </div>
                    </div>
                       )
             })}
                
      </div>
    
  );
};

export default TOdoPage;
