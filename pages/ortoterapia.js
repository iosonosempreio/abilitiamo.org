import { Container, Row, Col } from "react-bootstrap";
import { PageTemplate, SectionCascinaCristina } from "../components/Templates";
import GalleryCascinaFinished from "../components/GalleryCascinaFinished";
import ArrowLink from "../components/ArrowLink";
import classNames from "classnames";
import styles from "../styles/cascina-cristina.module.scss";
import { useLayoutEffect } from "react";
// import { ScrollSpy } from "bootstrap/dist/js/bootstrap.bundle.js";

// calendari
import calendarioGennaio from "../public/orticoltura/materiali/Gennaio.pdf";
import calendarioFebbraio from "../public/orticoltura/materiali/Febbraio.pdf";
import calendarioMarzo from "../public/orticoltura/materiali/Marzo.pdf";
import calendarioAprile from "../public/orticoltura/materiali/Aprile.pdf";
import calendarioMaggio from "../public/orticoltura/materiali/Maggio.pdf";
import calendarioGiugno from "../public/orticoltura/materiali/Giugno.pdf";
import calendarioLuglio from "../public/orticoltura/materiali/Luglio.pdf";
import calendarioAgosto from "../public/orticoltura/materiali/Agosto.pdf";
import calendarioSettembre from "../public/orticoltura/materiali/Settembre.pdf";
import calendarioOttobre from "../public/orticoltura/materiali/Ottobre.pdf";
import calendarioNovembre from "../public/orticoltura/materiali/Novembre.pdf";
import calendarioDicembre from "../public/orticoltura/materiali/Dicembre.pdf";

