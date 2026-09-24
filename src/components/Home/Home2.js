import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profil.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sekilas <span className="purple"> TENTANG SAYA </span>
            </h1>
            <p className="home-about-body">
              Saya adalah Lulusan Teknik Informatika yang memiliki minat dalam pemrograman.
              <br />
              <br />Dalam bidang IT, saya memiliki ketertarikan dan pengalaman dalam berbagai ranah pengembangan Perangkat Lunak, mulai dari  
              <i>
                <b className="purple"> Frontend, Backend, Full-Stack, hingga QA </b> baik dalam pengembangan Web maupun Mobile.
              </i>
              <br />
              <br />
              Selain itu, saya juga tertarik dalam mengembangkan AI/ML menggunakan <b className="purple">Python</b> dengan berbagai macam framework seperti
              <i>
                <b className="purple">
                  {" "}
                  Tensorflow dan PyTorch
                </b>
              </i> untuk memenuhi kebutuhan nyata.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
                <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Hubungi Saya</h1>
            <p>
              Berikut <span className="purple">media sosial </span>yang dapat dihubungi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/septyanagstn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/septyana-agustina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/septyanagstn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/6282111442719"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
