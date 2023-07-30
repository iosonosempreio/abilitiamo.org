import classNames from "classnames";
import { Col, Container, Row, Card } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import bilancio2022 from "../public/bilancio/Bilancio 2022.pdf";
import bilancioSociale2022 from "../public/bilancio/Bilancio Sociale 2022.pdf";

export default function Organizzazione() {
	return (
		<PageTemplate title="Bilancio">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>In questa pagina mettiamo a disposizione il bilancio e il bilancio sociale.</h5>
						<Card className="mt-4">
							<Card.Body>
								<h5>Anno 2022</h5>
								<ArrowLink data={{ label: "Bilancio di esercizio", url: bilancio2022 }} />
								<ArrowLink data={{ label: "Bilancio sociale", url: bilancioSociale2022 }} />
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
