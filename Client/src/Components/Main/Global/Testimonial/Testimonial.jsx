import React from "react";
import "./Testimonial.css";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // large screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480, // small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};
function Testimonial() {
  return (
    <>
      <section className="why mt-12 mb-6" id="real-test">
        <div>
          <h2>Our Happy Customers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="test-box test1 flex flex-col justify-end p-5 text-white bg-gray-800 rounded-lg">
            <div>
              <FaQuoteRight className="text-white float-right" />
            </div>
            <h3 className="mb-2">
              Excellent Service! Car
              <span className="text-pink-400">Rent</span> Service!
            </h3>
            <p>
              I have been using Rentaly for my Car Rental needs for over 5 years
              now. I have never had any problems with their service. Their
              customer support is always responsive and helpful. I would
              recommend Rentaly to anyone looking for a reliable Car Rental
              provider.
            </p>
          </div>
          <div className="test-box test2 flex flex-col justify-end p-5 text-white bg-gray-800 rounded-lg">
            <div>
              <FaQuoteRight className="text-white float-right" />
            </div>
            <h3 className="mb-2">
              Excellent Service! Car
              <span className="text-pink-400">Rent</span> Service!
            </h3>
            <p>
              I have been using Rentaly for my Car Rental needs for over 5 years
              now. I have never had any problems with their service. Their
              customer support is always responsive and helpful. I would
              recommend Rentaly to anyone looking for a reliable Car Rental
              provider.
            </p>
          </div>
          <div className="test-box test3 flex flex-col justify-end p-5 text-white bg-gray-800 rounded-lg">
            <div>
              <FaQuoteRight className="text-white float-right" />
            </div>
            <h3 className="mb-2">
              Excellent Service! Car
              <span className="text-pink-400">Rent</span> Service!
            </h3>
            <p>
              I have been using Rentaly for my Car Rental needs for over 5 years
              now. I have never had any problems with their service. Their
              customer support is always responsive and helpful. I would
              recommend Rentaly to anyone looking for a reliable Car Rental
              provider.
            </p>
          </div>
        </div>
      </section>

      <section className="why  overflow-hidden mt-12 mb-6" id="fake-test">
        <div>
          <h2>Our Happy Customers</h2>
        </div>
        <Slider {...settings} className="p-4">
          <div className="test-box test1 flex flex-col justify-end text-white bg-gray-800 rounded-lg">
            <div>
              <FaQuoteRight className="text-white float-right" />
            </div>
            <h3 className="mb-2">
              Excellent Service! Car
              <span className="text-pink-400">Rent</span> Service!
            </h3>
            <p>
              I have been using Rentaly for my Car Rental needs for over 5 years
              now. I have never had any problems with their service. Their
              customer support is always responsive and helpful. I would
              recommend Rentaly to anyone looking for a reliable Car Rental
              provider.
            </p>
          </div>
          <div className="test-box test2 flex flex-col justify-end text-white bg-gray-800 rounded-lg">
            <div>
              <FaQuoteRight className="text-white float-right" />
            </div>
            <h3 className="mb-2">
              Excellent Service! Car
              <span className="text-pink-400">Rent</span> Service!
            </h3>
            <p>
              I have been using Rentaly for my Car Rental needs for over 5 years
              now. I have never had any problems with their service. Their
              customer support is always responsive and helpful. I would
              recommend Rentaly to anyone looking for a reliable Car Rental
              provider.
            </p>
          </div>
          <div className="test-box test3 flex flex-col justify-end text-white bg-gray-800 rounded-lg">
            <div>
              <FaQuoteRight className="text-white float-right" />
            </div>
            <h3 className="mb-2">
              Excellent Service! Car
              <span className="text-pink-400">Rent</span> Service!
            </h3>
            <p>
              I have been using Rentaly for my Car Rental needs for over 5 years
              now. I have never had any problems with their service. Their
              customer support is always responsive and helpful. I would
              recommend Rentaly to anyone looking for a reliable Car Rental
              provider.
            </p>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Testimonial;
