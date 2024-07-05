import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMinus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section>
      <div className="footer text-white">
        <div className="container footer-cover mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="footer-about">
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <div className="line mb-6"></div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo
                  dictum nec non quam. Tortor eu placerat rhoncus, lorem quam
                  iaculis felis, sed lacus neque id eros.
                </p>

                <p className="mb-4">
                  Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo
                  dictum nec non quam. Tortor eu placerat rhoncus, lorem quam
                  iaculis felis, sed lacus neque id eros.
                </p>
                <div className="footer-social flex space-x-4">
                  <Link to="#" className="text-white hover:text-gray-400">
                    <FaTwitter />
                  </Link>
                  <Link to="#" className="text-white hover:text-gray-400">
                    <FaFacebookF />
                  </Link>
                  <Link to="#" className="text-white hover:text-gray-400">
                    <FaYoutube />
                  </Link>
                  <Link to="#" className="text-white hover:text-gray-400">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="footer-contact">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="line mb-6"></div>
                <Link to="/home">
                  <p className="mb-2 flex items-center">
                    <FaMinus className="mr-2" />
                    Home
                  </p>
                </Link>

                <Link to="/destination">
                  <p className="mb-2 flex items-center">
                    <FaMinus className="mr-2" />
                    Destinations
                  </p>
                </Link>

                <Link to="/booking">
                  <p className="mb-2 flex items-center">
                    <FaMinus className="mr-2" />
                    Booking
                  </p>
                </Link>

                <Link to="/overview">
                  <p className="mb-2 flex items-center">
                    <FaMinus className="mr-2" />
                    Overview Location
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="footer-project">
                <h3 className="text-xl font-bold mb-4">Instagram</h3>
                <div className="line mb-6"></div>
                <div className="grid grid-cols-3 gap-0">
                  <Link to="#">
                    <img
                      src="/Utility/a.png"
                      alt="Image"
                      className="w-full h-auto"
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="/Utility/b.png"
                      alt="Image"
                      className="w-full h-auto"
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="/Utility/c.png"
                      alt="Image"
                      className="w-full h-auto"
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="/Utility/d.png"
                      alt="Image"
                      className="w-full h-auto"
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="/Utility/f.png"
                      alt="Image"
                      className="w-full h-auto"
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="/Utility/k.png"
                      alt="Image"
                      className="w-full h-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="footer-about">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <div className="line mb-6"></div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo
                  dictum nec non quam. Tortor eu placerat rhoncus, lorem quam
                  iaculis felis, sed lacus neque id eros.
                </p>
                <div className="footer-social-email flex flex-col items-start gap-3">
                  <input type="text" placeholder="Enter your email" />
                  <button className="email">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-right py-4 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full">
                <p className="text-center">
                  © Copyright @Wecabs 2024 All Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
