import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function PresaInCarico() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Presa in carico
					<br />a rete
				</h1>
				<p className="paragraph">
					La presa in carico della persona con autismo sarà effettuata in base a quanto previsto dalla legge 328/2000, e successive modifiche, e sarà arricchita
					dall’utilizzo di strumenti più moderni oggi a nostra disposizione. Il progetto globale di presa in carico è lo strumento che definisce i bisogni della
					persona in rapporto al contesto in cui vive.
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<div className={[stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					Partendo da quanto previsto dalla legge 328/2000, la presa in carico, degli utenti dei servizi di Cascina Cristina, sarà formulata come il vero e proprio
					progetto globale di prese in carico, e sarà effettuata mediante i più moderni mezzi oggi a disposizione. Pur seguendo le fasi classiche di presa in carico
					che prevedono: la costituzione dell’équipe, rappresentata da tutta la rete che ruota intorno alla persona, la stesura del piano individuale (PI), che si
					concretizzerà poi nel Progetto di Vita, la verifica periodica degli interventi predisposti nel PI, verranno messe in atto procedure, più moderne quali il
					progetto matrici ecologiche, multistep network diagnostic model, ecc. Inoltre, la presa in carico così definita sarà affiancata da una presa in carico
					clinico/ospedaliera, con relativa stesura del Piano Assistenziale Individuale (PAI), per eventuali interventi sanitari.
					<br />
					Il tutto per consentire al giovane fruitore di cascina Cristina di sfruttare al meglio le sue potenzialità per diventare adulto a tutti gli effetti,
					esprimendosi in tutti i possibili ambiti della vita. Più in dettaglio, sulla base del suo Progetto di Vita, la persona con autismo dovrà svolgere attività
					lavorativa, ricreativa, sportiva, dovrà potersi, una volta acquisita la capacità, relazionarsi e socializzare con gli altri, dovrà avere e sapersi gestire
					il tempo libero.
				</span>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "pexels-pixabay-163064.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
