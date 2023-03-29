import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { routesConfig } from "./routes/";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
export const router = createHashRouter(routesConfig);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
