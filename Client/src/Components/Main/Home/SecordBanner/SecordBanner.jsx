import React, { useState } from "react";
import "./SecordBanner.css";
import {
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaUsers,
  FaSuitcaseRolling,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

function SecordBanner() {
  const [mode, setMode] = useState("outstation");

  const toggleInputs = (newMode) => {
    setMode(newMode);
  };

  return (
    <section className="banner-info relative">
      <div className="again relative flex items-center justify-center gap-3">
        <div>
          <h2>
            Book your first car rental
            <span className="text-pink-400"> through</span> our app and get up
            to 25% off!
          </h2>
        </div>

        <div className="enters2 p-2">
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
                  <FaUsers className="pin" />
                  <input
                    className="input-se"
                    placeholder="Passengers"
                    type="text"
                  />
                </div>
                <div className="input-search relative">
                  <FaSuitcaseRolling className="pin" />
                  <input
                    className="input-se"
                    placeholder="Luggage"
                    type="text"
                  />
                </div>
                <div className="input-search relative">
                  <FaCalendarAlt className="pin" />
                  <input className="input-se" placeholder="Date" type="date" />
                </div>
                <div className="input-search relative">
                  <FaClock className="pin" />
                  <input className="input-se" placeholder="Time" type="time" />
                </div>
              </>
            )}
            {mode === "sightseeing" && (
              <>
                <div className="input-search relative">
                  <FaMapMarkerAlt className="pin" />
                  <input className="input-se" placeholder="To" type="text" />
                </div>
                <div className="input-search relative">
                  <FaCalendarAlt className="pin" />
                  <input className="input-se" placeholder="Date" type="date" />
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

export default SecordBanner;
