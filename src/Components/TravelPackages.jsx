import StarsRating from "./StarsRating";
import { useEffect, useState } from "react";
import { getTravelPackages } from "../API";
const TravelPackages = () => {
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    const fetchTravelPackages = async () => {
      const data = await getTravelPackages();
      setTravelPackages(data);
    };
    fetchTravelPackages();
  }, []);

  return (
    <div
      className="flex flex-col ml-auto mr-auto h-90vh w-[80%]"
      style={{ backgroundColor: "whitesmoke" }}
    >
      {travelPackages.map((travelPackage) => (
        <div
          key={travelPackage.id}
          className="flex h-[75%] justify-center items-center m-4  border border-gray-200 shadow-xl rounded-xl"
        >
          <div
            className=" w-[85%] h-[37vh] rounded-md m-2"
            style={{
              background: `url(${travelPackage.imageUrl[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
          <div className="w-full flex flex-col gap-2 justify-center items-center mt-4">
            <h1 className="text-xl font-bold">{travelPackage.name}</h1>
            <p className="text-lg">${travelPackage.price} per night</p>
            <a href={`/user/travelPackages/${travelPackage.id}`}>
              <button className="mt-4 p-2 bg-blue-500 text-white rounded">
                View Deal
              </button>
            </a>

            <p className="text-green-600 text-center flex justify-center items-center">
              {travelPackage.freeCancellation
                ? "✔️ Free Cancellation"
                : "❌ No Free Cancellation"}
            </p>
            <p className="text-green-600 tetx-center flex justify-center items-center">
              {travelPackage.reserveNow
                ? "✔️Reserve now, pay at stay"
                : "❌Pay at stay not available"}
            </p>
            <StarsRating rating={travelPackage.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelPackages;
