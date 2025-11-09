import React from 'react';
import webDevImg from '../assets/web.jpeg'
import marketingImg from '../assets/digital.jpeg'
import graphicImg from '../assets/grapics.jpeg'
import contentImg from '../assets/cont.jpeg'
import dataSciImg from '../assets/data.jpeg'
import mobileDevImg from '../assets/app.jpeg'
import Marquee from "react-fast-marquee";



const categories = [
  { name: 'Web Development', image: webDevImg },
 
  { name: 'Graphic Designing', image: graphicImg },
  { name: 'Content Writing', image: contentImg },
   { name: 'Digital Marketing', image: marketingImg },
  
  { name: 'Mobile App Development', image: mobileDevImg },
  { name: 'Data Science', image: dataSciImg },
];
const TopCategories = () => {
    return (
        <div className='  rounded-lg px-4 py-10 shadow-sm shadow-orange-400'>
            <h1 className='lg:text-5xl md:text-3xl text-2xl text-center font-bold'>
                Top <span className='text-orange-400'>Categories</span></h1>
                  <div className="mt-10">
        <Marquee gradient={false} direction="left" speed={70}>
          {categories.map((cat, index) => (
            <div
              key={index}
              className="min-w-[250px]   mx-3 relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-56 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-orange-500 bg-opacity-50 text-white text-center py-2 text-lg font-semibold">
                {cat.name}
              </div>
            </div>
          ))}
        </Marquee>
      </div>

        </div>

    );
};

export default TopCategories;