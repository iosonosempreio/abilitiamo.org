import { Col, Container, Row } from "react-bootstrap";
import ArrowLink from "../components/ArrowLink";
import { PageTemplate } from "../components/Templates";
import classNames from "classnames";
import info from "../utils/info.json";

export default function Calendario() {
	return (
		<PageTemplate title="Calendario">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>I prossim impegni di Abilitiamo</h5>
						<iframe
							src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&showTitle=0&showNav=1&showPrint=0&showCalendars=0&showTz=0&mode=AGENDA&hl=it&src=aW5mb0BhYmlsaXRpYW1vLm9yZw&color=%23F4511E"
							// style={{ border: "solid 1px #777" }}
							width="100%"
							height="600"
							// frameborder="0"
							// scrolling="no"
						/>
						<h5 className="mt-3">Condividi un ricordo</h5>
						<p>
							Per favore condividi fotografie, video e informazioni di eventi e iniziative che riguardano Abilitiamo.
							Questo materiale sarà condiviso con la nostra audience 📢
						</p>
						<p>
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSeleG7Jx-pfd8tmdHU6l3UCYBnbzq9tbey1zFtI9WY9T96xFg/viewform?pli=1">
								Usa questo link
							</a>
						</p>
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
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
