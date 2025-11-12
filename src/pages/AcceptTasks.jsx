import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const AcceptTasks = () => {
  const [loading, setLoading] = useState(true);
  const [accepted, setAccepted] = useState([]);
  const{user}=useContext(AuthContext)
  
  useEffect(() => {
  if (!user) return;

  user.getIdToken(true).then((token) => {
    axios.get(`https://freelance-marketplace-lovat.vercel.app/my-accepted-task`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      setAccepted(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  });
}, [user]);

  const handleDelete = async (id) => {
  if (!user) return;

  try {
    const token = await user.getIdToken(true);

    await axios.delete(
      `https://freelance-marketplace-lovat.vercel.app/my-accepted-task/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    
    setAccepted((prev) => prev.filter((job) => job._id !== id));
  } catch (error) {
    console.error("Delete failed:", error);
  }
};

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
    
  if (accepted.length === 0) {
    return (
      <div className="pt-20 pb-10 text-center text-2xl text-gray-500">
        No accepted tasks added yet!
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        {accepted.map((job) => (
          <div
            key={job._id}
            className="shadow-sm hover:shadow-2xl space-y-2 rounded-lg p-6 hover:scale-105 transform transition ease-in-out"
          >
            <div>
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={job.coverImage}
                alt=""
              />
            </div>
            <h1 className="font-semibold ">
               <span className="text-orange-400">{job.title}</span>
            </h1>

            <p className="text-sm text-orange-500">{job.category}</p>
            <p className="font-semibold text-gray-600 text-sm">
              By:{job.postedBy}
            </p>
            <p className="text-gray-700 text-sm">
              {job.summary.slice(0, 100)}...
            </p>
            <p className="text-xs">Accepted by: {job.acceptedBy}</p>
            <p>Date: {new Date(job.acceptedAt).toLocaleString()}</p>
            <div className="flex justify-between items-center">
              <button onClick={()=>handleDelete(job._id)} className="btn bg-linear-to-r from-orange-300 to-orange-600 text-white  hover:scale-105 transition-transform duration-300">
                Done<IoCheckmarkDoneCircle size={20} color="green"/>
              </button>
              <button onClick={()=>handleDelete(job._id)} className="btn bg-linear-to-r from-orange-600 to-orange-300 text-white  hover:scale-105 transition-transform duration-300">
               Cancel<FaTimes size={20} color="red"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptTasks;
