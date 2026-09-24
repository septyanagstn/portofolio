import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiRuby,
  DiPhp,
  DiPerl,
  DiLaravel,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C&C++" aria-label="C&C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java" aria-label="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python" aria-label="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP" aria-label="PHP">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Laravel" aria-label="Laravel">
        <DiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ruby" aria-label="Ruby">
        <DiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Perl" aria-label="Perl">
        <DiPerl />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript" aria-label="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js" aria-label="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React" aria-label="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL" aria-label="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL" aria-label="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB" aria-label="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git" aria-label="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
