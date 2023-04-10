import React from "react";
import { ErrorPage } from "./error-page";
import { Adoption } from "./adoption/Adoption";
import { App } from "./app/App";
import { Homepage } from "./homepage/Homepage";
import { Admin } from "./admin/Admin";

export { Adoption } from "./adoption/Adoption";
export { App } from "./app/App";

export const routesConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
      {
        path: "/adoption",
        element: <Adoption />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
];
