import { Col, Container, Row } from "react-bootstrap";
import ArrowLink from "../components/ArrowLink";
import { PageTemplate } from "../components/Templates";
import classNames from "classnames";
import info from "../utils/info.json";

export default function DiventaVolontario() {
	return (
		<PageTemplate title="Diventa volontario/a">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>
							Abilitiamo è una <span style={{ color: "var(--red)" }}>Organizzazione Di Volontariato</span> (ODV).
							<br />I volontari e le volontarie sono il cuore pulsante della nostra organizzazione.
						</h5>
						<p>
							Per diventare volontario/a è sufficiente inviare una mail di presentazione a{" "}
							<a href={`mailto:${info.associazione.mailRisorseUmane}`}>{info.associazione.mailRisorseUmane}</a>. Si
							richiede di descrivere le proprie capacità e la motivazione per la quale si desidera entrare a far parte
							della nostra associazione.
						</p>
						<p>
							Ad ogni volontario/a verrà data la adeguata formazione, specifica per il ruolo che dovrà ricoprire, e sarà
							coperto da un'assicurazione.
						</p>
						<p>Pubblicheremo in questa pagina aggiornamenti riguardo corsi di formazione e altre questioni.</p>
						<p>
							Per qualsiasi dubbio o informazione puoi scrivere a{" "}
							<a href={`mailto:${info.associazione.mailRisorseUmane}`}>{info.associazione.mailRisorseUmane}</a>
						</p>
						<h5 className={classNames("mt-5")}>F.A.Q.</h5>
						<ul>
							<li>
								<p>
									<span className="fw-bold">C’è una età minima e massima per essere volontario?</span>
									<br />
									Sì, 16 anni (con autorizzazione dei genitori).
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">Ci sarà una selezione?</span>
									<br />
									Sì, ci sarà un colloquio conoscitivo, unicamente per conoscere la disponibilità del volontario e la
									sua voglia di mettersi in gioco!
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">Aver avuto altre esperienze di volontariato è fondamentale?</span>
									<br /> No, non servono esperienze pregresse.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">Quanto bisogna conoscere il tema dell’Autismo?</span>
									<br /> Non c’è bisogno di essere esperti di Autismo. Tutte le informazioni necessarie verranno date
									all’incontro di formazione che si terrà all’inizio dell’esperienza di volontariato.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">
										Se non sono mai stata a contatto con persone con autismo posso comunque iscrivermi?
									</span>
									<br /> Ci si può iscrivere anche senza aver avuto contatti con persone autistiche.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">Che tipo di attività svolgono i volontari?</span>
									<br /> Saranno concordate insieme. Possono essere attività direttamente svolte con i ragazzi di
									Cascina Cristina ma anche altre attività dove non è previsto il rapporto diretto.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">
										Ho poche ore disponibili per fare volontariato, posso iscrivermi comunque?
									</span>
									<br /> Le ore vengono concordate in base alla disponibilità del volontario! Anche se si hanno poche
									ore disponibili si può comunque essere utili ai ragazzi di Cascina Cristina!
								</p>
							</li>
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
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
