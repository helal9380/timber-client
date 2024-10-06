/** @format */

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-center mt-20 items-center">
        <div className="text-center">
          <h2 className="text-7xl font-bold my-2">
            <span className="text-[#b65a18]">Uh</span>-oh!!
          </h2>
          <h2 className="text-4xl mb-4">It seems like something went wrong.</h2>
          <p className="md:w-1/2 mx-auto mb-6">
            We apologize for the inconvenience, but the page you are looking for
            cannot be found at the moment.
          </p>
          <Link
            to="/"
            href="#_"
            className=" relative px-5 py-3 overflow-hidden font-medium text-[#b65a18] bg-transparent border border-[#b65a18] rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#b65a18] group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#b65a18] ease">
              Go Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
