import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-orange-300 text-base-content rounded p-6">
        <a className=" text-xl md:text-2xl font-bold flex justify-center animate-pulse"><span className='text-orange-500'>Freelance</span> MarketPlace</a>
        <nav className="grid grid-flow-col gap-2">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com" className="hover:scale-110">
              <FaFacebookSquare size={30} color="blue"/>
            </a>
            <a href="https://www.instagram.com" className="hover:scale-110">
              <FaInstagramSquare size={30} color="red" />
            </a>
            <a href="https://x.com" className="hover:scale-110">
              {" "}
              <FaXTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com" className="hover:scale-110">
              {" "}
              <FaLinkedin size={30} color="blue" />
            </a>

            <a href="https://www.youtube.com" className="hover:scale-110">
              {" "}
              <FaSquareYoutube size={30} color="red" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
