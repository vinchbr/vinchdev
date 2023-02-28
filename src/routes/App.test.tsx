import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    { wrapper: BrowserRouter }
  );

  expect(screen.getByText("Vicenzo Naves")).toBeInTheDocument();
});
