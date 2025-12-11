
import { Outlet } from "react-router-dom";
import Sidebar from "./component/forMainPage/siddebar";
import Navigation_topbar from "./component/navigation_topbar";
import Main_contentpage from "./component/forMainPage/main_contentpage";

function App() {
  

  return (
     <div className=" bg-[#d3d5df]  h-full"> 
          <Sidebar className="block"/>
     
      <div className="ml-52 block">
            
            <Navigation_topbar/>
            <Outlet className="w-full h-full"/>
            
      </div>

    </div>
  )
}

export default App
