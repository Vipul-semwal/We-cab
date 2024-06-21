import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "./PlacesCover.css"; // Ensure this file exists and contains the necessary CSS

function PlacesCover({ check }) {
  return (
    <section className="places-cover">
      {check ? <h1>Explore places along the way</h1> : null}
      <div className="places h-full grid grid-cols-1 md:grid-cols-12">
        <div className="places-img md:col-span-7">
          <img src="/Utility/place.png" width="100%" alt="Place Image" />
        </div>
        <div className="places-contant h-full md:col-span-5">
          <div className="flex flex-col justify-evenly items-start h-full ">
            {" "}
            <div>
              {" "}
              <h2 className="mb-3">Castello di Monselice</h2>
              <p className="mb-4">
                Founded in 369 BC by Theban general Epaminondas, Messini marked
                a turning point. After centuries of Spartan rule (over 400
                years!), the Thebans helped the Messenians overthrow their
                oppressors.
              </p>
            </div>
            <div>
              <ul className="mb-5">
                <li>
                  <FaArrowCircleRight />
                  <p>Check into your cozy bed and breakfast and enjoy</p>
                </li>
                <li>
                  <FaArrowCircleRight />
                  <p>Lace up your boots and embark on a guided hike</p>
                </li>
                <li>
                  <FaArrowCircleRight />
                  <p>
                    Journey to the Quiraing, a stunning natural rock formation
                  </p>
                </li>
              </ul>
              <div className="flex items-center gap-5 bothbtn">
                <button className="pinkbtn">Book for $40</button>
                <button className="newbtn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacesCover;
