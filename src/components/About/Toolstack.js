import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMicrosoftoffice,
  SiEclipseide,
  SiApachenetbeanside,
  SiBlender,
  SiFigma,
  SiCanva,
  SiDocker,
  SiPowerbi,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code" aria-label="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Eclipse IDE" aria-label="Eclipse IDE">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Apache NetBeans IDE" aria-label="Apache NetBeans IDE">
        <SiApachenetbeanside />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Office" aria-label="Microsoft Office">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman" aria-label="Postman">
        <SiPostman />
      </Col>      
      <Col xs={4} md={2} className="tech-icons" title="Power BI" aria-label="Power BI">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Blender" aria-label="Blender">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma" aria-label="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Canva" aria-label="Canva">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker" aria-label="Docker">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
