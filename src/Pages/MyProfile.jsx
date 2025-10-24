import React, { useContext } from "react";

import useDocumentTitle from "../CustomHook/useDocumentTitle";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
  useDocumentTitle("My-profile");
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return "Loading...";
  }

  const photoUrl = user.providerData[0].photoURL;

  console.log(user);

  return (
    <div className="flex justify-center bg-[#252e40] items-center  h-screen ">
      <div className="space-y-5 px-20 bg-white py-10 rounded-xl shadow-xl mx-5 md:mx-0">
        <h1 className="text-4xl font-bold text-center">Profile Page</h1>
        <div>
          <img
            className="md:h-[300px] w-full rounded-xl"
            src={photoUrl}
            alt=""
          />
        </div>
        <p className="text-center text-2xl">
          <strong>Email:</strong> {user?.email}
        </p>

        {user.displayName && (
          <p className="text-center text-2xl">
            <strong>Name: </strong>
            {user?.displayName}
          </p>
        )}
        <button className="btn w-full bg-cyan-400 text-white">
          <Link to="/user-update">Update Info</Link>
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
