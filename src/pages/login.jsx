import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        console.log("Login Successful");
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        console.log("Google Login Successful");
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-base-200 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      {/* Email Password Login */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Login
        </button>
      </form>

      <div className="divider">OR</div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
