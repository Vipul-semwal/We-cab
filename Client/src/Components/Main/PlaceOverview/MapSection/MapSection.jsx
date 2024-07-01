import React from "react";

function MapSection() {
  return (
    <section className="mt-0 cover-grid yoo" id="map-hai">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 w-full"></div>
      <div className="my-10 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.24175605783!2d100.00910557841348!3d13.724483977464695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1718478602550!5m2!1sen!2sin"
          className="w-full"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
