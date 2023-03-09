import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { WorkTimeline } from "./WorkTimeline";
import { AboutMe } from "./AboutMe";
import { SkillsAndTools } from "./SkillsAndTools";
import { ProjectsTimeline } from "./ProjectsTimeline";
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
          <WorkTimeline />
        </Grid>
      </Segment>

      <Segment vertical>
        <SkillsAndTools />
      </Segment>

      <Segment style={{ background: "#c2c5aa" }} vertical>
        <ProjectsTimeline />
      </Segment>
    </>
  );
};
