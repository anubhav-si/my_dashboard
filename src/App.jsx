
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./component/layout/siddebar";
import Navigation_topbar from "./component/layout/topbar";
import LoginPage from "./component/features/auth/loginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userLogin } from "./reduxToolKit/userSlice";



function App() {
  const {islogedin,profile} = useSelector((Store)=> Store.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const getUserProfile = async() =>{
   try {
     if (profile === null){
      const userdata = await fetch("http://localhost:3001/profile",{
        credentials:"include",
      });
       
      const data = await userdata.json();
      // console.log(data);
      if (data.error) {
        return navigate("/login")
      }
      
      dispatch(userLogin(data))
       return navigate("/")

    }
    
   } catch (err) {
      console.log(err.message);

      
   }

   }

  useEffect(()=>{
    getUserProfile();
    
  },[])


  if(!islogedin){
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
