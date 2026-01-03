import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-20 bg-linear-to-r from-orange-300 via-orange-500 to-orange-400 rounded-md text-white">
      <div className="max-w-5xl mx-auto px-5 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to <span className="underline decoration-white decoration-4">Find Your Next Opportunity?</span>
        </h2>
        <p className="text-lg md:text-xl text-orange-100">
          Join our freelance marketplace today and connect with verified clients instantly.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-6">
          <Link
            to="/allJobs"
            className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore Jobs
          </Link>
          <Link
            to="/addJob"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
