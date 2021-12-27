import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import classNames from "classnames";
import {
	FaFacebookSquare,
	FaInstagram,
	FaYoutube,
	FaRegEnvelope,
	FaEnvelope,
	FaPiggyBank,
} from "react-icons/fa";
import Logo from "../Logo/Logo";
import navigation from "../../utils/navigation.json";
import info from "../../utils/info.json";
import styles from "./Footer.module.scss";

import Image from "next/image";
import logoCariplo from "../../images/logo-cariplo.svg";
import logoLombardia from "../../images/logo-lombardia.svg";
import logoFpcc from "../../images/logo-fpcc.png";
import logoCsv from "../../images/logo-comunità-s-vincenzo.png";
import logoCraCantu from "../../images/logo-cra-cantu.jpg";

export default function Footer() {
	return (
		<footer>
			<Container>
				<Row>
					<Col className={classNames("d-flex", "flex-column")}>
						<Logo style={{ fontSize: "1.3125rem" }} showOnlus={true} />
						{navigation
							.filter((i) => i.menues.indexOf("footer") > -1)
							.map((item) => {
								return (
									<Link key={item.label} href={item.url}>
										{item.label}
									</Link>
								);
							})}
					</Col>
					<Col className={classNames("d-flex", "flex-column")}>
						<a
							href={info.associazione.facebook}
							target="_blank"
							rel="noreferrer"
						>
							<FaFacebookSquare style={{ top: 2 }} /> <span>Facebook</span>
						</a>
						<a
							href={info.associazione.instagram}
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagram style={{ top: 2 }} /> <span>Instagram</span>
						</a>
						<a
							href={info.associazione.youtube}
							target="_blank"
							rel="noreferrer"
						>
							<FaYoutube style={{ top: 2 }} /> <span>Youtube</span>
						</a>
						<br />
						<span>
							<FaRegEnvelope style={{ top: 2 }} /> {info.associazione.mail}
						</span>
						<span>
							<FaEnvelope style={{ top: 2 }} /> {info.associazione.pec}
						</span>
						<span>
							<span style={{ fontSize: "0.75rem", fontWeight: 700 }}>C.F.</span>{" "}
							{info.associazione.codiceFiscale}
						</span>
						<span>
							<FaPiggyBank style={{ top: 2 }} /> {info.associazione.iban}
						</span>
					</Col>
					<Col className={classNames("d-flex", "flex-column")}>
						<span style={{ fontWeight: 600 }}>Con il contributo di</span>
						<span className={styles.logo} style={{ width: 160 }}>
							<Image
								alt="Logo Fondazione Cariplo"
								src={logoCariplo}
								layout="responsive"
								
							/>
						</span>
						<span className={styles.logo} style={{ width: 160 }}>
							<Image
								alt="Logo Regione Lombardia"
								src={logoLombardia}
								layout="responsive"
								
							/>
						</span>
						<span className={styles.logo} style={{ width: 210 }}>
							<Image
								alt="Logo Comunità pastorale S Vincenzo"
								src={logoCsv}
								layout="responsive"
								
							/>
						</span>

						<span className={styles.logo} style={{ width: 210 }}>
							<Image
								alt="Logo Cassa rurale ed artigiana di Cantù"
								src={logoCraCantu}
								layout="responsive"
								
							/>
						</span>
						<span className={styles.logo} style={{ width: 210 }}>
							<Image
								alt="logo Fondazione Provinciale Comasca"
								src={logoFpcc}
								layout="responsive"
								
							/>
						</span>

						{/* 
						
						
						<img
							style={{
								margin: "1rem 0",
								width: 210,
								mixBlendMode: "multiply",
								filter: "grayscale(100%)",
							}}
							src={logoCraCantu}
							alt="logo Cassa rurale ed artigiana di Cantù"
						/>
						<img
							style={{ margin: "1rem 0", width: 210 }}
							src={logoFpcc}
							alt="logo Fondazione Provinciale Comasca"
						/> */}
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<span>@ 2021 Associazione Abilitiamo Autismo ONLUS</span>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
