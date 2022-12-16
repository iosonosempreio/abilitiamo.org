import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import MembroComitato from "../components/MembroComitato";

export default function ComitatoScientifico() {
	const images = {};

	function importAll(r) {
		r.keys().forEach((key) => {
			const name = key.replace(/\.\//, "").replace(/\.png/, "");
			images[name] = r(key).default;
		});
	}

	importAll(
		require.context("../images/comitato/", true, /\.(png|gif|ico|jpg|jpeg)$/)
	);

	return (
		<PageTemplate title="Comitato scientifico">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<p>
							Per svolgere al meglio il suo lavoro nel rispetto dei propri
							obiettivi e secondo le più moderne tecniche fondate sul concetto
							dell’evidence based, l'associazione ha costituito un comitato
							scientifico rappresentato da esperti del settore e della
							comunicazione.
						</p>
						<p className="mb-5">
							Di seguito i loro nomi, alcuni cenni del loro Curriculum Vitae e
							il ruolo che avranno nel comitato.
						</p>
						{membriComitato.map(({ image, name, role, bio }) => (
							<MembroComitato
								key={image}
								image={images[image]}
								name={name}
								role={role}
								bio={bio}
							/>
						))}
					</Col>
					<Col>
						<div className={classNames("position-sticky")} style={{ top: 65 }}>
							{sideLinks.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))}
						</div>
					</Col>
				</Row>
				<Row></Row>
			</Container>
		</PageTemplate>
	);
}

const sideLinks = [
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];

const membriComitato = [
	{
		image: "keller",
		name: "Dott. Roberto Keller",
		role: "Presidente CS",
		bio: "Presidente del comitato scientifico. Medico chirurgo specializzato in Psichiatria e Neuropsichiatria infantile. Dirigente Medico di Psichiatria. Responsabile ambulatorio disturbi pervasivi dello sviluppo in età adulta ASL TO 2. Componente del Panel per la stesura delle Linee Guida per la diagnosi e il trattamento dei disturbi dello spettro autistico negli adulti su mandato dell’Istituto Superiore di Sanità.",
	},
	{
		image: "fraticelli",
		name: "Dott. Carlo Fraticelli",
		role: "Riferimento ATS Insubria",
		bio: "Medico chirurgo specializzato in Psichiatria e Psicoterapeuta. Direttore del Dipartimento GestionaleSalute Mentale e Dipendenze dell’ASST Lariana e Direttore dell’Unità Operativa Aziendale, Azienda SocioSanitaria Territoriale (ASST) Lariana.",
	},
	{
		image: "molteni",
		name: "Dott. Massimo Molteni",
		role: "Neuropsichiatra infantile",
		bio: "Medico chirurgo specializzato in Neuropsichiatra infantile. Direttore Sanitario Centrale - Responsabile Areapsicopatologia dello sviluppo, psicologia del contesto socio-ambientale e dei contesti educativi, La Nostrafamiglia - IRCCS Medea di Bosisio Parini (LC). Componente del Panel per la stesura delle Linee Guida per la diagnosi e il trattamento dei disturbi dello spettro autistico nei bambini e negli adolescenti su mandatodell’Istituto Superiore di Sanità.",
	},
	{
		image: "merazzi",
		name: "Dott. Daniele Merazzi",
		role: "Riferimento ATS Insubria",
		bio: "Medico chirurgo specializzato in Pediatria. Direttore del dipartimento Materno Infantile e Direttore UnitàOperativa Complessa Pediatria-Neonatologia-Terapia Intensiva Neonatale dell’Ospedale Valduce di Como (CO). Glistudi condotti gli hanno permesso di presentare delle comunicazioni ai congressi annuali dell’American ThoracicSociety, e pubblicate nel supplemento annuale dell’American Journal Respiratory Critical Care Medicine. (1999;2000; 2001).",
	},
	{
		image: "bonati",
		name: "Dott. Maurizio Bonati",
		role: "Comunicazione scientifica",
		bio: "Medico chirurgo. Capo del Dipartimento diSalute Pubblica presso l’Istituto di Ricerche Farmacologiche “Mario Negri” IRCCS di Milano (MI). Professorealla Scuola di Specializzazione in Neuropsichiatria infantile dell’Università degli Studi di Milano. E’ autoreo coautore di alcune centinaia di pubblicazioni scientifiche. Collabora alla redazione di riviste scientifichenazionali e internazionali ed è Direttore di redazione di Ricerca & Pratica.",
	},
	{
		image: "zacchini",
		name: "Dott.ssa Marilena Zacchini",
		role: "Coordinatrice formazione personale",
		bio: "Educatrice professionale, esperta nella gestione di adulti con autismo. Formatrice. Responsabile, coordinatricee ideatrice di diversi progetti, tra i quali “0-30 della Fondazione Sospiro” Istituto Fondazione Ospedaliero diSospiro onlus (CR)",
	},
	{
		image: "miselli",
		name: "Dott. Giovanni Miselli",
		role: "Gestione personale",
		bio: "Psicologo. Dirigente Sanitario presso Istituto Fondazione Ospedaliero di Sospiro onlus (CR). Docente per 15Scuole di Specializzazione in Psicoterapia sul territorio Nazionale, Scuole di Specializzazione Quadriennale inPsicoterapia Miur. Coordinatore Progetto “Il bambino in ospedale: progetto pilota di prevenzione e di ascolto”.",
	},
	{
		image: "rigoldi",
		name: "Dott.ssa Dafne Rigoldi",
		role: "Servizi alla persona",
		bio: "Insegnante di sostegno, pedagogista ed educatrice della cooperativa Fabula onlus (MI). Collaboratrice di BlueDiary, l’agenda visiva pensata per le persone autistiche, sviluppata in sinergia con Smemoranda, Fabula Onlus eFondazione Fracta Limina. Un progetto innovativo nato alcuni anni fa per facilitare, attraverso un rinforzovisivo, i bisogni comunicativi degli autistici.",
	},
	{
		image: "aresi",
		name: "Dott.ssa Angela Aresi",
		role: "Servizi alla persona",
		bio: "Psicologa, Psicoterapeuta e analista del comportamento supervisionata. Interventi come consulente ABAsupervisionata. Inter- venti come tecnico ABA. Interventi educativi e riabilitativi bambini e adulti affetti dadisturbi dello spettro autistico. Diagnosi specifica DPS. Diagnosi di personalità. Diagnosi DSA. Psicoterapia.",
	},
	{
		image: "moscatelli",
		name: "Dott. Francesco Moscatelli",
		role: "Comunicazione divulgativa",
		bio: "Giornalista. Lavora per “La Stampa” di Torino dal 2011 in qualità di redattore delle Cronache. Autore di duevolumi: Cricket Club (Add, 2013) e il Vino del Papa (Compagnia editoriale Aliberti, 2014).",
	},
	{
		image: "barile",
		name: "Dott. Silvia Barile",
		role: "Referente di struttura",
		bio: "Professionista con lunga e approfondita esperienza negli interventi educativi abilitativi delle personeadulte con disturbi dello spettro autistico. Attualmente è referente di struttura in una Community Farm pergiovani adulti con autismo.",
	},
];
