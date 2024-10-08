import classNames from "classnames";
import { Col, Container, Row, Card } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import bilancio2022 from "../public/bilancio/Bilancio 2022.pdf";
import bilancioSociale2022 from "../public/bilancio/Bilancio Sociale 2022.pdf";
import dichiarazioneContributi2023 from "../public/bilancio/2023/trasparenza-dichiarazione-contributi.pdf";
import bilancio2023 from "../public/bilancio/2023/bilancio_con_relazione_missione_2023.pdf";
import bilancioSociale2023 from "../public/bilancio/2023/bilancio_sociale_2023.pdf";
import relazioneOrganoControllo2023 from "../public/bilancio/2023/relazione_organo_controllo_2023.pdf";
import verbaleAssemblea2024 from "../public/Assemblea22062024signed.pdf";
import codiceEtico from "../public/codice-etico.pdf";

export default function Trasparenza() {
	return (
		<PageTemplate title="Trasparenza">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<Card className="mb-4">
							<Card.Body>
								<h5>Anno 2023</h5>
								<ArrowLink data={{ label: "Bilancio di esercizio 2023", url: bilancio2023 }} />
								<ArrowLink data={{ label: "Bilancio sociale 2023", url: bilancioSociale2023 }} />
								<ArrowLink data={{ label: "Relazione Organo di Controllo 2023", url: relazioneOrganoControllo2023 }} />
								<ArrowLink
									data={{
										label: "Contributi percepiti da enti pubblici",
										url: dichiarazioneContributi2023,
										download: true,
									}}
								/>
								<ArrowLink
									data={{
										label: "Verbale di assemblea ordinaria",
										url: verbaleAssemblea2024,
										download: true,
									}}
								/>
							</Card.Body>
						</Card>
						<Card className="mb-4">
							<Card.Body>
								<h5>Anno 2022</h5>
								<ArrowLink data={{ label: "Bilancio di esercizio 2022", url: bilancio2022 }} />
								<ArrowLink data={{ label: "Bilancio sociale 2022", url: bilancioSociale2022 }} />
							</Card.Body>
						</Card>
						<Card className="mb-4">
							<Card.Body>
								<h5>Altro</h5>
								<ArrowLink data={{ label: "Codice etico", url: codiceEtico }} />
							</Card.Body>
						</Card>
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
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
