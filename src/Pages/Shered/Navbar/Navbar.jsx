import { FaBars } from "react-icons/fa6";
import logo from '../../../assets/image1/logo.jpeg'
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error)
      })
  }

  const navOptions = <>
    {
      !user ? <>
        <li><Link>Home</Link></li>
        <li><Link to='/createShop'>Create-Shop</Link></li>
        <li><Link>Watch Demo</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </>
        :
        <>
          <li><Link>Home</Link></li>
          <li><Link to='/createShop'>Create-Shop</Link></li>
          <li><Link>Dashboard</Link></li>
          <li><Link>Watch Demo</Link></li>
          <li><Link onClick={handleLogout} className="bg-white text-black">Log Out</Link></li>
        </>
    }

  </>

  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="navbar-start">
        <Link to='/' className="btn btn-ghost text-xl">
          <img style={{ width: '80px' }} src={logo} alt="" />
          <p>MANAGEMENT</p>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="drawer drawer-end block lg:hidden z-20">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end">
          <label htmlFor="my-drawer-4" className="drawer-button mr-8">
            <FaBars size={35} className="cursor-pointer"></FaBars>
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu text-white p-4 w-60 min-h-full bg-base-200 text-base-content bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar