import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddJob = () => {
    const {user}=useContext(AuthContext)
     const [job, setJob] = useState({
    title: "",
    category: "",
    summary: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      ...job,
      postedBy: user.displayName,
      userEmail: user.email,
      postedAt: new Date().toISOString(),
    };

    try {
      const newJob = { ...jobData, userEmail: user?.email };
      const res = await axios.post("http://localhost:3000/addJob", newJob);
      if (res.data.insertedId) {
        toast.success("Job added successfully!");
        setJob({ title: "", category: "", summary: "", coverImage: "" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

   return (
    <div className="pt-24 pb-10 flex justify-center">
      <div className="w-full max-w-lg  shadow-sm shadow-orange-400 rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-500">
          Add New Job
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
              className="w-full rounded-full border-gray-300 border px-3 py-2  focus:outline-orange-400"
            />
          </div>

         
          <div>
            <label className="block font-medium mb-1">Posted By</label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="w-full border  px-3 py-2 rounded-full border-gray-300 "
            />
          </div>

       
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              value={job.category}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-full border-gray-300 focus:outline-orange-400"
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Data Entry">Data Entry</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

        
          <div>
            <label className="block font-medium mb-1">Summary</label>
            <textarea
              name="summary"
              value={job.summary}
              onChange={handleChange}
              rows="3"
              required
              className="w-full border px-3 py-2 rounded-md border-gray-300 focus:outline-orange-400"
            />
          </div>

         
          <div>
            <label className="block font-medium mb-1">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              value={job.coverImage}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-full border-gray-300 focus:outline-orange-400"
            />
          </div>

         
          <div>
            <label className="block font-medium mb-1">User Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-full border px-3 py-2 rounded-full border-gray-300 "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-full border-gray-300 hover:bg-orange-600 transition"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
