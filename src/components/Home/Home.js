// ./src/components/Home/Home.js

/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="relative bg-gray-50">

        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Inventories made</span>{" "}
                <span className="block text-orange-600 xl:inline">
                  simple.
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Casual user or small company? We have the right solution for you. We know physical inventories can be costly and time-consuming. Not anymore! Our app uses web technology to make it simple for you. Sign up and start running inventories, for free!
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?cs=srgb&dl=pexels-tiger-lily-4484071.jpg&fm=jpg"
              alt=""
            />
          </div>
        </main>
      </div>
    </>
  );
}
