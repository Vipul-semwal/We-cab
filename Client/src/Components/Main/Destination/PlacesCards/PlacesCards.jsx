import React from "react";
import "./PlacesCards.css";
function PlacesCards() {
  return (
    <>
      <div className="cover-of-card-place">
        <div className={`place-card-bg mt-10 `}>
          <div className="place-btns">
            <button className="place-pink-btn mr-5">Recommended</button>
            <button className="place-black-btn">Instant Confirmation</button>
          </div>
          <div className="grid grid-cols-12 mt-10 gap-4">
            <div className="main-about col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8 p-4">
              <div className="flex items-center">
                <img src="/Utility/star.png" alt="" />
                <p className="text-[#EE408A] font-bold">4.5</p>
              </div>
              <h2 className="text-2xl font-medium mt-2">
                Castello di Monselice
              </h2>
              <p className="text-gray-400 mt-5">
                Founded in 369 BC by Theban general Epaminondas, Messini marked
                a turning point. After centuries of Spartan rule (over 400
                years!), the Thebans helped the Messenians overthrow their
                oppressors.
              </p>

              <div className="flex items-center gap-3 mt-5">
                <p>09:00 AM</p>
                <img src="/Utility/line.png" alt="" />
                <p>10:30 AM</p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button className="pinkbtn">Book for $40</button>
                <button className="newbtn">Learn More</button>
              </div>
            </div>
            <div className="main-place-super relative col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 p-4">
              <img src="/Utility/boximg.png" alt="" />

              <h2>+12 More</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacesCards;
