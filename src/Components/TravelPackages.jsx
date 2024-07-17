import { travelPackagesPage } from "../helper-links/Data";

const TravelPackages = () => {
  return (
    <div
      className="flex flex-col ml-auto mr-auto h-90vh w-[80%]"
      style={{ backgroundColor: "whitesmoke" }}
    >
      {travelPackagesPage.map((travelPackage) => (
        <div
          key={travelPackage.id}
          className="flex h-[75%] justify-center items-center m-4  border border-gray-300 shadow-xl rounded-xl">
          <div
            className=" w-[85%] h-[37vh] rounded-md m-2"
            style={{
              background: `url(${travelPackage.img})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text-xl font-bold">{travelPackage.name}</h1>
            <p className="text-lg">${travelPackage.price} per night</p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">
              View Deal
            </button>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelPackages;
