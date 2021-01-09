import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// import ReactPlayer from "react-player"
// import classNames from "classNames"
import ArrowLink from "../components/arrowLink"

export default function StoriaAbilitiamo() {
	const data = useStaticQuery(query)
	const sidebar1 = [
		{ label: "Storia di Abilítiamo", url: "/storia-abilitiamo" },
		// { label: "Bilanci", url: "/" },
		{ label: "Diventa socio", url: "/" },
	]
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
				<div className="row my-5">
					<div className="col-12 col-md-7 offset-md-1">
						<p className={["paragraph", "paragraphBig"].join(" ")}>
							L’Associazione Abilitiamo è un ente del terzo settore senza scopo di lucro che opera in due distretti
							territoriali.
							<br />
							Possono aderire all’associazione tutte le persone che, a vario titolo, possono e desiderano contribuire al
							miglioramento della qualità di vita dei ragazzi con autismo.
						</p>
						<h3 className="mt-5">Soci</h3>
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
							<div className="row d-flex align-items-center my-5">
								<div className="col-6 col-md-3">
									<Img
										className={styles.imgCover}
										fluid={data.keller.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-6 col-md-9">
									<strong>Dott. Roberto Keller</strong> – Presidente CS
									<br />
									Medico chirurgo specializzato in Psichiatria e Neuropsichiatria infantile. Dirigente Medico di Psichiatria.
									Responsabile ambulatorio disturbi pervasivi dello sviluppo in età adulta ASL TO 2. Componente del Panel per la
									stesura delle Linee Guida per la diagnosi e il trattamento dei disturbi dello spettro autistico negli adulti su
									mandato dell’Istituto Superiore di Sanità.
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.fraticelli.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott. Carlo Fraticelli</strong> – Riferimento ATS Insubria
									<br />
									Medico chirurgo specializzato in Psichiatria, Psicologia, Tossicologia. Direttore del Dipartimento Gestionale
									Salute Mentale e Dipendenze dell’ASST Lariana e Direttore dell’Unità Operativa Aziendale, Azienda Socio
									Sanitaria Territoriale (ASST) Lariana.
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.molteni.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott. Massimo Molteni</strong> – Neuropsichiatra infantile
									<br />
									Medico chirurgo specializzato in Neuropsichiatra infantile. Direttore Sanitario Centrale - Responsabile Area
									psicopatologia dello sviluppo, psicologia del contesto socio-ambientale e dei contesti educativi, La Nostra
									famiglia - IRCCS Medea di Bosisio Parini (LC). Componente del Panel per la stesura delle Linee Guida per la
									diagnosi e il trattamento dei disturbi dello spettro autistico nei bambini e negli adolescenti su mandato
									dell’Istituto Superiore di Sanità.
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.merazzi.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott. Daniele Merazzi</strong> – Pediatra
									<br />
									Medico chirurgo specializzato in Pediatria. Direttore del dipartimento Materno Infantile e Direttore Unità
									Operativa Complessa Pediatria-Neonatologia-Terapia Intensiva Neonatale dell’Ospedale V alduce di Como (CO). Gli
									studi condotti gli hanno permesso di presentare delle comunicazioni ai congressi annuali dell’American Thoracic
									Society, e pubblicate nel supplemento annuale dell’American Journal Respiratory Critical Care Medicine. (1999;
									2000; 2001)
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.bonati.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott. Maurizio Bonati</strong> – Comunicazione scientifica Medico chirurgo. Capo del Dipartimento di
									Salute Pubblica presso l’Istituto di Ricerche Farmacologiche “Mario Negri” IRCCS di Milano (MI). Professore
									alla Scuola di Specializzazione in Neuropsichiatria infantile dell’Università degli Studi di Milano. E’ autore
									o coautore di alcune centinaia di pubblicazioni scientifiche. Collabora alla redazione di riviste scientifiche
									nazionali e internazionali ed è Direttore di redazione di Ricerca & Pratica.
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.zacchini.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott.ssa Marilena Zacchini</strong> – Coordinatrice formazione personale
									<br />
									Educatrice professionale, esperta nella gestione di adulti con autismo. Formatrice. Responsabile, coordinatrice
									e ideatrice di diversi progetti, tra i quali “0-30 della Fondazione Sospiro” Istituto Fondazione Ospedaliero di
									Sospiro onlus (CR)
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.miselli.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott. Giovanni Miselli</strong> – Gestione personale
									<br />
									Psicologo. Dirigente Sanitario presso Istituto Fondazione Ospedaliero di Sospiro onlus (CR). Docente per 15
									Scuole di Specializzazione in Psicoterapia sul territorio Nazionale, Scuole di Specializzazione Quadriennale in
									Psicoterapia Miur. Coordinatore Progetto “Il bambino in ospedale: progetto pilota di prevenzione e di ascolto”
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.rigoldi.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott.ssa Dafne Rigoldi</strong> – Servizi alla persona
									<br />
									Insegnante di sostegno, pedagogista ed educatrice della cooperativa Fabula onlus (MI). Collaboratrice di Blue
									Diary, l’agenda visiva pensata per le persone autistiche, sviluppata in sinergia con Smemoranda, Fabula Onlus e
									Fondazione Fracta Limina. Un progetto innovativo nato alcuni anni fa per facilitare, attraverso un rinforzo
									visivo, i bisogni comunicativi degli autistici.
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.aresi.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott.ssa Angela Aresi</strong> – Servizi alla persona
									<br />
									Psicologa, Psicoterapeuta e analista del comportamento supervisionata. Interventi come consulente ABA
									supervisionata. Inter- venti come tecnico ABA. Interventi educativi e riabilitativi bambini e adulti affetti da
									disturbi dello spettro autistico. Diagnosi specifica DPS. Diagnosi di personalità. Diagnosi DSA. Psicoterapia.
								</div>
							</div>
						</p>
						<p>
							<div className="row d-flex align-items-center my-5">
								<div className="col-3">
									<Img
										className={styles.imgCover}
										fluid={data.moscatelli.childImageSharp.fluid}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="col-9">
									<strong>Dott. Francesco Moscatelli</strong> – Comunicazione divulgativa
									<br />
									Giornalista. Lavora per “La Stampa” di Torino dal 2011 in qualità di redattore delle Cronache. Autore di due
									volumi: Cricket Club (Add, 2013) e il Vino del Papa (Compagnia editoriale Aliberti, 2014).
								</div>
							</div>
						</p>
					</div>
					<div className="col-12 col-md-4">
						<div className="position-sticky" style={{ top: 104 }}>
							{sidebar1.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export const query = graphql`
	query {
		aresi: file(relativePath: { eq: "comitato/aresi.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		bonati: file(relativePath: { eq: "comitato/bonati.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		fraticelli: file(relativePath: { eq: "comitato/fraticelli.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		keller: file(relativePath: { eq: "comitato/keller.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		merazzi: file(relativePath: { eq: "comitato/merazzi.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		miselli: file(relativePath: { eq: "comitato/miselli.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		molteni: file(relativePath: { eq: "comitato/molteni.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		moscatelli: file(relativePath: { eq: "comitato/moscatelli.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		rigoldi: file(relativePath: { eq: "comitato/rigoldi.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		zacchini: file(relativePath: { eq: "comitato/zacchini.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
