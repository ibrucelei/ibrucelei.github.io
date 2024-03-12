import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">KasWare</strong> Wallet
            </h1>
            <Aboutcard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
