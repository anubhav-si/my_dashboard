import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiBox,
  FiStar,
  FiMail,
  FiList,
  FiArchive,
  FiDollarSign,
  FiCheckSquare,
  FiPhone,
  FiFileText,
  FiGift,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX
} from "react-icons/fi";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FiGrid /> },
    { name: "Products", path: "/products", icon: <FiBox /> },
    { name: "Bestseller", path: "/bestseller", icon: <FiStar /> },
    { name: "Inbox", path: "/inbox", icon: <FiMail /> },
    { name: "Order Lists", path: "/order_list", icon: <FiList /> },
    { name: "Product Stock", path: "/product_stock", icon: <FiArchive /> },
    { name: "Pricing", path: "/pricing", icon: <FiDollarSign /> },
    { name: "To-Do", path: "/to_do", icon: <FiCheckSquare /> },
    { name: "Contact", path: "/contact", icon: <FiPhone /> },
    { name: "Invoice", path: "/Invoice", icon: <FiFileText /> },
    { name: "Offers", path: "/offers", icon: <FiGift /> },
    { name: "Team", path: "/team", icon: <FiUsers /> },
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
  ];

  return (
    <>
      <button
        className="md:hidden fixed top-20 left-4 z-50 text-2xl"
        onClick={() => setOpen(true)}
      >
        <FiMenu />
      </button>

      <div
        className={`
          fixed top-16 left-0 h-screen bg-white shadow-[6px_6px_20px_rgba(0,0,0,0.08)]
          transition-all duration-300 z-40
          ${open ? "w-52" : "w-16"}
          md:w-52
        `}
      >
        <div className="flex flex-col h-full">

          <div className="flex justify-end p-2 md:hidden">
            <FiX className="text-xl cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <ul className="flex flex-col gap-2 border-b-2 pb-3">
            {menu.map((i) => (
              <Link key={i.name} to={i.path}>
                <li
                  onClick={() => {
                    setActive(i.name);
                    setOpen(false);
                  }}
                  className={`
                    flex items-center gap-3 px-3 py-2 mx-2 rounded-lg cursor-pointer
                    ${active === i.name
                      ? "bg-blue-600 text-white"
                      : "text-black hover:bg-blue-100"}
                  `}
                >
                  <span className="text-xl">{i.icon}</span>
                  <span className={`${open ? "block" : "hidden"} md:block`}>
                    {i.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>

          <div className="mt-auto mb-4">
            <li className="flex items-center gap-3 px-3 py-2 mx-2 cursor-pointer hover:bg-blue-100 rounded-lg">
              <FiLogOut className="text-xl" />
              <span className={`${open ? "block" : "hidden"} md:block`}>
                Logout
              </span>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
