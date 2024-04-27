/** @format */

import { Outlet } from "react-router-dom";
import Header from "../Componnets/Header";
import Footer from "../pages/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
