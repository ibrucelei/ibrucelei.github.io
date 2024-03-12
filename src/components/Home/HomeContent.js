import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolstack from "../About/Toolstack";

function HomeContent() {
  return (
    <Container fluid className="home-about-section" id="about">
      <h1 className="project-heading">
        <strong className="purple">Download</strong> Link
      </h1>
      <Toolstack />
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> KasWare </span> Wallet
            </h1>
            <p className="home-about-body">
              KasWare Wallet is a non-custodial wallet. We never have access to your funds.
              <br />
              <br />KasWare Wallet is
              <i>
                <b className="purple"> a hierarchical deterministic wallet. </b>
              </i>
              <br />
              <br />
              Your private keys are &nbsp;
              <i>
                <b className="purple">encrypted on your device by your password </b> and
                and are never shared with anyone.Your accounts are derived from your Secret Recovery Phrase.{" "}
              </i>
              <br />
              <br />

            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeContent;
