import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to AuctionGallery</h2>
      {user ? <p>Hello, {user.displayName || user.email}</p> : <p>Please login or register</p>}
    </div>
  );
};

export default Home;
