// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">HomeHero</Link>

        <div className="flex items-center gap-4">
          <Link to="/services">Services</Link>
          {user ? (
            <>
              <Link to="/my-services">My Services</Link>
              <Link to="/my-bookings">My Bookings</Link>
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-blue-600 text-white px-3 py-1 rounded">Login</Link>
              <Link to="/register" className="bg-green-600 text-white px-3 py-1 rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
