import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import { AuthContext } from "../context/AuthContext";

const ForgetPassword = () => {
  const { resetPaswword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleForgetPass = (e) => {
    e.preventDefault();

    resetPaswword(email)
      .then(() => {
        alert("Password reset email send");
        // Redirect user to Gmail
        window.location.href = "https://mail.google.com/";
      })

      .catch((err) => console.log(err));
  };

  useDocumentTitle("Forget-password");
  return (
    <div className="hero bg-gray-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold"></h1>
        </div>
        <div className="card bg-base-100 w-[600px] shrink-0 shadow-2xl">
          <div className="card-body h-auto">
            <form className="fieldset" onSubmit={handleForgetPass}>
              {/* email */}
              <label className="label text-xl font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full text-xl"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Send a Varification email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
