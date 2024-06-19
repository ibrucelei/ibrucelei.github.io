import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiGooglechrome, SiBrave } from "react-icons/si";

function Toolstack() {
  let timestamp = '?v=' + new Date().getTime();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href={"https://github.com/kasware-wallet/extension"+timestamp} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
          <SiGithub />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href={"https://chromewebstore.google.com/detail/kasware-wallet/hklhheigdmpoolooomdihmhlpjjdbklf"+timestamp} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
          <SiGooglechrome />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href={"https://chromewebstore.google.com/detail/kasware-wallet/hklhheigdmpoolooomdihmhlpjjdbklf"+timestamp} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
          <SiBrave />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
