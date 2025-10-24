import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { resetPaswword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleForgetPass = (e) => {
    e.preventDefault();

    resetPaswword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        // Redirect user to Gmail
        window.open("https://mail.google.com/", "_blank");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  useDocumentTitle("Forget Password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#252e40] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Reset Password
          </h1>
          <p className="text-gray-500 mt-2">
            Enter your email to receive a password reset link
          </p>
        </div>

        <form onSubmit={handleForgetPass} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#06b6d4] hover:bg-[#007777] text-white font-semibold rounded-xl transition-all duration-300"
          >
            Send Verification Email
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Remember your password?{" "}
            <a
              href="/login"
              className="text-[#06b6d4] font-semibold hover:underline"
            >
              Go to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
