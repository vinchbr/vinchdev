import React from "react";
import { Card, Grid, Header, Icon, List } from "semantic-ui-react";
import { JavascriptOriginal, RubyPlainWordmark } from "devicons-react";

export const SkillsAndTools = () => {
  return (
    <Grid columns="equal" stackable centered>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h1" style={{ color: "red" }}>
            <Header.Content>
              Skills
              <Header.Subheader style={{ color: "grey" }}>
                I can say i’m quite good at
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Card.Group centered>
            <Card>
              <Card.Content textAlign="center">
                <JavascriptOriginal size="112" />
                <List>
                  <List.Item>React</List.Item>
                  <List.Item>Redux</List.Item>
                  <List.Item>webdriverIO</List.Item>
                  <List.Item>Playwright</List.Item>
                </List>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content textAlign="center">
                <RubyPlainWordmark size="112" />
                <List>
                  <List.Item>Ruby</List.Item>
                  <List.Item>Ruby on Rails</List.Item>
                  <List.Item>RSpec</List.Item>
                  <List.Item>Capybara</List.Item>
                </List>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content textAlign="center">
                <Icon
                  name="ellipsis horizontal"
                  size="huge"
                  circular
                  inverted
                  color="teal"
                />
                <List>
                  <List.Item>Test Management</List.Item>
                  <List.Item>Team Management</List.Item>
                  <List.Item>SemanticUI</List.Item>
                  <List.Item>Continuous Integration</List.Item>
                </List>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h1" style={{ color: "red" }}>
            <Header.Content>
              Tools
              <Header.Subheader style={{ color: "grey" }}>
                My favorite ones to use
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={3}>
          <List>
            <List.Item>
              <List.Header>Operating system</List.Header> MacOS
            </List.Item>
            <List.Item>
              <List.Header>IDE</List.Header> IntelliJ
            </List.Item>
            <List.Item>
              <List.Header>Containerization</List.Header> Docker
            </List.Item>
            <List.Item>
              <List.Header>Continuous integration software</List.Header> Jenkins
              / TeamCity / Argo / CircleCI
            </List.Item>
            <List.Item>
              <List.Header>Project Management Software</List.Header> Jira
            </List.Item>
            <List.Item>
              <List.Header>Version control system software</List.Header> Github
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
