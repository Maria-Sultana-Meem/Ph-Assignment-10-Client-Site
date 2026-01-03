import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="contact-us py-30 px-6 md:px-20 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-orange-500 text-center">Contact Freelance Marketplace</h1>
        <p className="text-center text-gray-700 mb-12">
          Have questions, feedback, or need support? We’re here to help! Fill out the form below or reach out via email, phone, or social media.
        </p>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"/>
          <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"/>
          <textarea placeholder="Message" className="w-full p-3 border rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-orange-300"></textarea>
          <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition">
            Send Message
          </button>
        </form>

     
        <div className="mt-12 text-center text-gray-700 space-y-3">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-orange-500"/> support@marketplace.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-orange-500"/> +880 1234 567890
          </p>

          <div className="flex justify-center gap-6 mt-4 text-orange-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

   
        <div className="mt-12">
          <iframe
            title="WarmPaws Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902312345678!2d90.400000000000!3d23.800000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c0c0c0c0c0%3A0x123456789abcdef!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            className="rounded-xl border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
