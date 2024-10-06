/** @format */
import PropTypes from "prop-types";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Card from "./Card";

const ArtCard = ({ artCard }) => {
  const [searchText, setSearchText] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(artCard);
  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filterSearch = artCard.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilters(filterSearch);
      setSearchText("");
      setLoading(false);
    }, 1000);
  };

  const handleSeeMoreBtn = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-4xl mb-5 font-semibold">
          <span className="text-[#b65a18]">Handcrafted : </span>
          <Typewriter
            loop
            cursor
            words={["Wooden", "Coasters", "Set"]}
            cursorStyle="|"
          />
        </h2>
        <p className="md:w-4/6 mx-auto">
          Elevate your table settings with our exquisite set of handcrafted
          wooden coasters from TimberGem.com. Each coaster is meticulously
          crafted from sustainably sourced timber, showcasing natural wood
          grains and knots for a touch of rustic charm
        </p>
      </div>
      <div className="w-1/2 mx-auto my-10 flex relative">
        <input
          type="text"
          placeholder="Search here.."
          className="input input-bordered w-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <a
          onClick={handleSearch}
          className="absolute cursor-pointer right-0 rounded px-5 py-2.5 overflow-hidden group bg-[#b65a18] hover:bg-gradient-to-r hover:from-[#b65a18] hover:to-[#c36c2e] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#b65a18] transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Search..</span>
        </a>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filters?.slice(0, visibleCount).map((item) => (
            <Card
              key={item._id}
              cards={item}></Card>
          ))}
        </div>
      )}
      {visibleCount < filters.length && (
        <div className="w-40 mx-auto my-10">
          <button onClick={handleSeeMoreBtn}>
            <a className="relative inline-flex items-center btn btn-md justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#b65a18] rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#a34909] rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">See More</span>
            </a>
          </button>
        </div>
      )}
    </div>
  );
};
ArtCard.propTypes = {
  artCard: PropTypes.array,
};
export default ArtCard;
