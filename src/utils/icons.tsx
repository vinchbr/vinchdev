import { ThemeConfig } from "../types";

import {
  CypressioOriginal,
  PlaywrightOriginal,
  ReactOriginal,
  ReduxOriginal,
  RubyPlain,
} from "devicons-react";

import { ReactComponent as WdioLogo } from "../data/wdio.svg";
import WatirLogo from "../data/Watir_logo.png";
import { Image } from "semantic-ui-react";

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
  wdioColor: {
    style: {
      backgroundColor: "rgb(234, 89, 6)",
    },
    className: "vertical-timeline-element--wdio",
    icon: (
      <WdioLogo
        style={{
          left: "40%",
          top: "40%",
          height: "auto",
          width: "37px",
        }}
      />
    ),
  },
  watirColor: {
    style: {
      backgroundColor: "lightgrey",
    },
    className: "vertical-timeline-element--watir",
    icon: <Image src={WatirLogo} />,
  },
  playwrightColor: {
    style: {
      backgroundColor: "lightgrey",
    },
    className: "vertical-timeline-element--playwright",
    icon: (
      <PlaywrightOriginal
        size={54}
        style={{
          left: "30%",
          top: "27%",
        }}
      />
    ),
  },
  cypressColor: {
    style: {
      backgroundColor: "lightgrey",
    },
    className: "vertical-timeline-element--playwright",
    icon: (
      <CypressioOriginal
        style={{
          left: "30%",
          top: "27%",
        }}
      />
    ),
  },
};

export default icons;
