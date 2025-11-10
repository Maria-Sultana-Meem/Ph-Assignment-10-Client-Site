import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    title: "",
    category: "",
    summary: "",
    coverImage: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/allJobs/${id}`);
        if (!res.data) {
          toast.error("Job not found");
          navigate("/allJobs");
          return;
        }
        setJobData({
          title: res.data.title || "",
          category: res.data.category || "",
          summary: res.data.summary || "",
          coverImage: res.data.coverImage || "",
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load job data");
        navigate("/allJobs");
      }
    };

    fetchJob();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/allJobs/${id}`, jobData);
      toast.success("Job updated successfully!");
      navigate(`/allJobs/${id}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update job");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="pt-20 pb-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
        Update Job
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 shadow-sm shadow-or bg-white p-6 rounded-lg ">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="input input-bordered rounded-full w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={jobData.category}
            onChange={handleChange}
            className="input input-bordered rounded-full w-full"
            required
          >
            <option value="">Select category</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Data Science">Data Science</option>
            <option value="Mobile App Development">Mobile App Development</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Summary</label>
          <textarea
            name="summary"
            value={jobData.summary}
            onChange={handleChange}
            className="input input-bordered  w-full h-28"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Cover Image URL</label>
          <input
            type="text"
            name="coverImage"
            value={jobData.coverImage}
            onChange={handleChange}
            className="input input-bordered rounded-full w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="btn bg-orange-500 rounded-full text-white w-full hover:scale-105 transition-transform duration-300"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default Update;
