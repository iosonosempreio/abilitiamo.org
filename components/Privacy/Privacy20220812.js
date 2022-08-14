import { Col, Container, Row, Table } from "react-bootstrap";
import info from "../../utils/info.json";
import classNames from "classnames";
import ArrowLink from "../ArrowLink";
import Link from "next/link";
import styles from "./Privacy.module.scss";

export default function Privacy20220812() {
	let count = 1;
	return (
		<Container>
			<Row className={classNames("my-5", styles.privacy)}>
				<Col md={{ span: 7, offset: 1 }}>
					<p>Documento informativo ai sensi e per gli effetti di cui all’articolo 13 Regolamento (UE) 2016/679 (GDPR)</p>
					<h4>Perché queste informazioni</h4>
					<p>
						Ai sensi del Regolamento (UE) 2016/679 (di seguito "GDPR"), questa pagina descrive le modalità di trattamento dei dati personali. Si tratta di
						un’informativa che è resa ai sensi dell’art. 13 GDPR. L’informativa non è da considerarsi valida per altri siti web di terzi, eventualmente
						consultabili tramite links presenti su questo sito internet, per i quali non ci si assume alcuna responsabilità.
					</p>
					<h5>Dati personali trattabili</h5>
					<p>
						<strong>Dato personale</strong>: qualsiasi informazione riguardante una persona fisica identificata o identificabile (<strong>«interessato»</strong>
						); si considera identificabile la persona fisica che può essere identificata, direttamente o indirettamente, con particolare riferimento a un
						identificativo come il nome, un numero di identificazione, dati relativi all’ubicazione, un identificativo online o a uno o più elementi
						caratteristici della sua identità fisica, fisiologica, genetica, psichica, economica, culturale o sociale (C26, C27, C30 GDPR).
					</p>
					<p>
						<strong>Dati di contraenti/utenti.</strong>
					</p>
					<h5>Dati di navigazione</h5>
					<p>
						I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni
						dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. In questa categoria di dati rientrano gli
						indirizzi IP o i nomi a dominio dei computer e dei terminali utilizzati dagli utenti, gli indirizzi in notazione URI/URL (Uniform Resource
						Identifier/Locator) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del
						file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri
						relativi al sistema operativo e all'ambiente informatico dell'utente.
					</p>
					<h5>Dati comunicati volontariamente </h5>
					<p>
						L'invio facoltativo, esplicito e volontario di messaggi agli indirizzi di contatto indicati su questo sito e/o la compilazione di form di raccolta
						dati comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati
						personali inseriti.
					</p>
					<h5>Informazioni circa il trattamento dei dati personali effettuato attraverso le piattaforme di Social Media</h5>
					<p>
						Circa i trattamenti di dati personali effettuati dai gestori delle piattaforme di Social Media utilizzate dal Titolare, si rimanda alle informazioni
						da questi rese attraverso le rispettive privacy policy. Il Titolare tratta i dati personali conferiti dall'utenza attraverso le pagine delle
						piattaforme di Social Media dedicate, per gestire le interazioni con l'utenza (commenti, post pubblici, etc.) e nel rispetto della normativa
						vigente.
					</p>
					<h5>Informative specifiche</h5>
					<p>Informative specifiche potrebbero essere presenti nelle pagine del Sito in relazione a particolari servizi o trattamenti dei dati forniti.</p>
					<h4>Cookie e altri sistemi di tracciamento. Cosa sono? A cosa servono?</h4>
					<p>
						Per i Cookie e altri sistemi di tracciamento si veda la cookies policy riportata nel footer del sito e al seguente{" "}
						<Link href="/cookie-policy">link</Link>.
					</p>
					<h4>1. Chi è il titolare del trattamento dati? come contattarlo?</h4>
					<p>
						Il Titolare del trattamento dati è {info.associazione.ragioneSociale}, con sede legale in {info.associazione.indirizzo} nella persona del suo Legale
						Rappresentante pro-tempore, che potrà contattare per qualsiasi informazione tramite e-mail {info.associazione.mailPrivacy}{" "}
					</p>
					<h4>2. Finalità del trattamento, base giuridica, periodo di conservazione dei dati e natura del conferimento</h4>
					<Table className={classNames()} size="sm" striped={false} bordered={true} borderless={false} hover responsive="lg">
						<thead>
							<tr>
								<th>Finalità del trattamento</th>
								<th>Base giuridica</th>
								<th>Periodo di conservazione</th>
								<th>Natura del conferimento</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>
										Navigazione sul presente sito web. I dati necessari per la fruizione dei servizi web non vengono utilizzati allo scopo di ottenere
										informazioni statistiche sull'uso dei servizi (pagine più visitate, numero di visitatori per fascia oraria o giornaliera, aree geografiche
										di provenienza, ecc.). I dati saranno utilizzati per l'accertamento di responsabilità in caso di ipotetici reati informatici ai danni del
										sito.
									</p>
								</td>
								<td>
									<p>
										Il trattamento è necessario per il perseguimento del legittimo interesse del titolare del trattamento o di terzi, a condizione che non
										prevalgano gli interessi o i diritti e le libertà fondamentali dell’interessato che richiedono la protezione dei dati personali, tenuto
										conto delle ragionevoli aspettative nutrite dall’interessato e le attività strettamente necessarie al funzionamento del sito e alla
										navigazione stessa (Art. 6, par. 1 lett. f e C47 del GDPR).
									</p>
								</td>
								<td>
									<p>
										La conservazione dei dati di navigazione sarà fino alla durata della sessione di navigazione e comunque non persistono per più di{" "}
										{info.associazione.durataCookies.label} (salve eventuali necessità di accertamento di reati da parte dell'Autorità giudiziaria).
									</p>
								</td>
								<td>
									<p>Il conferimento dei dati è necessario per la navigazione del sito web.</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Utilizzo di cookies e tecnologie equiparabili. Si veda la cookies policy nel footer del sito.</p>
								</td>
								<td>
									<p>
										Per i cookies e tecnologie equiparabili non tecnici necessari, il trattamento è basato sul consenso al trattamento dei dati personali (art.
										6 par. 1 lett. a e C42, C43 del GDPR). Il consenso viene prestato attraverso il banner e la cookie policy del sito.
									</p>
								</td>
								<td>
									<p>
										Si veda la cookies policy nel footer del sito. Per i cookie di terze parti si rinvia alle informazioni fornite nelle rispettive informative
										privacy.
									</p>
								</td>
								<td>
									<p>
										Si veda la cookies policy nel footer del sito. Per i cookie di terze parti si rinvia alle informazioni fornite nelle rispettive informative
										privacy.
									</p>
								</td>
							</tr>
						</tbody>
					</Table>
					<p>Oltre che per la navigazione, i dati personali saranno trattati per:</p>
					<Table className={classNames()} size="sm" striped={false} bordered={true} borderless={false} hover responsive="lg">
						<thead>
							<tr>
								<th>Finalità del trattamento</th>
								<th>Base giuridica</th>
								<th>Periodo di conservazione</th>
								<th>Natura del conferimento</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>A) CONTATTI, invio richieste di contatto, informazioni</p>
								</td>
								<td>
									<p>
										Il trattamento è necessario all'esecuzione di un contratto di cui l'interessato è parte o all'esecuzione di misure precontrattuali adottate
										su richiesta dello stesso; (C44) art. 6 par. 1 lett. b) del GDPR.
									</p>
								</td>
								<td>
									<p>Massimo 12 mesi.</p>
								</td>
								<td>
									<p>
										Il conferimento è necessario. Il mancato conferimento dei dati necessari comporterà l’impossibilità di essere contattato e ricevere
										informazioni.
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>B) DONAZIONI</p>
								</td>
								<td>
									<p>
										Il trattamento è necessario all'esecuzione di un contratto di cui l'interessato è parte o all'esecuzione di misure precontrattuali adottate
										su richiesta dello stesso; (C44) art. 6 par. 1 lett. b) del GDPR. In particolare, l’interessato può effettuare la donazione tramite le
										modalità per donare presenti all’interno della pagina “dona ora”. Per maggiori informazioni e dettagli, relativi ai pagamenti virtuali si
										rimanda alle informative privacy delle piattaforme dei pagamenti virtuali.
									</p>
								</td>
								<td>
									<p>10 anni per finalità amministrativo-contabili, salvo diversi termini di legge.</p>
								</td>
								<td>
									<p>Il conferimento è necessario. Il mancato conferimento dei dati necessari comporterà l’impossibilità di procedere con la donazione.</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>C) DIVENTA SOCIO</p>
								</td>
								<td>
									<p>
										Il trattamento è necessario all'esecuzione di un contratto di cui l'interessato è parte o all'esecuzione di misure precontrattuali adottate
										su richiesta dello stesso; (C44) art. 6 par. 1 lett. b) del GDPR.
									</p>
								</td>
								<td>
									<p>10 anni per finalità amministrativo-contabili.</p>
								</td>
								<td>
									<p>Il conferimento è necessario. Il mancato conferimento dei dati necessari comporterà l’impossibilità di procedere con la donazione.</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>D) GESTIONE DELLE SUE RICHIESTE e richieste di altri interessati, ai sensi art. 15 e ss del GDPR (diritti dell’interessato).</p>
								</td>
								<td>
									<p>
										Il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il titolare del trattamento (C45) Art. 6 par. 1 lett. c) del
										GDPR.
									</p>
								</td>
								<td>
									<p>5 anni dalla chiusura della richiesta, salvo contenziosi.</p>
								</td>
								<td>
									<p>Il conferimento dei dati personali è obbligatorio, in quanto indispensabile per poter dare esecuzione agli obblighi di Legge.</p>
								</td>
							</tr>
						</tbody>
					</Table>
					<h4>3. A chi verranno comunicati i dati personali? destinatari dei dati</h4>
					<p>
						I dati personali saranno comunicati, in base anche alle finalità previste in aree specifiche, a soggetti che tratteranno i dati in qualità di
						Titolari autonomi del trattamento, o Responsabili del trattamento (art. 28 GDPR) e trattati da persone fisiche (art. 29 GDPR) che agiscono sotto
						l’autorità del Titolare e dei Responsabili sulla base di specifiche istruzioni fornite in ordine a finalità e modalità del trattamento, per finalità
						specifiche in base all’area di riferimento. I dati saranno comunicati a destinatari appartenenti alle seguenti categorie: • Soggetti con sede
						all’interno dello SEE, che forniscono servizi per il sito web e delle reti di comunicazione, ivi comprese posta elettronica, host e gestione sito
						internet; • Soggetti con sede in Italia, con cui il Titolare ha sottoscritto accordi e previo consenso, ove previsto; • Autorità competenti per
						adempimenti di obblighi di legge e/o di disposizioni di organi pubblici, su richiesta L’elenco dei Responsabili del trattamento è disponibile
						scrivendo a {info.associazione.mailPrivacy} o agli altri recapiti sopra indicati.
					</p>
					<h4>4. I dati saranno trasferiti in paesi non see?</h4>
					<p>
						I dati personali potrebbero essere trasferiti in Paesi Extra SEE. Si precisa, in particolare, che i dati saranno conservati all’interno dello SEE
						per i servizi di hosting, gestione, sviluppo e manutenzione del sito.
					</p>
					<p>
						I dati personali forniti in occasione del pagamento sulle apposite piattaforme di pagamento virtuale, nonché i dati trattati da piattaforme social
						con sede extra SEE, saranno trasferiti all’estero in Paesi extra SEE sempre nel rispetto dei limiti e delle condizioni di cui agli artt. 44 e
						seguenti del GDPR. Per avere informazioni circa le garanzie inerenti il trasferimento di dati fuori dall’SEE si rimanda alle informative privacy
						delle piattaforme di pagamento virtuale nonché delle piattaforme.
					</p>
					<h4>5. Vi è un processo automatizzato?</h4>
					<p>
						I dati personali saranno sottoposti a trattamento manuale tradizionale, elettronico e automatizzato. Si precisa che non si effettuano processi
						decisionali completamente automatizzati.
					</p>
					<h4>6. Quali sono i suoi diritti? Come può esercitarli?</h4>
					<p>
						Potrà far valere i diritti come espressi dagli artt. 15 e s.s. GDPR, contattando il Titolare del trattamento all’indirizzo e-mail
						{info.associazione.mailPrivacy}, o ai contatti sopra indicati oppure. Lei ha il diritto, in qualunque momento, di chiedere l’accesso ai Suoi dati
						personali (art.15), la rettifica (art.16), la cancellazione degli stessi (art.17), la limitazione del trattamento (art.18). Il titolare del
						trattamento comunica (art. 19) a ciascuno dei destinatari cui sono stati trasmessi i dati personali le eventuali rettifiche o cancellazioni o
						limitazioni del trattamento effettuate. Il titolare del trattamento comunica all'interessato tali destinatari qualora l'interessato lo richieda. Nei
						casi previsti ha il diritto alla portabilità dei suoi dati (art.20) e in tal caso Le verranno forniti in un formato strutturato, di uso comune e
						leggibile, da dispositivo automatico. Ha il diritto di opporsi (art.21), in qualsiasi momento, al trattamento dei dati basato sul legittimo
						interesse, e nei casi in cui la base giuridica sia il consenso, ha il diritto di revocare il consenso prestato senza pregiudicare la liceità del
						trattamento basata sul consenso prima della revoca. Relativamente al trattamento basato sul legittimo interesse ha la possibilità di ottenere, su
						richiesta, le informazioni sul test di bilanciamento effettuato.
					</p>
					<p>
						Nel caso in cui ritenga che il trattamento dei dati personali effettuato dal Titolare avvenga in violazione di quanto previsto dal Regolamento (UE)
						2016/679, l’interessato ha diritto di presentare un reclamo all’Autorità di controllo, in particolare nello Stato membro in cui risiede abitualmente
						o lavora oppure nel luogo ove si è verificata la presunta violazione del regolamento (Garante Privacy https://www.garanteprivacy.it/), o di adire le
						opportune sedi giudiziarie.
					</p>
					<h4>7. Modifiche all’informativa</h4>
					<p>
						Il Titolare si riserva il diritto di modificare, aggiornare, aggiungere o rimuovere parti della presente informativa. Al fine di facilitare la
						verifica e modifica del testo, l’informativa conterrà la data di aggiornamento. Data di aggiornamento: 12 agosto 2022
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
	);
}

const sideLinks = [
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