export default function Ortoterapia() {
	useLayoutEffect(() => {
		const bodyEl = document.querySelector("body");
		const prevPositionCSS = bodyEl.style.position;
		bodyEl.style.position = "relative";
		bodyEl.setAttribute("data-bs-spy", "scroll");
		// bodyEl.setAttribute("data-bs-target", "#sections-scrollspy");
		bodyEl.setAttribute("data-bs-offset", "250");

		let _ScrollSpy, _scrollSpyContentEl;
		import("bootstrap/dist/js/bootstrap.bundle.js").then((bootstrap) => {
			const { ScrollSpy } = bootstrap;
			_ScrollSpy = ScrollSpy;
			_scrollSpyContentEl = document.querySelector('[data-bs-spy="scroll"]');
			ScrollSpy.getOrCreateInstance(_scrollSpyContentEl).refresh();
		});

		return () => {
			bodyEl.style.position = prevPositionCSS;
			bodyEl.removeAttribute("data-bs-spy");
			bodyEl.removeAttribute("data-bs-target");
			bodyEl.removeAttribute("data-bs-offset");
			_ScrollSpy.getOrCreateInstance(_scrollSpyContentEl).dispose();
		};
	}, []);
	return (
		<>
			<PageTemplate title="Ortoterapia">
				<Container>
					<Row className="my-5">
						<Col md={{ span: 7, offset: 1 }}>
							<h5>Ortoterapia, anche detta orticoltura terapeutica. Ecco come la facciamo in Cascina Cristina.</h5>
							<p>
								A Cascina Cristina l’orticoltura diventa strumento di crescita, autonomia e benessere. Le attività nel
								verde, pensate per persone con autismo, uniscono la cura delle piante all’acquisizione di competenze
								cognitive, relazionali e pratiche. Coltivare un orto, seminare, prendersi cura di una serra: ogni gesto
								è parte di un percorso educativo e terapeutico. Grazie a spazi accessibili e a una programmazione
								attenta, ogni partecipante trova il proprio ritmo, stimolando autonomia e senso di realizzazione. Un
								progetto che intreccia natura, riabilitazione e tradizione agricola, per valorizzare le persone e il
								territorio.
							</p>
							{/* <p className="mb-4">Galleria fotografica...</p> */}
							{/* <GalleryCascinaFinished /> */}
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
						className={classNames("navbar", "position-sticky", "py-0", "my-0", styles.sectionsScrollspy)}
					>
						<ul className={classNames("nav", "w-100", styles.navigation)}>
							{sections.map((d, i) => (
								<li key={i} className={classNames("nav-item")}>
									<a className={classNames("nav-link", "px-0", "no-hover")} href={d.anchor}>
										<span className={styles.status}></span>
										<span className={styles.index}>{("00" + (i + 1)).slice(-2)}</span>
										<span className={styles.title}>{d.titleJSX}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>

					{sections.map((d, i) => (
						<section id={d.anchor.slice(1)} key={i} className={styles.section}>
							<SectionCascinaCristina // il titolo di questo componente è fuorviante. AGGIORNARLO
								title={d.titleString}
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
		anchor: "#introduzione",
		titleString: "Ortoterapia, terapia orticolturale e orticoltura terapeutica",
		titleJSX: (
			<>
				Introduzione
				<br />
				Teorica
			</>
		),
		subtitle: <></>,
		image: require("../images/orticoltura/Foto da Gaia Paparella(26).jpg"),
		description: (
			<>
				<p>
					Per comprendere al meglio gli scopi e il contesto di questa pratica bisogna in primo luogo comprendere
					l’utilizzo della parola orticoltura. Infatti nel contesto della Terapia orticolturale il termine ha una
					accezione anglosassone, più simile al termine italiano giardinaggio. La parola inglese horticultural è un
					aggettivo che indica la coltivazione e la cura di qualsiasi pianta, in ambito professionale o amatoriale. Ne
					consegue che il significato che possiamo attribuire al termine in questo contesto è proprio quello di attività
					che comprende tutte le azioni necessarie alla coltivazione di piante quali ortaggi ma anche floricole e
					frutta. Infatti questa disciplina si basa proprio sul{" "}
					<i>contatto coi vegetali in un contesto il più possibile naturale</i>.
				</p>
				<p>
					Per <b>Terapia Orticolturale</b> (Horticultural Therapy) può intendersi un’attività che utilizza orticoltura e
					giardinaggio per raggiungere specifici obiettivi terapeutici e/o riabilitativi di coloro che la praticano,
					focalizzandosi sugli aspetti sociali, cognitivi, psicologici e fisici. In particolare le attività nel verde
					che vengono svolte con persone autistiche, si pongono come obiettivi quelli di:
				</p>
				<ul>
					<li>promuovere il benessere degli utenti</li>
					<li>permettere l’acquisizione di comportamenti adattativi,</li>
					<li>
						promuovere le autonomie, sia personali (prendersi cura di sé), sia sociali (relazionarsi con gli altri,
						orientarsi),
					</li>
					<li>permettere l’acquisizione di competenze sia specifiche, che trasferibili nella vita quotidiana</li>
					<li>migliorare la manualità fine.</li>
				</ul>
				<p>
					Si prevedono quindi attività strutturate, condotte da personale educativo specializzato, finalizzate a
					rinforzare e/o sviluppare le abilità cognitive utili non solo nell’ambito della comunicazione ma anche nella
					sfera delle autonomie, del comportamento sociale e nell’apprendimento.
				</p>
				<p>
					Al interno di Cascina Cristina, a fianco alle attività di Terapia Orticolturale, è strutturato un programma di
					<b>Orticoltura Terapeutica</b>: attività simile come impianto e conduzione alla Terapia Orticolturale, ma
					senza il coinvolgimento di ortoterapisti professionali, figure professionali non ancora formate e riconosciute
					in Italia. Queste attività si basano sulla gestione quotidiana di una vera e propria realtà agricola nata in
					questi anni all’interno e intorno alla Cascina.
				</p>
				<p>
					Inoltre per incrementare l’integrazione di attività legate all’ambito agricolo, all’interno della quotidianità
					degli utenti della Cascina, alcune attività, più semplici e ormai ben consolidate, vengono svolte in autonomia
					da ragazzi, educatori ed OSS della struttura.
				</p>
				<p>
					Come ulteriore passo verso l’apprendimento di abilità specifiche e l’autonomia personale, sono stati avviati
					anche dei progetti personalizzati per alcuni utenti che hanno mostrato particolare interesse e predisposizione
					per i lavori legati all’ambito del verde.
				</p>
				<p>
					Grazie allo sviluppo di tutte queste attività, ogni ragazzo ha la possibilità di frequentare gli spazi
					agricoli almeno una volta a settimana e beneficiare del contatto con la natura.
				</p>
			</>
		),
	},
	{
		anchor: "#cosa-facciamo",
		titleString: "Cosa facciamo",
		titleJSX: (
			<>
				Cosa
				<br />
				facciamo
			</>
		),
		subtitle: <>Attività e coltivazione</>,
		image: require("../images/orticoltura/Foto da Gaia Paparella(10).jpg"),
		description: (
			<>
				<h6>Attività</h6>
				<p>Le attività vengono programmate, progettate e sviluppate in modo che siano:</p>
				<ul>
					<li>utili agli obiettivi definiti dagli educatori</li>
					<li>compatibili con le abilità dei partecipanti</li>
					<li>sostenibili dal punto di vista agronomico</li>
					<li>coerenti con il periodo dell’anno in cui si svolgono</li>
				</ul>
				<p>
					La programmazione delle attività si basa sulla consequenzialità delle pratiche che portano alla crescita dei
					vegetali, infatti uno degli aspetti fondamentali dell’orticoltura terapeutica, è la gratificazione legata
					all’accudimento di un essere vivente, in concreto alla capacità di trasformare un piccolo seme in una pianta,
					da cui raccogliere frutti. Per questo motivo le attività partono dalla semina o dalla propagazione vegetativa,
					passando per la cura e il mantenimento delle piante con bagnature, rinvasi, trapianti, potature, fino alla
					raccolta, ma anche all’autoproduzione di seme.
				</p>
				<p>Le attività si sviluppano in due aree principali.</p>
				<ol>
					<li>
						La coltivazione di ortaggi, piante aromatiche e mais per uso interno, per le attività della cucina didattica
						o per laboratori creativi.
					</li>
					<li>
						La produzione di piantine da orto, aromatiche, floricole e mais che vengono utilizzate per il sostegno delle
						attività
					</li>
				</ol>
				<p>
					Le attività in gruppo sono inserite nel calendario settimanale della Cascina. Durano 45 minuti e con la
					partecipazione di non più di 4 ospiti per ciascun turno. Le attività individuali invece possono durare da 15
					minuti a 1 ora e 30 minuti in base alle specificità dei singoli utenti che le svolgono.
				</p>
				<h6>Coltivazione</h6>
				<p>
					Grazie alla presenza della serra nel corso dell’anno riusciamo a sviluppare interi cicli di produzione di
					piante di vario genere. Produciamo piantine da orto, aromatiche, floricole, mais ed officinali. Per garantire
					la massima ecocompatibilità e una fruizione sicura da parte degli utenti, abbiamo scelto un metodo di
					coltivazione <i>low input</i> che si basa principalmente sulla prevenzione delle problematiche fitosanitarie.
					Infatti le nostre pratiche si basano all’utilizzo di materiali sani e sicuri, biostimolanti che promuovono le
					naturali difese della pianta, fertilizzanti organici, tecniche agronomiche quali trappole fotocromatiche,
					rotazioni colturali, sovesci e consociazioni.
				</p>
			</>
		),
	},
	{
		anchor: "#spazi",
		titleString: "I nostri spazi",
		titleJSX: (
			<>
				I nostri
				<br />
				spazi
			</>
		),
		subtitle: <>Gli spazi di Cascina Cristina</>,
		image: require("../images/orticoltura/IMG_20240419_150640.jpg"),
		description: (
			<>
				<p>
					Grazie al sostegno di Fondazione Cariplo e di alcuni donatori sono stati costruiti e vengono utilizzati
					diversi spazi di coltivazione:
				</p>
				<ul>
					<li>un piccolo campo adiacente la struttura per le colture in pieno campo come mais e ortaggi</li>
					<li>
						nove cassoni di coltivazione rialzati, che consentono ai ragazzi di lavorare più comodamente e che ospitano
						ortaggi
					</li>
					<li>un piccolo orto a terra interno al perimetro della struttura</li>
					<li>
						una serra di 50 mq con regolazione termica e luminosa, utilizzata durante tutta la stagione invernale, per
						svolgere con continuità l’attività di orticoltura terapeutica anche quando le condizioni climatiche non
						consentono di farlo all’esterno; allo stesso tempo anche durante l’estate, quando le temperature sono
						eccessivamente elevate per consentire di lavorare in campo, vengono svolte le attività nella serra
						climatizzata.
					</li>
				</ul>
				<p>
					Per ottenere il massimo dei benefici dall’attività, tutti gli spazi sono stati allestiti in modo da garantire
					alcune caratteristiche fondamentali:
				</p>
				<ul>
					<li>altezza: adeguata alle capacità motorie dei partecipanti</li>
					<li>luminosità: non eccessiva negli spazi aperti e sufficiente nei locali chiusi</li>
					<li>microclima favorevole (in particolare temperatura e assenza di vento)</li>
					<li>
						spazi ampi che permettano a operatori e utenti anche con mobilità limitata di muoversi e lavorare
						comodamente.
					</li>
				</ul>
				<p>
					Per agevolare l’apprendimento e promuovere le autonomie, tutti gli spazi e gli oggetti utilizzati sono
					contrassegnati con CAA. La Comunicazione Aumentativa e Alternativa (CAA) rappresenta un’area della pratica
					clinica che cerca di compensare la disabilità temporanea o permanente di persone con bisogni comunicativi
					complessi. Utilizza tutte le competenze comunicative della persona, includendo le vocalizzazioni o il
					linguaggio verbale esistente, i gesti, i segni, la comunicazione con ausili e la tecnologia avanzata.
				</p>
				<p>
					In particolare nella serra un’area è dedicata a tutto il materiale per la preparazione dei partecipanti alle
					attività; in questo modo e grazie alla CAA gli utenti possono prepararsi autonomamente sia per quanto riguarda
					la vestizione che la preparazione del materiale necessario allo svolgimento dei lavori.
				</p>
			</>
		),
	},
	{
		anchor: "#progetti",
		titleString: "Progetti",
		titleJSX: (
			<>
				I nostri
				<br />
				rogetti
			</>
		),
		subtitle: <>COMEACASA: COltiviaMo antichE varietà di mAis e orticole alla CAScina cristina di cAntù</>,
		image: require("../images/orticoltura/IMG_20240607_150302.jpg"),
		description: (
			<>
				<p>
					A seguito dell partecipazione al bando Coltivare Valore 2021, il Consiglio di Amministrazione della Fondazione
					Cariplo ha deliberato un contributo per il progetto COMEACASA: COltiviaMo antichE varietà di mAis e orticole
					alla CAScina cristina di cAntù.
				</p>
				<p>
					Il progetto è stato redatto in partenariato con l’Università degli Studi di Milano. Lo scopo principale è
					quello di ripristinare la funzione agricola di Cascina Cristina, fornendo al contempo attività quotidiane a
					contatto con il verde per una trentina di ragazzi con autismo, a valenza sia terapeutica che formativa.
					Inoltre, si vuole caratterizzare la Cascina come polo per la custodia, lo sviluppo e la divulgazione del
					patrimonio agricolo locale. Il progetto prevede infatti il recupero di varietà locali di orticole e mais,
					allevate con basso input nutritivo; alle attività partecipano attivamente i giovani residenti, gli utendti del
					Centro Diurno della Cascina ed esterni.
				</p>
				<p>Due gli obiettivi specifici:</p>
				<ol>
					<li>
						La valorizzazione delle produzioni agricole tradizionali al fine di diffonderne la conoscenza in un’ottica
						di educazione alimentare e di custodia del territorio, attraverso la produzione e la vendita di piantine da
						trapianto e ortaggi di varietà locali, sottoutilizzate o obsolete, coltivate in regime biologico e
						attraverso la produzione in quantità limitate di farine di mais antichi lombardi coltivati in una parcella
						di suolo in regime low-input.
					</li>
					<li>
						La valorizzazione delle competenze individuali dei ragazzi autistici attraverso un percorso di orticoltura
						terapeutica, l’organizzazione di percorsi di formazione individuali, l’inserimento lavorativo di alcuni
						soggetti per con autonomie e competenze sufficienti, e di inclusione dei giovani nelle attività di vendita
						e/o di distribuzione dei prodotti trasformati.
					</li>
				</ol>
				<p>
					In questi anni di progetto sono state individuate varietà antiche di mais e di colture orticole meglio
					rispondenti alle condizioni pedoclimatiche o all’allevamento in serra, con tecniche low input. In particolare
					abbiamo coltivato per più anni con successo, riuscendo in alcuni casi anche ad autoprodurre la semente per gli
					anni successivi:
				</p>
				<ul>
					<li>Pisello Lavadino</li>
					<li>Pisello Fava nero di Treviso</li>
					<li>Pisello Large Gray</li>
					<li>Pisello Golden Sweet</li>
					<li>Pisello Porpora</li>
					<li>Pisello Sicomoro</li>
					<li>Zucchino giallo rugoso friulano</li>
					<li>Pomodori Cuore di bue Rosa</li>
					<li>Pomodoro gigante di Cantù</li>
					<li>Pomodoro del nonno di Eupilio</li>
					<li>Melanzana rossa del Pollino</li>
					<li>Sedano rosso di Orbassano</li>
					<li>Cipolla di Brunate</li>
					<li>Bietolina</li>
					<li>Lattuga di Gerico</li>
					<li>Lattuga di Albino</li>
					<li>Lattuga Brown</li>
					<li>Mais Brianzolo di Garbagnate Monastero</li>
					<li>Bianco di Stezzano (BG)</li>
					<li>Mais rostrato rosso di Cerete (Bg)</li>
				</ul>
			</>
		),
	},
	{
		anchor: "#collaborazioni",
		titleString: "Collaborazioni e Sponsor",
		titleJSX: (
			<>
				Collaborazioni
				<br />e Sponsor
			</>
		),
		subtitle: <></>,
		image: require("../images/orticoltura/Copia di IMG_20230710_115421.jpg"),
		description: (
			<>
				<h5>Partner di progetto</h5>
				<p>
					<b>Dipartimento di Scienze Scienze Agrarie e Alimentari</b> dell'Università degli Studi di Milano
				</p>
				<h5>Collaborazioni</h5>
				<p>Centro di Ricerca Cerealicoltura e Colture Industriali Sede di Bergamo (CREA)</p>
				<p>IL FAGIOLO MAGICO, Frazione Pagnano località Fraino 2, Asso (CO)</p>
				<p>FONDAZIONE MINOPRIO, Viale Raimondi, 54 – 22070 Vertemate con Minoprio (CO)</p>
				<h5>Sostenitori</h5>
				<p>IL GIARDINO DI LUCA E VIOLA - Via 1° Maggio, 4/B, 22030 Orsenigo CO</p>
				<p>FERTIL s.r.l. – Via Ninola, 34 – 24050 Calcinate (BG)</p>
				<p>VIVAI NORD, Via Brianza, 1, 22040 Lurago D’erba CO</p>
				<p>VITAFLOR, Strada Statale 591, Mazzone di Codogno (LO)</p>
			</>
		),
	},
	{
		anchor: "#materiali",
		titleString: "Materiali",
		titleJSX: (
			<>
				Scarica
				<br />
				Materiali
			</>
		),
		subtitle: <></>,
		image: require("../images/orticoltura/materiali.png"),
		description: (
			<>
				<p>Calendari</p>
				<ArrowLink data={{ label: "Gennaio", url: calendarioGennaio, download: true }} />
				<ArrowLink data={{ label: "Febbraio", url: calendarioFebbraio, download: true }} />
				<ArrowLink data={{ label: "Marzo", url: calendarioMarzo, download: true }} />
				<ArrowLink data={{ label: "Aprile", url: calendarioAprile, download: true }} />
				<ArrowLink data={{ label: "Maggio", url: calendarioMaggio, download: true }} />
				<ArrowLink data={{ label: "Giugno", url: calendarioGiugno, download: true }} />
				<ArrowLink data={{ label: "Luglio", url: calendarioLuglio, download: true }} />
				<ArrowLink data={{ label: "Agosto", url: calendarioAgosto, download: true }} />
				<ArrowLink data={{ label: "Settembre", url: calendarioSettembre, download: true }} />
				<ArrowLink data={{ label: "Ottobre", url: calendarioOttobre, download: true }} />
				<ArrowLink data={{ label: "Novembre", url: calendarioNovembre, download: true }} />
				<ArrowLink data={{ label: "Dicembre", url: calendarioDicembre, download: true }} />
			</>
		),
	},
];
