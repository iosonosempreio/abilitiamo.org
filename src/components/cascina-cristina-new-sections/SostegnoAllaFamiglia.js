import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function SostegnoAllaFamiglia() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Sostegno
					<br />
					alla famiglia
				</h1>
				<p className="paragraph">
					A Cascina Cristina, al fine di aiutare le famiglie a non andare in burn-out, sarà messo a loro disposizione uno sportello psicologico di sostegno
					individuale e un gruppo di auto mutuo aiuto dinamico.
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<div className={[stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					Un buon intervento sulla persona con autismo necessità che tutte le persone attorno a lui siano in uno stato psicologico più sereno possibile e, nel
					contempo, lavorino tutti con la medesima modalità, a partire in primis dalla famiglia la quale deve far fronte continuamente e costantemente a richieste
					dirette e indirette, anche pesanti, del proprio figlio e/o delle persone che lo circondano. Il sostegno alla famiglia diventa quindi parte integrante del
					progetto riabilitativo/abilitativo che si andrà a realizzare sugli ospiti sia dell’unità residenziale sia del centro diurno.
					<br />
					Il sostegno alla famiglia sarà fornito sia tramite sportello psicologico, per interventi individuali se richiesti, sia mediante la costituzione di un
					gruppo di auto mutuo aiuto autogestito e, quando necessario e/o richiesto potrà essere guidato dai diversi professionisti presenti in Cascina.
				</span>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "tumblr_osclmshNyl1slhhf0o1_1280.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
