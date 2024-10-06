/** @format */

const Banner = () => {
  return (
    <div
      className="hero h-[calc(100vh - 68px)]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/k2dWNr8/victoria-berman-U-ouht-Pg-HH4-unsplash.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-1/2 text-white mx-auto py-5">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Natures Beauty: Handcrafted Wooden Treasures Await!
          </h1>
          <p className="mb-5">
            Immerse yourself in the warmth of natural wood with TimberGem.com.
            Explore our exquisite collection of handcrafted wooden treasures,
            meticulously crafted to bring the essence of nature into your home.
          </p>
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
