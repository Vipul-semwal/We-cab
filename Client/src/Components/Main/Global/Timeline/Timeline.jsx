import React from "react";
import "./Timeline.css";
function Timeline() {
  return (
    <section className="space-new" id="main">
      <div className="flex items-center justify-center">
        <div className="lg:w-10/12">
          <div className="container-timeline">
            <ul className="timeline-list">
              <li>
                <div className="timeline-content">
                  <h6 className="font-semibold">Choose a vehicle</h6>
                  <p className="mt-2 text-lg">
                    Unlock unparalleled adventures and memorable journeys with
                    our vast fleet of vehicles tailored to suit every need,
                    taste, and destination.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                  <h6 className="font-semibold">Pick location & date</h6>
                  <p className="mt-2 text-lg">
                    Pick your ideal location and date, and let us take you on a
                    journey filled with convenience, flexibility, and
                    unforgettable experiences.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                  <h6 className="font-semibold">Make a booking</h6>
                  <p className="mt-2 text-lg">
                    Secure your reservation with ease, unlocking a world of
                    possibilities and embarking on your next adventure with
                    confidence.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                  <h6 className="font-semibold">Sit back & relax</h6>
                  <p className="mt-2 text-lg">
                    Hassle-free convenience as we take care of every detail,
                    allowing you to unwind and embrace a journey filled with
                    comfort.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
