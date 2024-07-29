import React from "react";
import "./PlacesLists.css";
import PlacesCards from "../PlacesCards/PlacesCards";
function PlacesLists() {
  return (
    <>
      <div className="w-full">
        <div className="container-middem">
          <div className="flex justify-start flex-col mb-10">
            <h2 className="mb-2 text-3xl font-medium">
              Explore Places along the way
            </h2>
            <p>Finalize your booking in just a few click.</p>
          </div>
          <PlacesCards />
          <PlacesCards />
          <PlacesCards />
        </div>
      </div>
    </>
  );
}

export default PlacesLists;
