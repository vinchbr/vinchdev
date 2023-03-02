import React, { useState } from "react";
import { Button, Header, Label, Modal } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// @ts-ignore
import DevIcon from "devicon-react-svg";
import { workHistory } from "../../data/workHistory";
import appTheme from "../../theme";

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";

interface Props {
  resumeUrl: string;
}
export const WorkHistoryModal: React.FC<Props> = (resumeUrl) => {
  const workData = workHistory;
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal
      onClose={() => setOpenModal(false)}
      onOpen={() => setOpenModal(true)}
      open={openModal}
      trigger={<Button size="huge">Brief work history</Button>}
      style={{ background: "lightgrey" }}
    >
      <Modal.Content scrolling style={{ background: "lightgrey" }}>
        <VerticalTimeline>
          {workData.map((work, j) => (
            <VerticalTimelineElement
              key={j}
              contentStyle={{
                borderTop: `3px solid ${
                  appTheme[`${work.category}Color`].style.background
                }`,
              }}
              className="vertical-timeline-element--work"
              date={work.date}
              iconStyle={appTheme[`${work.category}Color`].style}
              icon={
                <DevIcon
                  icon={work.category}
                  style={appTheme[`${work.category}Color`].iconCorrection}
                />
              }
            >
              <Label.Group circular>
                {work.technologies.map((technology, j) => (
                  <Label key={j}>{technology}</Label>
                ))}
              </Label.Group>
              <Header as="h3" className="vertical-timeline-element-title">
                {work.title}
              </Header>
              <Header as="h4" className="vertical-timeline-element-subtitle">
                {work.company}
              </Header>
              <p>{work.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <Button
          as={Link}
          floated="right"
          color="green"
          to={resumeUrl}
          target="_blank"
        >
          Download full Resume
        </Button>
      </Modal.Content>
    </Modal>
  );
};
