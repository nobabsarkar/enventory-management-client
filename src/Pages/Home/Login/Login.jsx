import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import loginImg from "../../../assets/login/login.svg";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center hidden lg:block md:w-1/2 lg:text-left">
          <img style={{ width: "350px" }} src={loginImg} alt="" />
        </div>
        <div
          style={{ width: "350px" }}
          className="card md:w-1/2 w-full  shadow-2xl bg-base-100"
        >
          <form onSubmit={handleLogin} className="card-body">
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
                value="Login"
                className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white w-full"
              />
            </div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-secondary"
            >
              <FaGoogle size={20}></FaGoogle> Login With Google
            </button>
          </form>
          <p className="text-center mb-3">
            <small>
              New Here Please?{" "}
              <Link to="/register" className="text-green-500">
                Create an Account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
