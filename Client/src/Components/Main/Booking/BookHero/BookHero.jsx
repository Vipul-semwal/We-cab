import React, { useState } from "react";
import {
  FaMapPin,
  FaArrowRight,
  FaUserFriends,
  FaSuitcaseRolling,
} from "react-icons/fa";
import "./BookHero.css";
import CarCard from "../../Global/CarCard/CarCard";
import BlackBtn from "../../Global/BlackBtn/BlackBtn";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import styles for react-phone-input-2

function BookHero() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    setPhone(value); // Store the entered phone number
  };

  return (
    <section className="main-banner flex flex-col mt-10 lg:flex-row items-center justify-center">
      <div className="cover-car flex flex-col justify-center w-full lg:w-1/2">
        <h2>Complete your booking</h2>
        <p>Finalize your booking in just a few clicks.</p>
        <div className="inputs-main hidden-inputs w-[70%]">
          <div className="input-search">
            {/* Replace with PhoneInput component */}
            <PhoneInput
              country={"us"} // Initial country selection
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
                className: "input-se", // Apply custom class
                style: {
                  padding: "12px",
                  backgroundColor: "#f3f3f3",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "13px",
                  outline: "none",
                  paddingLeft: "40px",
                  width: "100%",
                },
              }}
            />

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
                placeholder="Phone Number"
                type="tel"
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
