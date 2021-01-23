import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ArrowLink from "../components/arrowLink"
import { BsFileEarmarkText } from "react-icons/bs"

import modulo from "../components/assets/modulo-iscrizione-socio-abilitiamo-VER-03.pdf"

export default function DiventaSocio() {
	const data = useStaticQuery(query)
	const sidebar1 = [
		{ label: "Storia di Abilítiamo", url: "/storia-abilitiamo" },
		{ label: "Organizzazione di Abilítiamo", url: "/organizzazione-abilitiamo" },
	]
	return (
		<>
			<Navigation />
			<div className="container-fluid" style={{ backgroundColor: "var(--beige)" }}>
				<div className={["container", styles.pageHeader].join(" ")}>
					<div className="col-12 col-md-10 offset-md-1">
						<span>
							<h1>Diventa socio</h1>
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row my-5">
					<div className="col-12 col-md-7 offset-md-1">
						<p className={["paragraph", "paragraphBig"].join(" ")}>
							È possibile iscriversi ufficialmente al libro soci dell’associazione compilando il modulo di tesseramento e
							versando la quota associativa annuale.
						</p>
						<Img
							className={styles.imgCover}
							fluid={data.tessera.childImageSharp.fluid}
							imgStyle={{ objectFit: "contain" }}
						/>
						<br/>
						<p>
							Il consiglio direttivo ha stabilito che per l’anno corrente questa quota ammonta a{" "}
							<strong>€30 (trenta/00)</strong> da versare sul c/c di cui sopra o da consegnare in contanti. L’informativa sulla
							privacy è disponibile a questa pagina.
						</p>
						<p>
							Scarica e stampa il modulo, compilalo in ogni sua parte e consegnalo alla prima occasione buona, nel frattempo
							inviaci una scansione per mail (info [@] abilitiamo.org) così da predisporre la tua iscrizione.
						</p>
						<p>
							<a href={modulo} download="abilitiamo-tesseramento">
								<BsFileEarmarkText /> Modulo di tesseramento
							</a>
						</p>
					</div>
					<div className="col-12 col-md-4">
						<div className="position-sticky" style={{ top: 104 }}>
							{sidebar1.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export const query = graphql`
	query {
		tessera: file(relativePath: { eq: "mockup-tessera.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
