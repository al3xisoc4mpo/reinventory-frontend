// ./src/components/Main/LocationEdit

import React, { useContext, useEffect, useState } from "react";
import LocationsContext from "../../context/Locations/LocationsContext";
import UsersContext from "../../context/Users/UsersContext";
import { Link, useNavigate } from "react-router-dom";

export default function LocationEdit(props) {
  const navigate = useNavigate()
  // USERS CONTEXT IMPORT
  const usersCtx = useContext(UsersContext);
  // DESCTRUCTURING OF USERS CONTEXT
  const { currentUser } = usersCtx;
  // LOCATIONS CONTEXT IMPORT
  const locationsCtx = useContext(LocationsContext);
  // DESCTRUCTURING OF LOCATIONS CONTEXT
  const { locations, getLocation, updateLocation } = locationsCtx;

  const id = props.params;

  const [formData, setFormData] = useState({
    name: locations[0].name,
    description: locations[0].description,
    image: locations[0].image,
    _id: id
  });

  useEffect(() => {
    getLocation(id);
    // return () => {getLocations()}
  }, []);

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
    updateLocation(formData, id);

    return navigate(`/locations/${id}`)
  };

  // console.log(locations)

  const profile = {
    name: `${locations[0].name} ${locations[0].lastName}`,
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    coverImageUrl:
      "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    about: `
              <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
              <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
            `,
    fields: {
      Description: locations[0].description,
      Image: locations[0].image,
      Admin: currentUser.name,
      //   Sits: "Oasis, 4th floor",
      //   Salary: "$145,000",
      //   Birthday: "June 8, 1990",
    },
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
            className="mt-10 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to location details
          </Link>
          {/* HEADER */}
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="mt-20 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  Edit Details
                </h1>
              </div>
            </div>
          </div>

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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.image}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
              <br/>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit Details
              </button>
            </div>
          </form>

          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {profile.name}
            </h1>
          </div>
        </div>
      </div>
    </article>
  );
}
