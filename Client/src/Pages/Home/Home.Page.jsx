import React from "react";
import {
  Banner,
  Faq,
  MapImg,
  SecordBanner,
  SilderCards,
  Testimonial,
  Things,
  Timeline,
  WhyChose,
} from "../../Components/export";
function HomePage() {
  return (
    <>
      <Banner />
      <Timeline />
      <WhyChose />
      <Testimonial />

      <MapImg />
      <SilderCards />
      <SecordBanner />
      <Things />
      <Faq />
    </>
  );
}

export default HomePage;
