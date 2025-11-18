import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, name, photo);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="border p-2 w-full"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Register
        </button>
      </form>
      <button
        onClick={handleGoogle}
        className="mt-2 bg-red-500 text-white px-4 py-2 w-full"
      >
        Register with Google
      </button>
      <p className="mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
