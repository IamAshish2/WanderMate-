import React, { useEffect, useState } from "react";
import { hotelDetails } from "../helper-links/Data";
import Map from "../Components/Map";
import WriteReviews from "../elements/WriteReviews";

const Tempelate = ({ data }) => {
  const images = data.imageUrl;

  const handleSetImage = (index) => {
    const n = images.length;

    if (index >= n || index === 0) {
      return images[0];
    } else {
      return images[index] != " " ? images[index] : images[0];
    }
  };

  return (
    <div className=" p-1 mt-4 md:p-0 h-[100%] w-[100%] md:w-[90%] md:mt-5 lg:w-[85%] mb-10 ml-auto mr-auto">
      <div className="h-[40vh] md:h-[55vh] w-[100%] ml-auto mr-auto ">
        {/* images section */}
        <div className="flex flex-2 h-full w-full">
          <div
            className="h-full w-[100%] md:w-[50%] drop-shadow-xl md:mr-1"
            style={{
              backgroundImage: `url(${handleSetImage(0)})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="border flex  sm:w-0 md:w-[50%] flex-col h-full ">
            {/* first image section */}
            <div className="flex h-[50%] ">
              {/* two images here */}
              <div
                className="w-[50%] h-full drop-shadow-xl mr-1 "
                style={{
                  backgroundImage: `url(${handleSetImage(1)})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[50%] h-full  drop-shadow-xl "
                style={{
                  backgroundImage: `url(${handleSetImage(2)})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="h-[50%] flex w-full ">
              {/* two images here */}
              <div
                className="w-[50%] h-full drop-shadow-xl mr-1 mt-1"
                style={{
                  backgroundImage: `url(${handleSetImage(3)})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[50%] h-full drop-shadow-xl mt-1 "
                style={{
                  backgroundImage: `url(${handleSetImage(4)})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-bold mt-3 ">
        {hotelDetails.map((nav) => (
          <li  key = {nav.id} className=" list-none mr-2 inline-block  hover:border-b-4 hover:border-b-red-400">
            <a href={nav.to}>{nav.name}</a>
          </li>
        ))}
      </div>

      <div className="h-[60vh] w-full mt-4" id="location">
        <Map />
      </div>

      <div className="w-[100%] h-[20vh]  border bg-white rounded-lg drop-shadow-md mt-4 p-2">
        <p className="font-bold text-2xl ml-4 mt-3 mb-0">Price: {data.price}</p>
        <div className=" ml-2 flex items-center flex-start md:justify-around mt-0">
          <p className="inline-block text-sm mt-4 text-start w-[80%]">
            {data.description}
          </p>
          <button
            className="inline-block text-nowrap border p-2 bg-blue-500
                text-white rounded-md"
          >
            Book Now
          </button>
        </div>
      </div>
      <WriteReviews />
    </div>
  );
};

export default Tempelate;
