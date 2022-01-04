import { Col, Container, Row } from "react-bootstrap";
import ArrowLink from "../components/ArrowLink";
import { PageTemplate } from "../components/Templates";
import classNames from "classnames";
import GalleryChiSiamo from "../components/GalleryChiSiamo";
import Image from "next/image";
import cascina1 from "../images/cascina-interno.png";
import cascina2 from "../images/render residenziale.jpeg";
import ReactPlayer from "react-player";

export default function ChiSiamo() {
	return (
		<PageTemplate title="Chi siamo">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>
							Un nome, due significati, un unico obiettivo.{" "}
							<span style={{ color: "var(--red)" }}>Abitare abilitando</span> è
							lo scopo per il quale la nostra associazione è nata: creare una
							casa per i nostri ragazzi autistici dove potranno esprimere al
							meglio le loro abilità.
						</h5>
						<p>
							Il nostro obiettivo è creare sul nostro territorio un contesto
							capace di migliorare la qualità di vita di persone adulte con
							autismo attraverso interventi permanenti di carattere socio
							assistenziale, psicoeducativi e abilitativi.
							<br />
							Un luogo che i nostri ragazzi possano chiamare casa.
						</p>
						<GalleryChiSiamo className="mb-3" />
						<p>
							L’Associazione Abilitiamo si è costituita con la finalità di dare
							una casa a giovani adulti con autismo. Nei suoi tre anni di
							attività è riuscita a raggiugere alcune tappe molto significative.
							Questo è stato possibile grazie all’aiuto e supporto di soci e
							amici del territorio.
						</p>
						<p>
							L’associazione Abilitiamo Autismo onlus - “abitiamo e abilitiamo”
							si è costituita nel 2017, per volere di 5 famiglie con figli
							autistici. Un punto di forza dell’associazione è rappresentato
							dalla presenza, tra i soci fondatori, dei fratelli della persona
							con autismo che potranno dare forza, sostegno e continuità alla
							stessa. Nel tempo, la compagine associativa si è arricchita di
							soci e amici che hanno contribuito alla realizzazione dei progetti
							svolti finora.
						</p>
						<p>
							L’associazione si è costituita con un’unica finalità: realizzare,
							sul territorio canturino, un contesto abitativo innovativo per
							giovani adulti con autismo che diventi la loro “casa” e nella
							quale possano vivere, in base alle proprie potenzialità/abilità,
							la migliore qualità di vita possibile. Il primo passo
							dell’associazione è stato quello di individuare il luogo dove
							potesse essere realizzata una abitazione che possedesse i
							requisiti necessari per la finalità propostasi. A fine 2017, il
							Consiglio Pastorale della Parrocchia S. Carlo di Fecchio, una
							frazione di Cantù, decise di dare in dono ad un ente del terzo
							settore, Cascina Cristina, Abilitiamo risulto la destinataria
							dello stabile.
						</p>
						<div className="w-50 p-3 d-inline-block">
							<Image src={cascina1} />
							<p className="text-center">
								<small>Stato di Cascina Cristina prima del recupero.</small>
							</p>
						</div>
						<div className="w-50 p-3 d-inline-block">
							<Image src={cascina2} />
							<p className="text-center">
								<small>
									Rendering che visualizza lo stabile recuperato.
								</small>
							</p>
						</div>
						<p>
							Grazie al supporto del territorio, dei suoi soci e dei suoi
							collaboratori, Abilítiamo è risultata vincitrice del bando{" "}
							<i>
								Progetti Emblematici Maggiori della Provincia di Como (anno
								2019)
							</i>
							.
						</p>
						<p>
							Da allora, il lavoro dell’associazione si è concentrato
							prevalentemente sulla campagna di raccolta fondi per la
							ristrutturazione di Cascina Cristina e l’avvio delle attività che
							si svolgeranno al suo interno. Parallelamente, l’associazione, nei
							suoi tre anni di attività, ha realizzato diversi eventi destinati
							ad approfondire la conoscenza dei disturbi dello spettro autistico
							della comunità canturina. Di seguito un breve video che riepiloga
							le tappe più significative della associazione.
						</p>
						<div className={classNames("video-wrapper my-3")}>
							<ReactPlayer
								className="react-player"
								url="https://www.youtube.com/watch?v=i4-V9g-VqYI"
								width="100%"
								height="100%"
								volume={0.03}
								controls
							/>
						</div>
					</Col>
					<Col>
						<div className={classNames("position-sticky")} style={{ top: 65 }}>
							{sideLinks.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	);
}

const sideLinks = [
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];

{
	/* <a href="https://ibb.co/1M7PQD7"><img src="https://i.ibb.co/PMFPj7F/Cascina-Cristina-2019.png" alt="Cascina-Cristina-2019" border="0"></a> */
}
