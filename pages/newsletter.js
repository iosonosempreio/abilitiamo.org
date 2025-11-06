import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import NewsletterForm from "../components/NewsletterForm/NewsletterForm";
import info from "../utils/info.json";

export default function Newsletter() {

	return (
		<PageTemplate title="Newsletter">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<NewsletterForm />
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
	{ label: "Contatti", url: "/contatti" },
];
