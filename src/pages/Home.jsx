import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'

import LatestJobs from '../components/LatestJobs'
import TopCategories from '../components/TopCategories'
import AboutPlatform from '../components/AboutPlatform'
import LoadingSpinner from '../components/LoadingSpinner'
import axios from 'axios'
import Services from '../components/Services'
import Statistics from '../components/Statistics'
import FAQ from '../components/FAQ'
import Newsletter from '../components/NewsLetter'

import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  
 const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
    axios.get("https://freelance-marketplace-lovat.vercel.app/latest-jobs") 
      .then((res) => {
        
        setJobs(res.data);
        setLoading(false);
      })
    
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  
  return (
    <div className='py-10'>
    <Banner></Banner>
     <div className='py-16'>
      <h1 className='font-bold lg:text-5xl md:text-3xl text-2xl text-center py-5 animate-pulse'>Our <span className='text-orange-400'>Latest</span> Jobs</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
      {
        jobs.map(job=><LatestJobs key={job._id} job={job}></LatestJobs>)
      }
     </div>
     </div>
    
     <TopCategories></TopCategories>
     <Services></Services>
     <Statistics></Statistics>
      <CTA></CTA>
     <FAQ></FAQ>
     <AboutPlatform></AboutPlatform>
     <Testimonials></Testimonials>
     <Newsletter></Newsletter>
    </div>
  )
}

export default Home