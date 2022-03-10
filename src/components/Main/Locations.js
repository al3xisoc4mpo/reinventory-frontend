// ./src/components/Main/Locations.js

// EXTERNAL PACKAGE IMPORTS
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// --- TAILWIND CSS (REQUIRES V2.0 OR ABOVE) ---
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/react/outline";
// INTERNAL IMPORTS
import LocationsContext from "../../context/Locations/LocationsContext";

export default function Locations(props) {
  // LOCATIONS CONTEXT IMPORT
  const locationsCtx = useContext(LocationsContext);
  // DESCTRUCTURING OF LOCATIONS CONTEXT
  const { locations, getLocations } = locationsCtx;
  //OBTAIN USER ID FROM PROPS
  const { user } = props;
  //QUERY ALL LOCATIONS
  useEffect(() => {
    getLocations(user);
  }, []);

  return (
    <>
      {/* TITLE */}
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Locations
              </h2>
            </div>
            <p classNames="text-xl font-bold text-gray-500">No locations to display. Create a location below</p>
            {/* CARDS */}
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {locations?.map((location) => (
                <li key={location._id}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={location.image}
                        alt="location-img"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{location.name}</h3>
                        <p className="text-orange-600">
                          {location.description}
                        </p>
                      </div>
                      <Link
                        to={`/locations/${location._id}`}
                        className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CREATE LOCATION HEADER */}
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Create a Location
            </h2>
            <Link
              to="/locations/create"
              className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
