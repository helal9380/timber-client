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
    <div className="my-10">
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${imgUrl})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', padding: '40px 0px'}}>
            <h2 className="text-4xl font-bold text-center py-10 text-white">Details</h2>
        </div>
      <div className="flex gap-5 my-10">
        <div className="w-1/2">
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
          <div className="w-40 h-[2px] bg-black my-10 mx-auto"></div>
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
          <Link className="py-2 px-4 border-2 font-semibold" onClick={() => toast.success('Congratulation !!')} to={'/'}>Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
