import React from "react";
import "./OverviewHero.css";
import { FaMapPin } from "react-icons/fa6";
import {
  FaUserFriends,
  FaSuitcaseRolling,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

function OverviewHero() {
  return (
    <section className="hero-main">
      <div className="hero-pink relative">
        <div className="diffrent">
          <h2>Your Route Details</h2>
          <div className="diff-inputs grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
            <div className="single-diff-input flex items-center p-2 rounded">
              <FaMapPin className="mr-2" />
              <input
                type="text"
                placeholder="Dest.1"
                className="flex-grow outline-none"
              />
            </div>

            <div className="single-diff-input flex items-center p-2 rounded">
              <FaMapPin className="mr-2" />
              <input
                type="text"
                placeholder="Dest.2"
                className="flex-grow outline-none"
              />
            </div>

            <div className="single-diff-input flex items-center p-2 rounded">
              <FaUserFriends className="mr-2" />
              <input
                type="text"
                placeholder="2 Adults 1 Kid"
                className="flex-grow outline-none"
              />
            </div>

            <div className="single-diff-input flex items-center p-2 rounded">
              <FaSuitcaseRolling className="mr-2" />
              <input
                type="text"
                placeholder="Luggage"
                className="flex-grow outline-none"
              />
            </div>

            <div className="single-diff-input flex items-center p-2 rounded">
              <FaCalendarAlt className="mr-2" />
              <input type="date" className="flex-grow outline-none" />
            </div>

            <div className="single-diff-input flex items-center p-2 rounded">
              <FaClock className="mr-2" />
              <input type="time" className="flex-grow outline-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewHero;
