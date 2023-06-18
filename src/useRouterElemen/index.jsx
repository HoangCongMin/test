import { useRoutes } from "react-router-dom";

import Home from "../Page/Home";
import Product from "../Page/Product";

export default function useRouterElement() {
  let element = useRoutes([
    {
      path: "/",
      index: true,
      element: <Home />,
    },

    {
      path: "/:id",

      element: <Product />,
    },
  ]);
  return element;
}
