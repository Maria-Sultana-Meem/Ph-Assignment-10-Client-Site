import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const ViewDetails = () => {
   const {id} = useParams()
   const{user}=useContext(AuthContext)
   const [detail,setDetail]=useState('')
    const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    axios
      .get(`http://localhost:3000/allJobs/${id}`)
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })
    
  }, [id]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  const handleAcceptTask=()=>{
   axios.post('http://localhost:3000/my-accepted-task',{
     jobId: detail._id,
  title: detail.title,
  postedBy: detail.postedBy,
  category: detail.category,
  summary: detail.summary,
  coverImage: detail.coverImage,
  userEmail: detail.userEmail,
  acceptedBy: user.email,
  acceptedAt: new Date()
   })
   .then(res=>{
     if (res.data) {
        toast.success("Job accepted Succesfully")
     }
   })

  }

    return (
        <div className='pt-20 pb-10'>
            <div className="max-w-4xl  shadow-orange-500 md:flex justify-between gap-5 items-center mx-auto mt-10 p-6 bg-white rounded-xl shadow-sm">
          <div className='lg:w-1/2 shadow-sm shadow-orange-500 rounded-lg'>
             <img
      src={detail.coverImage}
      alt={detail.title}
      className="w-full  object-cover rounded-lg mb-6"/>
          </div>

         <div className='lg:w-1/2'>
            <h1 className="text-3xl font-bold text-orange-500 mb-2">{detail.title}</h1>
    <p className="text-gray-600 mb-2">
      <span className="font-semibold">Category:</span> <span className='text-orange-500'>{detail.category}</span>
    </p>
    <p className="text-gray-600 mb-2">
      <span className="font-semibold">Posted By:</span> {detail.postedBy}
    </p>
    <p className="text-gray-600 mb-4">
      <span className="font-semibold">Email:</span> {detail.userEmail}
    </p>
    <p className="text-gray-800 leading-relaxed">{detail.summary}</p>
     <div className='flex justify-end gap-5'>
        <button
         onClick={handleAcceptTask}
        className="btn bg-linear-to-r from-orange-300 to-orange-600 text-white  hover:scale-105 transition-transform duration-300"
      >
        Accept This Job
      </button>
        <Link to={`/updateJob/${detail._id}`}
        
        className="btn bg-linear-to-r from-orange-300 to-orange-600 text-white  hover:scale-105 transition-transform duration-300"
      >
        Update Job
      </Link>
     </div>
         </div>
  </div>
        </div>
    );
};

export default ViewDetails;