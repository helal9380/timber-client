/** @format */

const AddArt = () => {
  return (
    <div className="text-center max-w-screen-lg mx-auto">
      <h3 className="text-3xl font-semibold mt-5"> Add Craft Item</h3>
      <form className="my-10">
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
          </div>
        </div>
        <button className="btn btn-primary w-full my-5">Add Art & Craft</button>
      </form>
    </div>
  );
};

export default AddArt;
