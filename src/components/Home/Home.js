import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import HomeContent from "./HomeContent";
import Type from "./Type";
import Image from "react-bootstrap/Image";

function Home() {
  const timestamp = useMemo(() => "?v=" + new Date().getTime(), []);
  return (
    <section>
      {/* <Container fluid className="home-section" id="home"> */}
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              It's
              <strong className="main-name"> KasWare Wallet</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }} className="main-icons">
            <a
              href={
                "https://chromewebstore.google.com/detail/kasware-wallet/hklhheigdmpoolooomdihmhlpjjdbklf" +
                timestamp
              }
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
      {/* </Container> */}
      <HomeContent />
    </section>
  );
}

export default Home;
