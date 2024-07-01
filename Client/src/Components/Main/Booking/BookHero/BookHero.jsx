import React from "react";
import {
  FaMapPin,
  FaArrowRight,
  FaUserFriends,
  FaSuitcaseRolling,
} from "react-icons/fa";
import "./BookHero.css";
import CarCard from "../../Global/CarCard/CarCard";

import BlackBtn from "../../Global/BlackBtn/BlackBtn";
function BookHero() {
  return (
    <section className="main-banner flex flex-col mt-10 lg:flex-row items-center justify-center">
      <div className="cover-car flex flex-col justify-center w-full lg:w-1/2">
        <h2>Complete your booking</h2>
        <p>Finalize your booking in just a few clicks.</p>
        <div className="inputs-main hidden-inputs w-[70%]">
          <div className="input-search">
            <input
              className="input-se pl-[23px] mt-3"
              placeholder="Enter your email"
              type="text"
            />
          </div>

          <BlackBtn title={"Next"} />
        </div>
      </div>

      <CarCard />
      <div className="hidden-car w-full">
        <div className="inputs-main w-full flex items-center justify-center flex-col col-span-12 sm:col-span-8">
          <div className="grid coutm-with grid-cols-1 sm:grid-cols-2 gap-5 mt-1">
            <div className="input-search">
              <input
                className="input-se1"
                placeholder="Enter Email Id"
                type="text"
              />
            </div>

            <div className="input-search">
              <input
                className="input-se1"
                placeholder="Enter Phone no."
                type="text"
              />
            </div>
          </div>
          <BlackBtn title={"Next"} />
        </div>
        <div className="hidden sm:block sm:col-span-4"></div>
      </div>
    </section>
  );
}

export default BookHero;
