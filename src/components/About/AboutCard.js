import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p className="home-about-body">
            Saya adalah lulusan Teknik Informatika dengan pemahaman komprehensif dalam 
            <i>
              <b className="purple"> pengembangan perangkat lunak, analisis data, dan pemrograman. </b>
            </i>
            <br />
            <br />
            Sebagai seorang yang adaptif, saya memiliki ketertarikan dan pengalaman dalam berbagai ranah pengembangan IT, mulai dari 
            <i>
              <b className="purple"> Frontend, Backend, Full-Stack, hingga Data & AI. </b>
            </i>
            <br />
            <br />
            Saya terbiasa membangun solusi menggunakan teknologi seperti <b className="purple">JavaScript/TypeScript (Vue.js), PHP (Laravel), dan Java (Spring Boot)</b>, serta sering mengeksplorasi <b className="purple">Python</b> untuk kebutuhan analisis data dan <i>Machine Learning</i>.
            <br />
            <br />
            Fokus utama saya adalah terus belajar, bekerja kolaboratif dalam lingkungan <b className="purple">Agile</b>, dan mengimplementasikan 
            <i>
              <b className="purple"> solusi teknologi yang inovatif </b>
            </i>
            untuk mengatasi masalah di dunia nyata.
          </p> */}
          <p style={{ textAlign: "justify" }}>
            Halo, Saya <span className="purple">Septyana Agustina </span>
            dari <span className="purple"> Karawang, Indonesia.</span>
            <br />
            <br />
            Saya merupakan lulusan Sarjana Terapan Teknik Informatika dengan pemahaman komprehensif dalam 
            <i>
              <b className="purple"> pengembangan perangkat lunak, analisis data, dan pemrograman. </b>
            </i>
            <br />
            <br />
            Sebagai seorang yang adaptif, saya memiliki ketertarikan dan pengalaman dalam berbagai ranah pengembangan IT, mulai dari 
            <i>
              <b className="purple"> Frontend, Backend, Full-Stack, hingga Data & AI. </b>
            </i>
            <br />
            <br />
            Selama masa perkuliahan saya mengikuti berbagai proyek pengembangan Perangkat Lunak, baik secara individu maupun tim. Selain itu, saya juga memiliki pengalaman bekerja sebagai <span className="purple">Junior Frontend Developer</span> di perusahaan Kabayan Group selama proses Magang.
            <br />
            <br />
            Sebelum memasuki dunia IT, saya memiliki latar belakang Teknik Mesin yang saya dapat di SMK.
            Namun, saya memiliki ketertarikan terhadap teknologi informasi.
            <br />
            <br />
            Bagi saya, peralihan ini adalah tantangan yang membuka banyak peluang untuk berkembang.
            <br />
            <br />
            Selain pemrograman, berikut beberapa aktivitas yang saya sukai:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <i>Badminton</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> <i>Volly</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> <i>Tennis</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> <i>Travelling</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> <i>Playing Games</i>
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
