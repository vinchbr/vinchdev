import React from "react";
import { Button, Header, Icon, Label } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// @ts-expect-error
import DevIcon from "devicon-react-svg";
import { workHistory } from "../../data/workHistory";
import appTheme from "../../theme";

import "react-vertical-timeline-component/style.min.css";
import resume from "../../data/Vicenzo_Color_Resume.pdf";

export const WorkTimeline: React.FC = () => {
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
          className={appTheme[`${work.category}Color`].className}
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
        className={appTheme["fileColor"].className}
        icon={
          <Button
            href={resume}
            target="_blank"
            download="vicenzo-resume.pdf"
            circular
            icon={
              <Icon
                name="file pdf outline"
                size="big"
                style={appTheme["fileColor"].iconCorrection}
              />
            }
            style={appTheme["fileColor"].style}
            color="green"
          />
        }
      ></VerticalTimelineElement>
    </VerticalTimeline>
  );
};
