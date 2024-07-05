import React from "react";

function OffersSection() {
  return (
    <section id="offers" className="cover-grid yoo mb-14 offers">
      <h2 className="mb-5">Exclusive Offers</h2>
      <div className="grid grid-cols-2 yoo sm:grid-cols-3 gap-4">
        <button className="empty-bg">Exclusive 10% off</button>
        <button className="empty-bg">Best Price Guarantee</button>
        <button className="empty-bg">WeCab Exclusive</button>
      </div>
    </section>
  );
}

export default OffersSection;
