import React from 'react'
import Banner from '../components/Banner'
import { useLoaderData } from 'react-router'
import LatestJobs from '../components/LatestJobs'
import TopCategories from '../components/TopCategories'
import AboutPlatform from '../components/AboutPlatform'

const Home = () => {
  const data =useLoaderData()
 
 
  
  return (
    <div className='py-10'>
    <Banner></Banner>
     <div className='py-16'>
      <h1 className='font-bold lg:text-5xl md:text-3xl text-2xl text-center py-5'>Our <span className='text-orange-400'>Latest</span> Jobs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      {
        data.map(job=><LatestJobs key={job._id} job={job}></LatestJobs>)
      }
     </div>
     </div>
     <TopCategories></TopCategories>
     <AboutPlatform></AboutPlatform>
    </div>
  )
}

export default Home