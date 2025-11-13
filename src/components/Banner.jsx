import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  const textRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, {
      y: 10,
      opacity: 0.8,
      duration: 0.5,
      ease: "back.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <div className='py-16 px-5 lg:px-20 rounded-lg mt-20 flex bg-linear-to-bl from-orange-400 via-orange-200 to-orange-400 flex-col-reverse md:flex-row items-center justify-between'>
      
     
      <div className='space-y-5 w-full md:w-1/2'>
        <h1 ref={textRef} className='text-3xl mt-3 md:mt-0 lg:text-5xl font-bold text-orange-500'>
          Build Your Career, One Job at a Time
        </h1>
        <p className='text-gray-600 animate-pulse'>
          Join our Freelance Marketplace and find reliable jobs instantly.
        </p>
        <div className='flex gap-5 items-center'>
          <Link to='/allJobs' className='btn bg-linear-to-r hover:scale-105 from-orange-300 to-orange-600 text-white'>
            Explore Jobs
          </Link>
          <Link to='/addJob' className='btn bg-linear-to-r hover:scale-105 from-orange-300 to-orange-600 text-white'>
            Create a Job
          </Link>
        </div>
      </div>

      
      <div className='w-full md:w-1/2'>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-xl shadow-lg"
        >
          {[img1, img2, img3, img4].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
