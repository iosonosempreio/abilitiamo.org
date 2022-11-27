import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import { CDD, RSD } from "../components/Servizi";
import menuPranzo from "../public/Cascina Cristina_menu Invernale 2022-23_pranzo.pdf";
import menuCena from "../public/Cascina Cristina_menu Invernale 2022-23_cena.pdf";

export default function Servizi() {
	return (
		<PageTemplate title="Servizi">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<CDD className="mb-5" />
						<RSD className="mb-5" />
						<h1>Menù</h1>
						<p>È possibile consultare il menù delle unità di offerta in formato PDF:</p>
						<ArrowLink data={{ label: "Menù pranzo", url: menuPranzo, download: false }} />
						<ArrowLink data={{ label: "Menù cena", url: menuCena, download: false }} />
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
