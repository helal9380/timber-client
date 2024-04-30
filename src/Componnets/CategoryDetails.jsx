/** @format */

import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CategoryDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-5 w-[60%] mx-auto">
      <h2 className="text-4xl font-semibold my-5 text-center">
        Category Details
      </h2>
      <div className="flex flex-col gap-5 mt-10 border border-[#b65a18] p-2 rounded-md">
        <div className="">
          <img
            className="h-[60vh] w-full rounded-lg"
            src={data.imgUrl}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <div>
          <h3 className="text-3xl font-semibold">Name : {data.name}</h3>
          <h4><span className="font-semibold">Category : </span> {data.subcategory}</h4>
          <h5><span className="font-semibold">Description :</span>{data.shortDes}</h5>
          </div>
          <div>
          <h4><span className="font-semibold">Processing Time :</span>{data.processTime}</h4>
          <h5><span className="font-semibold">Stock : </span> {data.stock}</h5>
          <h4><span className="font-semibold">Customization : </span>{data.customaize}</h4>
          <h3><span>Rating : </span>{data.rate}</h3>
          <h3><span>Price : </span>{data.pric}</h3>
          </div>
          <div className="p-2 w-full bg-[#b65a18] text-white font-semibold text-center rounded">
          <Link className="" onClick={() => toast.success('Congratulation!!')} to={'/'}>Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
