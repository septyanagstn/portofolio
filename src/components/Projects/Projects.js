import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import visualisasi from "../../Assets/Projects/visualisasi.png";
import simulasi2d from "../../Assets/Projects/simulasi2d.jpg";
import simulasi3d from "../../Assets/Projects/simulasi3d.png";
import sportizen from "../../Assets/Projects/sportizen.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import uiux from "../../Assets/Projects/uiux.png";
import bioskop from "../../Assets/Projects/bioskop.png";
import wahana from "../../Assets/Projects/wahana.png";
import deepfake from "../../Assets/Projects/deepfake.png";
import webdev from "../../Assets/Projects/webdev.png";
import parkingdetection from "../../Assets/Projects/parkingdetection.png";
import sipta from "../../Assets/Projects/sipta.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Pengalaman <strong className="purple">Proyek </strong>
        </h1>
        <p style={{ color: "white" }}>
          Berikut merupakan beberapa proyek yang pernah dikerjakan.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Game Tic-Tac-Toe"
              description="Membuat permainan Tic Tac Toe yang diimplementasikan dalam program console. Permainan multi-player yang terdiri dari dua orang pemain. Setiap pemain dapat memasukkan namanya masing-masing, dan
              pemain pertama menentukan simbol yang digunakan x atau o. Terdapat batas waktu untuk setiap pergerakan pemain. Terdapat fitur leaderboard untuk mencatat player dengan jumlah
              kemenangan terbanyak berdasarkan nama player."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bioskop}
              isBlog={false}
              title="Simulasi Antrian Bioskop"
              description="Sistem yang digunakan untuk pengelolaan antrian pemesanan tiket film
              di bioskop. Dalam sistem ini terdapat dua fitur utama, yang pertama
              untuk pengelolaan bioskop seperti menambahkan film, menghapus film.
              Dan fitur kedua yaitu untuk customer untuk memesan tiket (memilih
              film, jam tayang, kursi, serta studio). Sistem ini dibuat dengan
              4
              memanfaatkan struktur data double linked list queue. "
              ghLink="https://github.com/agim221/TugasBesar_SDA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sportizen}
              isBlog={false}
              title="Sportizen"
              description="Membuat aplikasi Sportizen yang digunakan untuk mengelola
              pemesanan lapangan futsal dengan menggunakan Java dengan
              Framework Springboot dan database MongoDB."
              demoLink="https://youtu.be/R-6tzjzCaHo?si=0RPOOaVzlgfTpcQE"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualisasi}
              isBlog={false}
              title="Web Scrapping & Visualisasi Data"
              description="Melakukan Web Scrapping data dari website LPSE dengan
              menggunakan selenium dan UI Path. Kemudian dilakukan analisis
              terhadap data yang didapatkan untuk selanjutnya divisualisasikan
              menggunakan Power BI dan ditampilkan ke dalam website statis yang
              telah dibuat."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uiux}
              isBlog={false}
              title="Prototyping Aplikasi Web"
              description="Membuat prototyping untuk website pemilu yang menyediakan
              berbagai informasi terkait dengan pemilu melihat dari website yang
              sudah ada sebagai acuan. Prototyping dibuat sesuai wawancara
              langsung dari berbagai kalangan pengguna untuk menentukan UI/UX
              yang sesuai dengan pengguna serta menambahkan fitur yang
              dibutuhkan. 
              "
              demoLink="https://www.figma.com/proto/jyT78cJg14ctnLCulPIWB9/2B_2024_Jeihan-Ilham-Kusumawardhana?node-id=3-5&t=LsXPwNpeX4S1Jgsk-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simulasi2d}
              isBlog={false}
              title="Membuat Animasi 2D"
              description="Membuat simulasi terjun payung dalam bentuk animasi 2D dengan
              memanfaatkan bentuk-bentuk bidang datar yang sudah dibuat
              sebelumnya menggunakan algoritma garis Bresenham. Animasi yang
              saya buat memiliki tampilan menu serta interaksi yang dapat dilakukan
              seperti layaknya game 2D."
              demoLink="https://youtu.be/s0A0ZgpnVdc?si=04IsSJrGLa9hgV6V"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simulasi3d}
              isBlog={false}
              title="Game FPS Zombie 3D"
              description="Membuat 3D game FPS bertemakan zombie yang mengadaptasi cerita
              dari film train to busan. Game dibuat dengan menggunakan Godot
              Engine dan Blender untuk pembuatan asset-asset yang ada dalam game."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wahana}
              isBlog={false}
              title="Membuat Desain 3D Taman Hiburan"
              description="Setiap kelompok yang beranggotakan 8 orang diminta untuk membuat
              taman hiburan dengan minimal 4 permainan yang ada di dalamnya.
              Permainan yang kelompok kami buat yaitu Kora-Kora, Histeria, Piring
              Putar, dan Bianglala yang terinspirasi dari permainan yang ada di
              Dufan. Setiap permainan dibuat desain 3D nya menggunakan Blender
              dan kemudian dibuat animasinya."
              demoLink="https://youtu.be/u4hBQ57YJwI?si=3KL9PQ6f9VTL2SFH"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepfake}
              isBlog={false}
              title="Pengembangan Deepfake Detection Model"
              description="Pengembangan model pendeteksi gambar wajah palsu (deepfake
                detection) menggunakan metode CNN (Convolutional Neural Networks). Dan hasilnya Model Machine Learning telah diimplementasikan dan berhasil
                mendeteksi gambar wajah palsu (deepfake) dengan akurasi yang cukup baik."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webdev}
              isBlog={false}
              title="Membuat Aplikasi Website Rekomendasi Film"
              description="Membuat aplikasi website 'DramaKu' yang digunakan untuk mencari
              informasi terkait film ataupun series. Seperti layaknya website IMDB,
              pengguna dapat melihat daftar film atau series apa saja yang ada dan
              melihat informasi detail terkait film atau series tersebut mulai dari
              sinopsis, rating, komentar dan sebagainya"
              ghLink="https://github.com/Ferdiahmad3404/web-film"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkingdetection}
              isBlog={false}
              title="Pengembangan Model Parking Detection"
              description="Membuat sistem pendeteksi lahan parkir dan estimasi biaya parkir
              secara real-time menggunakan SVM dan Scikit-Image. Sistem yang
              dibuat dapat digunakan untuk memantau area lahan parkir dan
              mendeteksi apakah ada lahan parkir yang tersedia serta menghitung
              estimasi biaya untuk setiap lahan berdasarkan waktu parkir."              
              ghLink="https://github.com/septyanagstn/parking_space_monitoring"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sipta}
              isBlog={false}
              title="Enterprise Web Application (SIPTA)"
              description="Pengembangan Sistem Informasi Pengelolaan Tugas Akhir, yang
              bertujuan untuk mengelola Tugas Akhir mulai dari tahap persiapan
              hingga pelaksanaan Tugas Akhir. Kelompok saya memiliki tugas untuk
              mengembangkan Topik Perencanaan dan Pelaksanaan Seminar 3 dan
              Sidang Akhir."              
              ghLink="https://github.com/sipta-jtk/sipta"
              demoLink="https://polban-space.cloudias79.com/sipta-dev/login"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
