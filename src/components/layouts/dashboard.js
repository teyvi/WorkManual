import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
     <div className="w-full flex flex-col items-center"> <Outlet /></div>
    </div>
  );
}

export default DashboardLayout;
