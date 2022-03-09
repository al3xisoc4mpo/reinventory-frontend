// ./src/components/Main/LocationCreate.js

// EXTERNAL PACKAGE IMPORTS
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// INTERNAL IMPORTS
import UsersContext from "../../context/Users/UsersContext";
import LocationsContext from "../../context/Locations/LocationsContext";

export default function LocationsCreate() {
  const navigate = useNavigate();
  // USERS CONTEXT IMPORT
  const usersCtx = useContext(UsersContext);
  // DESCTRUCTURING OF USERS CONTEXT
  const { currentUser } = usersCtx;
  // console.log(currentUser)
  // LOCATIONS CONTEXT IMPORT
  const locationsCtx = useContext(LocationsContext);
  // DESCTRUCTURING OF LOCATIONS CONTEXT
  const { createLocation } = locationsCtx;
  // console.log(createLocation)
  // LOCATION FORM DATA (INITIAL STATE)
  const [newLocation, setNewLocation] = useState({
    name: "",
    description: "",
    image: "",
    admin: currentUser._id,
  });
  // USE STATE ERROR HANDLE (INITIAL STATE)
  const [error, setError] = useState("");
  // FORM CHANGE HANDLER
  const handleChange = (event) => {
    setNewLocation({
      ...newLocation,
      [event.target.name]: event.target.value,
    });
  };
  // FORM SUBMIT HANDLER
  const handleSubmit = (event) => {
    // PREVENTS RELOADING OF PAGE
    event.preventDefault();
    // VERIFIES ALL MANDATORY FIELDS WERE FILLED
    if (!newLocation.name || !newLocation.description || !newLocation.image) {
      setError("All fields must be filled. Please verify.");
      return;
    }

    createLocation(newLocation);

    setNewLocation({
      name: "",
      description: "",
      image: "",
      admin: currentUser._id,
    });

    setError("");

    return navigate("/locations");
  };

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        {/* Background */}

        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>

        {/* Centered Title Text */}

        <div className="flex justify-center">
          <Link
            to="/locations"
            className="my-10 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Locations
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Create a Location
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>

        {/* Form */}

        <div className="mt-12">
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={newLocation.name}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={newLocation.description}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={newLocation.image}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                />
              </div>
            </div>
            {/* <div className="sm:col-span-2">
              <label
                htmlFor="admin"
                className="block text-sm font-medium text-gray-700"
              >
                Admin
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="admin"
                  id="admin"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md disabled:opacity-30"
                  value={currentUser._id}
                  disabled
                />
              </div>
            </div> */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
