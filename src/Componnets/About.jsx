/** @format */

import { FaLongArrowAltRight } from "react-icons/fa";
import img from "../../public/work.webp";
const About = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold my-4">
          Crafting Natures <span className="text-[#b65a18]">Beauty</span>
        </h2>
        <p className="md:w-1/2 mx-auto mb-5">
          Step into the world of TimberGem, where passion for craftsmanship
          meets reverence for nature. Founded with a vision to celebrate the
          timeless elegance of wood and the rustic charm of jute,{" "}
        </p>
      </div>
      <div className="md:flex gap-2 bg-[#4f311b]">
        <div className="md:w-1/2 p-5">
          <img
            src={img}
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-white px-5">
            <div className="">
              <h2 className="mt-5">WELCOME TO WOOD WORKSHOP</h2>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quae rat
                voluptatem. Ut enim ad minima.
              </p>
              <p className="text-2xl font-semibold my-5">
                We are available for 24/7 for you requirements
              </p>
              <div className="flex justify-between">
                <p className="flex gap-3 items-center">
                  {" "}
                  <FaLongArrowAltRight /> <span>Complete Savety Analysis</span>
                </p>
                <p className="flex gap-3 items-center">
                  {" "}
                  <FaLongArrowAltRight /> <span>Open 7 days a week</span>
                </p>
              </div>
              <div className="flex pb-10 justify-between my-4">
                <p className="flex gap-3 items-center">
                  {" "}
                  <FaLongArrowAltRight />{" "}
                  <span>Beautiful design nice looking</span>
                </p>
                <p className="flex gap-3 items-center">
                  {" "}
                  <FaLongArrowAltRight /> <span>Customar good rivew</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
