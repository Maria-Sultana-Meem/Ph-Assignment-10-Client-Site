import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

const MyAddedJob = () => {

    const { user } = useContext(AuthContext); 
  const [myJobs, setMyJobs] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    if (user) {
      user.getIdToken(true).then((token) => {
        axios
          .get("https://freelance-marketplace-lovat.vercel.app/myAddedJob", { 
            headers: { Authorization: `Bearer ${token}` }
         })
          .then(res => {
            setMyJobs(res.data)
            setLoading(false)
          })
          .catch(err => console.error(err));
      });
    }
  }, [user]);

    const handleDelete = async (id) => {
  if (!user) return toast.error("You are not logged in");

  try {
    const token = await user.getIdToken(true);

    const res = await axios.delete(`https://freelance-marketplace-lovat.vercel.app/deleteJob/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.data.deletedCount > 0) {
      toast.success("Job deleted successfully!");
      setMyJobs(myJobs.filter((job) => job._id !== id));
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete job");
  }
};
if (loading) {
  return <LoadingSpinner></LoadingSpinner>
}

    return (
    <div className="pt-20 pb-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
        My Added Jobs
      </h1>

      {myJobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs added yet!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myJobs.map((job) => (
            <div
              key={job._id}
              className="card bg-white shadow-md hover:shadow-lg p-4 rounded-xl"
            >
              <img
                src={job.coverImage}
                alt={job.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="font-semibold text-lg">{job.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                {job.category}
              </p>
              <p className="text-sm mb-3">{job.summary}</p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDelete(job._id)}
                  className="btn bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  Delete
                </button>
                <Link to={`/updateJob/${job._id}`}
                 
                  className="btn bg-orange-500 text-white rounded-full hover:bg-orange-600"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedJob;