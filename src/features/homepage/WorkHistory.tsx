import React from "react";
import { Header, Label } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// @ts-ignore
import DevIcon from "devicon-react-svg";
import { workHistory } from "../../data/workHistory";
import appTheme from "../../theme";

import "react-vertical-timeline-component/style.min.css";

export const WorkHistory: React.FC = () => {
  return (
    <VerticalTimeline>
      {workHistory.map((work, j) => (
        <VerticalTimelineElement
          key={j}
          contentStyle={{
            borderTop: `3px solid ${
              appTheme[`${work.category}Color`].style.background
            }`,
          }}
          className="vertical-timeline-element--work"
          date={work.date}
          iconStyle={appTheme[`${work.category}Color`].style}
          icon={
            <DevIcon
              icon={work.category}
              style={appTheme[`${work.category}Color`].iconCorrection}
            />
          }
        >
          <Label.Group circular>
            {work.technologies.map((technology, j) => (
              <Label key={j}>{technology}</Label>
            ))}
          </Label.Group>
          <Header as="h3">
            <Header.Content>
              {work.title}
              <Header.Subheader>{work.company}</Header.Subheader>
            </Header.Content>
          </Header>
          <p>{work.description}</p>
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        key="andMore"
        date="More on the resume"
      ></VerticalTimelineElement>
    </VerticalTimeline>
  );
};
