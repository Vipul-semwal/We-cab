import React from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./VisitSights.css";
function VisitSights() {
  return (
    <section>
      <div className="upper-head">
        <h2>Visit these sights along the way</h2>
        <div className="flex items-center gap-4">
          <p>Station Road, Las Vegas, USA</p>
          <FaCircle />
          <Link to="#map-hai" style={{ textDecoration: "none" }}>
            <p className="pink-text text-pink-500 underline cursor-pointer">
              Show on map
            </p>
          </Link>
          <FaCircle />
          <p>3 Km to City center</p>
          <FaCircle />
          <ul className="flex items-center justify-center">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
          <FaCircle />
          <p className="black-para">4.8</p>
        </div>
      </div>

      <div className="upper-head tooo">
        <h2>Visit these sights along the way</h2>
        <div className="flex items-center gap-3 mb-3">
          <ul className="flex items-center justify-center">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
          <FaCircle />
          <p className="black-para">4.8</p>
        </div>
        <div className="flex items-center gap-1">
          <p>Station Road, Las Vegas, USA</p>
          <FaCircle />
          <Link to="#map-hai">
            <p className="pink-text text-pink-500 underline cursor-pointer">
              Show on map
            </p>
          </Link>
          <FaCircle />
          <p>3 Km to City center</p>
        </div>
      </div>

      <div className="cover-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Big Image */}
          <div className="big-img">
            <img
              src="/Utility/grid.png"
              alt="Big Image"
              className="w-full h-auto"
            />
          </div>

          {/* Column for Two Small Images */}
          <div className="small-imgs grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-1 gap-2">
            {/* Small Image 1 */}
            <div className="small-img">
              <img src="/Utility/grid2.png" alt="Small Image 1" className="" />
            </div>

            {/* Small Image 2 */}
            <div className="small-img">
              <img src="/Utility/grid3.png" alt="Small Image 2" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitSights;
