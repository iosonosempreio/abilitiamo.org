import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import ReactPlayer from "react-player"
import classNames from "classNames"

export default function StoriaAbilitiamo() {
	return (
		<>
			<Navigation />
			{/* <div className={[styles.pageHeader, "text-center"].join(" ")}>
				<span>
					<h1>Storia di Abilitiamo</h1>
				</span>
			</div> */}
			<div className="container-fluid" style={{ backgroundColor: "var(--beige)" }}>
				<div className={["container", styles.pageHeader].join(" ")}>
					<div className="col-12 col-md-10 offset-md-1">
						<span>
							<h1>Storia di Abilitiamo</h1>
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-7 offset-md-1 my-5">
						<p className={["paragraph", "paragraphBig"].join(" ")}>
							L’Associazione Abilitiamo si è costituita con la finalità di dare una casa a giovani adulti con autismo. Nei suoi tre anni di attività è riuscita a
							raggiugere alcune tappe molto significative.
							<br />
							Questo è stato possibile grazie all’aiuto e supporto di soci e amici del territorio.
						</p>
					</div>
					<div className={classNames("col-12 col-md-7 offset-md-1 facebook-embedded-video")}>
						<ReactPlayer url="https://www.facebook.com/1400253103427642/videos/156599459205323" width={"100%"} height={"100%"} controls />
					</div>
					<div className="col-12 col-md-7 offset-md-1 my-5">
						<p>
							L’associazione Abilitiamo Autismo onlus - “abitiamo e abilitiamo” si è costituita nel 2017, per volere di 5 famiglie con figli affetti dalla sindrome
							autistica. Un punto di forza dell’associazione è rappresentato dalla presenza, tra i soci fondatori, dei fratelli della persona con autismo che potranno
							dare forza, sostegno e continuità alla stessa. Nel tempo, la compagine associativa si è arricchita di soci e amici che hanno contribuito alla
							realizzazione dei progetti svolti finora.
						</p>
						<p>
							L’associazione si è costituita con un’unica finalità: realizzare, sul territorio canturino, un contesto abitativo innovativo per giovani adulti con
							autismo che diventi la loro “casa” e nella quale possano vivere, in base alle proprie potenzialità/abilità, la migliore qualità di vita possibile. Il
							primo passo dell’associazione è stato quello di individuare il luogo dove potesse essere realizzata una abitazione che possedesse i requisiti necessari
							per la finalità propostasi. A fine 2017, il Consiglio Pastorale della Parrocchia S. Carlo di Fecchio, una frazione di Cantù, decise di dare in dono ad un
							ente del terzo settore, Cascina Cristina, Abilitiamo risulto la destinataria dello stabile.
						</p>
						<p>
							Da allora, il lavoro dell’associazione si è concentrato prevalentemente sulla campagna di raccolta fondi per la ristrutturazione di Cascina Cristina e
							l’avvio delle attività che si svolgeranno al suo interno. Parallelamente, l’associazione, nei suoi tre anni di attività, ha realizzato diversi eventi
							destinati ad approfondire la conoscenza dei disturbi dello spettro autistico della comunità canturina. Di seguito un breve video che riepiloga le tappe
							più significative della associazione.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
