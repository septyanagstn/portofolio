import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center" }}>
          <iframe
            src="/CV_Septyana-Agustina.pdf"
            title="CV Septyana Agustina"
            width="100%"
            height="800px"
            style={{ border: "none", maxWidth: "900px" }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
