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

function Banner() {
  const [mode, setMode] = useState("outstation");

  const toggleInputs = (newMode) => {
    setMode(newMode);
  };

  return (
    <section className="w-full main-hero relative">
      <div className="hero rounded-lg">
        <div className="content-main flex justify-center items-center flex-col">
          <h1 className="main-head">
            Book your first car rental through <br />
            our app and get up to 25% off!
          </h1>
          <button className="explore-btn mt-5">Explore Now</button>
        </div>
        <div className="enters ">
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
              mode === "sightseeing"
                ? "grid-cols-2 sm:grid-cols-2"
                : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
            } gap-5`}
            id="inputsContainer"
          >
            {mode === "outstation" && (
              <>
                <div className="input-search relative" id="inputFrom">
                  <FaMapMarkerAlt className="pin" />
                  <input className="input-se" placeholder="From" type="text" />
                  <FaExchangeAlt className="swap" />
                </div>
                <div className="input-search relative" id="inputTo">
                  <FaMapMarkerAlt className="pin" />
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
                  <FaMapMarkerAlt className="pin" />
                  <input
                    className="input-se w-full"
                    placeholder="To"
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
