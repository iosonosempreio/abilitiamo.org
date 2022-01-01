import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import info from "../utils/info.json";

export default function Contatti() {
	return (
		<PageTemplate title="Teniamoci in contatto">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<p className="mb-0">Ragione sociale</p>
						<h3 className="mb-3">Associazione Abilítiamo Autismo ONLUS</h3>
						<h5 className="mt-5">Indirizzo</h5>
						<p>Via per Gattedo 19/7, Carugo 22060 CO</p>
						<h5 className="mt-5">Posta elettronica</h5>
						<p>{info.associazione.mail}</p>
						<p>{info.associazione.mailRisorseUmane}</p>
						<p>{info.associazione.mailAmministrazione}</p>
						<p>{info.associazione.mailSostenibilita}</p>
						<h5 className="mt-5">Posta elettronica certicicata (PEC)</h5>
						<p>{info.associazione.pec}</p>
						<h5 className="mt-5">
							Codice fiscale{" "}
							<span style={{ color: "var(--azure)" }}>(5x1000)</span>
						</h5>
						<p>{info.associazione.codiceFiscale}</p>
						<h5 className="mt-5">
							IBAN{" "}
							<span style={{ color: "var(--azure)" }}>
								(donazioni liberali)
							</span>
						</h5>
						<p>{info.associazione.iban}</p>
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
	{ label: "Cascina Cristina", url: "/cascina-cristina" },
];
