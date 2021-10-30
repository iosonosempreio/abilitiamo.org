import React from "react"
import { Helmet } from "react-helmet"
import NavigationBs from "../components/navigationBs"
import Footer from "../components/footer"
import StickyMessage from "../components/stickyMessage"
import ArrowLink from "../components/arrowLink"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ReactPlayer from "react-player"
import CarouselHome from "../components/carouselHome"
import styles from "../styles/home.module.scss"
import classNames from "classnames"

export default function Home() {
	const data = useStaticQuery(query)
	return (
		<>
			<Helmet>
				<title>Abilitiamo Autismo</title>
				<meta name="description" content="Miglioriamo la qualità di vita delle persone con autismo. Abilitare è possibile a qualsiasi età, per noi l'età adulta è solo un punto di partenza." />
			</Helmet>
			<NavigationBs />
			<StickyMessage />
			<div className="container-fluid" style={{ backgroundColor: "var(--beige)" }}>
				<div className="container">
					<div className="row">
						<div className="col-10 col-md-4 offset-1 offset-md-1 d-flex flex-column justify-content-center">
							<h1>
								Miglioriamo
								<br />
								la qualità di vita delle persone
								<br />
								con autismo
							</h1>
							<p className="paragraphBig">
								Abilitare è possibile <br className="d-none" />a qualsiasi età, <br />
								per noi l'età adulta è <br className="d-none" />
								solo un punto di partenza.
							</p>
							<ArrowLink data={{ label: "Chi siamo", url: "/chi-siamo" }} type="internal" />
							<ArrowLink data={{ label: "Cascina Cristina", url: "/cascina-cristina" }} type="internal" />
							<ArrowLink data={{ label: "Fai una donazione", url: "/dona-ora" }} type="internal" />
						</div>
						<div className="col-12 col-md-6">
							<Img
								className={styles.imgCover}
								fluid={data.illustrazione.childImageSharp.fluid}
								imgStyle={{ objectFit: "contain" }}
							/>
						</div>
					</div>
					<div className="row py-5">
						<div className={classNames("col-12 col-md-7 offset-0 offset-md-1 order-last order-md-first")}>
							<div className={classNames("video-wrapper")}>
								<ReactPlayer
									className="react-player"
									url="https://www.facebook.com/1400253103427642/videos/1496214477164837"
									width="100%"
									height="100%"
									controls
								/>
							</div>
						</div>
						<div className="col-12 col-md-3 d-flex flex-column justify-content-center order-first order-md-last">
							<p>Il nostro obiettivo è creare un polo di servizi per la persona adulta con autismo.</p>
						</div>
					</div>
					<div className="row py-5">
						<div className="col-12 col-md-3 offset-0 offset-md-1 d-flex flex-column justify-content-center">
							<p>Abbiamo bisogno del tuo aiuto. Costruiamo insieme!</p>
						</div>
						<div className="col-12 col-md-7">
							<CarouselHome />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container">
				<div className="row">
					<div className="col">
						<h1>Scopri di più...</h1>
						<p>Sezione da completare quando avremo più contenuti</p>
					</div>
				</div>
			</div> */}
			<Footer />
		</>
	)
}

export const query = graphql`
	query {
		illustrazione: file(relativePath: { eq: "illustrazione-home.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
