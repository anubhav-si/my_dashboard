import React from "react";
import { Outlet } from "react-router-dom";



const TeamPage = () => {
  return (
    <div className="mx-10">
      {/* Header */}
      <Outlet/>
    </div>
  );
};

export default TeamPage;
