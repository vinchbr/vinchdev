import { ThemeConfig } from "./types";

const theme: ThemeConfig = {
  reactColor: {
    style: {
      background: "#61DAFB",
      fill: "#fff",
    },
    iconCorrection: {
      height: "45px",
      width: "45px",
      left: "32%",
      top: "35%",
    },
    className: "vertical-timeline-element--react",
  },
  rubyColor: {
    style: {
      background: "#d91404",
      fill: "#fff",
    },
    iconCorrection: {
      height: "40px",
      width: "40px",
      left: "35%",
      top: "35%",
    },
    className: "vertical-timeline-element--ruby",
  },
};

export default theme;
