/** @format */

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    if(!uppercase) {
      return toast.error('Password must contain at least one uppercase character.')
    }
    else if(!lowercase) {
      return toast.error('Password must contain at least one lowercase character.')
    }
    else if (password.length < 6) {
      return toast.error('Password must be six charecter or longer')
    }
   
    createUser(email,password)
    .then(result => {
      console.log(result.user)
      toast.success('Registration successfull')
      navigate('/')
    })
    .catch(error => {
      console.error(error)
    })
  }
  return (
    <div className="mb-10">
      <h2 className="text-center lg:text-5xl md:text-3xl text-2xl font-semibold my-5">Please Register!</h2>
      <div>
        <div className=" md:w-1/2 mx-auto">
          <div className="">
            <div className="card shrink-0 w-full">
              <form onSubmit={handleLogin} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="tex"
                    name="name"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
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
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="PhotoURL"
                    placeholder="Photo URL"
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
                    <p>Have an account? please <Link className="text-[#b65a18]" to={'/login'}>Login</Link></p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="py-2 px-5 bg-[#b65a18] text-white font-semibold">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
