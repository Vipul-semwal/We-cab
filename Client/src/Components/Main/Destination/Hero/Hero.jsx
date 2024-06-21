import React from "react";
import {
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaUserFriends,
  FaSuitcaseRolling,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import "./Hero.css"; // Ensure this file exists and contains the necessary CSS

function Hero() {
  return (
    <section className="main-banner flex flex-col mt-14 lg:flex-row items-center justify-center">
      <div className="cover-car flex flex-col justify-center w-full lg:w-1/2">
        <h2>Your Route Details</h2>
        <div className="inputs-main grid grid-cols-2 mt-5 lg:grid-cols-3 gap-5 w-full">
          <div className="input-search relative">
            <FaMapMarkerAlt className="pin" />
            <input className="input-se" placeholder="From" type="text" />
            <FaExchangeAlt className="swap" />
          </div>
          <div className="input-search relative">
            <FaMapMarkerAlt className="pin" />
            <input className="input-se" placeholder="To" type="text" />
          </div>
          <div className="input-search relative">
            <FaUserFriends className="pin" />
            <input className="input-se" placeholder="Passengers" type="text" />
          </div>
          <div className="input-search relative">
            <FaSuitcaseRolling className="pin" />
            <input className="input-se" placeholder="Luggage" type="text" />
          </div>
          <div className="input-search relative">
            <FaCalendarAlt className="pin" />
            <input className="input-se" placeholder="Date" type="date" />
          </div>
          <div className="input-search relative">
            <FaClock className="pin" />
            <input className="input-se" placeholder="Time" type="time" />
          </div>
        </div>
      </div>
      <div className="car-box w-full lg:w-1/2 mt-10 lg:mt-0">
        <div className="bar-info p-3 flex items-center justify-center">
          <FaMapMarkerAlt />
          <p>dest1..</p>
          <FaArrowRight className="mx-2" />
          <FaMapMarkerAlt />
          <p>dest1..</p>
          <FaUserFriends className="ml-3" />
          <p>1 Adult 2 kids</p>
          <FaSuitcaseRolling />
          <p>1x</p>
        </div>
        <div className="w-full h-full mt-5 flex flex-col lg:flex-row items-center justify-start">
          <div className="flex content-boxs items-start flex-col w-full">
            <div className="upper-part flex flex-col items-start">
              <h3>
                Sedan <span>| Maruti Ciaz</span>
              </h3>
              <div className="flex items-center icons-car gap-2">
                <FaUserFriends />
                <p>1 Adult | 2 kids</p>
                <FaSuitcaseRolling />
                <p>1x</p>
              </div>
            </div>
            <div className="checks flex flex-col">
              <div className="flex items-center justify-start gap-2">
                <img src="/Utility/Black.png" width="10px" alt="" />
                <p>Super Comfortable</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img src="/Utility/Black.png" width="10px" alt="" />
                <p>Luxury Interior</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img src="/Utility/Black.png" width="10px" alt="" />
                <p>Best for Small Family</p>
              </div>
            </div>
          </div>
          <div className="car-back ">
            <img src="/Utility/cars.png" width="100%" alt="" />
          </div>
        </div>
        <div className="buttons flex items-center justify-center gap-2 mt-4">
          <button className="pink-btn">Book ₹150</button>

          <button className="unbtn flex items-center justify-center">
            Add sights along the way
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
