import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="home-about-body">
            KasWare is the first &nbsp;
            <i>
              <b className="purple">open source </b>
            </i>&nbsp;
            open source browser extension wallet for Kaspa in the world!
            <br />
            <br />
            Our mission is to &nbsp;
            <i>
              <b className="purple">accelerate the adoption of Kaspa </b>
            </i>&nbsp;
            by providing a secure, easy to use wallet for the community.
            <br />
            <br />
            KasWare Wallet is a &nbsp;
            <i>
              <b className="purple">non-custodial</b> &nbsp;
            </i>
            wallet. We never have access to your funds. KasWare Wallet never stores your seed phrase, your password or
            any private information. Your accounts are derived from your Secret Recovery Phrase.
            <br />
            <br />
            KasWare Wallet is a &nbsp;
            <i>
              <b className="purple">hierarchical deterministic </b> &nbsp;
            </i>
            wallet. Your accounts are derived from your Secret Recovery Phrase.
            <br />
            <br />
            Your private keys are &nbsp;
            <i>
              <b className="purple">encrypted on your device by your password </b> &nbsp; and is not shared with
              anyone. Accounts are derived from your Secret Recovery Phrase.{" "}
            </i>
            <br />
            KasWare Wallet doesnot track any personal identifiable information, your account addresses, or asset
            balances.
            <br />
            <br />
            Users can import accounts from single private keys. These accounts are not derived from your Secret Recovery
            Phrase and will be labelled as “imported”.
            <br />
            <br />
            KasWare Wallet is a non-custodial wallet. We never have access to
            your funds.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
