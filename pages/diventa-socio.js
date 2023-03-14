import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import info from "../utils/info.json";
import Link from "next/link";
import tesseramento from "../images/mockup-tessera.jpg";
import moduloPdf from "../public/modulo-iscrizione-socio-abilitiamo-2022.pdf";

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
						<img src={tesseramento.src} className="img-fluid rounded-3 mb-3" />
						<p>
							Scarica e stampa il modulo, compilalo in ogni sua parte e
							consegnalo alla prima occasione. Nel frattempo inviaci una
							scansione per mail (info [@] abilitiamo.org) così da predisporre
							la tua iscrizione.
						</p>
						<p>
							<strong>In seguito all'approvazione del consiglio direttivo</strong>, potrai
							versare la quota associativa di €30 (trenta/00) sul c/c {info.associazione.iban}.
						</p>
						<p>
							L’informativa sulla privacy è disponibile a{" "}
							<Link href="/privacy">questa pagina</Link>.
						</p>
						<ArrowLink data={{label:"Scarica modulo tesseramento", url:moduloPdf, download:true}} />
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
	{ label: "Informativa privacy", url: "/privacy" },
];
