import React from "react";
import "./PickupDropoff.css";
function PickupDropoff() {
  return (
    <section className="mt-5 info-add1">
      <div className="info-add">
        <h2>Pick-up & drop-off</h2>
        <p>Finalize your booking in just a few clicks.</p>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 w-full">
          <div className="inputs-main col-span-12 sm:col-span-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-1">
              <div className="input-search">
                <input
                  className="input-se1"
                  placeholder="Add Pickup Location"
                  type="text"
                />
              </div>

              <div className="input-search">
                <input
                  className="input-se1"
                  placeholder="Add Drop-off Location"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:col-span-2"></div>
        </div>
        <div className="map-area my-10 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.24175605783!2d100.00910557841348!3d13.724483977464695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1718478602550!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <button className="black-btn">Next</button>
      </div>
    </section>
  );
}

export default PickupDropoff;
