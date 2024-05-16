import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import registerImg from "../../../assets/login/login.svg";
import { imageUpload } from "../../../components/utilitis";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.image.files[0];
    try {
      const imageData = imageUpload(imageFile);
      const result = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center hidden lg:block md:w-1/2 lg:text-left">
          <img src={registerImg} alt="" />
        </div>
        <div className="card md:w-1/2 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Photo</span>
              </label>
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered file-input-secondary w-full"
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
                className="input input-bordered"
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
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white w-full"
              />
            </div>
          </form>
          <p className="text-center mb-3">
            <small>
              Already have an Account Please?{" "}
              <Link to="/login" className="text-green-500">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
