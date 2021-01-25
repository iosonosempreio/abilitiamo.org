import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stylesCascinaCristina from "../../styles/cascinaCristina.module.scss"

export default function CambiamentoPerseguito() {
	const [mostraAltro, setMostraAltro] = useState()
	useLayoutEffect(() => {
		setMostraAltro(window.innerWidth > 767)
	}, [])
	const images = useStaticQuery(query)
	return (
		<>
			<div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Cambiamento <br /> perseguito
				</h1>
				<p className="paragraph">
					Nel ripensare il progetto di vita della persona con autismo, Abilitiamo, seguendo gli studi della letteratura scientifica più recenti, intende perseguire
					un vero e proprio cambiamento, a 360 gradi, nelle modalità di intervento abilitativo.
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<div className={[stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					Sempre di più, oggi, sta cambiando la visione della persona con disabilità che, da una gestione pressoché tutta assistenzialistica, sta passando a
					considerare la disabilità come parte integrante della persona e, quindi, all’applicazione di metodologie abilitative/psicoeducative, conferendogli dignità
					e pari opportunità, nei limiti delle sue capacità potenziali. La spinta a questa nuova visione è da attribuire a diverse cause: la situazione economica del
					Paese e delle Regioni, le scoperte scientifiche, il nuovo welfare, la partecipazione sempre più attiva della famiglia nel ripensare gli interventi sul
					proprio figlio. Anche Abilitiamo con il progetto “Cascina Cristina” partecipa al cambiamento, applicando, quanto più possibile, tutte le nuove tecniche e/o
					metodiche che sono emerse dagli studi scientifici più recenti e la conoscenza più specifica e approfondita dei vari professionisti del settore. In
					particolare, seguendo le linee di un progetto sperimentale, Abilitiamo intende dare uniformità e continuità all’utilizzo delle nuove tecniche proposte
					dalla letteratura, attualmente puntiformi e prive di connessioni, individuando i parametri che meglio si adattano al potenziamento delle abilità della
					persona con autismo nei vari contesti di vita, rendendola il più possibile regista e attore della propria vita.
				</span>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "expertam.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, maxHeight: 670) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
