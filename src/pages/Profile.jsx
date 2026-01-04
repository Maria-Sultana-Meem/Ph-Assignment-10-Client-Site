import React, { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, updateProfileFunc} = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfileFunc(name, photo);

      toast.success("Profile updated successfully 🎉");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-6 text-orange-500">
        My Profile
      </h1>

      {/* ===== Profile Header ===== */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={photo || "https://i.ibb.co/5Y3X7kR/user.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-orange-400 object-cover"
        />

        <div>
          <h2 className="text-xl font-semibold">
            {user?.displayName || "User"}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded">
            User Account
          </span>
        </div>
      </div>

      {/* ===== Editable Form ===== */}
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block mb-1 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-orange-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Photo URL
          </label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-orange-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Email (Read Only)
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-60"
          >
            <FaUserEdit />
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
