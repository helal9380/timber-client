/** @format */

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddArt = () => {
  const {user} = useContext(AuthContext);
  // console.log(user.email)
  const handleAdd = (e) => {
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
    const userName = form.username.value;
    const userEmail = form.email.value;
    const email = user.email;
    console.log(email)
    const artCard = {
      imgUrl,
      email,
      name,
      subcategory,
      shortDes,
      pric,
      customaize,
      rate,
      processTime,
      userEmail,
      stock,
      userName
    };

    fetch("http://localhost:5000/addArt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(artCard),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Successfully added",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Okey",
          });
          
        }
        e.target.reset()
      });
  };
  return (
    <div className="text-center max-w-screen-lg mx-auto">
      <h3 className="text-3xl font-semibold mt-5"> Add Craft Item</h3>
      <form
        onSubmit={handleAdd}
        className="my-10">
        <div className="flex gap-5 border justify-center">
          <div className="w-1/2 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-24">Image URL</p>
              <input
                type="text"
                name="imageUrl"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-24">Item name</p>
              <input
                type="text"
                name="itemName"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-48">Subcategory name</p>
              <input
                type="text"
                className="grow w-full"
                name="subCategory"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-48">Short description</p>
              <input
                type="text"
                name="shortDescription"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-28">stockStatus</p>
              <input
                type="text"
                name="stockStatus"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-24">User Name</p>
              <input
                type="text"
                name="username"
                className="grow w-full"
              />
            </label>
          </div>
          <div className="flex-1 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <p className=""> Price</p>
              <input
                type="text"
                name="price"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className=""> Rating</p>
              <input
                type="text"
                name="rating"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="">customization</p>
              <input
                type="text"
                name="customization"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className=""> processing_time</p>
              <input
                type="text"
                name="processing_time"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="">Email</p>
              <input
                type="text"
                name="email"
                defaultValue={ user.email}
                className="grow w-full"
              />
            </label>
            <button className="btn btn-primary w-full my-5">Add Art & Craft</button>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default AddArt;
