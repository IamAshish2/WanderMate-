import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/userProfile.jpg";

import {
  destination,
  topDestinations,
  travelPackages,
  hotels,
} from "../helper-links/Data";
import topDestinationImg from "../assets/img7.jpg";
import hotelIMg from "../assets/img10.jpg";
import travelPackgesImg from "../assets/img9.jpg";
import Cards from "../elements/Card";
import Carousel from "./Carousel";

import { RxHamburgerMenu } from "react-icons/rx";
import { landingHeaderLinks, headerLinks } from "../helper-links/Data";

const Destination = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col p-1 h-100vh w-90%">
        {/* header */}
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
            {headerLinks.map((item) => (
              <div key={item.id}>
                <Link
                  className="flex justify-around  font-medium text-gray-600 text-lg pl-4 py-3
                  cursor-pointer hover:bg-gray-100 hover:rounded-lg"
                  key={item.id}
                  to={item.link}
                >
                  {item.linkTitle}
                </Link>
              </div>
            ))}
          </motion.div>

          <img
            className="h-10 w-10 object-cover rounded-full absolute right-4 top-1/2 transform -translate-y-1/2"
            src={profileImg}
            alt="image"
          />
          <div className="absolute left-8 top-4 hidden md:block">
            <a href="/user/home">
              <h1 className="text-4xl -ml-1 font-bold text-blue-600">WanderMate</h1>
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

        <div className="w-full h-full">
          <Carousel data={destination} />
        </div>

        <div className='flex flex-col mt-10 w-[85%] ml-auto m-auto'>
          <div>
            <div className="flex align-center gap-2">
              <img
                src={topDestinationImg}
                alt="top destination img"
                className=" rounded-full h-10 w-10 bg-cover"
              />
              <p className="font-bold mt-1 text-md ">Top Destinations</p>
            </div>
            <Cards data={topDestinations} />
          </div>
          

          <div className="mt-10">
          <div className="flex align-center gap-2">
            <img
              src={travelPackgesImg}
              alt="top destination img"
              className=" rounded-full h-10 w-10"
            />
            <p className="font-bold mt-1 text-md ">Travel Packages</p>
          </div>
          <Cards data={travelPackages} />
        </div>

        <div className="mt-10">
          <div className="flex align-center gap-2">
            <img
              src={hotelIMg}
              alt="top destination img"
              className=" rounded-full h-10 w-10"
            />
            <p className="font-bold mt-1 text-md ">Hotels</p>
          </div>
          <Cards data={hotels} />
        </div>

        </div>

    
      </div>
    </>
  );
};

export default Destination;
