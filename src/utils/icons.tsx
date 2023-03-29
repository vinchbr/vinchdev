import { ThemeConfig } from "../types";

import { ReactOriginal, ReduxOriginal, RubyPlain } from "devicons-react";

const icons: ThemeConfig = {
  reactColor: {
    style: {
      background: "#61DAFB",
    },
    className: "vertical-timeline-element--react",
    icon: (
      <ReactOriginal
        size={45}
        style={{
          left: "32%",
          top: "32%",
        }}
      />
    ),
  },
  rubyColor: {
    style: {
      background: "#d91404",
    },
    className: "vertical-timeline-element--ruby",
    icon: (
      <RubyPlain
        size={40}
        style={{
          left: "35%",
          top: "35%",
        }}
        fill="white"
      />
    ),
  },
  fileColor: {
    style: {
      height: "60px",
      width: "60px",
    },
    iconCorrection: {
      fontSize: "2.5rem",
    },
    className: "vertical-timeline-element--file",
  },
  reduxColor: {
    style: {
      backgroundColor: "#764abc",
    },
    className: "vertical-timeline-element--redux",
    icon: (
      <ReduxOriginal
        size={45}
        style={{
          left: "33.5%",
          top: "28%",
        }}
      />
    ),
  },
};

export default icons;
