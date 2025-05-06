import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo, Saya <span className="purple">Septyana Agustina </span>
            dari <span className="purple"> Karawang, Indonesia.</span>
            <br />
            Saat ini saya merupakan Mahasiswa Teknik Informatika. 
            <br />
            Sebelumnya, saya merupakan memiliki latar belakang Teknik Mesin.
            Namun, saya memiliki ketertarikan terhadap teknologi informasi.
            <br />
            Bagi saya, peralihan ini adalah tantangan yang membuka banyak peluang untuk berkembang.
            <br />
            <br />
            Selain pemrograman, berikut beberapa aktivitas yang saya sukai:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Olahraga
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Jangan takut mencoba hal baru!"{" "}
          </p>
          <footer className="blockquote-footer">Septyana A</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
