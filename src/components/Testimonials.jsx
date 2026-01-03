import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonialsData = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This platform helped me find the perfect freelance job in no time.",
  },
  {
    name: "Jane Smith",
    role: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "A seamless experience. Easy to use and very professional. Got hired quickly!",
  },
  {
    name: "Michael Lee",
    role: "Content Writer",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    review:
      "Excellent platform for freelancers. Secure payments and verified clients.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 mt-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">
          What <span className="text-orange-500">Clients & Freelancers</span> Say
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 transform transition hover:scale-105 duration-300">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-orange-400"
                />
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
                <p className="text-gray-700 text-sm">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
