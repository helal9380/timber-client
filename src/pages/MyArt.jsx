/** @format */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const [art, setArt] = useState(null);
  const [loaded, setLoaded] = useState()
  const [filteredArt, setFilteredArt] = useState(loaded);

  useEffect(() => {
    fetch(`http://localhost:5000/myArt/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
        setFilteredArt(data);
      });
  }, [user]);
  console.log(art);

  const handleFilter = (type) => {
    if (type === "All") {
      setFilteredArt(art);
    } else {
      const filtered = art.filter((item) => item.customaize === "Yes");
      setFilteredArt(filtered);
    }
  };
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myArt/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your art & craft has been deleted.",
                icon: "success",
              });
            }
            const remaining = filteredArt.filter((item) => item._id !== id);
            setFilteredArt(remaining);
            console.log(data);
          });
      }
    });
  };
  return (
    <div className="my-10">
      <div className="flex justify-center ">
        <div className="dropdown dropdown-left ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleFilter("All")}>All</a>
            </li>
            <li>
              <a onClick={() => handleFilter("Customize")}>Customize</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-center text-3xl font-semibold my-4">
        My arts and craft
      </h2>
      <div className="max-w-screen-md mx-auto my-5">
        {filteredArt?.map((item) => (
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
              <p className="my-2">
                <span className="font-semibold">Process Time :</span>
                {item.processTime}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Category :</span>
                {item.subcategory}
              </p>
              <Link
                to={`/update/${item._id}`}
                className="py-1 px-4 text-white rounded mt-2 bg-[#CA8E3E]">
                Update
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="py-1 ml-2 px-4 text-white rounded mt-2 bg-[#CA8E3E]">
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
