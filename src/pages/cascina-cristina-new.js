import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styles from "../styles/page.module.scss";
import stylescc from "../styles/cascinaCristinaNew.module.scss";
import classNames from "classnames";

import sections from "../components/cascina-crtistina-sections/cascina-cristina-sections";

export default function CascinaCristina() {
  return (
    <>
      <Helmet>
        <body
          data-bs-spy="scroll"
          data-bs-target="#sections-scrollspy"
          data-bs-offset="156"
        />
      </Helmet>
      <Navigation />
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
        <Col xs={12} md={{ span: 7, offset: 1 }}>
          <section className={classNames("mt-3", "mt-md-5")}>
            <p className={classNames("paragraphBig")}>
              Il progetto Cascina Cristina nasce per rispondere al bisogno del
              territorio dell'insubria e della brianza di strutture adatte ad
              ospitare giovani adulti con autismo.
            </p>
            <p>
              Vista l’assenza di strutture adatte ad ospitare giovani adulti con
              autismo nel territorio canturino e nelle aree circostanti, Cascina
              Cristina potrebbe diventare per l’area dell'Insubria e della
              Brianza un modello pilota e uno stimolo per altri enti per la
              realizzazione di strutture similari, rispondendo così al forte
              bisogno del territorio e delle famiglie che vi appartengono.
            </p>
          </section>
        </Col>
      </Container>
      <Container>
        <nav
          id="sections-scrollspy"
          class="navbar position-sticky p-0"
          style={{ top: 60, zIndex: 2000 }}
        >
          <ul className={classNames("nav", "w-100", stylescc.navigation)}>
            {sections.map((d, i) => (
              <li key={i} className={classNames("nav-item")}>
                <a class="nav-link" href={d.anchor}>
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
          <section id={d.anchor.slice(1)} key={i} style={{ height: 300 }}>
            <Col xs={12}>
              <h1>{d.title}</h1>
            </Col>
          </section>
        ))}
      </Container>

      <Footer />
    </>
  );
}
