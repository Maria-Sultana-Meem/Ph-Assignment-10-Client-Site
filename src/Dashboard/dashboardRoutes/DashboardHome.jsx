import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {
  FaBriefcase,
  FaPlusCircle,
  FaCheckCircle,
} from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner";
import ActivityChart from "./ActivityChart";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({
    totalJobs: 0,
    myJobs: 0,
    acceptedTasks: 0,
  });

  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchDashboardData = async () => {
  try {
    const token = await user.getIdToken(true);

    const [allJobsRes, myJobsRes, acceptedRes] = await Promise.all([
      axios.get("https://freelance-marketplace-lovat.vercel.app/allJobs"),
      axios.get(
        "https://freelance-marketplace-lovat.vercel.app/myAddedJob",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
      axios.get(
        "https://freelance-marketplace-lovat.vercel.app/my-accepted-task",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    ]);

    setStats({
      totalJobs: allJobsRes.data.total, 
      myJobs: myJobsRes.data.length,
      acceptedTasks: acceptedRes.data.length,
    });

    setRecentJobs(myJobsRes.data.slice(0, 5));
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};


    fetchDashboardData();
  }, [user]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-8">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Jobs" value={stats.totalJobs} icon={<FaBriefcase />} />
        <StatCard title="My Posted Jobs" value={stats.myJobs} icon={<FaPlusCircle />} />
        <StatCard title="Accepted Tasks" value={stats.acceptedTasks} icon={<FaCheckCircle />} />
      </div>

      
      <ActivityChart stats={stats} /> 

    
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-orange-500">
          Recent Posted Jobs
        </h2>

        {recentJobs.length === 0 ? (
          <p className="text-gray-500">No jobs posted yet.</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentJobs.map((job) => (
                <tr key={job._id} className="border-t">
                  <td className="p-3">{job.title}</td>
                  <td className="p-3">{job.category}</td>
                  <td className="p-3">
                    {new Date(job.postedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;

/* ===== Reusable Card ===== */
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
    <div className="text-3xl text-orange-500">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  </div>
);
