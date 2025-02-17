import React, { useEffect, useState } from "react";
import { getTravelPackages } from "../API";
import axios from "axios";

const ManageTravelPackages = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [travelPackageIdForDelete, setTravelPackageIdForDelete] =
    useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [travelPackages, setTravelPackages] = useState([]);
  const [id, setId] = useState(null);
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages((prevImage) => [...prevImage, ...selectedImage]);
  };

  //duplicate image upload is still happening. Check for it!!!!
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImages = images.filter(
      (image) => image instanceof Blob || image instanceof File
    );
    const existingImages = images.filter((image) => typeof image == "string");
    const newImageUrls =
      newImages.length > 0 ? await uploadImagesToCloudinary(newImages) : [];
    const combinedImageUrls = [...existingImages, ...newImageUrls];
    const imageUrl = combinedImageUrls.filter(
      (item) => Object.keys(item).length !== 0
    );

    const travelPackageData = {
      Name: name,
      ImageUrl: imageUrl,
      Price: price,
      Description: description,
      FreeCancellation: freeCancellation,
      ReserveNow: reserveNow,
    };

    // while editing existing travel package
    const editData = async () => {
      try {
        const response = await axios.put(
          `http://localhost:5156/api/TravelPackages/${id}`,
          travelPackageData
        );
        setLoading(false);
        fetchTravelPackages();
        resetForm();
      } catch (err) {
        Console.log("Error occured: ", err);
      }
    };

    // while creating a new travel Package
    const uploadData = async () => {
      setLoading(true);
      try {
        const upload = await axios.post(
          "http://localhost:5156/api/TravelPackages",
          travelPackageData
        );
        fetchTravelPackages();
      } catch (e) {
        console.log("error occured:", e);
      }
      resetForm();
    };

    isEditing ? editData() : uploadData();
  };

  const handleImageDelete = (id) => {
    setImages((prevImage) => prevImage.filter((_, index) => index !== id));
  };

  const handleEdit = (travelPackage) => {
    setId(travelPackage.id);
    setName(travelPackage.name);
    setPrice(travelPackage.price);
    setDescription(travelPackage.description);
    setImages(travelPackage.imageUrl);
    setFreeCancellation(travelPackage.freeCancellation);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5156/api/TravelPackages/${id}`
      );
      // console.log(response);
      fetchTravelPackages();
    } catch (e) {
      console.log(e);
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setImages([]);
    setFreeCancellation("");
    setFreeCancellation(false);
    setReserveNow(false);
  };

  const fetchTravelPackages = async () => {
    const response = await getTravelPackages();
    setTravelPackages(response);
  };

  useEffect(() => {
    fetchTravelPackages();
  }, []);

  const uploadImagesToCloudinary = async (newImages) => {
    const cloudinaryURL =
      "https://api.cloudinary.com/v1_1/dtw0fbcyi/image/upload";
    const uploadPreset = "nxvaoz6l";

    try {
      const imageUrls = await Promise.all(
        images
          .filter((image) => image instanceof Blob || image instanceof File)
          .map(async (image) => {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", uploadPreset);

            const response = await axios.post(cloudinaryURL, formData);
            return response.data.url;
          })
      );
      return imageUrls;
    } catch (err) {
      console.error("Error uploading images to Cloudinary:", err);
    }
  };

  return (
    <div className="m-0 shadow-xl ">
      <div className=" ml-auto mr-auto">
        <h1 className="font-bold text-3xl mt-3 ml-3">
          {isEditing ? "Edit TravelPackages" : "Add New TravelPackages"}
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
            onChange={(e) => setDescription(e.target.value)}
            className="h-[100px] w-full px-5 py-3 rounded-md mt-5 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
          ></textarea>

          <button
            className={`bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700  cursor-pointer ${loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"}`}
          >
            {isEditing ? "Update TravelPackages" : "Add TravelPackages"}
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
                Description
              </th>
              <th scope="col" className="px-16 py-3  w-10">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(travelPackages) && travelPackages.length > 0 ? (
              travelPackages.map((travelPackage) => (
                <tr
                  key={travelPackage.id}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{travelPackage.name}</td>
                  <td className="px-6 py-4">{travelPackage.description}</td>
                  <td className="flex mt-4 gap-3">
                    <button
                      onClick={() => handleEdit(travelPackage)}
                      className="border border-gray-500 p-1 w-20 rounded bg-green-500 text-white font-bold border-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setTravelPackageIdForDelete(travelPackage.id);
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
                  No travel packages available
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
              handleDelete(travelPackageIdForDelete);
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
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageTravelPackages;
