import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiGooglechrome, SiBrave, SiAndroid } from "react-icons/si";

function Toolstack() {
  let timestamp = "?v=" + new Date().getTime();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={
            "https://github.com/kasware-wallet/kasware-app/releases" + timestamp
          }
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiAndroid />
        </a>
        <h3 className="purple">Android APK </h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href={
            "https://chromewebstore.google.com/detail/kasware-wallet/hklhheigdmpoolooomdihmhlpjjdbklf" +
            timestamp
          }
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGooglechrome />
        </a>
        <h3 className="purple">Chrome </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={
            "https://chromewebstore.google.com/detail/kasware-wallet/hklhheigdmpoolooomdihmhlpjjdbklf" +
            timestamp
          }
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBrave />
        </a>
        <h3 className="purple">Brave </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://github.com/kasware-wallet/extension" + timestamp}
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <h3 className="purple">GitHub </h3>
      </Col>
    </Row>
  );
}

export default Toolstack;
