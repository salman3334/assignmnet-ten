// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   const navLinks = (
//     <>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/services">Services</Link></li>

//       {user && (
//         <>
//           <li><Link to="/my-services">My Services</Link></li>
//           <li><Link to="/add-service">Add Service</Link></li>
//           <li><Link to="/my-bookings">My Bookings</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-base-200 shadow">
//       <div className="navbar-start">
//         <Link to="/" className="text-2xl font-bold">HomeHero</Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navLinks}</ul>
//       </div>

//       <div className="navbar-end">
//         {user ? (
//           <button onClick={logout} className="btn btn-error btn-sm">Logout</button>
//         ) : (
//           <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-200 shadow-md px-5">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">HomeHero</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>

          {user && <li><Link to="/my-bookings">My Bookings</Link></li>}

          {!user && <li><Link to="/login">Login</Link></li>}
          {!user && <li><Link to="/register">Register</Link></li>}

          {user && (
            <li>
              <button onClick={logoutUser} className="btn btn-sm">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
