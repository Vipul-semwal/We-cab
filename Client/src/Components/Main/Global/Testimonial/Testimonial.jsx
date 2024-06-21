import React from "react";
import "./Testimonial.css";
import { FaQuoteRight } from "react-icons/fa";
function Testimonial() {
  return (
    <section className="why mt-12 mb-6">
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
            customer support is always responsive and helpful. I would recommend
            Rentaly to anyone looking for a reliable Car Rental provider.
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
            customer support is always responsive and helpful. I would recommend
            Rentaly to anyone looking for a reliable Car Rental provider.
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
            customer support is always responsive and helpful. I would recommend
            Rentaly to anyone looking for a reliable Car Rental provider.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
