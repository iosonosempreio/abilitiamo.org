import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import info from "../utils/info.json";

export default function Organizzazione() {
	return (
		<PageTemplate title="Organizzazione">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>
							L’Associazione Abilitiamo è un ente del terzo settore senza scopo di lucro. Possono aderire
							all’associazione tutte le persone che desiderano contribuire al miglioramento della qualità di vita delle
							persone con autismo.
						</h5>
						<p>
							Undici soci, rappresentanti cinque famiglie con figli con autismo, hanno costituito nel 2017{" "}
							{info.associazione.ragioneSociale} —<i>abitare e abilitare</i>— con sede in {info.associazione.indirizzo}.
						</p>
						<p>
							L’associazione Abilitiamo Autismo è un’organizzazione senza scopo di lucro che persegue solo finalità
							sociali. Possono aderire familiari, amici, educatori, professionisti e tutti coloro che desiderano
							contribuire alla realizzazione dei progetti della stessa. L’associazione, opera sul territorio canturino e
							nelle aree circostanti comprese nel distretto territoriale di ATS Insubria.
						</p>
						<p>
							Attualmente, la compagine associativa consta di 11 soci fondatori e 40 altri soci. Inoltre, a vario
							titolo, è supportata/sostenuta da diversi enti pubblici e privati.
						</p>
						<p>Fanno parte del consiglio direttivo:</p>
						<ul>
							<li>Annalisa Martinelli (Presidente)</li>
							<li>Enrico Elli (tesoriere)</li>
							<li>Angela Corengia (segretario)</li>
							<li>Carmen Gigliotti (consigliere)</li>
							<li>Giorgio Meroni (consigliere)</li>
							<li>Maurizio Moscatelli (consigliere)</li>
							<li>Edda Nervo (consigliere)</li>
							<li>Antonio Romeo (consigliere)</li>
							<li>Sergio Tomaselli (consigliere)</li>
							<li>Tommaso Elli (consigliere)</li>
							<li>Francesca Elli (consigliere)</li>
						</ul>
						<p>
							Organo di Controllo:{" "}
							<a href="http://www.studiotrombetta.it/" target="_blank" rel="noreferrer">
								Dott.ssa Elena Trombetta
							</a>
							.
						</p>
						<p>
							Revisore dei Conti:{" "}
							<a href="https://www.commercialistanavacristina.it/" target="_blank" rel="noreferrer">
								Dott.ssa Cristina Nava
							</a>
							.
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
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
