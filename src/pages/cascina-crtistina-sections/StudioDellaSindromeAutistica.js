import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function StudioDellaSindromeAutistica() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Studio della
					<br />
					sindrome autistica
				</h1>
				<p className="paragraph">
					Nell’ottica di un sistema integrato e innovativo Cascina Cristina diventerà, nel tempo, un centro per lo studio della sindrome autistica per il territorio
					canturino e dintorni.
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<div className={[stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					Il progetto “Cascina Cristina” prevede, oltre agli specifici interventi socio assistenziale, psicoeducativi e abilitativi sui fruitori, sia della comunità
					residenziale che del centro diurno, anche progetti che non impattano direttamente sugli ospiti, ma bensì sull’intera comunità che a diverso titolo ruota
					intorno alla sindrome autistica. Infatti, al fine di fare formazione e/o informazione, si terranno corsi, convegni, workshop, conferenze, articoli su
					riviste divulgative e pseudoscientifiche. Si consentirà così a psicologi, operatori, pedagogisti, arte-terapisti, fisiatri, volontari, familiari e altre
					possibili figure professionali di approfondire le conoscenze in materia di autismo e sulle più moderne terapie e interventi che possono essere messe in
					atto nel proprio ambito lavorativo.
				</span>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "Residenza piantina.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
