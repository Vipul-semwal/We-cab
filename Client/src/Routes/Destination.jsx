import { Children, lazy } from "react";
import { Loadable } from "../Components/export";
import Homelayout from "../Layout/Home.layout";
// import DestinationPage from "../Pages/Destination/Destination.Page";

const DestinationPage = Loadable(
  lazy(() => import("../Pages/Destination/Destination.Page"))
);

const DestinationRoutes = {
  path: "/",
  element: <Homelayout />,
  children: [
    {
      path: "destination",
      element: <DestinationPage />,
    },
  ],
};

export default DestinationRoutes;
