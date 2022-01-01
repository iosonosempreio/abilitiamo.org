import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";

export default function Organizzazione() {
	return (
		<PageTemplate title="Organizzazione">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>
							L’Associazione Abilitiamo è un ente del terzo settore senza scopo
							di lucro. Possono aderire all’associazione tutte le persone che
							desiderano contribuire al miglioramento della qualità di vita
							delle persone con autismo.
						</h5>
						<h4>Soci</h4>
						<p>
							Undici soci, rappresentanti cinque famiglie con figli con autismo,
							hanno costituito nel 2017 l’Associazione Abilitiamo Autismo onlus
							–abitare e abilitare– con sede legale a Carugo (Co) in via per
							Gattedo, 19/7 e con sede operativa presso lo studio Emme di Cantù
							(Co) in via Susa, 15.
						</p>
						<p>
							L’associazione Abilitiamo Autismo è un’organizzazione senza scopo
							di lucro che persegue solo finalità sociali. Possono aderire
							familiari, amici, educatori, professionisti e tutti coloro che
							desiderano contribuire alla realizzazione dei progetti della
							stessa. L’associazione, opera sul territorio canturino e nelle
							aree circostanti comprese nel distretto territoriale di ATS
							Insubria.
						</p>
						<p>
							Attualmente, la compagine associativa consta, oltre agli 11 soci
							fondatori, di 22 soci ordinari, 5 onorari e diversi amici.
							Inoltre, a vario titolo, è supportata/sostenuta da diversi enti
							pubblici e privati. Fanno parte del consiglio direttivo tutti i
							soci fondatori, di seguito elencati.
						</p>
						<ul>
							<li>Annalisa Martinelli (Presidente)</li>
							<li>Giuseppe Sigrisi (Vicepresidente)</li>
							<li>Enrico Elli (tesoriere)</li>
							<li>Antonio Romeo (segretario)</li>
							<li>Carmen Gigliotti (consigliere)</li>
							<li>Giorgio Meroni (consigliere)</li>
							<li>Sergio Tomaselli (consigliere)</li>
							<li>Edda Nervo (consigliere)</li>
							<li>Amalia Polesel (consigliere)</li>
							<li>Tommaso Elli (consigliere)</li>
							<li>Francesca Elli (consigliere)</li>
						</ul>
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