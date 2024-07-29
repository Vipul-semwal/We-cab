import React, { useState } from "react";
import "./PlacesCards.css";
import { FaArrowCircleRight } from "react-icons/fa";

function PlacesCards() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {!showDetails ? (
        <div className="cover-of-card-place">
          <div className={`place-card-bg mt-10 hidden sm:block`}>
            <div className="place-btns flex gap-4">
              <button className="place-pink-btn">Recommended</button>
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
                  Founded in 369 BC by Theban general Epaminondas, Messini
                  marked a turning point. After centuries of Spartan rule (over
                  400 years!), the Thebans helped the Messenians overthrow their
                  oppressors.
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <p>09:00 AM</p>
                  <img src="/Utility/line.png" alt="" />
                  <p>10:30 AM</p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <button className="pinkbtn">Book for $40</button>
                  <button
                    className="newbtn"
                    onClick={() => setShowDetails(true)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="main-place-super relative col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 p-4">
                <img src="/Utility/boximg.png" alt="" />
                <h2>+12 More</h2>
              </div>
            </div>
          </div>
          {/* This is the responsive version */}
          <div className={`place-card-bg mt-10 block sm:hidden`}>
            <div className="place-btns flex gap-4 justify-center sm:justify-start">
              <button className="place-pink-btn">Recommended</button>
              <button className="place-black-btn">Instant Confirmation</button>
            </div>
            <div className="grid grid-cols-12 mt-10 gap-4">
              <div className="main-place-super relative col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 ">
                <img src="/Utility/boximg.png" alt="" />
                <h2>+12 More</h2>
              </div>
              <div className="main-about col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8 ">
                <div className="flex items-center w-[82px] sm:w-full">
                  <img src="/Utility/star.png" alt="" />
                  <p className="text-[#EE408A] font-bold">4.5</p>
                </div>
                <h2 className="text-2xl font-medium mt-2">
                  Castello di Monselice
                </h2>
                <p className="text-gray-400 mt-2 text-sm">
                  Founded in 369 BC by Theban general Epaminondas, Messini
                  marked a turning point. After centuries of Spartan rule (over
                  400 years!), the Thebans helped the Messenians overthrow their
                  oppressors.
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <p>09:00 AM</p>
                  <img src="/Utility/line.png" alt="" />
                  <p>10:30 AM</p>
                </div>

                <div className="mt-8 flex items-center gap-4 justify-center">
                  <button className="pinkbtn">Book for $40</button>
                  <button
                    className="newbtn"
                    onClick={() => setShowDetails(true)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="whenbtnclick">
          <div className={`place-card-bg pink-part mt-10 `}>
            <div className="place-btns flex gap-4">
              <button className="place-pink-btn">Recommended</button>
              <button className="place-black-btn">Instant Confirmation</button>
            </div>
            <div className="">
              <div className="main-about ">
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center mb-4 mt-10">
                  {/* Date and time section */}
                  <div className="flex items-center sm:gap-4 mt-4 sm:mt-0 ">
                    <div className="flex items-center gap-1 sm:gap-4 justify-between w-full">
                      <h2 className="text-[14px] sm:text-2xl font-bold text-[#EE408A]">
                        31 May 2024
                      </h2>
                      <div className="flex items-center gap-1 text-[12px] sm:text-[18px]">
                        <p>09:00 AM</p>
                        <img
                          src="/Utility/line.png"
                          className="w-[40px] sm:100px"
                          alt="Line"
                        />
                        <p>10:30 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Star rating section */}
                  <div className="flex items-center">
                    <img src="/Utility/star.png" alt="Star" />
                    <p className="text-[#EE408A] font-bold">4.5</p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8 ">
                    <h2 className="text-2xl font-medium mt-2">
                      Castello di Monselice
                    </h2>
                    <p className="text-gray-400 mt-2">
                      Founded in 369 BC by Theban general Epaminondas, Messini
                      marked a turning point. After centuries of Spartan rule
                      (over 400 years!), the Thebans helped the Messenians
                      overthrow their oppressors.
                    </p>
                    <div className="mt-8 flex items-center gap-4 mb-5">
                      <button className="pinkbtn">Book for $40</button>
                      <button
                        className="newbtn"
                        onClick={() => setShowDetails(false)}
                      >
                        Learn Less
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-[#E8C6D4] h-1" />
          <div className="place-card-bg pink-part">
            <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
              <img src="Utility/boximg.png" alt="" />
              <img src="Utility/boximg.png" alt="" />
              <img src="Utility/boximg.png" alt="" />
              <img src="Utility/boximg.png" alt="" />
              <div class="relative">
                <img src="Utility/boximg.png" alt="" />
                <div class="absolute inset-0 flex items-center justify-center ">
                  <span class="text-white text-lg font-semibold">+6 more</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-[#E8C6D4] h-1" />
          <div className="place-card-bg pink-part">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <li className="flex items-center gap-2">
                <FaArrowCircleRight style={{ color: "#EE408A" }} />
                <p>English-speaking driver</p>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowCircleRight style={{ color: "#EE408A" }} />
                <p>Door-to-door service</p>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowCircleRight style={{ color: "#EE408A" }} />
                <p>Sightseeing along the way</p>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowCircleRight style={{ color: "#EE408A" }} />
                <p>Smoke-free</p>
              </li>
            </ul>
          </div>
          <hr className="bg-[#E8C6D4] h-1" />
          <div className="place-card-bg pink-part details-place">
            <h2 className="text-2xl font-medium mb-2 mt-4">Additional Info</h2>
            <p>1. Your bookings/tickets are non-refundable in all cases.</p>
            <p>
              2. Counter at the "Eastern Bus Terminal (Ekkamai)" is No.28.
              resent your voucher or confirmation, and receive your ticket and
              baggage tag before boarding.เคาน์เตอร์อยู่ที่
              สถานีขนส่งผู้โดยสารตะวันออก (เอกมัย) ช่องที่ 28 โดยแสดงหลักฐานใบ
              Voucher หลักฐานการจองเพื่อรับตั๋วก่อนขึ้นรถ
            </p>
            <p>
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              non deserunt repudiandae! A quo dolores qui, culpa dignissimos
              facilis perspiciatis, est laudantium sapiente inventore impedit
              nulla, commodi nam quis labore?
            </p>
            <p>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid est perferendis, libero natus fugit maxime assumenda quam
              rerum, repudiandae quidem animi aliquam necessitatibus eaque
              asperiores velit dolorem consequuntur similique. Odit!
            </p>
            <p>
              5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eaque rerum dolores incidunt fugit!
            </p>
            <p>
              6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              at nemo voluptates eligendi obcaecati, eum vitae ipsam suscipit.{" "}
              <ul className=" list-disc">
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  repellat repellendus ducimus ratione vero facilis eos vel
                  modi, ab quod accusamus, aut eligendi deserunt dolorum
                  explicabo quis pariatur a fugit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  repellat repellendus ducimus ratione vero facilis eos vel
                  modi, ab quod accusamus, aut eligendi deserunt dolorum
                  explicabo quis pariatur a fugit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  repellat repellendus ducimus ratione vero facilis eos vel
                  modi, ab quod accusamus, aut eligendi deserunt dolorum
                  explicabo quis pariatur a fugit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  repellat repellendus ducimus ratione vero facilis eos vel
                  modi, ab quod accusamus, aut eligendi deserunt dolorum
                  explicabo quis pariatur a fugit.
                </li>
              </ul>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default PlacesCards;
