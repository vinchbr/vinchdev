import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { WorkTimeline } from "../../features/work/WorkTimeline";
import { AboutMe } from "../../features/work/AboutMe";
import { SkillsAndTools } from "../../features/work/SkillsAndTools";
import { ProjectsTimeline } from "../../features/work/ProjectsTimeline";
export const Homepage = () => {
  return (
    <>
      <Segment
        style={{ padding: "8em 0em", background: "#656d4a", color: "white" }}
        vertical
      >
        <Grid container stackable verticalAlign="middle" data-testid="aboutMe">
          <AboutMe />
        </Grid>
      </Segment>

      <Segment style={{ background: "#c2c5aa" }} vertical>
        <Grid columns="equal" stackable data-testid="workTimeline">
          <WorkTimeline />
        </Grid>
      </Segment>

      <Segment vertical data-testid="skillsAndTools">
        <SkillsAndTools />
      </Segment>

      <Segment
        style={{ background: "#c2c5aa" }}
        vertical
        data-testid="projectsTimeline"
      >
        <ProjectsTimeline />
      </Segment>
    </>
  );
};
