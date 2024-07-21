import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { landingHeaderLinks, headerLinks } from "../helper-links/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/batman.jpg";



const Header = () => {
  const [open, setOpen] = useState(false);
  return (

    <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center relative">
      <RxHamburgerMenu
        size={26}
        color="black"
        className="cursor-pointer block md:hidden"
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
        {landingHeaderLinks.map((item) => (
          <div key={item.id}>
            <Link
              className="flex justify-around  font-bold text-gray-600 text-lg pl-4 py-3
          cursor-pointer hover:bg-gray-100 hover:rounded-lg"
              key={item.id}
              to={item.link}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </motion.div>

     <a href="/user/userprofile">
      <img
          className="h-10 w-10 object-cover rounded-full absolute right-4 top-1/2 transform -translate-y-1/2"
          src={profileImg}
          alt="image"
        />
     </a>
     
      <div className="absolute left-8 top-4 hidden md:block">
        <a href="/user/home">
          <h1 className="text-4xl font-bold text-blue-600">WanderMate</h1>
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        {headerLinks.map((links) => (
          <Link
            key={links.link}
            className="p-4 font-bold text-blue hidden md:block text-lg hover:border-b-2 cursor-pointer"
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
