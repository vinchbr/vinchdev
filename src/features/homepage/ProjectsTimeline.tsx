import React from "react";
import { Header, Label, Grid } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import appTheme from "../../icons";
import "react-vertical-timeline-component/style.min.css";

export const ProjectsTimeline: React.FC = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header as="h1" textAlign="center" color="red">
          Personal Projects
          <Header.Subheader style={{ color: "white" }}>
            Projects done to learn new skills
          </Header.Subheader>
        </Header>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{
              borderTop: `3px solid ${appTheme[`reduxColor`].style.background}`,
            }}
            className={appTheme[`reduxColor`].className}
            iconStyle={appTheme[`reduxColor`].style}
            icon={appTheme[`reduxColor`].icon}
          >
            <Label.Group circular>
              <Label>React</Label>
              <Label>Redux</Label>
              <Label>Redux Tool Kit</Label>
              <Label>Typescript</Label>
              <Label>Github Actions</Label>
              <Label>Jest</Label>
            </Label.Group>
            <Header as="h3">
              <Header.Content>
                Adopt-a-Cat
                <Header.Subheader>
                  Small Redux example using CatAPI to fetch random cat images
                  and information
                </Header.Subheader>
              </Header.Content>
            </Header>
            <p>
              Adopt-a-Cat is using Redux, RTK, to manage a cat "inventory" and
              an admin panel to approve/reject adoption requests.
            </p>
            <p>
              Using some re-usable components and building the page based on
              data being fetched/stored within Redux.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Grid.Column>
    </Grid.Row>
  );
};
