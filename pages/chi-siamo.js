import { Col, Container, Row } from "react-bootstrap";
import ArrowLink from "../components/ArrowLink";
import { PageTemplate } from "../components/Templates";
import classNames from "classnames";
import Link from "next/link";
import GalleryChiSiamo from "../components/GalleryChiSiamo";
import Image from "next/image";
import cascina1 from "../images/cascina-interno.png"
import cascina2 from "../images/render residenziale.jpeg"

export default function ChiSiamo() {
	return (
		<PageTemplate title="Chi siamo">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>
							Un nome, due significati, un unico obiettivo.
							<br />
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
							Grazie al supporto del territorio, dei suoi soci e dei suoi
							collaboratori, Abilítiamo è risultata vincitrice del bando
							<i>
								Progetti Emblematici Maggiori della Provincia di Como (anno
								2019)
							</i>
							. Con questo contributo, Abilítiamo ha dato inizio alla
							realizzazione di un polo multifunzionale per la presa in carico di
							giovani adulti con disturbi dello spettro autistico:{" "}
							<Link href="/cascina-cristina">Cascina Cristina</Link>.
						</p>
						{/* <iframe
							frameBorder="0"
							className="juxtapose"
							width="100%"
							height="315"
							src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=0264b0a6-6b1b-11ec-abb7-b9a7ff2ee17c"
						/> */}
            <Image src={cascina1} />
            <Image src={cascina2} />
					</Col>
					<Col>
						<div className={classNames("position-sticky")} style={{ top: 104 }}>
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
	{ label: "Comitato scientifico", url: "/comitato scientifico" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];

{
	/* <a href="https://ibb.co/1M7PQD7"><img src="https://i.ibb.co/PMFPj7F/Cascina-Cristina-2019.png" alt="Cascina-Cristina-2019" border="0"></a> */
}
