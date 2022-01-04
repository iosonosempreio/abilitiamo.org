import { Container, Row, Col } from "react-bootstrap";
import { PageTemplate, SectionCascinaCristina } from "../components/Templates";
import GalleryRestoration from "../components/GalleryRestoration";
import ArrowLink from "../components/ArrowLink";
import classNames from "classnames";
import styles from "../styles/cascina-cristina.module.scss";
import { useLayoutEffect } from "react";

export default function CascinaCristina() {
	useLayoutEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.js')
		const bodyEl = document.querySelector("body");
		const prevPositionCSS = bodyEl.style.position;
		bodyEl.style.position = "relative";
		bodyEl.setAttribute("data-bs-spy", "scroll");
		bodyEl.setAttribute("data-bs-target", "#sections-scrollspy");
		bodyEl.setAttribute("data-bs-offset", "250");
		bodyEl.classList.add("cascina-crtistina");

		return () => {
			bodyEl.style.position = prevPositionCSS;
			bodyEl.removeAttribute("data-bs-spy");
			bodyEl.removeAttribute("data-bs-target");
			bodyEl.removeAttribute("data-bs-offset");
			bodyEl.classList.remove("cascina-crtistina");
		};
	}, []);
	return (
		<>
			<PageTemplate title="Cascina Cristina">
				<Container>
					<Row className="my-5">
						<Col md={{ span: 7, offset: 1 }}>
							<h5>
								Un polo territoriale e multifunzionale per la presa in carico
								della persona adulta con disturbi dello spettro autistico
							</h5>
							<p>
								Il progetto Cascina Cristina è la risposta di Abilitiamo al
								bisogno di strutture adatte ad ospitare giovani adulti con
								autismo.
							</p>
							<p>
								Vista l’assenza di strutture adatte ad ospitare giovani adulti con
								autismo nel territorio canturino e nelle aree circostanti, Cascina
								Cristina diventerà un modello pilota e uno stimolo per altri enti
								per la realizzazione di strutture similari, rispondendo così al
								forte bisogno del territorio e delle famiglie che vi appartengono.
							</p>
							<p className="mb-4">
								La struttura è attualmente in fase di realizzazione e grazie al
								lavoro di architetti, imprese e altri professionisti sarà presto
								inaugurata. Guarda le foto del cantiere che testinoniano lo stato
								dei lavori ad ottobre 2021.
							</p>
							<GalleryRestoration />
						</Col>
						<Col className={classNames("my-3 my-md-5")}>
							<div className={classNames("position-sticky")} style={{ top: 65 }}>
								<ArrowLink data={{ label: "Sostenitori", url: "/sostenitori" }} />
								<ArrowLink data={{ label: "Dona ora", url: "/dona-ora" }} />
							</div>
						</Col>
					</Row>
				</Container>
				<hr className="mt-4 mb-0" style={{ color: "var(--azure)" }} />
				<Container>
					<nav
						id="sections-scrollspy"
						className={classNames(
							"navbar",
							"position-sticky",
							"py-0",
							"my-0",
							styles.sectionsScrollspy
						)}
					>
						<ul className={classNames("nav", "w-100", styles.navigation)}>
							{sections.map((d, i) => (
								<li key={i} className={classNames("nav-item")}>
									<a
										className={classNames("nav-link", "px-0", "no-hover")}
										href={d.anchor}
									>
										<span className={styles.status}></span>
										<span className={styles.index}>
											{("00" + (i + 1)).slice(-2)}
										</span>
										<span className={styles.title}>{d.titleNav}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>
	
					{sections.map((d, i) => (
						<section id={d.anchor.slice(1)} key={i} className={styles.section}>
							<SectionCascinaCristina
								title={d.titleJSX}
								subtitle={d.subtitle}
								image={d.image}
								description={d.description}
							/>
						</section>
					))}
				</Container>
			</PageTemplate>
		</>
	);
}

const sections = [
	{
		anchor: "#spirito-del-progetto",
		titleNav: "Lo spirito del progetto",
		titleJSX: (
			<>
				Lo spirito
				<br />
				del progetto
			</>
		),
		subtitle: (
			<>
				Il progetto Cascina Cristina nasce dal diritto delle persone con autismo
				ad avere una casa. Lo spirito che lo anima è però molto più ampio
			</>
		),
		image: require("../images/cascina-cristina/01 casette 8 bit.png"),
		description: (
			<>
				Facendo leva sull&#39;esperienza maturata vivendo la condizione dei loro
				figli, i genitori dell&#39;associazione hanno deciso di mettersi al
				servizio del territorio per rendere meno difficile il percorso delle
				famiglie che si verranno a trovare in una situazione analoga a quella da
				loro vissuta. Da qui la sfida di creare un polo multifunzionale per
				l&#39;autismo. Un centro in grado di accogliere in forma residenziale
				adulti autistici a basso funzionamento, di offrire la possibilità di
				abilitazione a giovani autistici per i quali è sufficiente una gestione
				diurna, di dare sollievo temporaneo a quelle famiglie che attraversano
				un periodo complicato con il loro figlio autistico. Il polo Cascina
				Cristina si occuperà anche di formazione degli operatori del settore e
				cercherà di agevolare il percorso di diagnosi della potenziale persona
				autistica. Una volta accreditata, la struttura, lavorando in rete con le
				istituzioni sanitarie, organizzerà una presa in carico coordinata della
				persona autistica.
			</>
		),
	},
	{
		anchor: "#cambiamento",
		titleNav: "Il cambiamento perseguito",
		titleJSX: (
			<>
				Cambiamento
				<br />
				perseguito
			</>
		),
		subtitle: (
			<>
				Nel ripensare il progetto di vita della persona con autismo, Abilitiamo,
				seguendo gli studi della letteratura scientifica più recenti, intende
				perseguire un vero e proprio cambiamento, a 360 gradi, nelle modalità di
				intervento abilitativo
			</>
		),
		image: require("../images/cascina-cristina/02 expertam.jpg"),
		description: (
			<>
				Sempre di più, oggi, sta cambiando la visione della persona con
				disabilità che, da una gestione pressoché tutta assistenzialistica, sta
				passando a considerare la disabilità come parte integrante della persona
				e, quindi, all’applicazione di metodologie abilitative/psicoeducative,
				conferendogli dignità e pari opportunità, nei limiti delle sue capacità
				potenziali. La spinta a questa nuova visione è da attribuire a diverse
				cause: la situazione economica del Paese e delle Regioni, le scoperte
				scientifiche, il nuovo welfare, la partecipazione sempre più attiva
				della famiglia nel ripensare gli interventi sul proprio figlio. Anche
				Abilitiamo con il progetto “Cascina Cristina” partecipa al cambiamento,
				applicando, quanto più possibile, tutte le nuove tecniche e/o metodiche
				che sono emerse dagli studi scientifici più recenti e la conoscenza più
				specifica e approfondita dei vari professionisti del settore. In
				particolare, seguendo le linee di un progetto sperimentale, Abilitiamo
				intende dare uniformità e continuità all’utilizzo delle nuove tecniche
				proposte dalla letteratura, attualmente puntiformi e prive di
				connessioni, individuando i parametri che meglio si adattano al
				potenziamento delle abilità della persona con autismo nei vari contesti
				di vita, rendendola il più possibile regista e attore della propria
				vita.
			</>
		),
	},
	{
		anchor: "#presa-in-carico",
		titleNav: "Presa in carico a rete",
		titleJSX: <>Presa in carico a rete</>,
		subtitle: (
			<>
				La presa in carico della persona con autismo terrà in considerazione le
				attuali legislazioni e gli strumenti più moderni oggi a nostra
				disposizione. Il progetto globale di presa in carico è lo strumento che
				definisce i bisogni della persona in rapporto al contesto in cui vive
			</>
		),
		image: require("../images/cascina-cristina/03 pexels-pixabay-163064.jpg"),
		description: (
			<>
				Partendo da quanto previsto dalla legge 328/2000 e successive modifiche,
				la presa in carico, degli utenti dei servizi di Cascina Cristina, sarà
				formulata come il vero e proprio progetto globale di prese in carico, e
				sarà effettuata mediante i più moderni mezzi oggi a disposizione. Pur
				seguendo le fasi classiche di presa in carico che prevedono: la
				costituzione dell’équipe, rappresentata da tutta la rete che ruota
				intorno alla persona, la stesura del piano individuale (PI), che si
				concretizzerà poi nel Progetto di Vita, la verifica periodica degli
				interventi predisposti nel PI, verranno messe in atto procedure, più
				moderne quali il progetto matrici ecologiche, multistep network
				diagnostic model, ecc. Inoltre, la presa in carico così definita sarà
				affiancata da una presa in carico clinico/ospedaliera, con relativa
				stesura del Piano Assistenziale Individuale (PAI), per eventuali
				interventi sanitari.
				<br />
				Il tutto per consentire al giovane fruitore di cascina Cristina di
				sfruttare al meglio le sue potenzialità per diventare adulto a tutti gli
				effetti, esprimendosi in tutti i possibili ambiti della vita. Più in
				dettaglio, sulla base del suo Progetto di Vita, la persona con autismo
				dovrà svolgere attività lavorativa, ricreativa, sportiva, dovrà potersi,
				una volta acquisita la capacità, relazionarsi e socializzare con gli
				altri, dovrà avere e sapersi gestire il tempo libero.
			</>
		),
	},
	{
		anchor: "#comunita",
		titleNav: "La comunità abitativa",
		titleJSX: (
			<>
				Comunità
				<br />
				abitativa
			</>
		),
		subtitle: (
			<>
				La comunità abitativa accoglierà stabilmente dodici persone adulte con
				autismo
			</>
		),
		image: require("../images/cascina-cristina/04 render residenziale.jpeg"),
		description: (
			<>
				Il modello sarà quello della &quot;community farm&quot;, secondo
				analoghe esperienze estere e italiane. Cascina Cristina è collocata in
				un contesto rurale e ciò favorirà l&#39;abilitazione fondata sul modello
				della fattoria. Esperienze già fatte da altre realtà hanno dimostrato
				che si tratta di un approccio semplice ma al tempo stesso ricco di
				situazioni e di stimoli che si adattano bene alle caratteristiche della
				persona autistica. Cascina Cristina, pur se collocata in un contesto
				rurale, è allo stesso tempo integrata con il territorio urbano di
				Fecchio (località di Cantù), trovandosi di fronte alla Parrocchia di San
				Carlo e all’annesso oratorio. Ciò eviterà l’isolamento e favorirà la
				relazione delle persone autistiche con gli abitanti del luogo. La
				residenza sarà costituita da 6 camere da letto, ciascuna in grado di
				ospitare 2 letti, e da tanti servizi visibili nelle piantine
				dell’edificio raffigurate nell’immagine.
			</>
		),
	},
	{
		anchor: "#diurno",
		titleNav: "Servizio centro diurno",
		titleJSX: (
			<>
				Centro
				<br />
				diurno
			</>
		),
		subtitle: (
			<>
				Il centro diurno ospiterà 15 persone con autismo che affiancheranno,
				durante la loro permanenza al centro, i 12 ospiti presenti nella
				comunità residenziale
			</>
		),
		image: require("../images/cascina-cristina/05 render diurno.jpeg"),
		description: (
			<>
				Il centro diurno è un servizio sociale, semiresidenziale e territoriale
				rivolto a giovani adulti con autismo che vivono ancora in famiglia. Il
				progetto prevede, dopo una attenta valutazione individuale delle proprie
				competenze, la messa a punto di un piano di intervento personalizzato
				che consenta ai fruitori, come per chi vive nella comunità residenziale,
				di ottimizzare e/o sviluppare tutte quelle abilità necessarie a
				migliorare tutte le autonomie spendibili nel proprio contesto di vita
				oltre che la loro autostima ed autodeterminazione. Il centro potrà
				accogliere fino a 15 persone, che si affiancheranno agli ospiti già
				presenti in struttura nella gestione della quotidianità. L’obiettivo è
				innalzare quanto più possibile la loro qualità di vita.
			</>
		),
	},
	{
		anchor: "#servizi",
		titleNav: "Sollievo e altri servizi",
		titleJSX: (
			<>
				Sollievo
				<br />e altri servizi
			</>
		),
		subtitle: (
			<>
				Un servizo sollievo per le famiglie in <i>burn-out</i>
			</>
		),
		image: require("../images/cascina-cristina/06 nick-fewings-XqOBKnxDSfE-unsplash.jpg"),
		description: (
			<>
				In alcune circostanze, le persone con autismo possono attraversare
				momenti di crisi molto forti che stressano loro e loro le famiglie.
				Questi periodi possono essere talmente lunghi da non riuscire più a
				gestire la quotidianità e spesso mandano le famiglie in <i>burn-out</i>.
				Cascina Cristina disporrà di due posti per ospitare temporaneamente
				persone che attraversano queste crisi, in modo da dare il tempo alle
				famiglie di riprendersi e valutare il tipo di intervento sociosanitario
				e/o riabilitativo-abilitativo da effettuare sul proprio figlio con
				autismo.
			</>
		),
	},
	{
		anchor: "#sostegno-alla-famiglia",
		titleNav: "Sostegno alle famiglie",
		titleJSX: (
			<>
				Sostegno
				<br />
				alle famiglie
			</>
		),
		subtitle: (
			<>
				A Cascina Cristina, al fine di aiutare le famiglie a non andare in
				burn-out, sarà messo a loro disposizione uno sportello psicologico di
				sostegno individuale e un gruppo di auto mutuo aiuto dinamico
			</>
		),
		image: require("../images/cascina-cristina/07 tumblr_osclmshNyl1slhhf0o1_1280.jpg"),
		description: (
			<>
				Un buon intervento sulla persona con autismo necessita che tutte le
				persone attorno a lui siano in uno stato psicologico più sereno
				possibile e, nel contempo, lavorino tutti con la medesima modalità, a
				partire in primis dalla famiglia la quale deve far fronte continuamente
				e costantemente a richieste dirette e indirette, anche pesanti, del
				proprio figlio e/o delle persone che lo circondano. Il sostegno alla
				famiglia diventa quindi parte integrante del progetto
				riabilitativo/abilitativo che si andrà a realizzare sugli ospiti sia
				dell’unità residenziale sia del centro diurno.
				<br />
				Il sostegno alla famiglia sarà fornito sia tramite sportello
				psicologico, per interventi individuali se richiesti, sia mediante la
				costituzione di un gruppo di auto mutuo aiuto autogestito e, quando
				necessario e/o richiesto potrà essere guidato dai diversi professionisti
				presenti in Cascina.
			</>
		),
	},
	{
		anchor: "#sindrome-autistica",
		titleNav: "Comprendere la sindrome autistica",
		titleJSX: <>Comprendere l'autismo</>,
		subtitle: (
			<>
				Nell’ottica di un sistema integrato e innovativo Cascina Cristina
				diventerà, nel tempo, un centro per lo studio della sindrome autistica
				per il territorio canturino e dintorni.
			</>
		),
		image: require("../images/cascina-cristina/08 jens-johnsson-36a3U4_UUHY-unsplash.jpg"),
		description: (
			<>
				Il progetto “Cascina Cristina” prevede, oltre agli specifici interventi
				socio assistenziale, psicoeducativi e abilitativi sui fruitori, sia
				della comunità residenziale che del centro diurno, anche progetti che
				non impattano direttamente sugli ospiti, ma bensì sull’intera comunità
				che a diverso titolo ruota intorno alla sindrome autistica. Infatti, al
				fine di fare formazione e/o informazione, si terranno corsi, convegni,
				workshop, conferenze, articoli su riviste divulgative e
				pseudoscientifiche. Si consentirà così a psicologi, operatori,
				pedagogisti, arte-terapisti, fisiatri, volontari, familiari e altre
				possibili figure professionali di approfondire le conoscenze in materia
				di autismo e sulle più moderne terapie e interventi che possono essere
				messe in atto nel proprio ambito lavorativo.
			</>
		),
	},
];
