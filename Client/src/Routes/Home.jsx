import { Children, lazy } from "react";
import { Loadable } from "../Components/export";
import Homelayout from "../Layout/Home.layout";

const HomPage = Loadable(lazy(() => import("../Pages/Home/Home.Page")));
const DestinationPage = Loadable(
  lazy(() => import("../Pages/Destination/Destination.Page"))
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
  ],
};

export default HomeRoutes;
