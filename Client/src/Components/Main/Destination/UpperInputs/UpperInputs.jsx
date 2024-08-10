import React from "react";
import "./UpperInputs.css";
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
function UpperInputs() {
  return (
    <>
      <div className="upperInputs-cover ">
        <div className="upperMain ">
          <h1 className=" text-center  font-semibold text-3xl">
            Your Route Details
          </h1>
          <div className="w-full flex justify-center">
            <div className="middiem p-5">
              <div className="inputs-main grid grid-cols-2 mt-5 lg:grid-cols-3 gap-5 w-full">
                <div className="input-search relative">
                  <FaMapPin className="pin" />
                  <input
                    className="input-se"
                    placeholder="Bangkok"
                    type="text"
                  />
                  <FaExchangeAlt className="swap" />
                </div>
                <div className="input-search relative">
                  <FaMapPin className="pin" />
                  <input
                    className="input-se"
                    placeholder="Pattaya"
                    type="text"
                  />
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
                  <input
                    className="input-se"
                    placeholder="02-12-2024"
                    type="date"
                  />
                </div>
                <div className="input-search relative">
                  <FaClock className="pin" />
                  <input className="input-se" placeholder="Time" type="time" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpperInputs;
