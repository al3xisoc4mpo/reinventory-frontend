// ./src/components/Main/ItemCreate

// EXTERNAL PACKAGE IMPORTS
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// INTERNAL IMPORTS
import ItemsContext from "../../context/Items/ItemsContext";
import LocationsContext from "../../context/Locations/LocationsContext";
import UsersContext from "../../context/Users/UsersContext";

export default function ItemCreate(props) {
  // USERS CONTEXT IMPORT
  const usersCtx = useContext(UsersContext);
  // DESCTRUCTURING OF USERS CONTEXT
  const { currentUser } = usersCtx;
  // LOCATIONS CONTEXT IMPORT
  const locationsCtx = useContext(LocationsContext);
  // DESCTRUCTURING OF LOCATIONS CONTEXT
  const { locations, getLocation } = locationsCtx;
  // ITEMS CONTEXT IMPORT
  const itemsCtx = useContext(ItemsContext);
  // DESCTRUCTURING OF ITEMS CONTEXT
  const { items, createItem } = itemsCtx;
  // OBTAIN LOCATION ID FROM PROPS
  const id = props.params;
  // OBTAIN NAVIGATE FUNCTION
  const navigate = useNavigate();
  //QUERY LOCATION
  useEffect(() => {
    getLocation(id);
  }, []);
  // ITEM FORM DATA (INITIAL STATE)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    quantity: 1,
    locations: id,
    user: currentUser._id,
  });
  // FORM CHANGE HANDLER
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // FORM SUBMIT HANDLER
  const handleSubmit = (event) => {
    // PREVENTS RELOADING OF PAGE
    event.preventDefault();
    // SENDS SIGN UP REQUEST TO THE BACKEND
    createItem(formData);
    // QUERY LOCATION
    getLocation(id);
    //REDIRECT TO LOCATION DETAILS
    navigate(`/locations/${id}`);
  };

  return (
    <article>

      {/* Profile header */}
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
            to={`/locations/${id}`}
            className="mt-10 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Back to location detail
          </Link>
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="mt-20 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="mt-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {locations[0].name}
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="mt-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {locations[0].name}
            </h1>
          </div>
        </div>
      </div>

      {/* Description list */}
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 truncate">
            Create an Item for this location
          </h2>
          <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.name}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>
            {/* DESCRIPTION */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <input
                  id="description"
                  name="description"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.description}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>

            {/* IMAGE */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  name="image"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.image}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>

            {/* QUANTITY */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <div className="mt-1">
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.quantity}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>

            <br />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
