// ./src/components/Main/LocationDetails

// EXTERNAL PACKAGE IMPORTS
import React, { useContext, useEffect } from "react";
// --- TAILWIND CSS (REQUIRES V2.0 OR ABOVE) ---
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
// INTERNAL IMPORTS
import LocationsContext from "../../context/Locations/LocationsContext";
import UsersContext from "../../context/Users/UsersContext";
import ItemsContext from "../../context/Items/ItemsContext";

export default function LocationDetails(props) {
  // USERS CONTEXT IMPORT
  const usersCtx = useContext(UsersContext);
  // DESCTRUCTURING OF USERS CONTEXT
  const { currentUser } = usersCtx;
  // LOCATIONS CONTEXT IMPORT
  const locationsCtx = useContext(LocationsContext);
  // DESCTRUCTURING OF LOCATIONS CONTEXT
  const { locations, getLocation, deleteLocation, getLocations } = locationsCtx;
  // ITEMS CONTEXT IMPORT
  const itemsCtx = useContext(ItemsContext);
  // DESCTRUCTURING OF ITEMS CONTEXT
  const { deleteItem } = itemsCtx;
  // OBTAIN NAVIGATE FUNCTION
  const navigate = useNavigate();
  // OBTAIN LOCATION ID FROM PROPS
  const id = props.params;
  //QUERY LOCATION
  useEffect(() => {
    getLocation(id);
  }, []);

  // HELPER OBJECT FOR TAILWIND
  const profile = {
    fields: {
      Description: locations[0].description,
      User: currentUser.firstName + " " + currentUser.lastName,
      // Image: locations[0].image,
    },
  };

  return (
    <article>
      {/* PROFILE HEADER */}
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={locations[0].image}
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/locations"
            className="mt-10 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Back to locations
          </Link>
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="mt-20 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="mt-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {locations[0].name}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  to={`/locations/${id}/edit`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Edit Location
                </Link>
                <button
                  onClick={() => {
                    deleteLocation(id);
                    getLocations(currentUser._id);
                    navigate("/locations");
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Delete location
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {profile.name}
            </h1>
          </div>
        </div>
      </div>

      {/* DESCRIPTION LIST */}
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {Object.keys(profile.fields).map((field) => (
            <div key={field} className="sm:col-span-1">
              <dt className="text-xl text-gray-500">{field}</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {profile.fields[field]}
              </dd>
            </div>
          ))}
        </dl>
        {/* ITEM LIST */}
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="mt-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Item List
          </h2>
        </div>

        <ul
          role="list"
          className="py-8 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          {locations[0].items?.map((item) => (
            <li key={item._id}>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={item.image}
                    alt="item-img"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>{item.name}</h3>
                    <p className="text-orange-600 text-sm">
                      {item.description}
                    </p>
                    <span className="font-bold">Stock: </span>
                    <span>{item.quantity}</span>
                  </div>
                </div>
                <Link
                to={`/items/${item._id}/edit`}
                className="m-2 inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"                
                >Edit Item</Link>
                <button
                onClick={() => {deleteItem(item._id); getLocation(id); navigate(`/locations/${id}`)}}
                className="m-2 inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Delete Item
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* CREATE AN ITEM FOR THIS LOCATION */}
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="mt-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Create an Item
          </h2>
          <Link
            to={`/items/create/${id}`}
            className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
