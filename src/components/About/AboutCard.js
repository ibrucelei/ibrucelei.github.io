import React from "react";
import Card from "react-bootstrap/Card";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>Our Mission</h3>
          <br />
          <h1 className="purple">Accelerate the Adoption of Kaspa</h1>
          <br />
          <br />
          <h3>Contact Us</h3>
          <br />
          <table className="table custom-table table-sm">
            <tbody>
              <tr>
                <td className="purple">
                  <SiGmail />
                </td>
                <td>
                  <a className="purple" href="mailto:contact@kasware.xyz">
                    contact@kasware.xyz
                  </a>
                </td>
              </tr>
              <tr>
                <td className="purple">
                  <FaTwitter />
                </td>
                <td>
                  <a className="purple" href="https://x.com/KasWare_Wallet">
                    https://x.com/KasWare_Wallet
                  </a>
                </td>
              </tr>
              <tr>
                <td className="purple">
                  <FaTelegram />
                </td>
                <td>
                  <a className="purple" href="https://t.me/KasWare_Wallet">
                    https://t.me/KasWare_Wallet
                  </a>
                </td>
              </tr>
              <tr>
                <td className="purple">
                  <FaDiscord />
                </td>
                <td>
                  <a className="purple" href="https://discord.gg/8FSkXrjhGT">
                    https://discord.gg/8FSkXrjhGT
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
