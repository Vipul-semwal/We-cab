import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaUserFriends,
  FaSuitcaseRolling,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import "./Hero.css"; // Ensure this file exists and contains the necessary CSS
import CarCard from "../../Global/CarCard/CarCard";
import CarsPopUp from "../../Global/CarsPopUp/CarsPopUp";

function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="main-banner flex flex-col mt-14 lg:flex-row items-center justify-center">
      <div className="cover-car flex flex-col justify-center w-full lg:w-1/2">
        <h2>Your Route Details</h2>
        <div className="inputs-main grid grid-cols-2 mt-5 lg:grid-cols-3 gap-5 w-full">
          <div className="input-search relative">
            <FaMapPin className="pin" />
            <input className="input-se" placeholder="Bangkok" type="text" />
            <FaExchangeAlt className="swap" />
          </div>
          <div className="input-search relative">
            <FaMapPin className="pin" />
            <input className="input-se" placeholder="Pattaya" type="text" />
          </div>
          <div className="input-search relative">
            <FaUserFriends className="pin" />
            <input
              className="input-se"
              placeholder="2 Adult 1 Children"
              type="number"
            />
          </div>
          <div className="input-search relative">
            <FaSuitcaseRolling className="pin" />
            <input className="input-se" placeholder="2" type="text" />
          </div>
          <div className="input-search relative">
            <FaCalendarAlt className="pin" />
            <input className="input-se" placeholder="02-12-2024" type="date" />
          </div>
          <div className="input-search relative">
            <FaClock className="pin" />
            <input className="input-se" placeholder="Time" type="time" />
          </div>
        </div>
      </div>
      <CarCard onMoreOptionsClick={handlePopupOpen} />
      {isPopupOpen && <CarsPopUp onClose={handlePopupClose} />}
    </section>
  );
}

export default Hero;
