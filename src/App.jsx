
import { Outlet } from "react-router-dom";
import Sidebar from "./component/forMainPage/siddebar";
import Navigation_topbar from "./component/forMainPage/navigation_topbar";
import LoginPage from "./component/loginPage/loginPage";
import { useState } from "react";
function App() {
  const [loginStatus,setloginStatus] = useState(false);


  if(!loginStatus){
    return <LoginPage setloginStatus={setloginStatus}/>
  }


  return (
     <div className="bg-[#bfdbfe]  min-h-screen"> 
          <Sidebar className="block"/>
     
      <div className="ml-52 block">
            
            <Navigation_topbar setloginStatus={setloginStatus}/>
            <Outlet className="w-full h-full"/>
            
      </div>

    </div>
  )
}

export default App
