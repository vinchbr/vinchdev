import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { WorkHistory } from "./WorkHistory";
import { AboutMe } from "./AboutMe";
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

      <Segment style={{ padding: "0em", background: "#c2c5aa" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" textAlign="center">
                Brief Work History
              </Header>
              <WorkHistory />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <Link to="#">Case Studies</Link>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
    </>
  );
};
