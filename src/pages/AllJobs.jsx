import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

// Debounce hook
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const debouncedSearch = useDebounce(search, 500);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:3000/allJobs",
        {
          params: { search: debouncedSearch, category, page, limit: 8 },
        }
      );
      setJobs(res.data.jobs);
      setPages(res.data.pages);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [debouncedSearch, category, page]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="pt-30 pb-10 max-w-6xl mx-auto px-5">
      <h1 className="font-bold text-3xl md:text-4xl text-center animate-bounce">
        All <span className="text-orange-400">Jobs</span> here
      </h1>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row justify-center gap-4 my-6">
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 flex-1"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300"
        >
          <option value="">All Categories</option>
          <option value="Graphics Designing">Graphics Designing</option>
          <option value="Development">Web Development</option>
          <option value="Marketing">Digital Marketing</option>
          
        </select>
      </div>

      
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-xl transition-transform hover:scale-105 flex flex-col"
            >
              <img
                src={job.coverImage}
                alt={job.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h2 className="font-semibold text-orange-500">{job.title}</h2>
              <p className="text-sm text-gray-600">{job.category}</p>
              <p className="text-xs text-gray-500">By: {job.postedBy}</p>
              <p className="text-gray-700 text-sm mb-2">
                {job.summary?.split(" ").slice(0, 20).join(" ")}...
              </p>
              <Link
                to={`/allJobs/${job._id}`}
                className="btn bg-linear-to-r from-orange-300 to-orange-600 text-white mt-auto hover:scale-105 transition-transform flex justify-center items-center gap-2"
              >
                View Details <FaArrowUpRightFromSquare />
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(pages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`px-4 py-2 rounded ${
                page === idx + 1 ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllJobs;
