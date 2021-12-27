import Head from "next/head";
import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import ArrowLink from "../components/ArrowLink";
import illustrazioneAbilitiamo from "../images/illustrazione-abilitiamo.png";
import classNames from "classnames";
import styles from "../styles/index.module.scss";

import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Abilitiamo.org</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<Container className={classNames(styles.presentation, "d-flex")}>
				<Row>
					<Col
						xs={{ span: 10 }}
						md={{ span: 4, offset: 1 }}
						className={classNames(
							"d-flex",
							"flex-column",
							"justify-content-center"
						)}
					>
						<h1>
							Miglioriamo la qualità di vita delle persone adulte con autismo
						</h1>
						<h2>
							Abilitare è possibile a qualsiasi età, per noi l'età adulta è solo
							un punto di partenza.
						</h2>
						<ArrowLink data={{ label: "Chi siamo", url: "/chi-siamo" }} />
						<ArrowLink
							data={{ label: "Cascina Cristina", url: "/cascina-cristina" }}
						/>
						<ArrowLink
							data={{ label: "External", url: "https://densitydesign.org" }}
						/>
					</Col>
					<Col
						className={classNames(
							"d-flex",
							"flex-column",
							"justify-content-center"
						)}
					>
						<div className={styles.illustrazioneAbilitiamo}>
							<Image
								alt="Illustrazione Abilitiamo"
								src={illustrazioneAbilitiamo}
								layout="fill"
								objectFit="contain"
								placeholder="blur"
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
