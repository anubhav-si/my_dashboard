import React ,{useState} from "react";
import {Link} from "react-router-dom";


const Sidebar = () =>{
    // const side_list_upper = [Dashboard,Product,Favorites,Inbox,Order Lists,Product Stock]
        const [active, setActive] = useState("");

        const menu = [
            { name: "Home", path: "/" },
            { name: "Dashboard", path: "/dashboard" },
            { name: "Product", path: "/Products" },
            { name: "Favorites", path: "/favourite" },
            { name: "Inbox", path: "/inbox" },
            { name: "Order Lists", path: "/order_list" },
            { name: "Product Stock", path: "/product_stock" },
            { name: "Pricing", path: "/pricing" },
            { name: "To-Do", path: "/to_do" },
            { name: "Contact", path: "/contact" },
            { name: "Invoice", path: "/Invoice" },
            { name: "Ui Elements", path: "/ui_elements" },
            { name: "Team", path: "/team" },

        ];
    return (
        <div className=" fixed left-0 top-0 flex flex-col items-center shadow-2xl h-screen  bg-white w-52 "> 
            <div>
                <h1 className="m-auto py-3 font-extrabold text-3xl"> TRACK IT</h1>
            </div>
            <div className="w-full pl-8">
                <div>
                    <ul className=" flex flex-col gap-3 my-3 border-b-2  mb-3">
                        {menu.map((i)=>(
                            <Link to={i.path}>
                            <li key={i.name}
                            onClick={()=>{setActive(i.name)}}
                            className={`
                                        px-2 py-1 mx-3 rounded-lg 
                                        cursor-pointer
                                        ${active === i.name ? "bg-blue-600 text-white pr-10" : "text-black hover:bg-blue-100"}
                                    `}>
                                {i.name}
                            </li></Link>
                        ))}
                    </ul>
                </div>
               
                <div>
                      <ul className=" flex  gap-3 flex-col ">
                        <li>settings</li>
                        <li>Logout</li>
                       
                    </ul>
                </div>
            </div>
        
        
         </div>
    )
}

export default Sidebar;