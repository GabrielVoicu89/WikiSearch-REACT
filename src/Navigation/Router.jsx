import Home from "../Components/Home";
import Wiki from "../Components/Wiki";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Wiki",
    element: <Wiki />,
  },
]);
export default router;
