import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaUsers,
  FaSuitcaseRolling,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import "./Banner.css";
import { FaMapPin } from "react-icons/fa6";
function Banner() {
  const [mode, setMode] = useState("outstation");

  const toggleInputs = (newMode) => {
    setMode(newMode);
  };

  return (
    <section className="w-full main-hero relative">
      <div className="hero rounded-lg">
        <div className="content-main flex justify-center items-center flex-col">
          <h1 className="main-head p-3">
            Ride with We <span className="text-pink-400">Care </span>Cab: Your
            Trusted
            <br />
            Partner for Safe and Convenient Travel
          </h1>
          <button className="explore-btn mt-5">Explore Now</button>
        </div>
        <div className="enters">
          <div className="buttons w-full flex items-center justify-center gap-4 mb-4">
            <button
              className="input-btn-top"
              onClick={() => toggleInputs("outstation")}
            >
              Outstation
            </button>
            <button
              className="top-1"
              onClick={() => toggleInputs("sightseeing")}
            >
              Sightseeing
            </button>
          </div>

          <div
            className={`inputs-main grid ${
              mode === "sightseeing" || mode === "outstation"
                ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-2"
            } gap-5`}
            id="inputsContainer"
          >
            {mode === "outstation" && (
              <>
                <div className="input-search relative" id="inputFrom">
                  <FaMapPin className="pin" />
                  <input className="input-se" placeholder="From" type="text" />
                  <FaExchangeAlt className="swap" />
                </div>
                <div className="input-search relative" id="inputTo">
                  <FaMapPin className="pin" />
                  <input
                    className="input-se w-full"
                    placeholder="To"
                    type="text"
                  />
                </div>
                <div className="input-search relative" id="inputPassengers">
                  <FaUsers className="pin" />
                  <input
                    className="input-se"
                    placeholder="Passengers"
                    type="text"
                  />
                </div>
                <div className="input-search relative" id="inputLuggage">
                  <FaSuitcaseRolling className="pin" />
                  <input
                    className="input-se"
                    placeholder="Luggage"
                    type="text"
                  />
                </div>
                <div className="input-search relative" id="inputDate">
                  <FaCalendarAlt className="pin" />
                  <input
                    className="input-se w-full"
                    placeholder="Date"
                    type="date"
                  />
                </div>
                <div className="input-search relative" id="inputTime">
                  <FaClock className="pin" />
                  <input className="input-se" placeholder="Time" type="time" />
                </div>
              </>
            )}
            {mode === "sightseeing" && (
              <>
                <div className="input-search relative" id="inputTo">
                  <FaMapPin className="pin" />
                  <input
                    className="input-se w-full"
                    placeholder="To"
                    type="text"
                  />
                </div>
                <div className="input-search relative" id="inputPassengers">
                  <FaUsers className="pin" />
                  <input
                    className="input-se"
                    placeholder="Passengers"
                    type="text"
                  />
                </div>
                <div className="input-search relative" id="inputLuggage">
                  <FaSuitcaseRolling className="pin" />
                  <input
                    className="input-se"
                    placeholder="Luggage"
                    type="text"
                  />
                </div>
                <div className="input-search relative" id="inputDate">
                  <FaCalendarAlt className="pin" />
                  <input
                    className="input-se w-full"
                    placeholder="Date"
                    type="date"
                  />
                </div>
                <div className="input-search relative" id="inputTime">
                  <FaClock className="pin" />
                  <input className="input-se" placeholder="Time" type="time" />
                </div>
              </>
            )}
          </div>

          <div className="flex items-center justify-center w-full mt-4">
            <button className="results">Show Results</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
