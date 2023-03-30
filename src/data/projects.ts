import { ProjectDetails } from "../types";

export const projects: ProjectDetails[] = [
  {
    title: "Adopt-a-Cat",
    subheader:
      "Small Redux example using CatAPI to fetch random cat images and information",
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
      'Adopt-a-Cat is using Redux, RTK, to manage a cat "inventory" and an admin panel to approve/reject adoption requests. Using some re-usable components and building the page based on data being fetched/stored within Redux.',
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
    technologies: ["Typescript", "Apollo Client", "PlaywrightJS", "ArgoCD"],
    category: "cypress",
    description:
      "Established the QA department and quality processes and practices for SOC2 compliance. Introduced",
  },
];
