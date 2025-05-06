import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Tombol Unduh */}
        <Row style={{ justifyContent: "center", marginBottom: "20px", position: "relative"}}>
          <Button
            variant="primary"
            href="/CV_Septyana-Agustina.pdf"
            download
            style={{ maxWidth: "250px" }}
          >
            Unduh CV
          </Button>
        </Row>

        {/* Tampilan PDF */}
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
