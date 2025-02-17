import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/userProfile.jpg";

import { destination, thingsToDo } from "../helper-links/Data";

// import {
//   destination,
//   topDestinations,
//   travelPackages,
//   hotels,
// } from "../helper-links/Data";

import topDestinationImg from "../assets/img7.jpg";
import hotelIMg from "../assets/img10.jpg";
import travelPackgesImg from "../assets/img9.jpg";
import Cards from "../elements/Card";
import Carousel from "./Carousel";

import { RxHamburgerMenu } from "react-icons/rx";
import { landingHeaderLinks, headerLinks } from "../helper-links/Data";
import {
  getTopDestinations,
  getHotels,
  getTravelPackages,
  getThingsToDo,
} from "../API";

const Destination = () => {
  const hotelUrl = "/user/hotels";
  const topDestinationUrl = "/user/destination";
  const travelPackagesUrl = "/user/TravelPackages";
  const thingsToDoUrl = "/user/thingsToDo";

  const [topDestinations, setTopDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [travelPackages, setTravelPackages] = useState([]);
  const [thingsToDo, setThingsToDo] = useState([]);

  useEffect(() => {
    const getTopDestination = async () => {
      const data = await getTopDestinations();
      setTopDestinations(data);
    };
    getTopDestination();

    const getHotel = async () => {
      const data = await getHotels();
      setHotels(data);
    };
    getHotel();

    const getTravelPackage = async () => {
      const data = await getTravelPackages();
      setTravelPackages(data);
    };
    getTravelPackage();
  }, []);

  return (
    <>
      <div className="flex flex-col p-1 h-100vh w-90%">
        <div className="w-full h-full">
          <Carousel data={destination} />
        </div>

        <div className="flex flex-col mt-10 w-[85%] ml-auto m-auto">
          <div>
            <div className="flex align-center gap-2">
              <img
                src={topDestinationImg}
                alt="top destination img"
                className=" rounded-full h-10 w-10 bg-cover"
              />
              <p className="font-bold mt-1 text-md ">Top Destinations</p>
            </div>
            <Cards data={topDestinations} url={topDestinationUrl} />
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
            <Cards data={travelPackages} url={travelPackagesUrl} />
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
            <Cards data={hotels} url={hotelUrl} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
