import React from "react";
import "./AddPassengerInfo.css";
function AddPassengerInfo() {
  return (
    <section className="mt-5 info-add1">
      <div className="info-add">
        <h2>Add Passenger Information</h2>
        <p>Finalize your booking in just a few clicks.</p>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 w-full">
          <div className="inputs-main col-span-12 sm:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-1">
              <div className="input-search">
                <input
                  className="input-se1"
                  placeholder="First Name"
                  type="text"
                />
              </div>

              <div className="input-search">
                <input
                  className="input-se1"
                  placeholder="Last Name"
                  type="text"
                />
              </div>

              <div className="input-search">
                <input
                  className="input-se1"
                  placeholder="Phone Number"
                  type="number"
                />
              </div>

              <div className="input-search">
                <input
                  className="input-se1"
                  placeholder="Date of Birth"
                  type="date"
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:col-span-4"></div>
        </div>
        <button className="black-btn">Next</button>
      </div>
    </section>
  );
}

export default AddPassengerInfo;
