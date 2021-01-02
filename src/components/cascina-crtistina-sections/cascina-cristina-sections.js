import React from "react"
import SpiritoProgetto from "./SpiritoProgetto"
// import MappaturaBisogno from "./MappaturaBisogno"
import CambiamentoPerseguito from "./CambiamentoPerseguito"
import ComunitàAbitativa from "./ComunitàAbitativa"
import CentroDiurno from "./CentroDiurno"
import SollievoServizi from "./SollievoServizi"
import PresaInCarico from "./PresaInCarico"
import SostegnoAllaFamiglia from "./SostegnoAllaFamiglia"
import StudioDellaSindromeAutistica from "./StudioDellaSindromeAutistica"

const sections = [
	{
		title: (
			<>
				Spirito
				<br />
				del progetto
			</>
		),
		anchor: "#spirito",
		content: <SpiritoProgetto />,
	},
	// {
	// 	title: (
	// 		<>
	// 			Mappatura
	// 			<br />
	// 			del bisogno
	// 		</>
	// 	),
	// 	anchor: "#mappa",
	// 	content: <MappaturaBisogno />,
	// },
	{
		title: (
			<>
				Cambiamento
				<br />
				perseguito
			</>
		),
		anchor: "#cambiamento",
		content: <CambiamentoPerseguito />,
	},
	{
		title: (
			<>
				Presa in carico
				<br />a rete
			</>
		),
		anchor: "#presa-in-carico",
		content: <PresaInCarico/>,
	},
	{
		title: (
			<>
				Comunità
				<br />
				abitativa
			</>
		),
		anchor: "#comunita",
		content: <ComunitàAbitativa />,
	},
	{
		title: (
			<>
				Centro
				<br />
				diurno
			</>
		),
		anchor: "#diurno",
		content: <CentroDiurno />,
	},
	{
		title: (
			<>
				Sollievo
				<br />e altri servizi
			</>
		),
		anchor: "#servizi",
		content: <SollievoServizi />,
	},
	{
		title: (
			<>
				Sostegno
				<br />alla famiglia
			</>
		),
		anchor: "#sostegno-alla-famiglia",
		content: <SostegnoAllaFamiglia />
	},
	{
		title: (
			<>
				Studio della
				<br />
				sindrome autistica
			</>
		),
		anchor: "#sindrome-autistica",
		content: <StudioDellaSindromeAutistica/>,
	},
]
export default sections
