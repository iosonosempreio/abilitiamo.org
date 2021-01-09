import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import ReactPlayer from "react-player"
import classNames from "classNames"

export default function StoriaAbilitiamo() {
	return (
		<>
			<Navigation />
			{/* <div className={[styles.pageHeader, "text-center"].join(" ")}>
				<span>
					<h1>Storia di Abilitiamo</h1>
				</span>
			</div> */}
			<div className="container-fluid" style={{ backgroundColor: "var(--beige)" }}>
				<div className={["container", styles.pageHeader].join(" ")}>
					<div className="col-12 col-md-10 offset-md-1">
						<span>
							<h1>Organizzazione di Abilitiamo</h1>
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-7 offset-md-1 my-5">
						<p className={["paragraph", "paragraphBig"].join(" ")}>
							L’Associazione Abilitiamo è un ente del terzo settore senza scopo di lucro che opera in due distretti
							territoriali.
							<br />
							Possono aderire all’associazione tutte le persone che, a vario titolo, possono e desiderano contribuire al
							miglioramento della qualità di vita dei ragazzi con autismo.
						</p>
					</div>
					<div className="col-12 col-md-7 offset-md-1 mb-1">
						<h3>Soci</h3>
						<p>
							Undici soci, rappresentanti cinque famiglie con figli affetti dalla sindrome autistica, hanno costituito nel 2017
							l’Associazione Abilitiamo Autismo onlus –abitare e abilitare– con sede legale a Carugo (Co) in via per Gattedo,
							19/7 e con sede operativa presso lo studio Emme di Cantù (Co) in via Susa, 15.
						</p>
						<p>
							L’associazione Abilitiamo Autismo è un’organizzazione senza scopo di lucro che persegue solo finalità sociali.
							Possono aderire familiari, amici, educatori, professionisti e tutti coloro che desiderano contribuire alla
							realizzazione dei progetti della stessa. L’associazione, opera sul territorio canturino e nelle aree circostanti
							comprese nel distretto territoriale di ATS Insubria.
						</p>
						<p>
							Attualmente, la compagine associativa consta, oltre agli 11 soci fondatori, di 22 soci ordinari, 5 onorari e
							diversi amici. Inoltre, a vario titolo, è supportata/sostenuta da diversi enti pubblici e privati. Fanno parte
							del consiglio direttivo tutti i soci fondatori, di seguito elencati.
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
						<h3 className="mt-5">Comitato Scientifico</h3>
						<p>
							Per svolgere al meglio il suo lavoro nel rispetto dei propri obiettivi e secondo le più moderne tecniche fondate
							sul concetto dell’evidence based, l'associazione ha costituito un comitato scientifico rappresentato da esperti
							del settore e della comunicazione. Di seguito i loro nomi, alcuni cenni del loro Curriculum Vitae e il ruolo che
							avranno nel comitato.
						</p>
						<p>
							<strong>Dott. Roberto Keller</strong> – medico chirurgo specializzato in Psichiatria e Neuropsichiatria
							infantile. Dirigente Medico di Psichiatria. Responsabile ambulatorio disturbi pervasivi dello sviluppo in età
							adulta ASL TO 2. Componente del Panel per la stesura delle Linee Guida per la diagnosi e il trattamento dei
							disturbi dello spettro autistico negli adulti su mandato dell’Istituto Superiore di Sanità.
						</p>
						<p>
							<strong>Dott. Carlo Fraticelli</strong> – Medico chirurgo specializzato in Psichiatria, Psicologia, Tossicologia.
							Direttore del Dipartimento Gestionale Salute Mentale e Dipendenze dell’ASST Lariana e Direttore dell’Unità
							Operativa Aziendale, Azienda Socio Sanitaria Territoriale (ASST) Lariana.
						</p>
						<p>
							<strong>Dott. Massimo Molteni</strong> – Medico chirurgo specializzato in Neuropsichiatra infantile. Direttore
							Sanitario Centrale - Responsabile Area psicopatologia dello sviluppo, psicologia del contesto socio-ambientale e
							dei contesti educativi, La Nostra famiglia - IRCCS Medea di Bosisio Parini (LC). Componente del Panel per la
							stesura delle Linee Guida per la diagnosi e il trattamento dei disturbi dello spettro autistico nei bambini e
							negli adolescenti su mandato dell’Istituto Superiore di Sanità.
						</p>
						<p>
							<strong>Dott. Daniele Merazzi</strong> – Medico chirurgo specializzato in Pediatria. Direttore del dipartimento Materno Infantile e
							Direttore Unità Operativa Complessa Pediatria-Neonatologia-Terapia Intensiva Neonatale dell’Ospedale V alduce di
							Como (CO). Gli studi condotti gli hanno permesso di presentare delle comunicazioni ai congressi annuali
							dell’American Thoracic Society, e pubblicate nel supplemento annuale dell’American Journal Respiratory Critical
							Care Medicine. (1999; 2000; 2001)
						</p>
						<p>
							<strong>Dott. Maurizio Bonati</strong> – Medico chirurgo. Capo del Dipartimento di Salute Pubblica presso l’Istituto di Ricerche
							Farmacologiche “Mario Negri” IRCCS di Milano (MI). Professore alla Scuola di Specializzazione in Neuropsichiatria
							infantile dell’Università degli Studi di Milano. E’ autore o coautore di alcune centinaia di pubblicazioni
							scientifiche. Collabora alla redazione di riviste scientifiche nazionali e internazionali ed è Direttore di
							redazione di Ricerca & Pratica.
						</p>
						<p>
							<strong>Dott.ssa Marilena Zacchini</strong> – Educatrice professionale, esperta nella gestione di adulti con autismo. Formatrice.
							Responsabile, coordinatrice e ideatrice di diversi progetti, tra i quali “0-30 della Fondazione Sospiro” Istituto
							Fondazione Ospedaliero di Sospiro onlus (CR)
						</p>
						<p>
							<strong>Dott. Giovanni Miselli</strong> – Psicologo. Dirigente Sanitario presso Istituto Fondazione Ospedaliero di Sospiro onlus
							(CR). Docente per 15 Scuole di Specializzazione in Psicoterapia sul territorio Nazionale, Scuole di
							Specializzazione Quadriennale in Psicoterapia Miur. Coordinatore Progetto “Il bambino in ospedale: progetto
							pilota di prevenzione e di ascolto”
						</p>
						<p>
							<strong>Dott.ssa Dafne Rigoldi</strong> – Insegnante di sostegno, pedagogista ed educatrice della cooperativa Fabula onlus (MI).
							Collaboratrice di Blue Diary, l’agenda visiva pensata per le persone autistiche, sviluppata in sinergia con
							Smemoranda, Fabula Onlus e Fondazione Fracta Limina. Un progetto innovativo nato alcuni anni fa per facilitare,
							attraverso un rinforzo visivo, i bisogni comunicativi degli autistici.
						</p>
						<p>
							<strong>Dott.ssa Angela Aresi</strong> – psicologa, Psicoterapeuta e analista del comportamento supervisionata. Interventi come
							consulente ABA supervisionata. Inter- venti come tecnico ABA. Interventi educativi e riabilitativi bambini e
							adulti affetti da disturbi dello spettro autistico. Diagnosi specifica DPS. Diagnosi di personalità. Diagnosi
							DSA. Psicoterapia.
						</p>
						<p>
							<strong>Dott. Francesco Moscatelli</strong> – Giornalista. Lavora per “La Stampa” di Torino dal 2011 in qualità di redattore delle
							Cronache. Autore di due volumi: Cricket Club (Add, 2013) e il Vino del Papa (Compagnia editoriale Aliberti,
							2014).
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
