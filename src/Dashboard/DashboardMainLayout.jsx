import React from "react";
import { Outlet } from "react-router-dom";
import DashBoardSideLayout from "./DashboardSideLayout";
import { RxHamburgerMenu } from "react-icons/rx";

const DashboardMainLayout = () => {
  return (
    <div className=" bg-white">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMainLayout;
