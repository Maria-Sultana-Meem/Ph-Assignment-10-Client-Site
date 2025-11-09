import React from 'react';
import { Link } from 'react-router';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

const Banner = () => {
    return (
        <div className='py-10 px-5 lg:px-20 rounded-lg mt-20 flex bg-linear-to-tl from-orange-300 via-orange-200 to-orange-300  flex-col-reverse md:flex-row lg:flex-row items-center justify-between'>
            <div className='space-y-5 w-full  md:w-1/2'>
                <h1 className='text-3xl mt-3 md:mt-0 lg:text-5xl font-bold text-orange-500'>Build Your Career, One Job at a Time</h1>
                <p className='text-gray-600'>Join our Freelance Marketplace and find reliable jobs instantly.</p>
                <div className='flex gap-5 items-center'>
                    <Link to='/allJobs' className='btn bg-linear-to-r from-orange-300 to-orange-600 text-white'>Explore Jobs</Link>
                <Link to='/addJob' className='btn bg-linear-to-r from-orange-300 to-orange-600 text-white'>Create a JOb</Link>
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-2 lg:grid-rows-2 w-full  md:w-1/2'>
             <div className='overflow-hidden  transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-2 flex justify-center items-center   p-2  rounded-lg  bg-white/20 backdrop-blur-md shadow-lg'>
                 <img className='rounded-md md:h-[300px]' src={img1} alt="" />
             </div>
             <div className= 'overflow-hidden  transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-1 flex justify-center items-center rounded-lg bg-white/20 backdrop-blur-md shadow-lg p-2'>
                 <img className='rounded-md' src={img2} alt="" />
             </div>
             <div className='overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-2 flex justify-center items-center rounded-lg bg-white/20 backdrop-blur-md shadow-lg p-2'>
                 <img className='rounded-md md:h-[300px]' src={img3} alt="" />
             </div>
             <div className='overflow-hidden  transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-1 flex justify-center items-center rounded-lg bg-white/20 backdrop-blur-md shadow-lg p-2'>
                 <img className='rounded-md' src={img4} alt="" />
             </div>
              
            </div>
        </div>
    );
};

export default Banner;