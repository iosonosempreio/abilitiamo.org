import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import info from "../utils/info.json";

export default function Sostenitori() {
	return (
		<>
			<PageTemplate title="Privacy">
				<Container>
					<Row className="my-5">
						<Col md={{ span: 7, offset: 1 }}>
							<h4>Informativa sulla privacy (GDPR UE 679/2016)</h4>
							<p>
								Come noto dal 25 maggio 2018 è definitivamente applicabile il
								General Data Protection Regulation (GDPR UE 679/2016) in materia
								di protezione e trattamento dei dati personali.{" "}
								{info.associazione.ragioneSociale} ha provveduto ad adeguare ed
								aggiornare la relativa normativa e l’informativa ai soci in
								conformità con quanto previsto dal GDPR.
							</p>

							<p>
								Il nuovo regolamento è volto a una maggiore tutela del dati
								personali che nella nostra realtà sono già adeguatamente
								presidiati. La nuova informativa spiega in parole più semplici i
								punti essenziali riguardanti i dati, i motivi per cui li
								trattiamo e i relativi diritti.
							</p>

							<p>
								Sarà possibile accedere in qualsiasi momento all’Informativa sul
								trattamento dei dati personali alla pagina{" "}
								<a href="https://www.abilitiamo.org/privacy">
									www.abilitiamo.org/privacy
								</a>
								. Come previsto dalla normativa vigente si potrà in qualsiasi
								momento modificare il consenso al trattamento dei dati e porre
								domande o dubbi specifici inerenti il trattamento dei dati
								personali scrivendo all’indirizzo di posta elettronica:
								info@abilitiamo.org
							</p>

							<h4>
								Informativa sul Trattamento e la Protezione dei Dati Personali
								degli Associati
							</h4>
							<p>
								La seguente informativa ha lo scopo di fornirvi una panoramica
								dell’utilizzo dei vostri dati personali da parte di{" "}
								{info.associazione.ragioneSociale} e dei vostri diritti ai sensi
								del Regolamento Generale sulla Protezione dei dati personali –
								Regolamento (UE) 2016/679 (qui di seguito anche GDPR).
							</p>
							<ol>
								<li>
									<h6>
										TITOLARE DEL TRATTAMENTO E RESPONSABILE DELLA PROTEZIONE DEI
										DATI
									</h6>
									<p>
										Il Titolare del Trattamento è{" "}
										{info.associazione.ragioneSociale} con sede legale presso
										Carugo CO Via per Gattedo 19/7. Il Responsabile della
										protezione dei dati, pertanto, può essere contattato presso:{" "}
										{info.associazione.ragioneSociale} Carugo CO Via per Gattedo
										19/7 email: info@abilitiamo.org
									</p>
								</li>
								<li>
									<h6>FINALITÀ E BASE GIURIDICA DEL TRATTAMENTO</h6>
									<p>
										{info.associazione.ragioneSociale} tratta i suoi dati
										personali per le seguenti finalità:
										<ul>
											<li>
												A. Necessità di adempiere ad obblighi legali. Tale
												necessità rappresenta la base giuridica che legittima i
												relativi trattamenti. Il conferimento dei dati necessari
												a tali fini rappresenta un obbligo legale; qualora
												{info.associazione.ragioneSociale} non disponesse dei
												predetti dati personali, si troverebbe
												nell’impossibilita di adempiere a quanto previsto dalla
												normativa.
											</li>
											<li>
												B. Necessità di adempiere ad obblighi derivanti dalla
												adesione a {info.associazione.ragioneSociale},
												strettamente connessi e strumentali alla adesione
												medesima. Tale necessità rappresenta la base giuridica
												che legittima i relativi trattamenti. Il conferimento
												dei dati è necessario per la gestione del rapporto con{" "}
												{info.associazione.ragioneSociale} che, in mancanza dei
												predetti dati personali sarebbe nell’impossibilità di
												instaurare il rapporto o di prestare i servizi
												richiesti.
											</li>
										</ul>
									</p>
								</li>
								<li>
									<h6>CATEGORIE DI DATI TRATTATI</h6>
									<p>
										{info.associazione.ragioneSociale} tratta i dati personali
										raccolti direttamente presso di Lei, ovvero presso terzi,
										che includono, a titolo esemplificativo, dati anagrafici
										(es. nome, cognome, n telefono indirizzo, data e luogo di
										nascita), codice fiscale ed altri dati riconducibili alle
										categorie sopra indicate.
									</p>
								</li>
								<li>
									<h6>
										DESTINATARI O CATEGORIE DI DESTINATARI DEI DATI PERSONALI
									</h6>
									<p>
										Possono venire a conoscenza dei Suoi dati personali in
										qualità di Responsabili del trattamento le persone fisiche e
										giuridiche esterne all’organizzazione del Titolare, in
										qualità di persone autorizzate al trattamento dei dati
										personali, relativamente ai dati strettamente necessari allo
										svolgimento delle mansioni loro assegnate:
										<ul>
											<li>i designati a ricoprire cariche sociali;</li>
											<li>
												gli iscritti che collaborano nell’ambito della nostra
												Associazione.
											</li>
										</ul>
										Inoltre i Suoi dati possono essere trattati da quei soggetti
										cui devono essere comunicati in adempimento ad un obbligo
										previsto dalla legge, da un regolamento o dalla normativa
										comunitaria.
									</p>
								</li>
								<li>
									<h6>MODALITÀ DI TRATTAMENTO</h6>
									<p>
										Il trattamento dei dati personali avviene mediante strumenti
										manuali, informatici e telematici con logiche strettamente
										collegate alle finalità stesse e, comunque, in modo da
										garantire la sicurezza e la riservatezza dei dati stessi.
									</p>
								</li>
								<li>
									<h6>DIRITTI DEGLI INTERESSATI</h6>
									<p>
										Il GDPR Le attribuisce il diritto di conoscere quali sono i
										dati che La riguardano in possesso di{" "}
										{info.associazione.ragioneSociale}, nonché come vengono
										utilizzati e di ottenere, quando ne ricorrano i presupposti,
										la copia, la cancellazione nonché l’aggiornamento, la
										rettificazione o, se vi è interesse, l’integrazione dei dati
										nonché il diritto alla portabilità.
									</p>
								</li>
								<li>
									<h6>
										PERIODO DI CONSERVAZIONE DEI DATI E DIRITTO ALLA
										CANCELLAZIONE
									</h6>
									<p>
										{info.associazione.ragioneSociale} tratta e conserva i Suoi
										dati personali per tutta la durata dell’adesione, per
										l’esecuzione degli adempimenti allo stesso inerenti e
										conseguenti, per il rispetto degli obblighi di legge,
										contrattuali e regolamentari applicabili, nonché per
										finalità difensive proprie o di terzi fino alla scadenza del
										periodo di prescrizione più lungo previsto dalla legge
										applicabile (11 anni) decorrente dalla data di cessazione
										dell’adesione.
									</p>
								</li>
								<li>
									<h6>DIRITTO ALLA PORTABILITÀ</h6>
									<p>
										Ciascun Interessato può chiedere di ricevere o chiedere il
										trasferimento dei dati personali a lui riferibili in
										possesso di {info.associazione.ragioneSociale} in un formato
										strutturato, di uso comune e leggibile per ulteriori usi
										personali ovvero per fornirli ad altro titolare del
										trattamento (Diritto alla portabilità).
										<br />
										In particolare, i dati che possono essere oggetto di
										portabilità sono i dati anagrafici (es. nome, cognome,
										titolo, data nascita, sesso, luogo nascita, residenza,
										ecc.).
									</p>
								</li>
								<li>
									<h6>MODALITÀ DI ESERCIZIO DEI DIRITTI</h6>
									<p>
										La informiamo che per esercitare i diritti sopra menzionati
										potrà scrivere ad {info.associazione.ragioneSociale} e-mail:
										info@abilitiamo.org
										<br />
										Il termine per la risposta è un (1) mese, prorogabile di due
										(2) mesi in casi di particolare complessità; in questi casi,
										{info.associazione.ragioneSociale} fornisce almeno una
										comunicazione interlocutoria entro un (1) mese.
										<br />
										L’esercizio dei diritti è, in linea di principio, gratuito;
										{info.associazione.ragioneSociale} si riserva il diritto di
										chiedere un contributo in caso di richieste manifestamente
										infondate o eccessive (anche ripetitive).
										<br />
										{info.associazione.ragioneSociale} ha il diritto di chiedere
										informazioni necessarie a fini identificativi del
										richiedente.
									</p>
								</li>
								<li>
									<h6>
										RECLAMO O SEGNALAZIONE AL GARANTE PER LA PROTEZIONE DEI DATI
										PERSONALI
									</h6>
									<p>
										{info.associazione.ragioneSociale} La informa che Lei ha
										diritto di proporre reclamo ovvero effettuare una
										segnalazione al Garante per la Protezione dei Dati Personali
										oppure in alternativa presentare ricorso all’Autorità
										Giudiziaria. I contatti del Garante per la Protezione dei
										Dati Personali sono consultabili sul sito web{" "}
										<a href="http://www.garanteprivacy.it">
											http://www.garanteprivacy.it
										</a>
										.
									</p>
								</li>
							</ol>
						</Col>
						<Col>
							<div
								className={classNames("position-sticky")}
								style={{ top: 65 }}
							>
								{sideLinks.map((d, i) => (
									<ArrowLink key={i} data={d} />
								))}
							</div>
						</Col>
					</Row>
				</Container>
			</PageTemplate>
		</>
	);
}

const sideLinks = [
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
