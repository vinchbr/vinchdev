import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "intersection-observer";
import { store } from "../../app/store";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../index";

describe("App", () => {
  test("renders homepage when path is /", () => {
    const router = createMemoryRouter(routesConfig, { initialEntries: ["/"] });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const aboutMe = screen.getByTestId("aboutMe");
    const workTimeline = screen.getByTestId("workTimeline");
    const skillsAndTools = screen.getByTestId("skillsAndTools");
    const projectsTimeline = screen.getByTestId("projectsTimeline");

    expect(projectsTimeline).toBeInTheDocument();
    expect(skillsAndTools).toBeInTheDocument();
    expect(workTimeline).toBeInTheDocument();
    expect(aboutMe).toBeInTheDocument();
  });

  test("renders outlet when path is not /", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/adoption"],
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const outletElement = screen.getByTestId("adoptionList");
    expect(outletElement).toBeInTheDocument();
  });
});
