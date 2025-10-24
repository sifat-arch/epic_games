import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import useDocumentTitle from "../CustomHook/useDocumentTitle";

const UserUpdate = () => {
  const { updateUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    console.log(displayName, photoURL);

    updateUser(displayName, photoURL)
      .then(() => {
        toast.success("User updated");
        navigate("/my-profile");
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  useDocumentTitle("User Update");
  return (
    <div className="min-h-screen mt-16 flex items-center justify-center bg-[#252e40] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Update Your Information
          </h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn w-full bg-cyan-400 text-white">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserUpdate;
