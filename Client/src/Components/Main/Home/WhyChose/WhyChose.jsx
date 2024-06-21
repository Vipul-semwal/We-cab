import React from "react";
import "./WhyChose.css";
function WhyChose() {
  return (
    <section className="why rounded-sm">
      <div className="why-main rounded-lg">
        <h5 className="font-semibold upper-h5 start-0">Why Choose WeCabs?</h5>
        <div className="img-why">
          <img
            src="/Utility/car.jpg"
            width="400px"
            className="why-img"
            alt=""
          />
          <img
            src="/Utility/car2.png"
            width="400px"
            className="why-img car2"
            alt=""
          />
        </div>

        <div className="content-why">
          <div>
            <h5 className="font-semibold">Why Choose WeCabs?</h5>
            <p className="content-para">
              Say goodbye to hailing cabs or waiting in long lines. WeCabs is
              your one-stop shop for getting around town quickly and easily.
              With our user-friendly app, you can book a cab in seconds, track
              its arrival in real-time, and pay for your ride securely – all
              from your phone.
            </p>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="checkbox-why flex items-center">
              <img src="/Utility/Black.png" width="15px" alt="" />
              <p className="ml-2">Wide range of options</p>
            </div>
            <div className="checkbox-why flex items-center">
              <img src="/Utility/Black.png" width="15px" alt="" />
              <p className="ml-2">Upfront fares</p>
            </div>
            <div className="checkbox-why flex items-center">
              <img src="/Utility/Black.png" width="15px" alt="" />
              <p className="ml-2">24/7 availability</p>
            </div>
            <div className="checkbox-why flex items-center">
              <img src="/Utility/Black.png" width="15px" alt="" />
              <p className="ml-2">Multiple payment methods</p>
            </div>
          </div>
          <button className="learn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default WhyChose;
