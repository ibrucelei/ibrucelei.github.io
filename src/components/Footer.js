import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaDiscord, FaTelegram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by KasWare team</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KASWRE</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://discord.gg/Hx8fVpsW"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaDiscord />
              </a>

            </li>
            <li className="social-icons">
              <a
                href="https://t.me/+eBTwLzz_BcwwMmE1"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaTelegram />
              </a>

            </li>
            <li className="social-icons">
              <a
                href="https://github.com/kasware-wallet/extension"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/kasware_wallet"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
