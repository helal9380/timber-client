/** @format */

import { useLoaderData } from "react-router-dom";
import ArtCard from "../Componnets/ArtCard";

import About from "../Componnets/About";
import ArtAndCraft from "../Componnets/ArtAndCraft";
import Client from "../Componnets/Client";
import Slider from "../Componnets/Slider";

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
