import React from "react";
import "./Faq.css";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function Faq() {
  return (
    <>
      <h1 className="text-center font-semibold alone">
        Frequently Asked Questions
      </h1>
      <section className="accodian-up mt-8 mb-7 flex items-center justify-center">
        <div className="accordion">
          {/* Item 1 */}
          <div className="accordion-item">
            <input type="checkbox" id="item-1" />
            <label htmlFor="item-1" className="accordion-header">
              <span>How do I make a reservation at your hotel resort? </span>
              <span className="arrow">
                <FaCaretRight />
              </span>
            </label>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates nostrum omnis, cumque laborum tempora quia earum
                animi nulla soluta, reiciendis non placeat dolorum hic
                temporibus odit voluptatum et nam nesciunt.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="accordion-item">
            <input type="checkbox" id="item-2" />
            <label htmlFor="item-2" className="accordion-header">
              <span>How do I make a reservation at your hotel resort? </span>
              <span className="arrow">
                <FaCaretRight />
              </span>
            </label>
            <div className="accordion-content">
              <p>
                With our user-friendly app, you can book a cab in seconds, track
                its arrival in real-time, and pay for your ride securely – all
                from your phone.
                <br />
                <br />
                With our user-friendly app, you can book a cab in seconds, track
                its arrival in real-time, and pay for your ride securely – all
                from your phone.
              </p>

              <div className="flex items-center justify-start gap-4 mt-5">
                <img src="/Utility/1.png" alt="" />
                <img src="/Utility/2.png" alt="" />
                <img src="/Utility/3.png" alt="" />
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="accordion-item">
            <input type="checkbox" id="item-3" />
            <label htmlFor="item-3" className="accordion-header">
              <span>How do I make a reservation at your hotel resort? </span>
              <span className="arrow">
                <FaCaretRight />
              </span>
            </label>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates nostrum omnis, cumque laborum tempora quia earum
                animi nulla soluta, reiciendis non placeat dolorum hic
                temporibus odit voluptatum et nam nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
