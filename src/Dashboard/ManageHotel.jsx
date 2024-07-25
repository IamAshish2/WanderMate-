import React, { useEffect, useState } from "react";
import { getHotels } from "../API/index.js";
import { StringSchema } from "yup";

const ManageHotel = () => {
  const [hotels, setHotel] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState();
  const [reserveNow, setReserveNow] = useState();
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages((prevImage) => [...prevImage, ...selectedImage]);
  };

  const handleImageDelete = (index) => {
    setImages((prevImage) => prevImage.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotels();
      setHotel(data);
    };
    fetchHotel();
  }, []);

  const handleEdit = (hotel) => {
    // console.log(hotel);
    setIsEditing(true);
    setName(hotel.name);
    setPrice(hotel.price);
    setImages(hotel.img);
    setFreeCancellation(hotel.freeCancellation);
    setReserveNow(hotel.reserveNow);
    setDescription(hotel.desc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (id) => {
    // setHotel((hotels) => hotels.filter((hotel) => hotel.id  !== id ))
    setHotel((prevHotel) => prevHotel.filter((hotel) => hotel.id !== id));
  };

  if (!hotels) return <div>loading...</div>;

  return (
    <div className="m-0 shadow-xl ">
      <div className=" ml-auto mr-auto">
        <h1 className="font-bold text-3xl mt-3 ml-3">
          {" "}
          {isEditing ? "Edit Hotel" : "Add New Hotel"}
        </h1>

        <form className="ml-3" onSubmit={(e) => handleSubmit(e)}>
          <p className="text-lg font-semibold mt-5">Name</p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p className="text-lg font-semibold mt-5">Price</p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <p className="text-lg font-semibold mt-5">Images</p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="file"
            multiple
            onChange={(e) => handleImageChange(e)}
          />
          <div className="flex gap-3">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  className="h-52 w-52 mt-5 object-cover"
                  src={`${typeof image === "string" ? image : URL.createObjectURL(image)}`}
                  alt="image"
                />

                <button
                  className="w-6 h-6 rounded-full absolute top-4 -right-1  bg-red-500 text-white"
                  onClick={() => handleImageDelete(index)}
                >
                  x
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <p className="text-lg font-semibold mt-5">Free Cancelation</p>
            <input
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
              className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
              type="checkbox"
            />
          </div>

          <div className="flex gap-11">
            <p className="text-lg font-semibold mt-5">Reserve Now</p>
            <input
              checked={reserveNow}
              onChange={(e) => setReserveNow(e.target.checked)}
              className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
              type="checkbox"
            />
          </div>

          <p className="mt-5 font-semibold text-lg">Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.description)}
            className="h-[100px] w-full px-5 py-3 rounded-md mt-5 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
          ></textarea>

          <button className="bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700  cursor-pointer">
            Add Hotel
          </button>
        </form>
      </div>

      <div className="relative w-[80%] ml-auto mr-auto mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="">
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-16 py-3  w-10">
                Action
              </th>
            </tr>
          </thead>

          {hotels.map((hotel) => (
            <tbody key={hotel.id}>
              <tr className="bg-white border-b dark:border-gray-700">
                <td className="px-6 py-4">{hotel.name}</td>
                <td className="px-6 py-4">{hotel.price}</td>
                <td className="flex  mt-4 gap-3">
                  <button
                    onClick={() => {
                      handleEdit(hotel);
                    }}
                    className="border border-gray-500 p-1 w-20 rounded  bg-green-500 text-white font-bold border-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(hotel.id);
                    }}
                    className="border border-gray-500 p-1 w-20 rounded  bg-red-500 text-white font-bold border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageHotel;
