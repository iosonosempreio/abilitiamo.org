import React from "react"
import NavigationBs from "../components/navigationBs"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Sostenitori() {
	const data = useStaticQuery(query)
	return (
		<>
			<NavigationBs />
			<div className="container-fluid" style={{ backgroundColor: "var(--beige)" }}>
				<div className={["container", styles.pageHeader].join(" ")}>
					<div className="col-12 col-md-10 offset-md-1">
						<span>
							<h1>Sostenitori</h1>
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row mt-5">
					<div className="col-12 col-md-7 offset-md-1">
						<p className={["paragraph", "paragraphBig"].join(" ")}>Un sogno condiviso è l'inizio di una nuova realtà.</p>
						{/* <Img className={styles.imgCover} fluid={logos.cariplo.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} /> */}
						<br />
						<p>
							La realizzazione di Cascina Cristina è ogni giorno più vicino grazie al generoso contributo di istituzioni,
							realtà territoriali, fondazioni e di molti cittadini.
						</p>
					</div>
					<div className="col-12 col-md-7 offset-md-1">
						<p>
							Di seguito i nostri sostenitori principali, che stanno sostenendo il progetto attraverso la messa a disposizione
							di spazi, di coperture finanziarie e competenze professionali.
						</p>
					</div>
        </div>
				<div className="row mb-5">
					<div className="col-4 col-md-4 col-lg-3">
						<a aria-label="Regione Lombardia" href="https://www.lombardianotizie.online/como-progetti-emblematici-cariplo/" target="_blank" rel="noreferrer"><Img fluid={data.regione.childImageSharp.fluid} /></a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a aria-label="Fondazione Cariplo" href="https://www.fondazionecariplo.it/" target="_blank" rel="noreferrer"><Img fluid={data.cariplo.childImageSharp.fluid} /></a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a aria-label="Comunità pastorale San Vincenzo Cantù - Intimiano" href="https://sanvincenzocantu.it/" target="_blank" rel="noreferrer"><Img fluid={data.sanVincenzo.childImageSharp.fluid} /></a>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col-4 col-md-4 col-lg-3">
						<a aria-label="Cassa rurale ed artigiana di Cantù" href="https://www.cracantu.it/" target="_blank" rel="noreferrer"><Img fluid={data.craCantu.childImageSharp.fluid} /></a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a aria-label="Studio Emme" href="https://www.emmeonline.it/" target="_blank" rel="noreferrer"><Img fluid={data.emme.childImageSharp.fluid} /></a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a aria-label="Hub Expertam" href="https://www.expertam.it/" target="_blank" rel="noreferrer"><Img fluid={data.expertam.childImageSharp.fluid} /></a>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col-12 col-md-7 offset-md-1">
						<p>
							Innumerevoli sono, inoltre, le persone che sostengono l'operato di Abilitiamo donando il loro tempo libero,
							partecipando ed organizzando eventi oppure attraverso erogazioni liberali. Anche a loro vanno i nostri più
							affettuosi ringraziamenti.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export const query = graphql`
	query {
		cariplo: file(relativePath: { eq: "logos/cariplo.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		regione: file(relativePath: { eq: "logos/regione.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		sanVincenzo: file(relativePath: { eq: "logos/san-vincenzo.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		craCantu: file(relativePath: { eq: "logos/cra-cantu.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		expertam: file(relativePath: { eq: "logos/expertam.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		fpcc: file(relativePath: { eq: "logos/fpcc.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		emme: file(relativePath: { eq: "logos/emme.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
