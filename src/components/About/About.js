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
          {/* <Col style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
          > */}
          <Aboutcard />
          {/* </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
