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
