import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";

const LatestJobs = ({ job }) => {
  const { title, summary, coverImage, postedBy, category, userEmail } = job;

  return (
    <div
      data-aos="fade-up"
      className="shadow-sm hover:shadow-2xl space-y-2 rounded-lg p-6 hover:scale-105 transform transition ease-in-out"
    >
      <div>
        <img
          className="w-full h-[200px] object-cover rounded-t-lg"
          src={coverImage}
          alt=""
        />
      </div>
      <h1 className="font-semibold ">
        {" "}
        <span className="text-orange-400">{title}</span>
      </h1>

      <p className="text-sm text-orange-500">{category}</p>
      <p className="font-semibold text-gray-600 text-sm">By:{postedBy}</p>
      <p className="text-xs ">Email:{userEmail}</p>
      <p className="text-gray-700 text-sm">
        {summary.split(" ").slice(0, 30).join(" ")}...
      </p>
      <Link
        to={`/allJobs/${job._id}`}
        className="btn bg-linear-to-r from-orange-300 to-orange-600 text-white w-full hover:scale-105 transition-transform duration-300"
      >
        View Details
        <FaArrowUpRightFromSquare />
      </Link>
    </div>
  );
};

export default LatestJobs;
