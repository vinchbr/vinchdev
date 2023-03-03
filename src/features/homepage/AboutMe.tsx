import { Button, Grid, Header, Image } from "semantic-ui-react";
import React from "react";
import resume from "../../data/Vicenzo_Color_Resume.pdf";

export const AboutMe = () => {
  return (
    <>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h1" style={{ color: "white" }}>
            <Header.Content>
              About me
              <Header.Subheader style={{ color: "white" }}>
                A small introduction
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h1" style={{ color: "white" }}>
            Vicenzo Naves
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            As an experienced SDET and manager, I have a proven track record of
            successfully implementing automation frameworks and integrating them
            into CI/CD tools to drive efficiency and productivity.
          </p>
          <p style={{ fontSize: "1.33em" }}>
            Over the past 14 years, I've had the privilege of working alongside
            some of the most talented and passionate individuals in the
            industry, gaining invaluable insights and expertise that I am eager
            to share with a new team.
          </p>
          <p style={{ fontSize: "1.33em" }}>
            I'm looking for an opportunity to step outside of my comfort zone
            and collaborate with like-minded professionals to achieve our goals
            and drive innovation forward. Let's work together to achieve great
            things.
          </p>
          <Button
            floated="left"
            color="green"
            href={resume}
            target="_blank"
            download="vicenzo-resume.pdf"
            size="large"
          >
            Download
          </Button>
          <Button color="red" href="mailto:hireme@vinch.dev" size="large">
            Hire Me
          </Button>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded
            size="large"
            src="https://react.semantic-ui.com/images/wireframe/white-image.png"
          />
        </Grid.Column>
      </Grid.Row>
    </>
  );
};
