import React from "react";
import {
  Faq,
  Hero,
  KeyPoints,
  PinkCards,
  PlacesCover,
  Testimonial,
  Things,
  Timeline,
} from "../../Components/export";

function DestinationPage() {
  return (
    <>
      <Hero />
      <Timeline />

      <PlacesCover check={true} />
      <PlacesCover check={false} />
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
