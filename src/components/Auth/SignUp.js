// ./src/components/Auth/SignUp.js

// EXTERNAL PACKAGE IMPORTS
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// INTERNAL PACKAGE IMPORTS
import UsersContext from "../../context/Users/UsersContext";

// SIGN UP FUNCTION
export default function SignUp() {
  // USERS CONTEXT IMPORT
  const usersCtx = useContext(UsersContext);
  // DESTRUCTURE OF USERS CONTEXT
  const { signUpUser } = usersCtx;
  // USER FORM DATA (INITIAL STATE)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "Manager",
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
    signUpUser(formData);
  };

  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign up for an account
              </h2>
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account? Sign in
                </Link>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Mandatory fields marked with '*'
              </p>
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

              {/* FORM DATA */}
              <div className="mt-6">
                <form
                  onSubmit={(evt) => {
                    handleSubmit(evt);
                  }}
                  className="space-y-6"
                >
                  {/* FIRST NAME */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name*
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.firstName}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>
                  {/* LAST NAME */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name*
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.lastName}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>
                  {/* PICTURE */}
                  <div>
                    <label
                      htmlFor="picture"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Picture*
                    </label>
                    <div className="mt-1">
                      <input
                        id="picture"
                        name="picture"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.picture}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>
                  {/* PHONE NUMBER */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.phoneNumber}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>
                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address*
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.email}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>
                  {/* PASSWORD */}
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password*
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.password}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role*
                    </label>
                    <div className="mt-1">
                      <select
                        id="role"
                        name="role"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.role}
                        onChange={(evt) => {
                          handleChange(evt);
                        }}
                      >
                        <option value="Manager">Manager</option>
                        <option value="Operator">Operator</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Up
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
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
