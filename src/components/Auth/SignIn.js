// ./src/components/Auth/SignIn.js

// EXTERNAL PACKAGE IMPORTS
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// INTERNAL PACKAGE IMPORTS
import UsersContext from "./../../context/Users/UsersContext";

// SIGN IN FUNCTION
export default function SignIn() {
  // USERS CONTEXT IMPORT
  const ctxUser = useContext(UsersContext);
  // DESTRUCTURE OF USERS CONTEXT
  const { signInUser } = ctxUser;
  // // USER FORM DATA (INITIAL STATE)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    // SENDS SIGN IN REQUEST TO THE BACKEND
    signInUser(formData);
  };

  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://res.cloudinary.com/alexisocampo-dev/image/upload/v1646875455/Personal/Proyects/Reinventory/reinventory_tg7xw5.png"
                alt="Reinventary"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <div className="text-sm">
                <Link
                  to="/signup"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  New user? Sign up
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>

              <div className="mt-6">
                <form
                  onSubmit={(evt) => {
                    handleSubmit(evt);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        value={formData.email}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        value={formData.password}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?cs=srgb&dl=pexels-tiger-lily-4481258.jpg&fm=jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
