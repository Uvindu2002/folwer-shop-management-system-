import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import backgroundImage from "../../images/main.jpeg";

export default function AddEvent() {
  const [categories, setCategories] = useState([
    { value: "Weddings", label: "Weddings" },
    { value: "Birthdays", label: "Birthdays" },
    { value: "Gifts", label: "Gifts" },
    { value: "Home Decor", label: "Home Decor" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    packageId: "",
    category: "",
  });

  // Fetch available packages based on selected category
  useEffect(() => {
    const fetchPackagesByCategory = async () => {
      if (selectedCategory) {
        try {
          const response = await fetch(
            `/api/package?category=${selectedCategory}`
          );
          const data = await response.json();
          setPackages(data);
        } catch (error) {
          console.error("Error fetching packages:", error);
        }
      }
    };

    fetchPackagesByCategory();
  }, [selectedCategory]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setEventData({ ...eventData, category: e.target.value });
  };

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
    setEventData({ ...eventData, packageId: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/event/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert("Event added successfully");
        handleReset();
      } else {
        console.error("Error adding event");
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Reset form
  const handleReset = () => {
    setEventData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      packageId: "",
      category: "",
    });
    setSelectedCategory("");
    setSelectedPackage("");
  };

  return (
    <div className="flex min-h-screen bg-purple-100 relative">
      {/* Background Image */}
      <img src={backgroundImage} alt="Background" className="absolute inset-0 object-cover w-full h-full z-0" />
      {/* Sidebar */}
      <nav className="w-64 bg-purple-300 text-white h-screen p-6 z-10">
        <h1 className="text-3xl font-semibold mb-6">Admin Panel</h1>
        <ul>
          <li className="mb-4">
            <Link
              to="/main-admin-dashboard"
              className="block py-2 px-4 rounded-lg hover:bg-purple-400"
            >
              Main Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/event-manage"
              className="block py-2 px-4 rounded-lg hover:bg-purple-400"
            >
              Manage Events
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/add-event"
              className="block py-2 px-4 rounded-lg hover:bg-purple-400"
            >
              Add Event
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/event-calendar"
              className="block py-2 px-4 rounded-lg hover:bg-purple-400"
            >
              Event Calendar
            </Link>
          </li>
          
        </ul>
      </nav>
      
      {/* Main Content */}
      <div className="flex-1 pt-20 z-10">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-purple-600 mb-6">
            Add Event
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side - First 4 Inputs */}
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-purple-600"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={eventData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-purple-600"
                  >
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-purple-600"
                  >
                    Time:
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={eventData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-purple-600"
                  >
                    Location:
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={eventData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Right Side - Remaining Inputs and Button */}
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-purple-600"
                  >
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={eventData.description}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-purple-600"
                  >
                    Category:
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Package Selection based on selected category */}
                {selectedCategory && packages.length > 0 && (
                  <div>
                    <label
                      htmlFor="package"
                      className="block text-sm font-medium text-purple-600"
                    >
                      Package:
                    </label>
                    <select
                      id="package"
                      name="packageId"
                      value={selectedPackage}
                      onChange={handlePackageChange}
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a package</option>
                      {packages.map((pkg) => (
                        <option key={pkg._id} value={pkg._id}>
                          {pkg.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Submit and Reset Buttons */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 bg-purple-400 text-white px-4 py-2 mt-5 rounded-lg hover:bg-purple-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Add Event
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-1/3 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
