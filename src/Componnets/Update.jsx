/** @format */

import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updatedData = useLoaderData();
  const navigate = useNavigate();
  console.log(updatedData);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgUrl = form.imageUrl.value;
    const name = form.itemName.value;
    const subcategory = form.subCategory.value;
    const shortDes = form.shortDescription.value;
    const pric = form.price.value;
    const rate = form.rating.value;
    const customaize = form.customization.value;
    const processTime = form.processing_time.value;
    const stock = form.stockStatus.value;

    const updateArt = {
      imgUrl,
      name,
      subcategory,
      shortDes,
      pric,
      customaize,
      rate,
      processTime,
      stock,
    };

    console.log(updateArt);
    fetch(`http://localhost:5000/update/${updatedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully updated",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Okey",
          });
        }
        e.target.reset();
        navigate("/myArt");
      });
  };

  return (
    <div className="text-center bg-[] max-w-screen-lg mx-auto">
      <h3 className="text-3xl font-semibold mt-5"> Update Art and craft</h3>
      <form
        onSubmit={handleUpdate}
        className="my-10">
        <div className="md:flex gap-5 border md:p-10 border-[#CA8E3E] justify-center">
          <div className="md:w-1/2 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <p className="md:w-24 w-28">Image URL</p>
              <input
                type="text"
                name="imageUrl"
                defaultValue={updatedData?.imgUrl}
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="md:w-24 w-28">Item name</p>
              <input
                type="text"
                name="itemName"
                defaultValue={updatedData?.name}
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-48">Subcategory name</p>
              <input
                type="text"
                defaultValue={updatedData?.subcategory}
                className="grow w-full"
                name="subCategory"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-48">Short description</p>
              <input
                type="text"
                defaultValue={updatedData?.shortDes.slice(0, 10)}
                name="shortDescription"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-28">stockStatus</p>
              <input
                type="text"
                defaultValue={updatedData?.stock}
                name="stockStatus"
                className="grow w-full"
              />
            </label>
          </div>
          <div className="flex-1 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <p className=""> Price</p>
              <input
                type="text"
                defaultValue={updatedData?.pric}
                name="price"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className=""> Rating</p>
              <input
                type="text"
                defaultValue={updatedData?.rate}
                name="rating"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="">customization</p>
              <input
                type="text"
                defaultValue={updatedData?.customaize}
                name="customization"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className=""> processing_time</p>
              <input
                type="text"
                defaultValue={updatedData?.processTime}
                name="processing_time"
                className="grow w-full"
              />
            </label>

            <button className="py-2 px-4 rounded text-white bg-[#CA8E3E] w-full my-5">
              Update Art & Craft
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
