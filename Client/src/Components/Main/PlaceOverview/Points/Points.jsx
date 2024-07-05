import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
function Points() {
  return (
    <section className="places-cover mt-14 mb-14">
      <div className="pink-points yoo">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default Points;
