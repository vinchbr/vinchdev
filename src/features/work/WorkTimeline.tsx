import React from "react";
import { Button, Header, Icon, Label, Grid } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { workHistory } from "../../data/workHistory";
import appTheme from "../../utils/icons";

import "react-vertical-timeline-component/style.min.css";
import resume from "../../data/Vicenzo_Color_Resume.pdf";

export const WorkTimeline: React.FC = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header as="h1" textAlign="center" color="red">
          Brief Work History
          <Header.Subheader style={{ color: "white" }}>
            Recent Employment
          </Header.Subheader>
        </Header>
        <VerticalTimeline>
          {workHistory.map((work, j) => (
            <VerticalTimelineElement
              key={j}
              contentStyle={{
                borderTop: `3px solid ${
                  appTheme[`${work.category}Color`].style.background
                }`,
              }}
              date={work.date}
              iconStyle={appTheme[`${work.category}Color`].style}
              icon={appTheme[`${work.category}Color`].icon}
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
            icon={
              <Button
                href={resume}
                target="_blank"
                download="vicenzo-resume.pdf"
                circular
                icon={
                  <Icon
                    name="file pdf outline"
                    className={"vertical-timeline-element--file"}
                  />
                }
                style={appTheme["fileColor"].style}
              />
            }
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </Grid.Column>
    </Grid.Row>
  );
};
