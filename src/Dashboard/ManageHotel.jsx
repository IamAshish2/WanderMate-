import React, { useState } from "react";
const ManageHotel = () => {
  const [file, setFile] = useState([]);

  const handleChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setFile((prevImage) => [...prevImage, ...selectedImage]);
  };

  return (
    <div className="h-screen w-full shadow-xl m-3">
      <h1 className="font-bold text-3xl mt-3 ml-3">Add New Hotel</h1>

      <form className="ml-3">
        <p className="text-lg font-semibold mt-5">Name</p>
        <input
          className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
          type="text"
        />

        <p className="text-lg font-semibold mt-5">Price</p>
        <input
          className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
          type="text"
        />

        <p className="text-lg font-semibold mt-5">Images</p>
        <input
          className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
          type="file"
          multiple
          onChange={(e) => handleChange(e)}
        />
        <div className="flex gap-4">
          {file.map((imag) => (
            <>
              <img
                className="h-52 w-52 mt-5 object-cover"
                src={URL.createObjectURL(imag)}
                alt="image"
              />

              <div className="w-5 h-5 rounded-full bg-red-500 text-white flex justify-center items-center cursor-pointer">
                x
              </div>
            </>
          ))}
        </div>

        <div className="flex gap-3">
          <p className="text-lg font-semibold mt-5">Free Cancelation</p>
          <input
            className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
            type="checkbox"
          />
        </div>

        <div className="flex gap-11">
          <p className="text-lg font-semibold mt-5">Reserve Now</p>
          <input
            className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
            type="checkbox"
          />
        </div>

        <p className="mt-5 font-semibold text-lg">Description</p>
        <textarea className="h-[100px] w-full px-5 py-3 rounded-md mt-5 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"></textarea>

        <button className="bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700  cursor-pointer">
          Add Hotel
        </button>
      </form>
    </div>
  );
};

export default ManageHotel;
