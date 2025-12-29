
import { Outlet } from "react-router-dom";
import Sidebar from "./component/layout/siddebar";
import Navigation_topbar from "./component/layout/topbar";
import LoginPage from "./component/features/auth/loginPage";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((Store)=> Store.User.islogedin);

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
