import React, { useEffect, useState } from "react";
import { getTopDestinations } from "../API";
import axios from "axios";
import { Hotel, PencilIcon, Trash2, X, ImagePlus, Save } from "lucide-react"; // Import icons

const ManageBooking = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [destinationIdForDelete, setDestinationIdForDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [destination, setDestination] = useState([]);
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

    const destinationData = {
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
          `http://localhost:5156/api/Destinations/${id}`,
          destinationData
        );
        setLoading(false);
        fetchDestination();
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
          "http://localhost:5156/api/Destinations",
          destinationData
        );
        fetchDestination();
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

  const handleEdit = (destination) => {
    setId(destination.id);
    setName(destination.name);
    setDescription(destination.description);
    setPrice(destination.price);
    setImages(destination.imageUrl);
    setFreeCancellation(destination.freeCancellation);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5156/api/Destinations/${id}`
      );
      fetchDestination();
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

  const fetchDestination = async () => {
    const response = await getTopDestinations();
    setDestination(response);
  };

  useEffect(() => {
    fetchDestination();
  }, [destination]);

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
    // <div className="m-0 shadow-xl ">
    //   <div className=" ml-auto mr-auto">
    //     <h1 className="font-bold text-3xl mt-3 ml-3">
    //       {isEditing ? "Edit Bookings" : "Add New Booking"}
    //     </h1>

    //     <form className="ml-3" onSubmit={(e) => handleSubmit(e)}>
    //       <p className="text-lg font-semibold mt-5">Name</p>
    //       <input
    //         className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
    //         type="text"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />

    //       <p className="text-lg font-semibold mt-5">Price</p>
    //       <input
    //         className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
    //         type="text"
    //         value={price}
    //         onChange={(e) => setPrice(e.target.value)}
    //       />

    //       <p className="text-lg font-semibold mt-5">Images</p>
    //       <input
    //         className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
    //         type="file"
    //         multiple
    //         onChange={(e) => handleImageChange(e)}
    //       />
    //       <div className="flex gap-3">
    //         {images.map((image, index) => (
    //           <div key={index} className="relative">
    //             <img
    //               className="h-52 w-52 mt-5 object-cover"
    //               src={`${typeof image === "string" ? image : URL.createObjectURL(image)}`}
    //               alt="image"
    //             />

    //             <button
    //               className="w-6 h-6 rounded-full absolute top-4 -right-1  bg-red-500 text-white"
    //               onClick={() => handleImageDelete(index)}
    //             >
    //               x
    //             </button>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="flex gap-3">
    //         <p className="text-lg font-semibold mt-5">Free Cancelation</p>
    //         <input
    //           checked={freeCancellation}
    //           onChange={(e) => setFreeCancellation(e.target.checked)}
    //           className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
    //           type="checkbox"
    //         />
    //       </div>

    //       <div className="flex gap-11">
    //         <p className="text-lg font-semibold mt-5">Reserve Now</p>
    //         <input
    //           checked={reserveNow}
    //           onChange={(e) => setReserveNow(e.target.checked)}
    //           className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
    //           type="checkbox"
    //         />
    //       </div>

    //       <p className="mt-5 font-semibold text-lg">Description</p>
    //       <textarea
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         className="h-[100px] w-full px-5 py-3 rounded-md mt-5 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
    //       ></textarea>

    //       <button
    //         className={`bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700  cursor-pointer ${loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"}`}
    //       >
    //         {isEditing ? "Update Destination" : "Add Destination"}
    //       </button>
    //     </form>
    //   </div>

    //   <div className="relative w-[80%] ml-auto mr-auto mt-6">
    //     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //       <thead>
    //         <tr className="">
    //           <th scope="col" className="px-6 py-3">
    //             Name
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Description
    //           </th>
    //           <th scope="col" className="px-16 py-3  w-10">
    //             Action
    //           </th>
    //         </tr>
    //       </thead>

    //       <tbody>
    //         {Array.isArray(destination) && destination.length > 0 ? (
    //           destination.map((destination) => (
    //             <tr
    //               key={destination.id}
    //               className="bg-white border-b dark:border-gray-700"
    //             >
    //               <td className="px-6 py-4">{destination.name}</td>
    //               <td className="px-6 py-4">{destination.description}</td>
    //               <td className="flex mt-4 gap-3">
    //                 <button
    //                   onClick={() => handleEdit(destination)}
    //                   className="border border-gray-500 p-1 w-20 rounded bg-green-500 text-white font-bold border-none"
    //                 >
    //                   Edit
    //                 </button>
    //                 <button
    //                   onClick={() => {
    //                     setOpen(true);
    //                     setDestinationIdForDelete(destination.id);
    //                   }}
    //                   className="border border-gray-500 p-1 w-20 rounded bg-red-500 text-white font-bold border-none"
    //                 >
    //                   Delete
    //                 </button>
    //               </td>
    //             </tr>
    //           ))
    //         ) : (
    //           <tr>
    //             <td colSpan="3" className="px-6 py-4 text-center">
    //               No destinations available
    //             </td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>

    //     <div
    //       className={` absolute top-[50%] left-[50%] right:[50%] flex  h-16 w border border-green-500 bg-red-500 ${open ? "visible" : "hidden"} `}
    //     >
    //       <button
    //         className="bg-red-500 p-4"
    //         onClick={() => {
    //           handleDelete(destinationIdForDelete);
    //           setOpen(false);
    //         }}
    //       >
    //         Yes
    //       </button>
    //       <button
    //         className="bg-green-600 p-5"
    //         onClick={() => {
    //           setOpen(false);
    //         }}
    //       >
    //         No
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gray-50 ml-auto mr-auto">
      {" "}
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {" "}
        {/* Content area */}
        <div className="flex items-center justify-between mb-8">
          {" "}
          {/* Header */}
          <div className="flex items-center space-x-3">
            <Hotel className="w-8 h-8 text-blue-600" /> {/* Icon */}
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Edit Booking" : "Add New Booking"} {/* Title */}
            </h1>
          </div>
          {isEditing && (
            <button
              onClick={resetForm}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Cancel Edit
            </button>
          )}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          {" "}
          {/* Form container */}
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            {/* ... (Your input fields, similar styling to ManageHotel) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {" "}
              {/* Example grid for inputs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              {/* ... other input fields */}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Images
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors">
                <div className="space-y-1 text-center">
                  <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload images</span>
                      <input
                        type="file"
                        multiple
                        className="sr-only"
                        onChange={(e) => handleImageChange(e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      className="h-40 w-full object-cover rounded-lg"
                      src={`${typeof image === "string" ? image : URL.createObjectURL(image)}`}
                      alt="image"
                    />
                    <button
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleImageDelete(index)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <input
                  checked={freeCancellation}
                  onChange={(e) => setFreeCancellation(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  type="checkbox"
                />
                <label className="text-sm font-medium text-gray-700">
                  Free Cancellation
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  checked={reserveNow}
                  onChange={(e) => setReserveNow(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  type="checkbox"
                />
                <label className="text-sm font-medium text-gray-700">
                  Reserve Now
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4} // Added rows for better textarea height
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save className="w-5 h-5 mr-2" /> {/* Icon */}
                {isEditing ? "Update Booking" : "Add Booking"}
              </button>
            </div>
          </form>
        </div>
        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Bookings List</h2>
          </div>
          <div className="overflow-x-auto">
            {" "}
            {/* For horizontal scrolling if needed */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>{/* ... (your table headers) */}</tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* ... (map over bookings and display data) */}
              </tbody>
            </table>
          </div>
        </div>
        {/* Delete Confirmation Modal (similar structure to ManageHotel) */}
        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* ... (modal content) */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBooking;
