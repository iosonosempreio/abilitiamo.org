import React, { useState, useLayoutEffect } from "react";
import { Row, Col, Accordion } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import stylescc from "../../styles/cascinaCristinaNew.module.scss";
import classNames from "classnames";

export default function SpiritoProgetto() {
  const [mostraAltro, setMostraAltro] = useState();
  useLayoutEffect(() => {
    setMostraAltro(window.innerWidth > 767);
  }, []);
  const images = useStaticQuery(query);
  return (
    <>
      <Row className={classNames("mt-3", "mt-md-5")}>
        <Col
          xs={4}
          className={classNames(
            "d-flex",
            "flex-column",
            "justify-content-center"
          )}
        >
          <h1>Lo spirito del progetto</h1>
          <p className="paragraphBig">
            Il progetto Cascina Cristina nasce dal diritto delle persone
            autistiche ad avere una casa, ma lo spirito che lo anima è però
            molto più ampio.
          </p>
        </Col>
        <Col xs={8}>
          <Img
            className={classNames("rounded")}
            fluid={images.image1.childImageSharp.fluid}
          />
        </Col>
      </Row>
      <Row className={classNames("mb-3", "mb-md-5")}>
        <Col xs={12} md={{ span: 8, offset: 4 }} className={classNames("mt-3", "mt-md-5")}>
        	<p className={stylescc.description}>
	          Facendo leva sull&#39;esperienza maturata vivendo la condizione dei
	          loro figli, i genitori dell&#39;associazione hanno deciso di mettersi
	          al servizio del territorio per rendere meno difficile il percorso
	          delle famiglie che si verranno a trovare in una situazione analoga a
	          quella da loro vissuta. Da qui la sfida di creare un polo
	          multifunzionale per l&#39;autismo. Un centro in grado di accogliere in
	          forma residenziale adulti autistici a basso funzionamento, di offrire
	          la possibilità di abilitazione a giovani autistici per i quali è
	          sufficiente una gestione diurna, di dare sollievo temporaneo a quelle
	          famiglie che attraversano un periodo complicato con il loro figlio
	          autistico. Il polo Cascina Cristina si occuperà anche di formazione
	          degli operatori del settore e cercherà di agevolare il percorso di
	          diagnosi della potenziale persona autistica. Una volta accreditata, la
	          struttura, lavorando in rete con le istituzioni sanitarie, organizzerà
	          una presa in carico coordinata della persona autistica.
	        </p>
        </Col>
      </Row>

      {/* <div className={stylesCascinaCristina.sectionTitle}>
				<h1>
					Lo spirito del progetto
				</h1>
				<p className="paragraph paragraphBig">
					Il progetto Cascina Cristina nasce dal diritto delle persone autistiche ad avere una casa, ma lo spirito che lo anima è però molto più ampio.
				</p>
			</div>
			<Img className={["round-borders", stylesCascinaCristina.imgSectionCover].join(" ")} fluid={images.image1.childImageSharp.fluid} />
			<p className={["paragraph", stylesCascinaCristina.paragraph, stylesCascinaCristina.columns].join(" ")}>
				<button className={stylesCascinaCristina.mostraAltro} onClick={() => setMostraAltro(!mostraAltro)}>
					{mostraAltro ? "Nascondi" : "Mostra altro"}
				</button>
				<span className={[stylesCascinaCristina.further, mostraAltro ? "force-display-inline" : ""].join(" ")}>
					Facendo leva sull&#39;esperienza maturata vivendo la condizione dei loro figli, i genitori dell&#39;associazione hanno deciso di mettersi al servizio del
					territorio per rendere meno difficile il percorso delle famiglie che si verranno a trovare in una situazione analoga a quella da loro vissuta. Da qui la
					sfida di creare un polo multifunzionale per l&#39;autismo. Un centro in grado di accogliere in forma residenziale adulti autistici a basso funzionamento,
					di offrire la possibilità di abilitazione a giovani autistici per i quali è sufficiente una gestione diurna, di dare sollievo temporaneo a quelle famiglie
					che attraversano un periodo complicato con il loro figlio autistico. Il polo Cascina Cristina si occuperà anche di formazione degli operatori del settore e
					cercherà di agevolare il percorso di diagnosi della potenziale persona autistica. Una volta accreditata, la struttura, lavorando in rete con le istituzioni
					sanitarie, organizzerà una presa in carico coordinata della persona autistica.
				</span>
			</p> */}
    </>
  );
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "casette 8 bit.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 670) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
