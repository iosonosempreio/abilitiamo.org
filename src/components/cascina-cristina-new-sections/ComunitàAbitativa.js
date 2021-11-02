import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function ComunitàAbitativa() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Comunità
					<br />
					abitativa
				</h1>
				<p className="paragraph paragraphBig">La comunità abitativa accoglierà stabilmente dodici persone adulte con autismo.</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<p className={["paragraph", stylesCascinaCristina.paragraph, stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					Il modello sarà quello della &quot;community farm&quot;, secondo analoghe esperienze estere e italiane. Cascina Cristina è collocata in un contesto rurale
					e ciò favorirà l&#39;abilitazione fondata sul modello della fattoria. Esperienze già fatte da altre realtà hanno dimostrato che si tratta di un approccio
					semplice ma al tempo stesso ricco di situazioni e di stimoli che si adattano bene alle caratteristiche della persona autistica. Cascina Cristina, pur se
					collocata in un contesto rurale, è allo stesso tempo integrata con il territorio urbano di Fecchio (località di Cantù), trovandosi di fronte alla
					Parrocchia di San Carlo e all’annesso oratorio. Ciò eviterà l’isolamento e favorirà la relazione delle persone autistiche con gli abitanti del luogo. La
					residenza sarà costituita da 6 camere da letto, ciascuna in grado di ospitare 2 letti, e da tanti servizi visibili nelle piantine dell’edificio raffigurate
					nell’immagine.
				</span>
			</p>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "render residenziale.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
