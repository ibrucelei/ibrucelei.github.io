import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiGooglechrome } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/kasware-wallet/extension" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
          <SiGithub />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://chromewebstore.google.com/detail/kasware-wallet/hklhheigdmpoolooomdihmhlpjjdbklf" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
          <SiGooglechrome />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
