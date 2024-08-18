import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerLinks } from "../helper-links/Data";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/batman.jpg";
import axios from "axios";
import { getUsers } from "../API";

const Header = () => {
  // const token = localStorage.getItem("token");
  // console.log(token);

  const getUser = async () => {
    const response = await getUsers();
    // console.log(response);
  };
  getUser();

  const [open, setOpen] = useState(false);
  const [show, setIsShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("expiresIn");
    if (!localStorage.getItem("token")) {
      navigate("/signin", { replace: true });
    }
  };

  return (
    <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center relative">
      <RxHamburgerMenu
        size={26}
        color="black"
        className="cursor-pointer block lg:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      />

      <motion.div
        initial={{ x: open ? 600 : 0 }}
        animate={{ x: open ? 0 : 600 }}
        transition={{ duration: 0.15 }}
        className={`
      h-screen w-[40%] sm:hidden fixed top-0 right-0 bg-white z-50 rounded-lg`}
      >
        {headerLinks.map((item) => (
          <div key={item.id}>
            <Link
              onClick={() => {
                setOpen(!open);
              }}
              className="flex justify-around  font-bold text-black-600 text-lg pl-4 py-3
          cursor-pointer hover:bg-gray-100 hover:rounded-lg"
              key={item.id}
              to={item.link}
            >
              {item.linkTitle}
            </Link>
          </div>
        ))}
      </motion.div>

      <div className="border border-blue-700">
        <img
          onClick={() => {
            setIsShow((prev) => !prev);
          }}
          className="h-10 w-10 object-cover  rounded-full absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
          src={profileImg}
          alt="image"
        />

        <div
          className={`h-auto w-48 border p-4 font-medium absolute right-10 top-12 bg-white shadow-lg rounded-lg z-10 ${show ? "block" : "hidden"}`}
        >
          <a href="/user/userProfile">
            <div className="p-2 mb-2 cursor-pointer hover:bg-gray-100 rounded-lg">
              Profile
            </div>
          </a>
          <div
            onClick={() => {
              handleLogout();
            }}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
          >
            Logout
          </div>
        </div>
      </div>

      <div className="absolute left-8 top-4 hidden md:hidden lg:block">
        <a href="/user/home">
          <h3 className="text-4xl font-bold text-blue-600 ">WanderMate</h3>
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        {headerLinks.map((links) => (
          <Link
            key={links.link}
            className="p-4 font-bold text-blue hidden  lg:block text-lg hover:border-b-2 cursor-pointer"
            to={links.link}
          >
            {links.linkTitle}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
