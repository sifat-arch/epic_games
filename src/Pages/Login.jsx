import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInWithGoogle, logInUser, setLoading } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Log in successful");
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Google login successful");
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  const handleShow = () => {
    setShow(!show);
  };

  useDocumentTitle("Login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#252e40] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your account to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] text-lg"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] text-lg"
            />

            <span
              className="absolute top-12 left-83 cursor-pointer z-50"
              onClick={handleShow}
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <p
              onClick={handleForgetPass}
              className="text-[#06b6d4] cursor-pointer hover:underline font-medium"
            >
              Forgot password?
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#06b6d4] hover:bg-[#057d92] text-white font-semibold rounded-xl transition-all duration-300"
          >
            Login
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full py-3 flex items-center justify-center border border-gray-300 rounded-xl hover:shadow-md transition-shadow duration-300"
          >
            <FcGoogle size={25} className="mr-2" />
            Login with Google
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#06b6d4] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
