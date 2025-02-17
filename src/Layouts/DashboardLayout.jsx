import React from "react";
import DashBoardSideLayout from "../Dashboard/DashboardSideLayout";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashBoardSideLayout />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
