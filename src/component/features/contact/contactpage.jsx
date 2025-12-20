import React from "react";
import { Link, Outlet } from "react-router-dom";



const ContactPage = () => {
  return (
    <div className="mx-10">
      <Outlet/>
    </div>

  );
};

export default ContactPage;
