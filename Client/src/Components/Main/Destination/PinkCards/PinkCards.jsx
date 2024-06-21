import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./PinkCards.css"; // Ensure this file exists and contains the necessary CSS

function PinkCards() {
  return (
    <section className="w-full fatherofpink flex flex-wrap justify-center gap-5 items-center">
      <div className="p-5 pinkcard">
        <img src="/Utility/icon1.png" alt="" />
        <h3>Plan your trip</h3>
        <ul className="mt-5">
          <li>
            <FaArrowRight /> Cities
          </li>
          <li>
            <FaArrowRight /> Sights
          </li>
          <li>
            <FaArrowRight /> Vehicle type
          </li>
        </ul>
      </div>

      <div className="p-5 pinkno">
        <img src="/Utility/icon2.png" alt="" />
        <h3>Driver's information</h3>
        <ul className="mt-5">
          <li>
            <FaArrowRight /> Driver's Utility
          </li>
          <li>
            <FaArrowRight /> Driver's name
          </li>
          <li>
            <FaArrowRight /> Driver's contact
          </li>
        </ul>
      </div>

      <div className="p-5 pinkno">
        <img src="/Utility/icon3.png" alt="" />
        <h3>Enjoy the ride!</h3>
        <ul className="mt-5">
          <li>
            <FaArrowRight /> Door-to-door service
          </li>
          <li>
            <FaArrowRight /> Help with your luggage
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PinkCards;
