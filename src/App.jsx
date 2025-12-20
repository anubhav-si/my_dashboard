
import { Outlet } from "react-router-dom";
import Sidebar from "./component/layout/siddebar";
import Navigation_topbar from "./component/layout/topbar";
import LoginPage from "./component/features/auth/loginPage";
import { useContext, useState } from "react";
import { AuthContext } from "./context/authcontect";
function App() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);


  if(!isLoggedIn){
    return <LoginPage />
  }


  return (
     <div className="bg-[#bfdbfe]  min-h-screen"> 
          <Sidebar className="block"/>
     
      <div className="ml-52 block">
            
            <Navigation_topbar />
            <Outlet className="w-full h-full"/>
            
      </div>

    </div>
  )
}

export default App
