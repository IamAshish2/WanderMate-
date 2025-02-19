import React, { useEffect, useState } from "react";
import { getTravelPackages } from "../API";
import axios from "axios";
import { ImagePlus, X } from "lucide-react";

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
        console.log("Error occurred: ", err);
      }
    };

    const uploadData = async () => {
      setLoading(true);
      try {
        const upload = await axios.post(
          "http://localhost:5156/api/TravelPackages",
          travelPackageData
        );
        fetchTravelPackages();
      } catch (e) {
        console.log("error occurred:", e);
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
    <div className="min-h-screen bg-gray-50 ml-auto mr-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Edit Travel Package" : "Add New Travel Package"}
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Package Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter package name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Images
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
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={
                        typeof image === "string"
                          ? image
                          : URL.createObjectURL(image)
                      }
                      alt={`Package image ${index + 1}`}
                      className="h-40 w-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageDelete(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <input
                  id="freeCancellation"
                  type="checkbox"
                  checked={freeCancellation}
                  onChange={(e) => setFreeCancellation(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="freeCancellation"
                  className="text-sm font-medium text-gray-700"
                >
                  Free Cancellation
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  id="reserveNow"
                  type="checkbox"
                  checked={reserveNow}
                  onChange={(e) => setReserveNow(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="reserveNow"
                  className="text-sm font-medium text-gray-700"
                >
                  Reserve Now
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter package description"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isEditing ? "Update Package" : "Add Package"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Packages List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.isArray(travelPackages) && travelPackages.length > 0 ? (
                  travelPackages.map((travelPackage) => (
                    <tr key={travelPackage.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {travelPackage.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${travelPackage.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                        <button
                          onClick={() => handleEdit(travelPackage)}
                          className="inline-flex items-center text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setOpen(true);
                            setTravelPackageIdForDelete(travelPackage.id);
                          }}
                          className="inline-flex items-center text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No packages available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to delete this package? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(travelPackageIdForDelete);
                  setOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTravelPackages;
