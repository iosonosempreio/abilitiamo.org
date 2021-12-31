import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import ArrowLink from "../components/ArrowLink";
import illustrazioneAbilitiamo from "../images/illustrazione-abilitiamo.png";
import classNames from "classnames";
import ReactPlayer from "react-player";
import styles from "../styles/home.module.scss";
import Footer from "../components/Footer";
import GalleryRestoration from "../components/GalleryRestoration/GalleryRestoration";

export default function Home() {
	return (
		<>
			<Head>
				<title>Abilitiamo.org</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Navigation />
				<Container className="beige-bg" fluid>
					<Container>
						<Row>
							<Col
								md={{ span: 4, offset: 1 }}
								className={classNames(
									"d-flex",
									"flex-column",
									"justify-content-center"
								)}
							>
								<h1 className="mb-3">
									Miglioriamo la qualità di vita delle persone adulte con
									autismo
								</h1>
								<h4 className="mb-3">
									Abilitare è possibile a qualsiasi età, per noi l'età adulta è
									solo un punto di partenza.
								</h4>
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
								<div className={classNames(styles.illustrazioneAbilitiamo)}>
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
				</Container>
				<Container className="mt-5">
					<Row className="mb-5">
						<Col
							md={{ span: 3, offset: 1 }}
							className="d-flex align-items-center"
						>
							<h5>
								Vogliamo creare una struttura capace di erogare servizi
								socio-sanitari per persone adulte con autismo.
							</h5>
						</Col>
						<Col md={{ span: 8 }}>
							<div className={classNames("video-wrapper")}>
								<ReactPlayer
									className="react-player"
									url="https://www.facebook.com/1400253103427642/videos/1496214477164837"
									width="100%"
									height="100%"
									controls
								/>
							</div>
						</Col>
					</Row>
					<Row className="mb-5">
						<Col md={{ span: 8 }}>
							<GalleryRestoration />
						</Col>
						<Col md={{ span: 3 }} className="d-flex align-items-center">
							<h5>
								Stiamo realizzando questa struttura in <i>Cascina Cristina</i>, un
								cascinale nei pressi del centro abitato di Cantù (CO).
							</h5>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
