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
  let timestamp = "?v=" + new Date().getTime();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <a
            href={"https://docs.kasware.xyz/wallet/private-policy" + timestamp}
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Privacy Policy</h3>
          </a>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Flying Rabbit Tech Ltd</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={"https://discord.gg/8FSkXrjhGT" + timestamp}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={"https://t.me/KasWare_Wallet" + timestamp}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={"https://github.com/kasware-wallet/extension" + timestamp}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={"https://twitter.com/kasware_wallet" + timestamp}
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
