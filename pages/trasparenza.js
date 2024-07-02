import classNames from "classnames";
import { Col, Container, Row, Card } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import bilancio2022 from "../public/bilancio/Bilancio 2022.pdf";
import bilancioSociale2022 from "../public/bilancio/Bilancio Sociale 2022.pdf";
import dichiarazioneContributi2023 from "../public/trasparenza-dichiarazione-contributi.pdf";

export default function Trasparenza() {
	return (
		<PageTemplate title="Trasparenza">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<Card className="mb-4">
							<Card.Body>
								<h5>Anno 2023</h5>
								<ArrowLink data={{ label: "Bilancio di esercizio 2023", url: "" }} disabled />
								<ArrowLink data={{ label: "Bilancio sociale 2023", url: "" }} disabled />
								<ArrowLink
									data={{
										label: "Contributi percepiti da enti pubblici",
										url: dichiarazioneContributi2023,
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
