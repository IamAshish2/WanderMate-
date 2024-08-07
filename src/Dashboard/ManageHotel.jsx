import React, { useEffect, useState } from "react";
import { getHotels } from "../API/index.js";
import axios from "axios";
import { useParams } from "react-router-dom";

const ManageHotel = () => {
  // const {id} = useParams();
  const [hotels, setHotel] = useState([]);
  const [open, setOpen] = useState(false);
  const [hotelIdForDelete, setHotelIdForDelete] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState();
  const [description, setDescription] = useState("");
  const [currentHotel, setCurrentHotel] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages((prevImage) => [...prevImage, ...selectedImage]);
  };

  const handleImageDelete = (index) => {
    setImages((prevImage) => prevImage.filter((_, i) => i !== index));
  };

  const fetchHotel = async () => {
    const data = await getHotels();
    setHotel(data);
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  const handleEdit = (hotel) => {
    // console.log(hotel);
    setCurrentHotel(hotel);
    setIsEditing(true);
    setName(hotel.name);
    setPrice(hotel.price);
    setImages(hotel.img);
    setFreeCancellation(hotel.freeCancellation);
    setReserveNow(hotel.reserveNow);
    setDescription(hotel.desc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let imageUrls = await uploadImagesToCloudinary();

    const newImages = images.filter(
      (image) => image instanceof Blob || image instanceof File
    );

    const existingImages = images.filter((image) => typeof image == "string");

    // upload new images if any
    const newImageUrls =
      newImages.length > 0 ? await uploadImagesToCloudinary(newImages) : [];
    console.log("new image urls", newImageUrls);

    const combinedImageUrls = [...existingImages, ...newImageUrls];
    const imageUrl = combinedImageUrls.filter(
      (item) => Object.keys(item).length !== 0
    );

    const hotelData = {
      //id: isEditing ? currentHotel.id : String(hotels.length + 1), //////////////////////////////////////////////////////////////////////////////
      Name: name,
      Price: price,
      ImageUrl: imageUrl,
      FreeCancellation: freeCancellation,
      ReserveNow: reserveNow,
      Description: description,
    };
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false)
    //   console.log("data to be sent" ,hotelData)
    // },5000);
    setLoading(true);
    const uploadData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5156/api/Hotel",
          hotelData
        );
        setLoading(false);
        fetchHotel();
        console.log(response);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    uploadData();
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setImages([]);
    setFreeCancellation();
    setReserveNow();
    setDescription("");
    setCurrentHotel([]);
  };

  const handleDelete = async (id) => {
    // setHotel((prevHotel) => prevHotel.filter((hotel) => hotel.id !== id)); ui only delete

    try {
      const response = await axios.delete(
        `http://localhost:5156/api/Hotel/${id}`
      );

      fetchHotel();
    } catch (err) {
      console.log(err);
    }
  };

  // const uploadImagesToCloudinary = async () => {
  //   const cloudinaryURL =
  //     "https://api.cloudinary.com/v1_1/dtw0fbcyi/image/upload";
  //   const uploadPreset = "nxvaoz6l";

  //   const imagesUrls = await Promise.all(
  //     images.map(async (image) => {
  //       const formData = new FormData();
  //       formData.append("file", image);
  //       formData.append("upload_preset", uploadPreset);

  //       const response = await axios.post(cloudinaryURL, formData);
  //       return response.data.url;
  //     })
  //   );

  //   return imagesUrls;
  // };

  const uploadImagesToCloudinary = async (newImages) => {
    const cloudinaryURL =
      "https://api.cloudinary.com/v1_1/dtw0fbcyi/image/upload";
    const uploadPreset = "nxvaoz6l";

    try {
      const imageUrls = await Promise.all(
        //binary large object
        // A Blob is designed to hold binary data such as images, videos, files or other
        // types of binary data that are not text based.

        images
          .filter((image) => image instanceof Blob || image instanceof File)
          .map(async (image) => {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", uploadPreset);

            const response = await axios.post(cloudinaryURL, formData);
            console.log("cloudinary response", response.data.url);
            return response.data.url;
          })
      );
      console.log("image urls: ", imageUrls);
      return imageUrls;
    } catch (err) {
      console.error("Error uploading images to Cloudinary:", err);
    }
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

          <button
            className={`bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700  cursor-pointer ${loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"}`}
          >
            {isEditing ? "Update hotel" : "Add Hotel"}
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

          {/* {hotels.map((hotel) => (
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
                  x
                  <button
                    onClick={() => {
                      setOpen(true);
                      setHotelIdForDelete(hotel.id);
                    }}
                    className="border border-gray-500 p-1 w-20 rounded  bg-red-500 text-white font-bold border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))} */}

          <tbody>
            {Array.isArray(hotels) && hotels.length > 0 ? (
              hotels.map((hotel) => (
                <tr
                  key={hotel.id}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{hotel.name}</td>
                  <td className="px-6 py-4">{hotel.price}</td>
                  <td className="flex mt-4 gap-3">
                    <button
                      onClick={() => handleEdit(hotel)}
                      className="border border-gray-500 p-1 w-20 rounded bg-green-500 text-white font-bold border-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setHotelIdForDelete(hotel.id);
                      }}
                      className="border border-gray-500 p-1 w-20 rounded bg-red-500 text-white font-bold border-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  No hotels available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div
          className={` absolute top-[50%] left-[50%] right:[50%] flex  h-16 w border border-green-500 bg-red-500 ${open ? "visible" : "hidden"} `}
        >
          <button
            className="bg-red-500 p-4"
            onClick={() => {
              handleDelete(hotelIdForDelete);
              setOpen(false);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-600 p-5"
            onClick={() => {
              setOpen(false);
            }}
          >
            {" "}
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageHotel;
