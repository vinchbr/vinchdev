import { ThemeConfig } from "../types";

import {
  NextjsLine,
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
    icon: <ReactOriginal className={"vertical-timeline-element--react"} />,
  },
  rubyColor: {
    style: {
      background: "#d91404",
    },
    icon: <RubyPlain className={"vertical-timeline-element--ruby"} />,
  },
  fileColor: {
    style: {
      backgroundColor: "green",
      height: "100%",
      width: "100%",
    },
  },
  reduxColor: {
    style: {
      backgroundColor: "#764abc",
    },
    icon: (
      <ReduxOriginal
        size={45}
        style={{
          left: "33.5%",
          top: "28%",
        }}
        className={"vertical-timeline-element--redux"}
      />
    ),
  },
  wdioColor: {
    style: {
      backgroundColor: "rgb(234, 89, 6)",
    },
    icon: <WdioLogo className={"vertical-timeline-element--wdio"} />,
  },
  watirColor: {
    style: {
      backgroundColor: "lightgrey",
    },
    icon: (
      <Image src={WatirLogo} className={"vertical-timeline-element--watir"} />
    ),
  },
  playwrightColor: {
    style: {
      backgroundColor: "lightgrey",
    },
    icon: (
      <PlaywrightOriginal className={"vertical-timeline-element--playwright"} />
    ),
  },
  nextjsColor: {
    style: {
      backgroundColor: "lightgrey",
    },
    icon: <NextjsLine className={"vertical-timeline-element--nextjs"} />,
  },
};

export default icons;
