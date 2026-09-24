import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { FaExpand } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const documents = [
  {
    title: "Curriculum Vitae",
    description: "CV Bahasa Indonesia",
    file: `${process.env.PUBLIC_URL}/CV_Indonesia.pdf`,
    type: "pdf",
  },
  {
    title: "Curriculum Vitae",
    description: "CV Bahasa Inggris",
    file: `${process.env.PUBLIC_URL}/CV_Inggris.pdf`,
    type: "pdf",
  },
];

const certificates = [  
  {
    title: "Sertifikat Organisasi",
    description: "Staff Muda HIMAKOM POLBAN",
    file: `${process.env.PUBLIC_URL}/Certif_Org.pdf`,
    type: "pdf",
  },
  {
    title: "Sertifikat Magang",
    description: "Magang di Perusahaan Kabayan Group",
    file: `${process.env.PUBLIC_URL}/Certif_Internship.pdf`,
    type: "pdf",
  },
  {
    title: "Sertifikat RevoU Course",
    description: "RevoU - Intro to Software Engineering",
    file: `${process.env.PUBLIC_URL}/Certif_RevoU.pdf`,
    type: "pdf",
  },
  {
    title: "Sertifikat ArutalaLab",
    description: "Junior Back End Developer using Spring Boot",
    file: `${process.env.PUBLIC_URL}/Certif_Arutala.pdf`,
    type: "pdf",
  },
  {
    title: "Sertifikat Wadhwani Skill",
    description: "Wadhwani Skill",
    file: `${process.env.PUBLIC_URL}/Certif_Wadhwani.pdf`,
    type: "pdf",
  },
  {
    title: "TOEIC",
    description: "TOEIC Official Listening and Reading",
    file: `${process.env.PUBLIC_URL}/TOEIC.pdf`,
    type: "pdf",
  },
];

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Container>
          <h1 className="project-heading">
            Curiculum <strong className="purple">Vitae</strong>
          </h1>
          <p className="document-section-description">
            Pilih untuk melihat pratinjaunya.
          </p>
          <Row className="document-grid">
            {documents.map((document) => (
              <Col md={4} sm={6} xs={12} key={document.file}>
                <DocumentCard document={document} />
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <h1 className="project-heading">
            Sertifikat & <strong className="purple">Pelatihan</strong>
          </h1>
          <p className="document-section-description">
            Pilih untuk melihat pratinjaunya.
          </p>
          <Row className="document-grid">
            {certificates.map((certificate) => (
              <Col md={4} sm={6} xs={12} key={certificate.file}>
                <DocumentCard document={certificate} />
              </Col>
            ))}
          </Row>
        </Container>
        <Particle />
      </Container>
    </div>
  );
}

function DocumentCard({ document }) {
  const [showPreview, setShowPreview] = useState(false);
  const isPdf = document.type === "pdf";

  const openPreview = () => setShowPreview(true);

  return (
    <>
      <Card
        className="document-card"
        role="button"
        tabIndex={0}
        onClick={openPreview}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPreview();
          }
        }}
      >
        <div className="document-card-preview">
          {isPdf ? (
            <Document
              file={document.file}
              className="document-card-pdf"
              loading="Loading preview..."
              error="Preview unavailable"
            >
              <Page
                pageNumber={1}
                width={260}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          ) : (
            <img
              src={document.file}
              alt={`${document.title} thumbnail`}
              className="document-card-image"
            />
          )}
          <div className="document-card-open">
            <FaExpand />
            <span>Preview</span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{document.title}</Card.Title>
          <Card.Text>{document.description}</Card.Text>
        </Card.Body>
      </Card>

      <Modal
        show={showPreview}
        onHide={() => setShowPreview(false)}
        size="xl"
        centered
        contentClassName="document-preview-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{document.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="document-preview-body">
          {isPdf ? (
            <iframe
              src={document.file}
              title={document.title}
              className="document-preview-frame"
            />
          ) : (
            <img src={document.file} alt={document.title} className="document-preview-image" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={document.file} target="_blank" rel="noreferrer">
            Buka di tab baru
          </Button>
          <Button variant="secondary" href={document.file} download>
            Unduh
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResumeNew;
