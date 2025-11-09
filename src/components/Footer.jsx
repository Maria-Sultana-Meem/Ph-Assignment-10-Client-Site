import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-orange-100/50 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com">
              <FaFacebookSquare size={30} color="blue" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagramSquare size={30} color="red" />
            </a>
            <a href="https://x.com">
              {" "}
              <FaXTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com">
              {" "}
              <FaLinkedin size={30} color="blue" />
            </a>

            <a href="https://www.youtube.com">
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
