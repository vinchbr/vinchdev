import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { WorkTimeline } from "./WorkTimeline";
import { AboutMe } from "./AboutMe";
import { SkillsAndTools } from "./SkillsAndTools";
export const Homepage = () => {
  return (
    <>
      <Segment
        style={{ padding: "8em 0em", background: "#656d4a", color: "white" }}
        vertical
      >
        <Grid container stackable verticalAlign="middle">
          <AboutMe />
        </Grid>
      </Segment>

      <Segment style={{ background: "#c2c5aa" }} vertical>
        <Grid columns="equal" stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" textAlign="center" color="red">
                Brief Work History
              </Header>
              <WorkTimeline />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment vertical>
        <SkillsAndTools />
      </Segment>
    </>
  );
};
