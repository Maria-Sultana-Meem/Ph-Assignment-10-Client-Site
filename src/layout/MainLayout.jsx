import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";

 

const MainLayout = () => {
     useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out", 
      once: true,
      
    });
    AOS.refresh();
  }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
                <div className='w-10/12 mx-auto '>
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;