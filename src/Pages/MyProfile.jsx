import React, { useContext } from "react";

import useDocumentTitle from "../CustomHook/useDocumentTitle";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  useDocumentTitle("My-profile");
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="space-y-5  px-20 py-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-center">Profile Page</h1>
        <div>
          <img className="h-70 rounded-full" src={user?.photoURL} alt="" />
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
      </div>
    </div>
  );
};

export default MyProfile;
