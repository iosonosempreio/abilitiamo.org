import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";

export default function Servizi({ logos, versions, folder }) {
	return (
		<PageTemplate title="Logo e immagine coordinata">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h1>Versioni logo</h1>
						<p>Clicca sul nome per scaricare (esempio: completo.svg)</p>
						{logos.map((d) => (
							<Col key={d} className={classNames("mb-5")}>
								<h5>Logo "{d}"</h5>
								<img src={`/${folder}/${d}.png`} className={classNames("mb-2")} />
								{versions.map((dd) => (
									<p className={classNames("mb-0")} key={`${d}-${dd}`}>
										<small>
											<a href={`/${folder}/${d}${dd}`}>
												{d}
												{dd}
											</a>
										</small>
									</p>
								))}
							</Col>
						))}
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

Servizi.defaultProps = {
	folder: "versioni-logo",
	logos: ["completo", "no-cielo", "quadrato", "circolare", "solo tipografia", "solo-casa"],
	versions: [".png", "@2x.png", ".svg", ".pdf"],
};

const sideLinks = [
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Informativa privacy", url: "/privacy" },
];
