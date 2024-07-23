import React from "react";

const Tempelate = ({ data }) => {
  return (
    <div className="h-[50vh] w-[100%] mb-10">
      <div className="h-[50vh] w-[100%] ml-auto mr-auto ">
        {/* images section */}
        <div className="flex flex-2 h-full w-full">
          {/* w-[50%]  */}
          <div
            className="border h-full w-[100%] md:w-[50%]"
            style={{
              backgroundImage: `url(${data.img[0]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>

          {/*   */}
          <div className="border flex  sm:w-0 md:w-[50%] flex-col h-full">
            {/* first image section */}
            <div className="flex h-[50%] ">
              {/* two images here */}
              <div
                className="w-[50%] h-full"
                style={{
                  backgroundImage: `url(${data.img[0]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[50%] h-full"
                style={{
                  backgroundImage: `url(${data.img[0]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="h-[50%] flex w-full border-blue-500 bg-blue-500">
              {/* two images here */}
              <div
                className="w-[50%] h-full"
                style={{
                  backgroundImage: `url(${data.img[0]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[50%] h-full "
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
    </div>
  );
};

export default Tempelate;
