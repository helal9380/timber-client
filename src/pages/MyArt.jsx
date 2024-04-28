/** @format */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const [art, setArt] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/myArt/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setArt(data));
  }, [user]);
  console.log(art);
  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-semibold my-4">My arts and craft</h2>
      <div className="max-w-screen-md mx-auto my-5">
        {art?.map((item) => (
          <div
            className="flex gap-5 p-4 border-2 mb-5 rounded border-[#CA8E3E]"
            key={item._id}>
            <div className="w-[40%]">
              <img
                className="rounded-lg"
                src={item.imgUrl}
                alt=""
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <span className="font-semibold">Price</span> : {item.pric}
                  </p>
                  <p>
                    <span className="font-semibold">Rating : </span> {item.rate}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Customaization : </span>{" "}
                    {item.customaize}
                  </p>
                  <p>
                    <span className="font-semibold">StockStatus : </span>{" "}
                    {item.stock}
                  </p>
                </div>
              </div>
              <p className="my-2"><span className="font-semibold">Process Time :</span>{item.processTime}</p>
              <p className="mb-2"><span className="font-semibold">Category :</span>{item.subcategory}</p>
              <button className="py-1 px-4 text-white rounded mt-2 bg-[#CA8E3E]">
                Update
              </button>
              <button className="py-1 ml-2 px-4 text-white rounded mt-2 bg-[#CA8E3E]">
                Detlete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArt;
