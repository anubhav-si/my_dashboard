import React ,{useEffect,useState}from "react";

import { tasks } from "./utils/data";



const TOdoPage = () => {
  const [isOpen,setisOpen] = useState(false);
    const [task,settask] = useState(tasks);
    const [newTask,setNewTask] = useState({
      title:"",
      description:""});

    const handleClick = () =>{
      if(!newTask.title && !newTask.description) return ;

      settask([...task,newTask]);

      setNewTask({});
      setisOpen(false)


    };
    
   
  return (
    
    <div className="mx-10 min-h-screen  ">
      {/* Page Title */}
     
      {/* Search */}
      <div className="w-full  sticky top-0 z-30 flex justify-between items-center  mb-10">
        <h2 className="text-3xl font-extrabold  items-center">To-Do List</h2>


      { !isOpen && (
         <div 
        onClick={()=>setisOpen(!isOpen)}
        className="shadow rounded-full flex  px-4 py-2 mr-10  font-bold text-white bg-blue-600">
              <button>Add new task</button>
        </div>
      )}

      
       
      </div>
      
       {isOpen && (
              <div className="w-full max-w-3xl mx-auto my-6">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Add New Task
                    </h2>
                    <p className="text-sm text-gray-500">
                      Fill in the details below to create a task
                    </p>
                  </div>

                  {/* Form */}
                  <form className="px-6 py-5 space-y-5">
                    
                    {/* Task Title */}
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">
                        Task Title
                      </label>
                      <input
                        type="text"
                        value={newTask.title}
                        onChange={(e)=>setNewTask(e.target.value)}
                        placeholder="e.g. Design dashboard UI"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                  transition"
                      />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                        type="text"
                        value={setNewTask.description}
                        onChange={(e)=>setNewTask(e.target.value)}
                        name="description"
                        placeholder="Brief description of the task"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                  transition"
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        name="cancle"
                        onClick={handleClick}
                        className="px-5 py-2.5 rounded-xl text-sm font-medium
                                  border border-gray-300 text-gray-700
                                  hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        name="add"
                        onClick={handleClick}
                        className="px-5 py-2.5 rounded-xl text-sm font-medium
                                  bg-indigo-600 text-white
                                  hover:bg-indigo-700 active:scale-95 transition"
                      >
                        Add Task
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            )}
               

            {task.map((t)=>{
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
