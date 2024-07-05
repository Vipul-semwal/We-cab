import React from "react";
import "./PaymentDetails.css";
function PaymentDetails() {
  return (
    <section className="mt-5 info-add1">
      <div className="info-add">
        <h2>Add Payment Details</h2>
        <p>Finalize your booking in just a few clicks.</p>

        <h3 className="mt-6">
          Total Fare : <span className="text-green-400">$150</span>
        </h3>

        <div className="inputs-main">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 w-full">
            <div className="col-span-12 sm:col-span-8">
              <div className="grid grid-cols-1 gap-5 mt-1">
                <div className="input-search">
                  <input
                    className="input-se1"
                    placeholder="Pay using Credit/Debit Card"
                    type="text"
                  />
                </div>

                <div className="input-search">
                  <input
                    className="input-se1"
                    placeholder="Add Card no."
                    type="number"
                  />
                </div>
              </div>
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
                </div>
              </div>
              <div className="inputs-main grid grid-cols-1 gap-5 mt-1">
                <div className="input-search mt-3">
                  <input
                    className="input-se1"
                    placeholder="Country of Residence"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:col-span-4"></div>
          </div>
        </div>
        <button className="black-btn">Next</button>
        <div className="hidden sm:block sm:col-span-4"></div>
      </div>
    </section>
  );
}

export default PaymentDetails;
