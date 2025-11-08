import React from 'react';
import Navbar from '../components/Navbar';
import ErrorImg from '../assets/error-404.png'
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <div className='h-screen pt-30 pb-10'>
            <h1 className='text-red-500 font-bold text-5xl text-center pb-10'>Page Not Found</h1>
            <div className='flex justify-center'><img src={ErrorImg} alt="" /></div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;