import React from "react";
import "./CarsPopUp.css";
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaSuitcaseRolling,
  FaArrowRight,
} from "react-icons/fa";
function CarsPopUp({ onClose }) {
  return (
    <div className="background-pop">
      <div className="body-pop">
        <h1 className="font-semibold text-start">Select your ride</h1>
        <hr />

        <div>
          <div className="cars-rows flex items-center px-5 py-5">
            <input type="radio" className="text-pink-600 mr-3" />
            <div className="flex justify-between gap-10 items-center mr-4">
              <h2 className="text-3xl font-normal">$124</h2>
              <img src="/Utility/car0.png" width="180px" alt="" />
            </div>

            {/*  */}
            <div className="flex flex-col">
              <div className="upper-pop flex items-start ">
                <h3 className="text-xl font-medium">Sedan Lite</h3>
              </div>

              <div className="down-pop gap-9 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <p>Comparable to a</p>
                  <h4 className="">Audi</h4>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="flex items-center flex-col">
                    <p>Passengers</p>
                    <div className="flex items-center">
                      <FaUserFriends />
                      <p>1-3</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <p>Luggage</p>
                    <div className="flex items-center">
                      <FaSuitcaseRolling />
                      <p>3x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cars-rows flex items-center px-5 py-5">
            <input type="radio" className="text-pink-600 mr-3" />
            <div className="flex justify-between gap-10 items-center mr-4">
              <h2 className="text-3xl font-normal">$124</h2>
              <img src="/Utility/car3.png" width="180px" alt="" />
            </div>

            {/*  */}
            <div className="flex flex-col">
              <div className="upper-pop flex items-start ">
                <h3 className="text-xl font-medium">Sedan Lite</h3>
              </div>

              <div className="down-pop gap-9 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <p>Comparable to a</p>
                  <h4 className="">Audi</h4>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="flex items-center flex-col">
                    <p>Passengers</p>
                    <div className="flex items-center">
                      <FaUserFriends />
                      <p>1-3</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <p>Luggage</p>
                    <div className="flex items-center">
                      <FaSuitcaseRolling />
                      <p>3x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cars-rows flex items-center px-5 py-5">
            <input type="radio" className="text-pink-600 mr-3" />
            <div className="flex justify-between gap-10 items-center mr-4">
              <h2 className="text-3xl font-normal">$124</h2>
              <img src="/Utility/car1.png" width="180px" alt="" />
            </div>

            {/*  */}
            <div className="flex flex-col">
              <div className="upper-pop flex items-start ">
                <h3 className="text-xl font-medium">Sedan Lite</h3>
              </div>

              <div className="down-pop gap-9 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <p>Comparable to a</p>
                  <h4 className="">Audi</h4>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="flex items-center flex-col">
                    <p>Passengers</p>
                    <div className="flex items-center">
                      <FaUserFriends />
                      <p>1-3</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <p>Luggage</p>
                    <div className="flex items-center">
                      <FaSuitcaseRolling />
                      <p>3x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cars-rows flex items-center px-5 py-5">
            <input type="radio" className="text-pink-600 mr-3" />
            <div className="flex justify-between gap-10 items-center mr-4">
              <h2 className="text-3xl font-normal">$124</h2>
              <img src="/Utility/car0.png" width="180px" alt="" />
            </div>

            {/*  */}
            <div className="flex flex-col">
              <div className="upper-pop flex items-start ">
                <h3 className="text-xl font-medium">Sedan Lite</h3>
              </div>

              <div className="down-pop gap-9 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <p>Comparable to a</p>
                  <h4 className="">Audi</h4>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="flex items-center flex-col">
                    <p>Passengers</p>
                    <div className="flex items-center">
                      <FaUserFriends />
                      <p>1-3</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <p>Luggage</p>
                    <div className="flex items-center">
                      <FaSuitcaseRolling />
                      <p>3x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <button onClick={onClose} className="mt-4 font-medium">
          Close
        </button>
      </div>
    </div>
  );
}

export default CarsPopUp;
