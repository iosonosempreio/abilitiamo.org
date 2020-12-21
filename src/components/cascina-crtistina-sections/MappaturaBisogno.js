import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function MappaturaBisogno() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Mappatura <br /> del bisogno
				</h1>
				<p className="paragraph">
					ATS Insubria, per quanto riguarda la transizione all&#39;età adulta, ha eseguito una mappatura dei soggetti con diagnosi di disturbi dello spettro
					autistico.
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<div className={[stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					I risultati dello studio dicono che che nella fascia “giovane adulto”, cioè dai 18 anni ai 30, si collocheranno nei prossimi tre anni 57 utenti ovvero
					l’81% del campione esaminato. Data la gravità di questi soggetti, è presumibile ipotizzare la necessità di forme di residenzialità che permettano da una
					parte la riabilitazione delle funzionalità residuali e dall’altra di rispondere alle esigenze dei soggetti e dei familiari.
				</span>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "linea ats.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
