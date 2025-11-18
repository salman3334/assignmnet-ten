import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
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
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
      <button
        onClick={handleGoogle}
        className="mt-2 bg-red-500 text-white px-4 py-2 w-full"
      >
        Login with Google
      </button>
      <p className="mt-2">
        New here?{" "}
        <Link to="/register" className="text-blue-500 underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
