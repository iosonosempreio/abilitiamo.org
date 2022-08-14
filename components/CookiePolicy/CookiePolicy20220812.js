import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import classNames from "classnames";
import ArrowLink from "../ArrowLink";
import info from "../../utils/info.json";
import styles from "./CookiePolicy.module.scss";

export default function CookiePolicy20220812({ getCookieConsentValue, resetCookieConsentValue }) {
	const [showReset, setShowReset] = useState();
	useEffect(() => {
		const activeCookies = getCookieConsentValue() + "";
		if (activeCookies === "true") {
			setShowReset(true);
		} else {
			setShowReset(false);
		}
	}, [showReset]);
	return (
		<Container>
			{showReset && (
				<Row className={classNames("mt-5", styles.cookiePolicy)}>
					<Col className={classNames(styles.resetCookies, "py-3")} md={{ span: 7, offset: 1 }}>
						<p className={classNames("mb-2")}>Hai attivato l'utilizzo di cookie, clicca sul pulsante di seguito per disattivarli.</p>
						<Button
							className={styles.resetBtn}
							onClick={() => {
								setShowReset(false);
								resetCookieConsentValue();
							}}
						>
							Disattiva cookies
						</Button>
					</Col>
				</Row>
			)}
			<Row className={classNames("my-5", styles.cookiePolicy)}>
				<Col md={{ span: 7, offset: 1 }}>
					<h4>Cosa sono i cookie</h4>
					<p>
						I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, ove vengono memorizzati per essere poi ritrasmessi
						agli stessi siti alla visita successiva. I cookie delle c.d. "terze parti" vengono, invece, impostati da un sito web diverso da quello che l´utente
						sta visitando. Questo perché su ogni sito possono essere presenti elementi (immagini, mappe, suoni, specifici link a pagine web di altri domini,
						ecc.) che risiedono su server diversi da quello del sito visitato. I cookie sono usati per differenti finalità: esecuzione di autenticazioni
						informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server,
						memorizzazione delle preferenze, ecc. Di seguito troverai tutte le informazioni sui cookie installati attraverso questo sito, e le indicazioni
						necessarie su come gestire le tue preferenze riguardo ad essi. Per maggiori informazioni sui cookie e sulle loro funzioni generali, visita un sito
						Web informativo come <a href="https://allaboutcookies.org/">allaboutcookies.org</a>
					</p>
					<h4>Esempi di altre tecnologie</h4>
					<h5>Localstorage</h5>
					<p>
						È una tecnologia utilizzata per ottimizzare la navigazione, che non raccoglie dati sulle preferenze manifestate dall’utente (p.es. memorizza un
						codice che identifica la sessione dell’utente dopo il login, per evitare che l’utente debba inserire username e password in ogni pagina del profilo
						nell’accesso alle aree riservate.
					</p>
					<h5>Tracking pixel</h5>
					<p>
						“Codice di tracciamento” o “codice di monitoraggio”, è per l’appunto una piccola porzione di codice che viene rilasciata da alcuni sistemi con lo
						scopo di essere implementato in altri per tracciare alcuni dati relativi all’utente e alla sua sessione di navigazione o di apertura delle email, in
						maniera totalmente trasparente all’utente stesso. I dati che vengono tracciati possono essere i più diversi, come il giorno e l’ora, la posizione
						geografica, il tipo di dispositivo adottato per la navigazione, fino ad arrivare nei pixel di tracking più complessi a monitorare il valore speso
						per un ordine di acquisto ed altre informazioni utili per i reparti marketing delle aziende che li utilizzano.
					</p>
					<h5>Plugin</h5>
					<p>
						È un programma che interagisce con un altro programma per ampliarne o estenderne le funzionalità originarie. I plugin maggiormente utilizzati sono
						quelli dei social network, che permettono p.es. all’utente seguire con un click una pagina o un profilo social, di indicare con un click che ha
						gradito un contenuto web e di condividerlo sul proprio profilo social network, ecc.
					</p>
					<h5>Widget</h5>
					<p>
						È un componente grafico di interfaccia utente di un programma, che ha lo scopo di facilitare all'utente l'interazione con il programma stesso. I
						widget maggiormente utilizzati sono quelli dei social network, che permettono agli utenti di aprire in modo agevole in una finestra separata del
						browser i social network. Questi servizi permettono di effettuare interazioni con i social network, o con altre piattaforme esterne, direttamente
						dalle pagine di un sito. Le interazioni e le informazioni eventualmente acquisite dal sito sono soggette alle impostazioni privacy del terzo che ha
						creato le tecnologie suddette. Per ricevere informazioni dettagliate ai sensi dell’art. 13 Regolamento (UE) 2016/679 in merito all’utilizzo dei dati
						personali trattati quando usufruisci di queste tecnologie, ti invitiamo a visitare i siti internet dei terzi gestori delle suddette tecnologie.
					</p>
					<h5>Ricordati che puoi gestire le tue preferenze sui cookie anche attraverso il browser</h5>
					<p>
						Se non conosci il tipo e la versione di browser che stai utilizzando, clicca su “Aiuto” nella finestra del browser in alto, da cui puoi accedere a
						tutte le informazioni necessarie. Se invece conosci il tuo browser clicca su quello che stai utilizzando per accedere alla pagina di gestione dei
						cookie. Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser più diffusi ai seguenti indirizzi:
					</p>
					<ul>
						<li>
							<a href="https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies">Google Chrome</a>
						</li>
						<li>
							<a href="https://support.mozilla.org/it/kb/Attivare e disattivare i cookie">Mozilla Firefox</a>
						</li>
						<li>
							<a href="https://support.apple.com/it-it/guide/safari/manage-cookies-and-website-data-sfri11471/">Apple Safari</a>
						</li>
						<li>
							<a href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies">Microsoft Internet Explorer</a>
						</li>
						<li>
							<a href="https://support.microsoft.com/it-it/help/4027947">Microsoft Edge</a>
						</li>
						<li>
							<a href="https://support.brave.com/hc/articles/360022806212-How-do-I-use-Shields-while-browsing">Brave</a>
						</li>
						<li>
							<a href="https://help.opera.com/latest/web-preferences/#cookies">Opera</a>
						</li>
					</ul>
					<p>
						Per maggiori informazioni, visita la pagina <a href="https://www.youronlinechoices.eu/">youronlinechoices.eu</a>
					</p>
					<h4>Cookie utilizzati da questo sito</h4>
					<p>
						L’utilizzo di cookie da parte del titolare di questo sito, {info.associazione.ragioneSociale} sede {info.associazione.indirizzo} Italy, in persona
						del legale rappresentante pro-tempore (e-mail contact {info.associazione.mailPrivacy}) si inquadra nella Privacy Policy dello stesso; per tutte le
						informazioni richieste dall’art. 13 Regolamento UE 2016/679 – GDPR clicca qui.
					</p>
					<p>
						La chiusura del banner (mediante selezione dell’apposito comando contraddistinto dalla X posta al suo interno, in alto a destra, o attraverso il
						comando CHUDI) comporta il permanere delle impostazioni di default e dunque la continuazione della navigazione in assenza di cookie o altri
						strumenti di tracciamento diversi da quelli tecnici.
					</p>
					<h5>Cookie tecnici che non richiedono consenso</h5>
					<p>Cookie relativi ad attività strettamente necessarie al funzionamento del sito e all’erogazione del servizio</p>
					<Table size="sm" striped={false} bordered={true} borderless={false} hover responsive="lg">
						<thead>
							<tr>
								<td>Nome</td>
								<td>Fornitore</td>
								<td>Scopo</td>
								<td>Scadenza</td>
								<td>Tipo</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>CookieConsent</td>
								<td>abilitiamo.org – {info.associazione.ragioneSociale}</td>
								<td>Memorizza lo stato del consenso ai cookie dell'utente per il dominio corrente</td>
								<td>{info.associazione.durataCookies.label}</td>
								<td>Cookie</td>
							</tr>
						</tbody>
					</Table>
					{/* <h5>Cookie relativi ad attività di salvataggio delle preferenze e ottimizzazione</h5>
					<Table>
						<thead>
							<tr>
								<td>•</td>
							</tr>
						</thead>
					</Table> */}
					{/* <h5>Cookie di statistica (equiparati tecnici) utilizzati per raccogliere informazioni in forma aggregata</h5>
					<p>
						Il sito utilizza cookie di statistica di Terze Parti (Google Analytics) per raccogliere informazioni in forma aggregata, impostato come
						cookie tecnico ossia senza tracciamento dell’IP dell’Utente (dati utente non profilati a livello di IP) e senza condivisione dei dati con la Terza
						Parte. Accesso alle informazioni della Terza Parte:
					</p>
					<ul>
						<li>
							Privacy Policy: <a href="http://www.google.com/policies/privacy/">http://www.google.com/policies/privacy/</a>
						</li>
						<li>
							Cookie Policy:{" "}
							<a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
								https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
							</a>
						</li>
						<li>
							Disattivazione: <a href="https://tools.google.com/dlpage/gaoptout?hl=it">https://tools.google.com/dlpage/gaoptout?hl=it</a>
						</li>
					</ul>  */}
					<p>Tutti i cookie tecnici non richiedono consenso, perciò vengono installati automaticamente a seguito dell’accesso al sito.</p>
					<h5>Cookie o altre tecnologie per cui è richiesto il consenso</h5>
					<p>
						Tutti i cookie (o altre tecnologie), diversi da quelli tecnici sopra indicati vengono installati o attivati solo a seguito del{" "}
						<strong>consenso espresso</strong> dall’utente la prima volta che visita il sito. Il consenso può essere espresso in maniera generale, interagendo
						con il banner di informativa breve presente sulla pagina di approdo del sito, secondo le modalità indicate in tale banner; oppure può essere fornito
						o negato in maniera selettiva, secondo le modalità indicate nel banner stesso. Di questo consenso viene tenuta traccia in occasione delle visite
						successive. Hai sempre la possibilità di revocare in tutto o in parte il consenso già espresso.
					</p>
					<h5>Cookie o altre tecnologie gestiti da terze parti</h5>
					<p>
						Attraverso questo sito vengono installati anche cookie o altre tecnologie gestiti da terze parti. Troverai di seguito alcune indicazioni, e un link
						alla privacy policy e al modulo di consenso di ciascuna di esse.
					</p>
					<Table size="sm" striped={false} bordered={true} borderless={false} hover responsive="lg">
						<thead>
							<tr>
								<td>Nome</td>
								<td>Fornitore</td>
								<td>Scopo</td>
								<td>Scadenza</td>
								<td>Tipo</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>VISITOR_INFO1_LIVE</td>
								<td>youtube.com</td>
								<td>
									Maggiori informazioni disponibili in <a href="https://policies.google.com/technologies/cookies/embedded?hl=it_IT">questa pagina</a>.
								</td>
								<td>6 mesi</td>
								<td>Cookie</td>
							</tr>
							<tr>
								<td>YEC</td>
								<td>youtube.com</td>
								<td>
									Maggiori informazioni disponibili in <a href="https://policies.google.com/technologies/cookies/embedded?hl=it_IT">questa pagina</a>.
								</td>
								<td>13 mesi</td>
								<td>Cookie</td>
							</tr>
							<tr>
								<td></td>
								<td>https://www.youtube-nocookie.com</td>
								<td></td>
								<td></td>
								<td>Cache Storage</td>
							</tr>
							<tr>
								<td></td>
								<td>https://www.youtube-nocookie.com</td>
								<td></td>
								<td></td>
								<td>Database storage</td>
							</tr>
							<tr>
								<td></td>
								<td>https://www.youtube-nocookie.com</td>
								<td></td>
								<td></td>
								<td>Local storage</td>
							</tr>
							{/* <tr>
								<td>.</td>
								<td>.</td>
								<td>.</td>
								<td>.</td>
								<td>.</td>
							</tr> */}
						</tbody>
					</Table>
					<br />
					<p>Data di aggiornamento: 12 agosto 2022.</p>
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
	{ label: "Informativa Privacy", url: "/privacy" },
];
