import React from "react";
import {
  ContentSection,
  MapSection,
  OverviewHero,
  Tabs,
  OffersSection,
  VisitSights,
  Points,
  RatingsReviews,
  MoreInfo,
  Faq,
  ImageSection,
} from "../../Components/export";

function PlaceOverview() {
  return (
    <>
      <OverviewHero />
      <VisitSights />
      <Tabs />
      <ContentSection />
      <MapSection />
      <OffersSection />
      <Points />
      <RatingsReviews />
      <MoreInfo />
      <ImageSection />

      <Faq />
    </>
  );
}

export default PlaceOverview;
