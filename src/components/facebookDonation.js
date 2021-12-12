import React from "react";
import { Card, Image } from "react-bootstrap";
import donateFacebook from "../images/donate-facebook.gif";
import info from "../components/assets/info.json";
import ArrowLink from "../components/arrowLink";

export default function FacebookDonation() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h3 className="fw-bold mt-0">Facebook</h3>
        <a href={info.associazione.facebook} target="_blank" rel="noreferrer">
          <Image
            className="mb-3 w-100"
            src={donateFacebook}
            alt="Donazione via Facebook"
            rounded
          />
        </a>
        <p>
          Visita la nostra pagina Facebook e clicca sul pulsante “Fai una
          donazione”. Per donare è necessario fare log-in su Facebook.
        </p>
        <ArrowLink
          data={{
            label: "Dona con Facebook",
            url: info.associazione.facebook,
            external: true,
          }}
          type="external"
        />
      </Card.Body>
    </Card>
  );
}
