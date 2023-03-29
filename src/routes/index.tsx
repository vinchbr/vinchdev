import React from "react";
import { ErrorPage } from "./error-page";
import { Adoption } from "./adoption/Adoption";
import { App } from "./app/App";
import { Homepage } from "./homepage/Homepage";

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
        element: <div>Admin</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
];
