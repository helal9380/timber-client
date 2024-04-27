/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { login, signInWithGoogle, signInWithGitHub } = useContext(AuthContext); // Corrected function name
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGitHub = () => {
    signInWithGitHub()
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold my-5">Please Login!</h2>
      <div>
        <div className=" w-1/2 mx-auto">
          <div className="">
            <div className="card shrink-0 w-full">
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
                        className="text-[#ffcc00]"
                        to={"/register"}>
                        Register
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="text-center my-5 border py-5">
                <h3 className="mb-5">With social icons</h3>
                <div className="flex gap-5 items-center justify-center">
                  <div>
                    <button
                      className="border py-2 px-5 "
                      onClick={handleGoogle}>
                      Google
                    </button>
                  </div>
                  <div>
                    <button
                      className="border py-2 px-5 "
                      onClick={handleGitHub}>
                      GitHub
                    </button>
                  </div>
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
