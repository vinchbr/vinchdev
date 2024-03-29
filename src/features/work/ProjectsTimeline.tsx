import React from "react";
import { Header, Label, Grid } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import appTheme from "../../utils/icons";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "../../data/projects";
import { ProjectDetails } from "../../types";

export const ProjectsTimeline: React.FC = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header as="h1" textAlign="center" color="red">
          Projects
          <Header.Subheader style={{ color: "white" }}>
            Projects done to learn new skills
          </Header.Subheader>
        </Header>
        <VerticalTimeline>
          {projects.map((project: ProjectDetails, j) => (
            <VerticalTimelineElement
              key={`${project.category}-${j}`}
              contentStyle={{
                borderTop: `3px solid ${
                  appTheme[`${project.category}Color`].style.background
                }`,
              }}
              iconStyle={appTheme[`${project.category}Color`].style}
              icon={appTheme[`${project.category}Color`].icon}
            >
              <Label.Group circular key={`${project.category}-${j}`}>
                {project.technologies.map((tech: string, k) => (
                  <Label key={`${tech}-${k}`}>{tech}</Label>
                ))}
              </Label.Group>
              <Header as="h3">
                <Header.Content>
                  {project.title}
                  <Header.Subheader>{project.subheader}</Header.Subheader>
                </Header.Content>
              </Header>
              {project.description
                .split(".")
                .filter(String)
                .map((desc, k) => (
                  <p key={`${desc}-${k}`}>{desc}</p>
                ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Grid.Column>
    </Grid.Row>
  );
};
