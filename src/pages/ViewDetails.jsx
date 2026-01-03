import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';

const ViewDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    axios
      .get(`https://freelance-marketplace-lovat.vercel.app/allJobs/${id}`)
      .then((res) => {
        setDetail(res.data);
        setSelectedImage(res.data.coverImage);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSpinner />;

  const handleAcceptTask = async () => {
    if (!user) return toast.error("Please login first!");
    if (detail.userEmail === user.email)
      return toast.error("You cannot accept your own job!");

    try {
      const token = await user.getIdToken(true);
      const res = await axios.post(
        'https://freelance-marketplace-lovat.vercel.app/my-accepted-task',
        {
          jobId: detail._id,
          title: detail.title,
          postedBy: detail.postedBy,
          category: detail.category,
          summary: detail.summary,
          coverImage: detail.coverImage,
          userEmail: detail.userEmail,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.insertedId) toast.success("Job accepted successfully!");
      else toast.error("Failed to accept job");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="pt-30 pb-10 max-w-6xl mx-auto px-5">
      {/* Main Section */}
      <div className="md:flex gap-8 bg-white rounded-xl shadow-lg p-6">
        {/* Images */}
        <div className="md:w-1/2">
          <div className="border rounded-lg overflow-hidden mb-4">
            <img
              src={selectedImage}
              alt={detail.title}
              className="w-full h-80 object-cover"
            />
          </div>
          {/* Thumbnail gallery (add more images if available) */}
          <div className="flex gap-3">
            {[detail.coverImage].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumbnail-${idx}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage === img ? "border-orange-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Overview & Key Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-orange-500 mb-2">{detail.title}</h1>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Category:</span> {detail.category}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Posted By:</span> {detail.postedBy}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Email:</span> {detail.userEmail}
            </p>
            <h3 className="font-semibold text-lg mb-1">Overview</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{detail.summary}</p>

            {/* Example Key Specs */}
            <h3 className="font-semibold text-lg mb-2">Key Information</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Posted on: {new Date(detail.postedAt).toLocaleDateString()}</li>
              <li>Category: {detail.category}</li>
              <li>Posted By: {detail.postedBy}</li>
            </ul>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleAcceptTask}
              className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              Accept Task
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Reviews</h2>
        <div className="space-y-4">
          {/* Example Review */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">John Doe</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              Great job! Highly recommended freelancer.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Jane Smith</span>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-sm">Very professional and timely delivery.</p>
          </div>
        </div>
      </div>

      {/* Related Jobs Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Related Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Example static related jobs, replace with dynamic fetch if needed */}
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-xl transition-transform hover:scale-105">
            <h3 className="font-semibold text-orange-500">Web Design Project</h3>
            <p className="text-gray-700 text-sm">Category: Design</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-xl transition-transform hover:scale-105">
            <h3 className="font-semibold text-orange-500">Logo Creation</h3>
            <p className="text-gray-700 text-sm">Category: Branding</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-xl transition-transform hover:scale-105">
            <h3 className="font-semibold text-orange-500">UI/UX Redesign</h3>
            <p className="text-gray-700 text-sm">Category: Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
