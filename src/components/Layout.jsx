import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Layout = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-xl font-bold">AuctionGallery</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {user && <button onClick={logOut}>Logout</button>}
        </div>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
