import React from "react";
import {
  Banner,
  Faq,
  MapImg,
  SecordBanner,
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
      <SecordBanner />
      <Things />
      <Faq />
    </>
  );
}

export default HomePage;
