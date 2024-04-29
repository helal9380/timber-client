/** @format */

import { useLoaderData } from "react-router-dom";
import ArtCard from "../Componnets/ArtCard";

import Slider from "../Componnets/Slider";
import About from "../Componnets/About";
import Client from "../Componnets/Client";
import ArtAndCraft from "../Componnets/ArtAndCraft";

const Home = () => {
  const allArt = useLoaderData();
  // console.log(allArt)
  return (
    <div>
      {/* <Banner></Banner> */}
      <Slider></Slider>
      <ArtCard artCard={allArt}></ArtCard>
      <About></About>
      <Client></Client>
      <ArtAndCraft></ArtAndCraft>
    </div>
  );
};

export default Home;
