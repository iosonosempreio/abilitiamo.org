import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import { CDD, RSD } from "../components/Servizi";

export default function Servizi() {
	return (
		<PageTemplate title="Servizi">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<CDD />
						<hr />
						<RSD />
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
