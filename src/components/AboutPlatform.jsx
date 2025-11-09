import React, { useContext } from 'react';
import platFormImg from '../assets/team.jpg'
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
const AboutPlatform = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="py-20 px-10 bg-orange-200 mt-10 rounded-lg">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Left: Text */}
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold text-orange-400">
                        About Freelance MarketPlace
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Freelance MarketPlace connects skilled professionals with clients efficiently.
                        Users can post jobs, explore opportunities, and manage tasks seamlessly—all in one platform.
                    </p>
                    <Link
                    to={user ? '/allJobs' : '/register'}
                    className="btn bg-orange-500 text-white hover:scale-105"
                    >
                    Join Now
                    </Link>
                </div>

                {/* Right: Image */}
                <div className="lg:w-1/2 flex justify-center">
                    <img 
                        src={platFormImg} 
                        alt="Platform Illustration" 
                        className="rounded-xl shadow-lg w-full lg:w-4/5"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPlatform;