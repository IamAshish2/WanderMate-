import { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import BGImg from "../assets/bg8.jpg";
import HeaderImage from "../assets/headerImg5.jpg";
import {  landingFooterLinks, LandingHeaderLinks, NavLinks } from "../helper-links/Data.js";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="h-screen w-full flex flex-col justify-between"
        style={{
          background: `linear-gradient(rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0.6)),url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center relative">
          <RxHamburgerMenu
            size={30}
            color="white"
            className="cursor-pointer block md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}
            className="h-52 w-40 object-cover absolute right-0"
            src={HeaderImage}
            alt="image"
          />
          <div className="absolute left-8 top-4 hidden md:block">
            <h1 className="text-4xl font-bold text-orange-500">Explore.</h1>
          </div>
          <div className="flex-1 flex justify-center items-center gap-4">
            {NavLinks.map((links) => (
              <Link
                key={links.id}
                className="p-4 font-bold text-white hidden md:block text-lg hover:border-b-2 cursor-pointer"
                to={links.link}
              >
                {links.title}
              </Link>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ x: open ? 600 : 0 }}
          animate={{ x: open ? 0 : 600 }}
          transition={{ duration: 0.3 }}
          className="h-screen w-[40%] block md:hidden fixed top-0 right-0 bg-zinc-300 z-50 rounded-xl"
        >
          {LandingHeaderLinks.map((landingFooterLinks) => (
            <Link
              key={landingFooterLinks.id}
              className="flex p-4 font-bold hover:bg-blue-300 cursor-pointer"
              to={landingFooterLinks.link}
            >
              {landingFooterLinks.title}
            </Link>
          ))}
        </motion.div>

        <div className="w-full text-center text-white">
          <p className="text-lg font-bold md:text-xl lg:text-2xl bg-gradient-to-b from-gray-400 to-gray-100 text-transparent bg-clip-text">
            The Country of Himalays
          </p>
          <h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-yellow-600">NEP</span>AL
          </h1>
        </div>

        <div className="w-full grid grid-cols-2 ">
          <div className="h-full w-full">
            <p className="leading-6 pl-6 md:pl-12 pb-6 md:pb-12 text-lg text-white font-semibold">
              Visit Nepal, You will never regret it. <br /> This is something
              incredible, fantastic, <br /> mesmerizing and lifetime experience.{" "}
            </p>
          </div>

          <div className="h-full w-full flex items-end ">
            <div className=" h-20 w-full items-center text-xl flex justify-around gap-1 right-0 bottom-0">
              {landingFooterLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-white font-bold list-none hover:border-b-4 border-yellow-400"
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </div>
          </div> 

        </div>
       

         </div>
    </>
  );
};

export default LandingPage;

	
