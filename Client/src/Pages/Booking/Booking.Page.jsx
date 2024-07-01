import React from "react";
import {
  AddPassengerInfo,
  BookHero,
  PaymentDetails,
  PickupDropoff,
} from "../../Components/export";

function BookingPage() {
  return (
    <>
      <BookHero />
      <AddPassengerInfo />
      <PickupDropoff />
      <PaymentDetails />
    </>
  );
}

export default BookingPage;
