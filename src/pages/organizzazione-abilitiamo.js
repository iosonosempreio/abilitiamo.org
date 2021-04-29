import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
// import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// import ReactPlayer from "react-player"
// import classNames from "classnames"
import ArrowLink from "../components/arrowLink"
import MembroComitato from "../components/membroComitato"

export default function StoriaAbilitiamo() {
	const data = useStaticQuery(query)
	const sidebar1 = [
		{ label: "Storia di Abilítiamo", url: "/storia-abilitiamo" },
		// { label: "Bilanci", url: "/" },
		{ label: "Diventa socio", url: "/diventa-socio" },
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
							L’Associazione Abilitiamo è un ente del terzo settore senza scopo di lucro.
							Possono aderire all’associazione tutte le persone che desiderano contribuire al
							miglioramento della qualità di vita delle persone con autismo.
						</p>
						<h3 className="mt-5">Soci</h3>
						<p>
							Undici soci, rappresentanti cinque famiglie con figli con autismo, hanno costituito nel 2017
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
					</div>
					<div className="col-12 col-md-4">
						<div className="position-sticky" style={{ top: 104 }}>
							{sidebar1.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))}
						</div>
					</div>
				</div>
				<MembroComitato
					image={data.keller}
					name="Dott. Roberto Keller"
					role="Presidente CS"
					bio="Presidente del comitato scientifico. Medico chirurgo specializzato in Psichiatria e Neuropsichiatria infantile. Dirigente Medico di Psichiatria. Responsabile ambulatorio disturbi pervasivi dello sviluppo in età adulta ASL TO 2. Componente del Panel per la stesura delle Linee Guida per la diagnosi e il trattamento dei disturbi dello spettro autistico negli adulti su mandato dell’Istituto Superiore di Sanità."
				/>
				<MembroComitato
					image={data.fraticelli}
					name="Dott. Carlo Fraticelli"
					role="Riferimento ATS Insubria"
					bio="Medico chirurgo specializzato in Psichiatria e Psicoterapeuta. Direttore del Dipartimento Gestionale
					Salute Mentale e Dipendenze dell’ASST Lariana e Direttore dell’Unità Operativa Aziendale, Azienda Socio
					Sanitaria Territoriale (ASST) Lariana."
				/>
				<MembroComitato
					image={data.molteni}
					name="Dott. Massimo Molteni"
					role="Neuropsichiatra infantile"
					bio="Medico chirurgo specializzato in Neuropsichiatra infantile. Direttore Sanitario Centrale - Responsabile Area
					psicopatologia dello sviluppo, psicologia del contesto socio-ambientale e dei contesti educativi, La Nostra
					famiglia - IRCCS Medea di Bosisio Parini (LC). Componente del Panel per la stesura delle Linee Guida per la
					diagnosi e il trattamento dei disturbi dello spettro autistico nei bambini e negli adolescenti su mandato
					dell’Istituto Superiore di Sanità."
				/>
				<MembroComitato
					image={data.merazzi}
					name="Dott. Daniele Merazzi"
					role="Riferimento ATS Insubria"
					bio="Medico chirurgo specializzato in Pediatria. Direttore del dipartimento Materno Infantile e Direttore Unità
					Operativa Complessa Pediatria-Neonatologia-Terapia Intensiva Neonatale dell’Ospedale Valduce di Como (CO). Gli
					studi condotti gli hanno permesso di presentare delle comunicazioni ai congressi annuali dell’American Thoracic
					Society, e pubblicate nel supplemento annuale dell’American Journal Respiratory Critical Care Medicine. (1999;
					2000; 2001)."
				/>
				<MembroComitato
					image={data.bonati}
					name="Dott. Maurizio Bonati"
					role="Comunicazione scientifica"
					bio="Medico chirurgo. Capo del Dipartimento di
					Salute Pubblica presso l’Istituto di Ricerche Farmacologiche “Mario Negri” IRCCS di Milano (MI). Professore
					alla Scuola di Specializzazione in Neuropsichiatria infantile dell’Università degli Studi di Milano. E’ autore
					o coautore di alcune centinaia di pubblicazioni scientifiche. Collabora alla redazione di riviste scientifiche
					nazionali e internazionali ed è Direttore di redazione di Ricerca & Pratica."
				/>
				<MembroComitato
					image={data.zacchini}
					name="Dott.ssa Marilena Zacchini"
					role="Coordinatrice formazione personale"
					bio="Educatrice professionale, esperta nella gestione di adulti con autismo. Formatrice. Responsabile, coordinatrice
					e ideatrice di diversi progetti, tra i quali “0-30 della Fondazione Sospiro” Istituto Fondazione Ospedaliero di
					Sospiro onlus (CR)"
				/>
				<MembroComitato
					image={data.miselli}
					name="Dott. Giovanni Miselli"
					role="Gestione personale"
					bio="Psicologo. Dirigente Sanitario presso Istituto Fondazione Ospedaliero di Sospiro onlus (CR). Docente per 15
					Scuole di Specializzazione in Psicoterapia sul territorio Nazionale, Scuole di Specializzazione Quadriennale in
					Psicoterapia Miur. Coordinatore Progetto “Il bambino in ospedale: progetto pilota di prevenzione e di ascolto”."
				/>
				<MembroComitato
					image={data.rigoldi}
					name="Dott.ssa Dafne Rigoldi"
					role="Servizi alla persona"
					bio="Insegnante di sostegno, pedagogista ed educatrice della cooperativa Fabula onlus (MI). Collaboratrice di Blue
					Diary, l’agenda visiva pensata per le persone autistiche, sviluppata in sinergia con Smemoranda, Fabula Onlus e
					Fondazione Fracta Limina. Un progetto innovativo nato alcuni anni fa per facilitare, attraverso un rinforzo
					visivo, i bisogni comunicativi degli autistici."
				/>
				<MembroComitato
					image={data.aresi}
					name="Dott.ssa Angela Aresi"
					role="Servizi alla persona"
					bio="Psicologa, Psicoterapeuta e analista del comportamento supervisionata. Interventi come consulente ABA
					supervisionata. Inter- venti come tecnico ABA. Interventi educativi e riabilitativi bambini e adulti affetti da
					disturbi dello spettro autistico. Diagnosi specifica DPS. Diagnosi di personalità. Diagnosi DSA. Psicoterapia."
				/>
				<MembroComitato
					image={data.moscatelli}
					name="Dott. Francesco Moscatelli"
					role="Comunicazione divulgativa"
					bio="Giornalista. Lavora per “La Stampa” di Torino dal 2011 in qualità di redattore delle Cronache. Autore di due
					volumi: Cricket Club (Add, 2013) e il Vino del Papa (Compagnia editoriale Aliberti, 2014)."
				/>
				<MembroComitato
					image={data.barile}
					name="Dott. Silvia Barile"
					role="Referente di struttura"
					bio="Professionista con lunga e approfondita esperienza negli interventi educativi abilitativi delle persone
					adulte con disturbi dello spettro autistico. Attualmente è referente di struttura in una Community Farm per
					giovani adulti con autismo."
				/>
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
		barile: file(relativePath: { eq: "comitato/barile.png" }) {
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
