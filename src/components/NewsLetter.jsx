import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return toast.error("Please enter your email!");

    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className=" mt-10 py-20 px-5 bg-linear-to-r from-orange-300 via-orange-400 to-orange-300 text-white rounded-xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Stay Updated with Our <span className="text-yellow-200">Newsletter</span>
        </h2>
        <p className="text-gray-100 text-sm md:text-base">
          Get the latest jobs, updates, and tips straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-5 py-3 w-full sm:w-auto flex-1 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-200 transition"
          />
          <button
            onClick={handleSubscribe}
            className="px-8 py-3 rounded-full bg-yellow-200 text-orange-600 font-semibold hover:bg-white hover:text-orange-500 transition transform hover:scale-105"
          >
            Subscribe
          </button>
        </div>
      </div>

      
      <div className="absolute top-0 -left-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-10 w-40 h-40 bg-yellow-100/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Newsletter;
