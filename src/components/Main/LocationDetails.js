import React, { useContext, useEffect, useParams } from "react";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/react/solid";
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import LocationsContext from "../../context/Locations/LocationsContext";
import UsersContext from "../../context/Users/UsersContext";

export default function LocationDetails(props) {
  const usersCtx = useContext(UsersContext);

  const { currentUser } = usersCtx;

  const locationsCtx = useContext(LocationsContext);

  const { locations, getLocation, getLocations } = locationsCtx;

  const id = props.option.id;

  // console.log(id)

  useEffect(() => {
    getLocation(id)
    // return () => {getLocations()}
  }, []);

  // console.log(locations)

  const profile = {
    name: `${locations.name} ${locations.lastName}`,
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    coverImageUrl:
      "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    about: `
            <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
            <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
          `,
    fields: {
      Description: locations.description,
      Image: locations.image,
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
            src={locations.image}
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/locations"
            className="mt-10 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to locations
          </Link>
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="mt-20 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {locations.name}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                  to={`/locations/${id}/edit`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit Location
                </Link>
                <Link
                  to={`/locations/${id}/delete`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete location
                </Link>
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

      {/* Description list */}
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {Object.keys(profile.fields).map((field) => (
            <div key={field} className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">{field}</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {profile.fields[field]}
              </dd>
            </div>
          ))}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd
              className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
              dangerouslySetInnerHTML={{ __html: profile.about }}
            />
          </div>
        </dl>
      </div>
    </article>
  );
}
