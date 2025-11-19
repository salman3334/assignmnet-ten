// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const Register = () => {
//   const { createUser, googleLogin } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const photo = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (password.length < 6)
//       return toast.error("Password minimum 6 characters");

//     if (!/[A-Z]/.test(password))
//       return toast.error("Password must have an uppercase letter");

//     if (!/[a-z]/.test(password))
//       return toast.error("Password must have a lowercase letter");

//     createUser(email, password)
//       .then((result) => {
//         return updateProfile(result.user, {
//           displayName: name,
//           photoURL: photo,
//         });
//       })
//       .then(() => {
//         toast.success("Account created!");
//         navigate("/");
//       })
//       .catch((err) => toast.error(err.message));
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen px-4">
//       <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-base-200">
//         <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

//         <form onSubmit={handleRegister}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="input input-bordered w-full mb-4"
//             required
//           />

//           <input
//             type="text"
//             name="photo"
//             placeholder="Photo URL"
//             className="input input-bordered w-full mb-4"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="input input-bordered w-full mb-4"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="input input-bordered w-full mb-4"
//             required
//           />

//           <button className="btn btn-primary w-full mb-3">Register</button>
//         </form>

//         <button onClick={googleLogin} className="btn btn-neutral w-full mb-4">
//           Continue with Google
//         </button>

//         <p className="text-center">
//           Have an account?{" "}
//           <Link to="/login" className="text-blue-600 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    registerUser(email, pass)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-3">Register</h2>

      <form onSubmit={handleRegister} className="space-y-3">
        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />

        <button className="btn btn-primary w-full">Register</button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Register;
