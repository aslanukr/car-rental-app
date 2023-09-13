import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";

const baseName = "/car-rental-app";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ],
  { basename: baseName }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Route path="*" element={<App />} />
  </React.StrictMode>
);
