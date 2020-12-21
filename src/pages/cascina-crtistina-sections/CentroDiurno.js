import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function CentroDiurno() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Servizio
					<br />
					centro diurno
				</h1>
				<p className="paragraph paragraphBig">
					Il centro diurno ospiterà 15 persone con autismo che affiancheranno, durante la loro permanenza al centro, i 12 ospiti presenti nella comunità
					residenziale.
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<p className={["paragraph", stylesCascinaCristina.paragraph, stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					Il centro diurno è un servizio sociale, semiresidenziale e territoriale rivolto a giovani adulti affetti da autismo che vivono ancora in famiglia. Il
					progetto prevede, dopo una attenta valutazione individuale delle proprie competenze, la messa a punto di un piano di intervento personalizzato che consenta
					ai fruitori, come per chi vive nella comunità residenziale, di ottimizzare e/o sviluppare tutte quelle abilità necessarie a migliorare tutte le autonomie
					spendibili nel proprio contesto di vita oltre che la loro autostima ed autodeterminazione. Il centro potrà accogliere fino a 15 persone, che si
					affiancheranno agli ospiti già presenti in struttura nella gestione della quotidianità. L’obiettivo è innalzare quanto più possibile la loro qualità di
					vita.
				</span>
			</p>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "render diurno.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
