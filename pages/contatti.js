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
						<h2 className="">{info.associazione.ragioneSociale}</h2>
						<h5 className="mt-4">Sede Legale e Operativa</h5>
						<p className="mb-1">{info.associazione.indirizzo}</p>
						<h5 className="mt-4">Indirizzi di posta elettronica</h5>
						<p className="mb-1">
							Informazioni generiche e primo contatto: <span className="fst-italic">{info.associazione.mail}</span>
						</p>
						<p className="mb-1">
							Collaborazioni e invio CV: <span className="fst-italic">{info.associazione.mailRisorseUmane}</span>
						</p>
						<p className="mb-1">
							Pagamenti e rendicontazione progetti:{" "}
							<span className="fst-italic">{info.associazione.mailAmministrazione}</span>
						</p>
						<p className="mb-1">
							Responsabile privacy: <span className="fst-italic">{info.associazione.mailPrivacy}</span>
						</p>
						{/* <p>Per raccolta fondi: {info.associazione.mailSostenibilita}</p> */}
						<h5 className="mt-4">Posta elettronica certificata (PEC)</h5>
						<p className="mb-1">
							Invio fatture: <span className="fst-italic">{info.associazione.pecFatturazione}</span>
						</p>
						<p className="mb-1">
							Altre comunicazioni: <span className="fst-italic">{info.associazione.pec}</span>
						</p>
						<h5 className="mt-4">
							Codice fiscale <span style={{ color: "var(--azure)" }}>(5x1000)</span>
						</h5>
						<p>{info.associazione.codiceFiscale}</p>
						<h5 className="mt-4">
							IBAN <span style={{ color: "var(--azure)" }}>(donazioni)</span>
						</h5>
						<p className="mb-1">{info.associazione.iban}</p>
						<p>Se richiesto il codice BIC / SWIFT è {info.associazione.swift}</p>
						<h2 className="mt-4">Cascina Cristina</h2>
						<h5 className="mt-4">
							Indirizzo <span style={{ color: "var(--azure)" }}>(CDD e RSD)</span>
						</h5>
						<p>{info.comunita.indirizzo}</p>
						<h5 className="mt-4">Indirizzi di posta elettronica</h5>
						{/* <p className="mb-1">
							Coordinatore servizi educativi: <span className="fst-italic">{info.comunita.mailCoordinatore}</span>
						</p>
						<p className="mb-1">
							Organismo di Vigilanza: <span className="fst-italic">{info.comunita.mailOrganismoDiVigilanza}</span>
						</p> */}
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
