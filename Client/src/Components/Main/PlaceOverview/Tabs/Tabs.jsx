import React from "react";
import { Link } from "react-router-dom";

function Tabs() {
  return (
    <>
      {/* tabs start */}
      <section className="cover-grid yoo flex items-center justify-between ">
        <h3 className="black-text">Overview</h3>
        <Link to="#map-hai">
          <h3>Location</h3>
        </Link>
        <Link to="#offers">
          <h3>Offers</h3>
        </Link>
        <Link to="#rated">
          <h3>Rate / Reviews</h3>
        </Link>
        <Link to="#more-info">
          <h3 className="hidden-when">More Info</h3>
        </Link>
      </section>
      {/* tabs ends */}
    </>
  );
}

export default Tabs;
