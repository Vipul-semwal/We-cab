import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "./KeyPoints.css"; // Ensure this file exists and contains the necessary CSS

function KeyPoints() {
  return (
    <section className="places-cover">
      <div className="pink-point">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>English-speaking driver</p>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>Door-to-door service</p>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>Sightseeing along the way</p>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>Smoke-free</p>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>English-speaking driver</p>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>Door-to-door service</p>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>Sightseeing along the way</p>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>Smoke-free</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default KeyPoints;
