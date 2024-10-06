/** @format */
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slide.css";

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}>
        <SwiperSlide>
          <div className="slide slide1">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" text-white md:w-[70%] mx-auto text-center">
              <h2 className="md:text-2xl lg:text-6xl leading-snug text-2xl font-bold mb-3">
                <span className="text-[#b65a18]">Welcome to .</span>
                <Typewriter
                  loop
                  cursor
                  words={["Meets", "Craftsmanship", "to", "TimberGem"]}
                  cursorStyle="_"
                />
              </h2>

              <p className="mb-5 hidden md:block">
                Step into a world where the beauty of nature intertwines with
                exquisite craftsmanship. At TimberGem, we celebrate the timeless
                elegance of wood through our curated collection of handcrafted
                treasures.
              </p>
              <a
                href="#hospitality"
                className="py-2 px-4 border border-[#b65a18] rounded-lg font-bold">
                Explore Now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" text-white md:w-[70%] mx-auto text-center">
              <h2 className="md:text-4xl lg:text-6xl leading-snug text-2xl font-bold mb-3">
                {" "}
                <span className="text-[#b65a18]">for Every Home :</span>
                <Typewriter
                  loop
                  cursor
                  words={[
                    "Crafted",
                    "with",
                    "Care",
                    "Sustainable",
                    "Creations",
                    "with",
                  ]}
                  cursorStyle="_"
                />
              </h2>
              <p className="mb-5 hidden md:block">
                Our commitment to sustainability is at the heart of everything
                we do at TimberGem. Every item in our collection is crafted with
                care, using responsibly sourced timber to minimize environmental
                impact.
              </p>
              <a
                href="#hospitality"
                className="py-2 px-4 border border-[#b65a18] rounded-lg font-bold">
                Explore Now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" text-white md:w-[70%] mx-auto text-center">
              <h2 className="md:text-4xl lg:text-6xl leading-snug text-2xl font-bold mb-3">
                <span className="text-[#b65a18]">Space with :</span>
                <Typewriter
                  loop
                  cursor
                  words={[
                    "Wood",
                    "Timeless",
                    "Elegance",
                    "Elevate",
                    "Your",
                    "with",
                  ]}
                  cursorStyle="_"
                />
              </h2>
              <p className="mb-5 hidden md:block">
                Transform your living space with the timeless elegance of wooden
                craftsmanship from TimberGem. Our collection features a diverse
                array of artisanal creations, each showcasing the inherent
                beauty of wood in its grain
              </p>
              <a
                href="#hospitality"
                className="py-2 px-4 border border-[#b65a18] rounded-lg font-bold">
                Explore Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
