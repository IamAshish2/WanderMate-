import { useState,useEffect } from "react";

// import { hotelPage } from "../helper-links/Data";
import StarsRating from "./StarsRating";
import { getHotels } from "../API";
import Tempelate from "../InsidePage/Tempelate";

const Hotels = () => {
  const [hotels,setHotels] = useState([]);

  useEffect( () => {
    const fetchHotels = async() => {
      const data = await getHotels();
      setHotels(data);
    }

    fetchHotels();
  },[])

  if(!hotels) return <div>loading...</div>


  return (
    <div
      className="flex flex-col ml-auto mr-auto h-90vh w-[80%] "
      style={{ backgroundColor: "whitesmoke" }}
    >
      {hotels.map((hotel) => (
       
        <div
          key={hotel.id}
          className="flex h-[75%] justify-center p-1 items-center m-4  border border-gray-200 shadow-xl rounded-xl" 
        >
           {/* <a className="w-[85%] h-[37vh]" href={`/user/hotels/${hotel.id}`}> */}
            <div
              className=" w-[85%] h-[37vh] rounded-md m-2"
              style={{
                background: `url(${hotel.img[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          {/* </a> */}
        

          <div className="w-full flex flex-col gap-2 justify-center items-center mt-4">
            <h1 className="text-xl font-bold">{hotel.name}</h1>
            <p className="text-lg">${hotel.price} per night</p>

              <a href={`/user/hotels/${hotel.id}`}>
                <button  className="mt-4 p-2 bg-blue-500 text-white rounded">
                View Deal
              </button>
              </a>
            

            <p className="text-green-600 text-center flex justify-center items-center">
              {hotel.freeCancellation
                ? "✔️ Free Cancellation"
                : "❌ No Free Cancellation"}
            </p>
            <p className="text-green-600 tetx-center flex justify-center items-center">
              {hotel.reserveNow
                ? "✔️Reserve now, pay at stay"
                : "❌Pay at stay not available"}
            </p>
            <StarsRating rating={hotel.rating}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
