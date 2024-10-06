/** @format */

import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Details = () => {
  const loadedData = useLoaderData();
  const {
    imgUrl,
    name,
    pric,
    customaize,
    rate,
    processTime,
    subcategory,
    shortDes,
  } = loadedData;
  console.log(loadedData);
  return (
    <div className="md:my-5 my-5">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "40px 0px",
        }}>
        <h2 className="text-4xl font-bold text-center py-10 text-white">
          Details
        </h2>
      </div>
      <div className="md:flex gap-5 my-10">
        <div className="md:w-1/2">
          <img
            className="rounded-lg"
            src={imgUrl}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold my-2">{name}</h2>
          <p className="mt-3">
            <span className="font-semibold">Category</span> : {subcategory}
          </p>
          <p className="my-2">
            <span className="font-semibold">Description</span> : {shortDes}
          </p>
          <div className="w-40 h-[2px] bg-[#b65a18] my-10 mx-auto"></div>
          <span className="text-lg font-semibold">
            Customaize : {customaize}
          </span>
          <p>
            <span className="text-lg font-semibold">Rate</span> : {rate}
          </p>
          <p>
            <span className="text-lg font-semibold my-2">Process Time : </span>{" "}
            {processTime}
          </p>
          <p className="mb-5">
            <span className="text-lg font-semibold">Price</span> : {pric}
          </p>

          <Link
            to={"/"}
            onClick={() => toast.success("Congratulation !!")}
            className="relative inline-flex btn btn-md items-center cursor-pointer justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#b65a18] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative font-semibold">Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
