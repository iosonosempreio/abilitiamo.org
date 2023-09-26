import Head from "next/head";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import ArrowLink from "../components/ArrowLink";
import illustrazioneAbilitiamo from "../images/illustrazione-abilitiamo.png";
import classNames from "classnames";
import styles from "../styles/home.module.scss";
import Footer from "../components/Footer";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";
import frameVideo from "../images/frame-video-cascina-cristina.png";
import GalleryCascinaFinished from "../components/GalleryCascinaFinished/GalleryCascinaFinished";

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
								className={classNames("d-flex", "flex-column", "justify-content-center", "my-3")}
							>
								<h1 className="mb-3">Miglioriamo la qualità di vita delle persone adulte con autismo</h1>
								<h4 className="mb-3">
									Abilitare è possibile a qualsiasi età, per noi l'età adulta è solo un punto di partenza.
								</h4>
								<ArrowLink data={{ label: "Chi siamo", url: "/chi-siamo" }} />
								<ArrowLink data={{ label: "Cascina Cristina", url: "/cascina-cristina" }} />
								<ArrowLink data={{ label: "Diventa volontario/a", url: "/diventa-volontario" }} />
								<ArrowLink data={{ label: "Dona ora", url: "/dona-ora" }} />
							</Col>
							<Col className={classNames("d-flex", "flex-column", "justify-content-center", "my-3")}>
								<div
									className={classNames(styles.illustrazioneAbilitiamo)}
									style={{ backgroundImage: `url(${illustrazioneAbilitiamo.src})` }}
								/>
							</Col>
						</Row>
					</Container>
				</Container>
				<Container>
					{/* <Row className="mt-4 mb-4 mb-lg-5">
						<Col md={{ span: 8, offset: 1 }} lg={{ span: 3, offset: 1 }} className="d-flex align-items-center mb-3">
							<p className="fs-5">
								Vogliamo creare una struttura capace di erogare servizi socio-sanitari per persone adulte con autismo
							</p>
						</Col>
						<Col md={{ span: 10, offset: 1 }} lg={{ span: 7, offset: 0 }}>
							<VideoEmbed
								preview={frameVideo}
								url="https://www.facebook.com/1400253103427642/videos/1496214477164837"
							/>
						</Col>
					</Row> */}
					<Row className="mt-4 mb-4">
						<Col xs={{ order: 2 }} md={{ span: 10, offset: 1, order: 2 }} lg={{ span: 7, offset: 1, order: 1 }}>
							<GalleryCascinaFinished />
						</Col>
						<Col
							xs={{ order: 1 }}
							md={{ span: 8, order: 1, offset: 1 }}
							lg={{ span: 3, order: 2, offset: 0 }}
							className="d-flex align-items-center mb-4"
						>
							<p className="fs-5">
								Abbiamo realizzato un centro per la presa in carico di persone adulte con
								autismo: <i>Cascina Cristina</i>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
