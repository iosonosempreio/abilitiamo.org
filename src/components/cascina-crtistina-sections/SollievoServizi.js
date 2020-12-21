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
					Un servizo sollievo per le famiglie in <i>burn-out</i> e un centro per lo studio deli disturbi dello spettro autistico
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
					<br />
					Il progetto “Cascina Cristina” prevede, oltre agli specifici interventi socio assistenziale, psicoeducativi e abilitativi sui fruitori, sia della comunità
					residenziale che del centro diurno, anche progetti che non impattano direttamente sugli ospiti, ma bensì sull’intera comunità che a diverso titolo ruota
					intorno alla sindrome autistica. Infatti, al fine di fare formazione e/o informazione, si terranno corsi, convegni, workshop, conferenze, articoli su
					riviste divulgative e pseudoscientifiche. Si consentirà così a psicologi, operatori, pedagogisti, arte-terapisti, fisiatri, volontari, familiari e altre
					possibili figure professionali di approfondire le conoscenze in materia di autismo e sulle più moderne terapie e interventi che possono essere messe in
					atto nel proprio ambito lavorativo.
				</span>
			</p>
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
