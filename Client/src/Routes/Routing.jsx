import { useRoutes } from "react-router-dom";

// Route object import
import HomeRoutes from "./Home";

// ==============================|| ROUTING RENDER ||============================== //

export default function Routing() {
  return useRoutes([HomeRoutes]);
}
