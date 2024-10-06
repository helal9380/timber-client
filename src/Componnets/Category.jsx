/** @format */

import { Link, useLoaderData } from "react-router-dom";

const Category = () => {
  const data = useLoaderData();
  // console.log(data);

  const handdleCategory = (id) => {
    console.log(id);
    fetch(`https://timber-gem-server.vercel.app/categorydetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-4xl text-center font-bold">
        All Category
      </h2>
      <div className="grid md:grid-cols-3 gap-5 my-5 md:my-10">
        {data?.map((item) => (
          <div
            className="p-2 border border-[#b65a18] rounded-lg"
            key={item._id}>
            <div className="w-full h-[200px]">
              <img
                className="w-full h-full"
                src={item.imgUrl}
                alt=""
              />
            </div>
            <div className="space-y-1">
              <h2>
                <span className="font-semibold">Name : </span>
                {item.name}
              </h2>
              <h3>
                {" "}
                <span className="font-semibold">Category</span> :{" "}
                {item.subcategory}
              </h3>
              <h4>
                <span className="font-semibold">Proccess Time :</span>
                {item.processTime}
              </h4>
              <h4 className="mb-5">
                <span>Rating :</span>
                {item.rate}
              </h4>
            </div>
            <div className="my-4">
              <Link
                onClick={() => handdleCategory(item._id)}
                className="py-2 px-5 bg-[#b65a18] rounded-lg text-white mt-5"
                to={`/categorydetails/${item._id}`}>
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
