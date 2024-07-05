import React from "react";
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaSuitcaseRolling,
  FaArrowRight,
} from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import "./CarCard.css";

function CarCard({ onMoreOptionsClick }) {
  return (
    <div className="car-box w-full lg:w-1/2 mt-5 lg:mt-0">
      <div className="bar-info p-3 flex items-center justify-center">
        <FaMapPin />
        <p>dest1..</p>
        <FaArrowRight className="mx-2" />
        <FaMapPin />
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
          <h1
            className="font-semibold popup-h1 cursor-pointer text-pink-500 mt-4"
            onClick={onMoreOptionsClick}
          >
            More options from $193
          </h1>
        </div>
        <div className="car-back">
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
  );
}

export default CarCard;
