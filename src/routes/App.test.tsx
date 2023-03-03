import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "intersection-observer";
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
  const headers = screen.getAllByText("Vicenzo Naves");
  headers.forEach((header) => expect(header).toBeInTheDocument());
});
