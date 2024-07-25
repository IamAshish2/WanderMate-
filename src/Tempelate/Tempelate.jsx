import React ,{useState} from "react";
import StarsRating from "../Components/StarsRating";
import { hotelDetails } from "../helper-links/Data";
import Map from "../Components/Map";

const Tempelate = ({ data }) => {

  const [reviewData,setReviewData] = useState({
    comment:"",
    rating:0,
  });

  
  return (
    <div className=" p-1 mt-4 md:p-0 h-[100%] w-[100%] md:w-[90%] md:mt-5 lg:w-[85%] mb-10 ml-auto mr-auto">
      <div className="h-[40vh] md:h-[55vh] w-[100%] ml-auto mr-auto ">
        {/* images section */}
        <div className="flex flex-2 h-full w-full">
          {/* w-[50%]  */}
          <div
            className="h-full w-[100%] md:w-[50%] drop-shadow-xl md:mr-1"
            style={{
              backgroundImage: `url(${data.img[0]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>

          {/*   */}
          <div className="border flex  sm:w-0 md:w-[50%] flex-col h-full ">
            {/* first image section */}
            <div className="flex h-[50%] ">
              {/* two images here */}
              <div
                className="w-[50%] h-full drop-shadow-xl mr-1 "
                style={{
                  backgroundImage: `url(${data.img[0]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[50%] h-full  drop-shadow-xl "
                style={{
                  backgroundImage: `url(${data.img[0]})`,
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
                  backgroundImage: `url(${data.img[0]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[50%] h-full drop-shadow-xl mt-1 "
                style={{
                  backgroundImage: `url(${data.img[0]})`,
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
          <li key={nav.id} className=" list-none mr-2 inline-block  hover:border-b-4 hover:border-b-red-400">
            <a href={nav.to}>{nav.name}</a>
            </li>
            ))}
        </div>

        <div className="h-[60vh] w-full mt-4" id="location">
            <Map/>
        </div>
    

      <div className="w-[100%] h-[20vh]  border bg-white rounded-lg drop-shadow-md mt-4 p-2">
            <p className="font-bold text-2xl ml-4 mt-3 mb-0">{data.id}</p>
            <div className=" ml-2 flex items-center flex-start md:justify-around mt-0">
              <p className="inline-block text-sm mt-4 text-start w-[80%]">{data.desc}</p>
              <button className="inline-block text-nowrap border p-2 bg-blue-500
                text-white rounded-md">Book Now</button>
            </div>
      </div>    

      <div className=" p-2 mt-3 mb-4 h-80 gap-2 border text-sm bg-white rounded-lg drop-shadow-md">
        <p className="font-bold text-lg ml-2 mt-2">Write a Review</p>
        <p className="ml-3">Your Review</p>
        <textarea type="text" className="border h-32 w-full ml-2 mt-1 rounded-md"
          onChange={(e) => {handleTextArea(e)}}/>
        <p className="ml-3 mt-2">Your Rating</p>

        {/* stars */}
        <div className="flex mt-1 mb-1">
        <button className="text-2xl ml-2">&#9733;</button>
        <button className="text-2xl ml-2">&#9733;</button>
        <button className="text-2xl ml-2">&#9733;</button>
        <button className="text-2xl ml-2">&#9733;</button>
        <button className="text-2xl ml-2">&#9733;</button>
        </div>
        <button className="border w-32 p-2 rounded-md ml-3 bg-blue-500 text-white">Submit Review</button>

       
      </div>
    </div>
  );
};

export default Tempelate;
