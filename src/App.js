import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Toast,
} from "react-bootstrap";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const projects = [
  {
    title: "Bellevile Dental Website",
    summary: "Dental clinic static website",
    description: "A modern responsive site for a dental clinic.",
    tech: "HTML, CSS, Bootstrap",
    live: "https://m-ayub786.github.io/Bellevile-Dental/",
    github: "https://github.com/m-ayub786/Bellevile-Dental",
  },
  {
    title: "Work Showcase",
    summary: "Frontend demos collection",
    description: "A collection of UI-based static projects and creative demos.",
    tech: "HTML, CSS, Bootstrap",
    live: "https://m-ayub786.github.io/work/",
    github: "https://github.com/m-ayub786/work",
  },
  {
    title: "Working Site",
    summary: "Responsive business site",
    description: "A responsive business website.",
    tech: "HTML, CSS, Bootstrap",
    live: "https://m-ayub786.github.io/working/",
    github: "https://github.com/m-ayub786/working",
  },
  {
    title: "Bulk SMS Portal",
    summary: "Excel-based SMS sender",
    description: "Send bulk messages via uploaded Excel sheet. Built for organizational use.",
    tech: "PHP, MySQL, Excel Import",
    live: "",
    github: "",
  },
];

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      emailjs
        .send("HAQ-0001", "template_9ctpabf", form, "wKX1m_nehZP-OXmmI")
        .then(() => {
          setShowToast(true);
          setForm({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
        });
    }
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)" }}>
      {/* Header */}
      <header
        className="text-white text-center mb-4"
        style={{
          backgroundImage: `url('/working-header.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.6)", padding: "60px 20px" }}>
          <h1 className="display-4 fw-bold">Hafiz Muhammad Ayub</h1>
          <p className="lead">Full Stack Developer — React | Laravel | Node.js</p>
          <Button variant="light" className="mt-3" href="/ayub_resume.pdf" download>
            <FaDownload className="me-2" /> Download CV
          </Button>
        </div>
      </header>
      {/* Bio Section */}
<Container className="mb-5">
  <Row className="justify-content-center">
    <Col md={10} lg={8}>
      <Card className="p-4 shadow-sm border-0 rounded-4">
        <Card.Body>
          <h3 className="mb-3">About Me</h3>
          <p style={{ fontSize: "1.05rem", color: "#555" }}>
            I'm Hafiz Muhammad Ayub, a passionate Full Stack Developer with hands-on experience
            in React, Laravel, and Node.js. I specialize in crafting responsive web applications,
            modern UI/UX, and backend integrations for small businesses and startups.
            <br /><br />
            My work reflects reliability, performance, and clean code. I'm currently working with international clients from the UK, and always ready for the next challenge!
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>


     {/* Projects */}
<Container className="mb-5">
  <h3 className="text-center mb-4">🚀 Projects</h3>
  <Row className="g-4">
    {projects.map((project, idx) => (
      <Col key={idx} xs={12} md={6}>
        <Card className="h-100 shadow-sm border-0 rounded-4 project-card">
          <Card.Body>
            <Card.Title className="mb-2 fw-bold fs-5">
              {project.title}
              <div className="text-muted small fw-normal">{project.summary}</div>
            </Card.Title>
            <Card.Text className="text-secondary mb-3" style={{ fontSize: "0.95rem" }}>
              {project.description}
            </Card.Text>
            <div className="mb-3">
              <span className="badge bg-secondary">{project.tech}</span>
            </div>
          </Card.Body>
          <Card.Footer className="bg-white border-0 d-flex justify-content-between">
            <Button
              variant="primary"
              href={project.live || "#"}
              target="_blank"
              className="rounded-pill px-3"
              disabled={!project.live}
            >
              <FaExternalLinkAlt className="me-1" /> Live
            </Button>
            <Button
              variant="dark"
              href={project.github || "#"}
              target="_blank"
              className="rounded-pill px-3"
              disabled={!project.github}
            >
              <FaGithub className="me-1" /> GitHub
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


      {/* Contact */}
      <Container className="mb-5">
        <h3 className="text-center mb-4">📬 Contact Me</h3>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm bg-light border-0 rounded-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="success" type="submit">
                    Send Message
                  </Button>
                  <Button
                    variant="outline-success"
                    href="https://wa.me/923341384838?text=Hello%20Ayub%20Bhai!%20Interested%20in%20your%20portfolio."
                    target="_blank"
                    className="d-flex align-items-center"
                  >
                    <FaWhatsapp className="me-2 fs-5" /> Chat on WhatsApp
                  </Button>
                </div>
              </Form>
              <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                delay={3000}
                autohide
                bg="success"
                className="mt-3"
              >
                <Toast.Body className="text-white">Message sent successfully!</Toast.Body>
              </Toast>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Hafiz Muhammad Ayub. All rights reserved.
          </p>
          <div className="mt-2 small">
            <FaEnvelope className="me-2" /> hafizmuhammadayub90@gmail.com |{' '}
            <FaPhone className="mx-2" /> +92 334 1384838 |{' '}
            <FaLinkedin className="mx-2" />
            <a
              href="https://www.linkedin.com/in/hafiz-muhammad-ayub-315ab3269/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-underline"
            >
              LinkedIn
            </a>
          </div>
        </Container>
      </footer>

      {/* Hover Card Style */}
     <style>{`
  .project-card {
    transition: all 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }
`}</style>
    </div>
  );
};

export default App;
