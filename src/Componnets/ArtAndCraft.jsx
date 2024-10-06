/** @format */
import "react-tooltip/dist/react-tooltip.css";

import { Bounce, Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ArtAndCraft = () => {
  const data = useLoaderData();
  // console.log(data);

  const handleCategory = (id) => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // console.log(id);
  };
  return (
    <div className="text-center my-10">
      <Fade>
        <h2 className="text-3xl font-semibold mb-2">
          <span className="text-[#b65a18]">Explore . </span>
          <Typewriter
            loop
            cursor
            words={["Art", "Craft", "Categories"]}
            cursorStyle="_"
          />
        </h2>
      </Fade>
      <Fade>
        <p className="md:w-1/2 mx-auto">
          Discover a world of creativity and craftsmanship with our diverse
          range of art & craft categories. From handmade sculptures to intricate
          jewelry, explore unique subcategories that showcase the creativity and
          talent of artisans from
        </p>
      </Fade>

      <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-5 max-w-screen-lg mx-auto">
        {data?.slice(4, 10).map((item) => (
          <Bounce key={item._id}>
            <div className="relative h-[220px]">
              <img
                className="rounded h-full w-full"
                src={item.imgUrl}
                alt=""
              />
              <div className="absolute bg-[#4f311bd4] text-white p-2 z-10 text-start top-[60%] w-full bottom-0">
                <h2>{item.name}</h2>
                <h3>Category Name: {item.subcategory}</h3>
                <Link
                  onClick={() => handleCategory(item.id)}
                  to={`/category/${item.id}`}
                  className=" text-lg font-bold absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  See More
                </Link>
              </div>
            </div>
          </Bounce>
        ))}
      </div>
    </div>
  );
};

export default ArtAndCraft;
