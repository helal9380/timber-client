/** @format */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleSignIn = (e) => {
    // Corrected function name
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        toast.success("Successfuly login");
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5">
        Please <span className="text-[#b65a18]"> Login!</span>
      </h2>
      <div className="w-24 h-[2px] bg-[#b65a18] mx-auto"></div>
      <div>
        <div className=" md:w-1/2 mx-auto">
          <div className="">
            <div className="card shrink-0 w-full border border-[#b65a18] p-4 my-5">
              <form
                onSubmit={handleSignIn}
                className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <label className="label">
                    <p>
                      You don not have an account please{" "}
                      <Link
                        className="text-[#b65a18]"
                        to={"/register"}>
                        Register
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="py-2 px-5 bg-[#b65a18] text-white font-semibold">
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-5">
                <h2>
                  Are you new here? please{" "}
                  <Link to="/register">
                    {" "}
                    <span className="text-[#b65a18] font-semibold">
                      Register
                    </span>
                  </Link>
                </h2>
              </div>
              <div className="text-center my-2">
                <h3 className="mb-5">__Or__</h3>
                <div className="flex gap-5 items-center justify-center">
                  <a
                    onClick={handleGoogle}
                    href="#_"
                    className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#b65a18] text-[#b65a18] text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#b65a18] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-[#b65a18] transition duration-300 group-hover:text-white ease">
                      Google
                    </span>
                  </a>
                  <a
                    onClick={handleGitHub}
                    href="#_"
                    className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#b65a18] text-[#b65a18] text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#b65a18] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-[#b65a18] transition duration-300 group-hover:text-white ease">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
