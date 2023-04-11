import { ProjectDetails } from "../types";

export const projects: ProjectDetails[] = [
  {
    title: "F1 2022 OBS Overlay",
    subheader:
      "NextJS Server to read the UDP server provided by the game and display lap data for stream viewers",
    technologies: ["NextJS", "React", "Typescript", "Websocket.IO"],
    category: "nextjs",
    description:
      'IN PROGRESS. Reading data from the game UDP server, updates a React UI to display lap data. Basic functionality done, there is still a LONG list of things I want to implement, this is my first "full-stack" project. Check my github page for it!',
  },
  {
    title: "Adopt-a-Cat",
    subheader:
      "Small Redux example using CatAPI to fetch random cat images and information.",
    technologies: [
      "React",
      "Redux",
      "Redux Toolkit",
      "Typescript",
      "Github Actions",
      "Jest",
    ],
    category: "react",
    description:
      'IN PROGRESS. Adopt-a-Cat is using Redux, RTK, to manage a cat "inventory" and an admin panel to approve/reject adoption requests. Using some re-usable components and building the page based on data being fetched/stored within Redux.',
  },
  {
    title: "Casting Networks Regression",
    subheader: "E2E Automation that reduced regression time by 80%",
    technologies: ["Typescript", "Apollo Client", "PlaywrightJS", "ArgoCD"],
    category: "playwright",
    description:
      "Tasked with the challenge to automate the manual regression test suite. Used Playwright and Apollo Client to leverage mutations used by the frontend clients to provision test data on-the-go. Hooked this all up in Github Actions, then to ArgoCD orchestrated by a k8s managed by the DevOps team",
  },
  {
    title: "Optimize Health",
    subheader: "E2E Automation that reduced regression time by 80%",
    technologies: ["Typescript", "WebdriverIO", "CircleCI"],
    category: "wdio",
    description:
      "Established the QA department and quality processes and practices for SOC2 compliance. Introduced ",
  },
];
