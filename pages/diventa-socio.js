import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import info from "../utils/info.json";

import tesseramento from "../images/mockup-tessera.jpg";
import Image from "next/image";

export default function DiventaSocio() {
	return (
		<PageTemplate title="Diventa socio">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>
							È possibile iscriversi ufficialmente al libro soci
							dell’associazione compilando il modulo di tesseramento e versando
							la quota associativa annuale.
						</h5>
						<Image src={tesseramento} className="rounded-3" />
						<p>
							Scarica e stampa il modulo, compilalo in ogni sua parte e
							consegnalo alla prima occasione. Nel frattempo inviaci una
							scansione per mail (info [@] abilitiamo.org) così da predisporre
							la tua iscrizione.
						</p>
						<p>
							In seguito all'approvazione del consiglio direttivo, potrai
							versare la quota associativa di €30 (trenta/00) sul c/c{" "}
							{info.associazione.iban} oppure farcela avere in contanti.
						</p>
						<p>L’informativa sulla privacy è disponibile a questa pagina.</p>
						<p>Modulo tesseramento</p>
					</Col>
					<Col>
						<div className={classNames("position-sticky")} style={{ top: 65 }}>
							{sideLinks.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	);
}

const sideLinks = [
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Normativa privacy", url: "/privacy" },
];