import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import Image from "next/image";
import styles from "../styles/sostenitori.module.scss";
import classNames from "classnames";

export default function Sostenitori() {
	const images = {};

	function importAll(r) {
		r.keys().forEach((key) => {
			const name = key.replace(/\.\//, "").replace(/\.png/, "");
			images[name] = r(key).default;
		});
	}

	importAll(
		require.context("../images/loghi/", true, /\.(png|gif|ico|jpg|jpeg)$/)
	);

	return (
		<PageTemplate title="Sostenitori">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>Un sogno condiviso è l'inizio di una nuova realtà.</h5>
						<p>
							La realizzazione di Cascina Cristina è ogni giorno più vicino
							grazie al generoso contributo di istituzioni, realtà territoriali,
							fondazioni e di molti cittadini.
						</p>
						<p>
							Di seguito i nostri sostenitori principali, che stanno sostenendo
							il progetto attraverso la messa a disposizione di spazi, di
							coperture finanziarie e competenze professionali.
						</p>
					</Col>
				</Row>
				<div className="row mb-5">
					<div className="col-4 col-md-4 col-lg-3">
						<a
							className={classNames("no-hover", "rounded-3", styles.linkLogoSostenitori)}
							aria-label="Regione Lombardia"
							href="https://www.lombardianotizie.online/como-progetti-emblematici-cariplo/"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={images["regione"]} />
						</a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a
							className={classNames("no-hover", "rounded-3", styles.linkLogoSostenitori)}
							aria-label="Fondazione Cariplo"
							href="https://www.fondazionecariplo.it/"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={images["cariplo"]} />
						</a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a
							className={classNames("no-hover", "rounded-3", styles.linkLogoSostenitori)}
							aria-label="Comunità pastorale San Vincenzo Cantù - Intimiano"
							href="https://sanvincenzocantu.it/"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={images["comunità-s-vincenzo"]} />
						</a>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col-4 col-md-4 col-lg-3">
						<a
							className={classNames("no-hover", "rounded-3", styles.linkLogoSostenitori)}
							aria-label="Cassa rurale ed artigiana di Cantù"
							href="https://www.cracantu.it/"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={images["cra-cantu"]} />
						</a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a
							className={classNames("no-hover", "rounded-3", styles.linkLogoSostenitori)}
							aria-label="Studio Emme"
							href="https://www.emmeonline.it/"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={images["emme"]} />
						</a>
					</div>
					<div className="col-4 col-md-4 col-lg-3">
						<a
							className={classNames("no-hover", "rounded-3", styles.linkLogoSostenitori)}
							aria-label="Hub Expertam"
							href="https://www.expertam.it/"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={images["expertam"]} />
						</a>
					</div>
				</div>
				<Row className="mb-5">
					<Col md={{ span: 7, offset: 1 }}>
						<p>
							In aggiunta, innumerevoli persone sostengono l'operato di
							Abilitiamo donando il loro tempo libero, partecipando ed
							organizzando eventi oppure attraverso erogazioni liberali. Anche a
							loro vanno i nostri più affettuosi ringraziamenti.
						</p>
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	);
}
