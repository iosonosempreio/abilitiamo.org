import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import NavigationBs from "../components/navigationBs"
import ArrowLink from "../components/arrowLink"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import { Container, Row, Col, Card, Image, Form, InputGroup } from "react-bootstrap"
import PaypalDonation from "../components/paypalDonation.js"
import info from "../components/assets/info.json"

import donateFacebook from "../images/donate-facebook.gif"
import donateSatispay from "../images/donate-satispay.png"
import donateBank from "../images/assegnozzo.jpg"

export default function DonaOra() {
	return (
		<>
			<NavigationBs />
			<Container fluid style={{ backgroundColor: "var(--beige)" }}>
				<Container className={styles.pageHeader}>
					<Col xs={12} md={{ span: 10, offset: 1 }}>
						<span>
							<h1>Dona ora</h1>
						</span>
					</Col>
				</Container>
			</Container>
			<Container>
				<Row className="">
					<Col xs={12} md={{ span: 7, offset: 1 }}>
						<section id="pagamenti-elettronici" className={classNames("mt-3", "mt-md-5")}>
							<p className={classNames("paragraph", "paragraphBig")}>Pagamenti elettronici</p>
							<p>
								Carta di credito e Satispay sono le modalità più rapide per fare una donazione e aiutarci a realizzare Cascina
								Crstina. Non dimenticarti che sono previsti <Link to="/benefici-fiscali">benefici fiscali</Link> per chi sceglie
								di donare.
							</p>

							<PaypalDonation />

							<Card className="mb-3">
								<Card.Body>
									<h3 className="fw-bold mt-0">Facebook</h3>
									<a href={info.associazione.facebook} target="_blank" rel="noreferrer">
										<Image className="mb-3 w-100" src={donateFacebook} alt="Donazione via Facebook" rounded />
									</a>
									<p>
										Visita la nostra pagina Facebook e clicca sul pulsante “Fai una donazione”. Per donare è necessario fare
										log-in su Facebook.
									</p>
									<ArrowLink
										data={{ label: "Dona con Facebook", url: info.associazione.facebook, external: true }}
										type="external"
									/>
								</Card.Body>
							</Card>

							<Card className="mb-3">
								<Card.Body>
									<h3 className="fw-bold mt-0">Satispay</h3>
									<a href={info.associazione.satispay} target="_blank" rel="noreferrer">
										<Image className="mb-3 w-100" src={donateSatispay} alt="Donazione via Satispay" rounded />
									</a>
									<p>
										Sblocca il tuo smartphone e dona con Satispay: un’applicazione per iPhone, Android e Windows Phone che
										permette di fare pagamenti veloci e gratuiti.
									</p>
									<ArrowLink
										data={{ label: "Dona con Satispay", url: info.associazione.satispay, external: true }}
										type="external"
									/>
								</Card.Body>
							</Card>
						</section>

						<section id="bonifico-bancario" className={classNames("mt-3", "mt-md-5")}>
							<Card className="mb-3">
								<Card.Body>
									<h3 className="fw-bold mt-0">Bonifico bancario</h3>
									<p>
										Puoi donare tramite bonifico bancario sul nostro c/c. Ricordati di controllare se la tua banca offre la
										possibilità di azzerare i costi di commissione.
									</p>
									<Image className="mb-3" src={donateBank} alt="Foto di un assegno ad Abilitiamo" rounded fluid />
									<p>Ecco come intestare il bonifico:</p>
									<h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
										IBAN
									</h4>
									<p>{info.associazione.iban}</p>
									<h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
										Intestatario
									</h4>
									<p>{info.associazione.ragioneSociale}</p>
									<h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
										Presso
									</h4>
									<p>{info.associazione.filiale}</p>
									<h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
										Causale
									</h4>
									<p>{info.associazione.causale}</p>
								</Card.Body>
							</Card>
						</section>

						<section id="5x1000" className={classNames("mt-3", "mt-md-5")}>
							<p className={classNames("paragraph", "paragraphBig")}>5x1000</p>
							<p>
								Il 5X1000 è una quota delle tasse che hai pagato e che puoi destinare a realtà non-profit. Ogni contribuente può
								decidere a chi donarla. Destinare ad Abilítiamo il tuo 5x1000, è facilissimo! È sufficiente inserire il nostro
								codice fiscale nella apposita sezione dei moduli per la dichiarazione dei redditi:{" "}
								<span style={{ color: "var(--red)", fontWeight: 600 }}>90041140139</span>.
							</p>
						</section>
						<section id="donazione-materiale" className={classNames("mt-3", "mt-md-5")}>
							<p className={classNames("paragraph", "paragraphBig")}>Donazione liberale materiale</p>
							<p>
								La realizzazione di Cascina Cristina è molto onerosa. Siamo alla ricerca di arredamento, attrezzature, di una
								cucina, di un pulmino e di materiale per il giardinaggio o agricoltura. Vuoi liberarti di cose simili? Le tratti
								per lavoro e vuoi aiutarci con una donazione? Anche per questi casi sono previste agevolazioni fiscali.
							</p>
						</section>
						<section id="lasciti-testamentari" className={classNames("mt-3", "mt-md-5", "mb-3", "mb-md-5")}>
							<p className={classNames("paragraph", "paragraphBig")}>Lasciti testamentari</p>
							<p>
								Il miglioramento della vita delle persone con autismo va oltre il progetto Cascina Cristina. Servono altri
								luoghi dove erogare servizi e diversificare le attività: appartamenti protetti, laboratori, avvio alle
								autonomie, ecc. Abilitiamo può ricevere anche lasciti testamentari e donazioni di immobili da dedicare a questi
								utilizzi.
							</p>
						</section>
					</Col>
					<Col className={classNames("my-3 my-md-5")} xs={12} md={{ span: 4, offset: 0 }}>
						<div className={classNames("position-sticky")} style={{ top: 104 }}>
							<p style={{ color: "#999" }}>Tutte le modalità</p>
							<ArrowLink data={{ label: "Pagamenti elettronici", url: "#pagamenti-elettronici" }} type="anchor" />
							<ArrowLink data={{ label: "Bonifico bancario", url: "#bonifico-bancario" }} type="anchor" />
							<ArrowLink data={{ label: "5x1000", url: "#5x1000" }} type="anchor" />
							<ArrowLink data={{ label: "Donazione materiale", url: "#donazione-materiale" }} type="anchor" />
							<ArrowLink data={{ label: "Lasciti testamentari", url: "#lasciti-testamentari" }} type="anchor" />
							<ArrowLink data={{ label: "Benefici fiscali", url: "/benefici-fiscali" }} type="internal" />
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}
