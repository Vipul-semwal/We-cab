import { Children, lazy } from "react";
import { Loadable } from "../Components/export";
import Homelayout from "../Layout/Home.layout";

const HomPage = Loadable(lazy(() => import("../Pages/Home/Home.Page")));
const DestinationPage = Loadable(
  lazy(() => import("../Pages/Destination/Destination.Page"))
);

const BookPage = Loadable(lazy(() => import("../Pages/Booking/Booking.Page")));
const PlaceOverview = Loadable(
  lazy(() => import("../Pages/PlaceOverview/PlaceOverview.Page"))
);
const HomeRoutes = {
  path: "/",
  element: <Homelayout />,
  children: [
    {
      path: "home",
      element: <HomPage />,
    },
    {
      path: "destination",
      element: <DestinationPage />,
    },
    {
      path: "booking",
      element: <BookPage />,
    },
    {
      path: "overview",
      element: <PlaceOverview />,
    },
  ],
};

export default HomeRoutes;
