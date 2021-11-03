import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBs from "../components/navigationBs";
import Footer from "../components/footer";
import styles from "../styles/page.module.scss";
import stylescc from "../styles/cascinaCristinaNew.module.scss";
import classNames from "classnames";
import CarouselOttobre2021 from "../components/cascina-cristina-new-sections/carouselOttobre2021.js";
import sections from "../components/cascina-cristina-new-sections/cascina-cristina-sections";
import ArrowLink from "../components/arrowLink"

export default function CascinaCristina() {
  return (
    <>
      <Helmet>
        <body
          data-bs-spy="scroll"
          data-bs-target="#sections-scrollspy"
          data-bs-offset="250"
        />
      </Helmet>
      <NavigationBs />
      <Container
        fluid
        style={{ backgroundColor: "var(--beige)" }}
        className={classNames(stylescc.pageHeader)}
      >
        <Container className={classNames(styles.pageHeader)}>
          <Col xs={12} md={{ span: 6 }} className="mx-auto text-center">
            <span>
              <h1>Cascina Cristina</h1>
              <p>
                Un polo territoriale e multifunzionale per la presa in carico
                della persona adulta con disturbi dello spettro autistico
              </p>
            </span>
          </Col>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 7, offset: 1 }}>
            <p className={classNames("mt-3", "mt-md-5", "paragraphBig")}>
              Il progetto Cascina Cristina è la risposta di Abilitiamo al
              bisogno di strutture adatte ad ospitare giovani adulti con
              autismo.
              <br />
              Nel territorio dell'Insubria e della Brianza.
            </p>
            <p>
              Vista l’assenza di strutture adatte ad ospitare giovani adulti con
              autismo nel territorio canturino e nelle aree circostanti, Cascina
              Cristina diventerà un modello pilota e uno stimolo per altri enti
              per la realizzazione di strutture similari, rispondendo così al
              forte bisogno del territorio e delle famiglie che vi appartengono.
            </p>
            <p  className="mb-4">
              La struttura è attualmente in fase di realizzazione e grazie al
              lavoro di architetti, imprese e altri professionisti sarà presto
              inaugurata. Guarda le foto del cantiere che testinoniano lo stato
              dei lavori ad ottobre 2021.
            </p>
            <CarouselOttobre2021 />
          </Col>
          <Col className={classNames("my-3 my-md-5")} xs={12} md={{ span: 4 }}>
            <div className={classNames("position-sticky")} style={{ top: 104 }}>
							<ArrowLink data={{ label: "Sostenitori", url: "/sostenitori" }} type="internal" />
              <ArrowLink data={{ label: "Dona ora", url: "/dona-ora" }} type="internal" />
						</div>
          </Col>
        </Row>
      </Container>
      <hr className="mt-5 mb-0" style={{color:"var(--azure)"}} />
      <Container>
        <nav
          id="sections-scrollspy"
          className={classNames(
            "navbar",
            "position-sticky",
            "p-0",
            "m-0"
          )}
          style={{ top: 60, zIndex: 2000 }}
        >
          <ul className={classNames("nav", "w-100", stylescc.navigation)}>
            {sections.map((d, i) => (
              <li key={i} className={classNames("nav-item")}>
                <a
                  className={classNames(
                    "nav-link",
                    "px-0"
                  )}
                  href={d.anchor}
                >
                  <span className={stylescc.status}></span>
                  <span className={stylescc.index}>
                    {("00" + (i + 1)).slice(-2)}
                  </span>
                  <span className={stylescc.title}>{d.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {sections.map((d, i) => (
          <section id={d.anchor.slice(1)} key={i} className={stylescc.section}>
            {d.content}
          </section>
        ))}
      </Container>

      <Footer />
    </>
  );
}
