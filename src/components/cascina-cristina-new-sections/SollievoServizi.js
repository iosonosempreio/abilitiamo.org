import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function SollievoServizi() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Sollievo
					<br />e altri servizi
				</h1>
				<p className="paragraph paragraphBig">
					Un servizo sollievo<br/>per le famiglie in <i>burn-out</i>
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<p className={["paragraph", stylesCascinaCristina.paragraph, stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					In alcune circostanze, le persone con autismo possono attraversare momenti di crisi molto forti che stressano loro e loro le famiglie. Questi periodi
					possono essere talmente lunghi da non riuscire più a gestire la quotidianità e spesso mandano le famiglie in <i>burn-out</i>. Cascina Cristina
					disporrà di due posti per ospitare temporaneamente persone che attraversano queste crisi, in modo da dare il tempo alle famiglie di riprendersi e valutare
					il tipo di intervento sociosanitario e/o riabilitativo-abilitativo da effettuare sul proprio figlio con autismo.
				</span>
			</p>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "nick-fewings-XqOBKnxDSfE-unsplash.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
