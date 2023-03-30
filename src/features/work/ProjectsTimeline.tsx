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
              key={j}
              contentStyle={{
                borderTop: `3px solid ${
                  appTheme[`${project.category}Color`].style.background
                }`,
              }}
              className={appTheme[`${project.category}Color`].className}
              iconStyle={appTheme[`${project.category}Color`].style}
              icon={appTheme[`${project.category}Color`].icon}
            >
              <Label.Group circular>
                {project.technologies.map((tech: string) => (
                  <Label>{tech}</Label>
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
                .map((desc) => (
                  <p>{desc}</p>
                ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Grid.Column>
    </Grid.Row>
  );
};
