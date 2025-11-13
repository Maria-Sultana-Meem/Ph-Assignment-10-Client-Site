import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://freelance-marketplace-lovat.vercel.app/allJobs")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="pt-30 pb-10">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center animate-bounce">
        All <span className="text-orange-400">Jobs</span> here
      </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
  {jobs.map((job) => (
    <div
      data-aos="fade-up"
      key={job._id}
      className="shadow-sm hover:shadow-2xl rounded-lg p-6 hover:scale-105 transform transition ease-in-out flex flex-col h-full"
    >
      <div>
        <img
          className="w-full h-[200px] object-cover rounded-t-lg"
          src={job.coverImage}
          alt=""
        />
      </div>

      <div className="flex-1 space-y-2">
        <h1 className="font-semibold">
          <span className="text-orange-400">{job.title}</span>
        </h1>

        <p className="text-sm text-orange-500">{job.category}</p>
        <p className="font-semibold text-gray-600 text-sm">
          By: {job.postedBy}
        </p>
        <p className="text-xs">Email: {job.userEmail}</p>

        <p className="text-gray-700 text-sm ">
          {job.summary?.split(" ").slice(0, 10).join(" ")}..
         
        </p>
      </div>

      <Link
        to={`/allJobs/${job._id}`}
        className="btn bg-gradient-to-r from-orange-300 to-orange-600 text-white w-full hover:scale-105 transition-transform duration-300 mt-4"
      >
        View Details
        <FaArrowUpRightFromSquare />
      </Link>
    </div>
  ))}
</div>

    </div>
  );
};

export default AllJobs;
