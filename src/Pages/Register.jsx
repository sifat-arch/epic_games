import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { registerUser, updateUser, signInWithGoogle, setLoading } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    registerUser(email, password)
      .then(() => {
        toast.success("Register successfully");
        updateUser(displayName, photoURL)
          .then(() => toast.success("User updated"))
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
      .then((err) => console.log(err));
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Google Register success");
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  useDocumentTitle("Register");

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center bg-[#252e40] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Join with us and start your journey
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] text-lg"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] text-lg"
              placeholder="Profile Photo URL"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] text-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border-b border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#06b6d4] text-lg"
              placeholder="Enter a strong password"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              ❌ Password must contain 1 uppercase, 1 lowercase & be 6+ chars
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#06b6d4] hover:bg-[#047b91] text-white font-semibold rounded-xl transition-all duration-300 mt-2"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full py-3 flex items-center justify-center border border-gray-300 rounded-xl hover:shadow-md transition duration-300"
          >
            <FcGoogle size={25} className="mr-2" />
            Register with Google
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#06b6d4] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
