import React, { useEffect, useState } from "react";
import { getTopDestinations } from "../API";
import axios from "axios";
import { MapPin, PencilIcon, Trash2, X, ImagePlus, Save } from "lucide-react";

const ManageThingsToDo = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activityIdForDelete, setActivityIdForDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activities, setActivities] = useState([]);
  const [id, setId] = useState(null);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [isGuided, setIsGuided] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState("easy");

  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages((prevImage) => [...prevImage, ...selectedImage]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImages = images.filter(
      (image) => image instanceof Blob || image instanceof File
    );
    const existingImages = images.filter((image) => typeof image === "string");
    const newImageUrls =
      newImages.length > 0 ? await uploadImagesToCloudinary(newImages) : [];
    const combinedImageUrls = [...existingImages, ...newImageUrls];
    const imageUrl = combinedImageUrls.filter(
      (item) => Object.keys(item).length !== 0
    );

    const activityData = {
      Name: name,
      ImageUrl: imageUrl,
      Price: price,
      Description: description,
      Duration: duration,
      Location: location,
      Category: category,
      IsGuided: isGuided,
      DifficultyLevel: difficultyLevel,
    };

    const editData = async () => {
      try {
        const response = await axios.put(
          `http://localhost:5156/api/ThingsToDo/${id}`,
          activityData
        );
        setLoading(false);
        fetchActivities();
        resetForm();
      } catch (err) {
        console.log("Error occurred: ", err);
      }
    };

    const uploadData = async () => {
      setLoading(true);
      try {
        const upload = await axios.post(
          "http://localhost:5156/api/ThingsToDo",
          activityData
        );
        fetchActivities();
      } catch (e) {
        console.log("Error occurred:", e);
      }
      resetForm();
    };

    isEditing ? editData() : uploadData();
  };

  const handleImageDelete = (id) => {
    setImages((prevImage) => prevImage.filter((_, index) => index !== id));
  };

  const handleEdit = (activity) => {
    setId(activity.id);
    setName(activity.name);
    setDescription(activity.description);
    setPrice(activity.price);
    setImages(activity.imageUrl);
    setDuration(activity.duration);
    setLocation(activity.location);
    setCategory(activity.category);
    setIsGuided(activity.isGuided);
    setDifficultyLevel(activity.difficultyLevel);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5156/api/ThingsToDo/${id}`
      );
      fetchActivities();
    } catch (e) {
      console.log(e);
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setImages([]);
    setDuration("");
    setLocation("");
    setCategory("");
    setIsGuided(false);
    setDifficultyLevel("easy");
    setIsEditing(false);
  };

  const fetchActivities = async () => {
    const response = await getTopDestinations();
    setActivities(response);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const uploadImagesToCloudinary = async (images) => {
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

  const categories = [
    "Adventure",
    "Cultural",
    "Nature",
    "Sports",
    "Sightseeing",
    "Food & Drink",
    "Wellness",
    "Entertainment",
  ];

  const difficultyLevels = ["easy", "moderate", "challenging", "expert"];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <MapPin className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Edit Activity" : "Add New Activity"}
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
                  Activity Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Mountain Hiking Tour"
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
                  placeholder="e.g., 49.99"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g., 3 hours"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Mount Rainier"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={difficultyLevel}
                  onChange={(e) => setDifficultyLevel(e.target.value)}
                >
                  {difficultyLevels.map((level) => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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
                      className="h-40 w-full object-cover rounded-lg"
                      src={
                        typeof image === "string"
                          ? image
                          : URL.createObjectURL(image)
                      }
                      alt={`Activity ${index + 1}`}
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleImageDelete(index)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input
                checked={isGuided}
                onChange={(e) => setIsGuided(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                type="checkbox"
                id="isGuided"
              />
              <label
                htmlFor="isGuided"
                className="text-sm font-medium text-gray-700"
              >
                Guided Activity
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Describe the activity..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Save className="w-5 h-5 mr-2" />
                {isEditing ? "Update Activity" : "Add Activity"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Activities List
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
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
                {Array.isArray(activities) && activities.length > 0 ? (
                  activities.map((activity) => (
                    <tr key={activity.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {activity.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {activity.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {activity.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${activity.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEdit(activity)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            setOpen(true);
                            setActivityIdForDelete(activity.id);
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-sm text-gray-500 text-center"
                    >
                      No activities available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Confirm Deletion
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Are you sure you want to delete this activity? This action
                cannot be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleDelete(activityIdForDelete);
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
    </div>
  );
};

export default ManageThingsToDo;
