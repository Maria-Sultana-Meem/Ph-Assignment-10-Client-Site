import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link} from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

const AllJobs = () => {
  
    const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
    axios.get("http://localhost:3000/latest-jobs") 
      .then((res) => {
        
        setJobs(res.data);
        setLoading(false);
      })
    
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  
    
    return (
        <div className='pt-30 pb-10'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl text-center'>All <span className='text-orange-400'>Jobs</span> here</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                {
                    jobs.map(job=>  <div key={job._id} className='shadow-sm hover:shadow-2xl space-y-2 rounded-lg p-6 hover:scale-105 transform transition ease-in-out'>
                                <div><img className='w-full h-[200px] object-cover rounded-t-lg' src={job.coverImage} alt="" /></div>
                                <h1 className='font-semibold '>Title: <span className='text-orange-400'>{job.title}</span></h1>
                         
                                    <p className='text-sm text-orange-500'>{job.category}</p>
                                    <p className='font-semibold text-gray-600 text-sm'>By:{job.postedBy}</p>
                                    <p className='text-xs '>Email:{job.userEmail}</p>
                                    <p className='text-gray-700 text-sm'>{job.summary}</p>
                                    <Link to={`/allJobs/${job._id}`} className='btn bg-linear-to-r from-orange-300 to-orange-600 text-white w-full hover:scale-105 transition-transform duration-300'>
                                        View Details<FaArrowUpRightFromSquare /></Link>
                               
                            </div>
                    
                    
                    )
                }
            </div>
        </div>
    );
};

export default AllJobs;