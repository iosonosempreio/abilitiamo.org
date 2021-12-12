import React from "react";
import {Card, Image } from "react-bootstrap";
import info from "../components/assets/info.json";
import donateBank from "../images/assegnozzo.jpg";

export default function BankTransferDonation() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h3 className="fw-bold mt-0">Bonifico bancario</h3>
        <p>
          Puoi donare tramite bonifico bancario sul nostro c/c. Ricordati di
          controllare se la tua banca offre la possibilità di azzerare i costi
          di commissione.
        </p>
        <Image
          className="mb-3"
          src={donateBank}
          alt="Foto di un assegno ad Abilitiamo"
          rounded
          fluid
        />
        <p>Ecco come intestare il bonifico:</p>
        <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
          IBAN
        </h4>
        <p>{info.associazione.iban}</p>
        <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
          Intestatario
        </h4>
        <p>{info.associazione.ragioneSociale}</p>
        <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
          Presso
        </h4>
        <p>{info.associazione.filiale}</p>
        <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
          Causale
        </h4>
        <p>{info.associazione.causale}</p>
      </Card.Body>
    </Card>
  );
}
