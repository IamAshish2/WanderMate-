import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { adminSidebar } from "../helper-links/Data";
import "../index.css";
import { handleLogout } from "../API/operations";

import {
  LayoutDashboard,
  Building2,
  Plane,
  MapPin,
  CalendarCheck,
  MessageSquare,
  ChevronLeft,
  LogOut,
  Menu,
} from "lucide-react";

const DashBoardSideLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(1);
  const navigate = useNavigate();

  function handleOptionsClick(e, id) {
    e.preventDefault();
    setActiveItem(id);
    const path = adminSidebar.find((a) => a.id === id);
    if (path) {
      navigate(path.to);
    }
  }

  function logout() {
    const res = handleLogout();
    if (res) navigate("/");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed md:static h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-50
        ${isOpen ? "w-64" : "w-20"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <h1
            className={`font-bold text-xl text-blue-600 transition-opacity duration-300 
          ${isOpen ? "opacity-100" : "opacity-0 hidden md:block"}`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? (
              <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            ) : (
              <Menu className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {adminSidebar.map((item) => (
            <a
              key={item.id}
              href={item.to}
              onClick={(e) => {
                handleOptionsClick(e, item.id);
              }}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 group
              ${
                activeItem === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span
                className={`font-medium transition-all duration-300 
              ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4 hidden md:block"
              }`}
              >
                {" "}
                {activeItem === item.id && (
                  <div className="absolute -left-3 w-1 h-8 bg-blue-600 rounded-r-full transform -translate-y-1/2 top-1/2 " />
                )}
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-[16rem] p-4 border-t  border-gray-200">
          <button
            onClick={() => {
              logout();
            }}
            className={`flex items-center space-x-4 p-3 w-full rounded-lg text-gray-600 
            hover:bg-red-50 hover:text-red-600 transition-all duration-200 group`}
          >
            <div className="transition-transform duration-200 group-hover:scale-110">
              <LogOut className="w-5 h-5" />
            </div>
            <span
              className={`font-medium transition-all duration-300
            ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4 hidden md:block"
            }`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardSideLayout;
