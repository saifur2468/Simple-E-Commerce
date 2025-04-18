import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Details from "./AllComponent/View Details/Details";
import Products from "./AllComponent/Producet/Products";
import Dashboard from "./AllComponent/Dashborad/Dashborad";
import Error from "./AllComponent/Error/Error";
import Chart from "./AllComponent/Chart/Chart";
import Sign from "./AllComponent/Sign up/Sign";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/Dashboard",  
        element: <Dashboard />,
      },
      {
        path:"/Chart",
        element:<Chart></Chart>,

      },
      {
        path:"/Sign",
        element:<Sign></Sign>

      },
      {
        path: "product/:product_id",
        element: <Details />,
        loader: () => fetch('/Product.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
