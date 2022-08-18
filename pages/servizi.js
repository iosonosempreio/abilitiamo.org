import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";

import cartaServiziCDD20220815 from "../public/documenti-cdd/carta-servizi-CDD-20220815.pdf";
import cartaDiritti from "../public/documenti-cdd/Carta dei diritti.pdf";
import informativaPrivacy from "../public/documenti-cdd/Informativa Privacy Cascina Cristina Abilitiamo Autismo.pdf";
import moduloURP from "../public/documenti-cdd/Modulo Segnalazione URP.pdf";
import questionarioSoddisfazione from "../public/documenti-cdd/questionario soddisfazione CDD su carta intestata.pdf";
import menuEstivo2022 from "../public/documenti-cdd/Cascina Cristina_Menu Estate 2022_pranzo.pdf";
import menuAlternativeFisse from "../public/documenti-cdd/Cascina Cristina_Alternative Fisse.pdf";

export default function Servizi() {
	return (
		<PageTemplate title="Servizi">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h1>CDD</h1>
						<h3>Centro Diurno per persone adulte con autismo</h3>
						<p>Il CDD di Cascina Cristina può accogliere fino a 15 persone.</p>
						<p>Di seguito è possibile scaricare in formato PDF i seguenti documenti:</p>
						<ArrowLink data={{ label: "Carta dei servizi", url: cartaServiziCDD20220815, download: true }} />
						<ArrowLink data={{ label: "Carta dei diritti", url: cartaDiritti, download: true }} />
						<ArrowLink data={{ label: "Informativa privacy", url: informativaPrivacy, download: true }} />
						<ArrowLink data={{ label: "Modulo segnalazione URP", url: moduloURP, download: true }} />
						<ArrowLink data={{ label: "Questionario di soddisfazione", url: questionarioSoddisfazione, download: true }} />
						<ArrowLink data={{ label: "Menù estivo 2022", url: menuEstivo2022, download: true }} />
						<ArrowLink data={{ label: "Menù - Alternative fisse", url: menuAlternativeFisse, download: true }} />
						<hr />
						<h1>RSD</h1>
						<h3>Centro Residenziale per persone adulte con autismo</h3>
						<p>La RSD di Cascina Cristina può accogliere fino a 14 persone.</p>
						<p>Di seguito è possibile scaricare in formato PDF i seguenti documenti:</p>
						<ArrowLink disabled={true} data={{ label: "Carta dei servizi", url: cartaServiziCDD20220815, download: true }} />
						<ArrowLink disabled={true} data={{ label: "Carta dei diritti", url: cartaDiritti, download: true }} />
						<ArrowLink disabled={true} data={{ label: "Informativa privacy", url: informativaPrivacy, download: true }} />
						<ArrowLink disabled={true} data={{ label: "Modulo segnalazione URP", url: moduloURP, download: true }} />
						<ArrowLink disabled={true} data={{ label: "Questionario di soddisfazione", url: questionarioSoddisfazione, download: true }} />
						<ArrowLink disabled={true} data={{ label: "Menù estivo 2022", url: menuEstivo2022, download: true }} />
						<ArrowLink disabled={true} data={{ label: "Menù - Alternative fisse", url: menuAlternativeFisse, download: true }} />
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
