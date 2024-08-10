import React from "react";
import {
  Faq,
  Hero,
  KeyPoints,
  PinkCards,
  PlacesCover,
  PlacesLists,
  Testimonial,
  Things,
  Timeline,
  UpperInputs,
} from "../../Components/export";

function DestinationPage() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Timeline /> */}

      {/* <PlacesCover check={true} /> */}
      {/* <PlacesCover check={false} /> */}
      <UpperInputs />
      <PlacesLists />
      <KeyPoints />
      <Testimonial />
      <Things />
      <PinkCards />
      <Faq />
      {/* <SilderCards /> */}
    </>
  );
}

export default DestinationPage;
