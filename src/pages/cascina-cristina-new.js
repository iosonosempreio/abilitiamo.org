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
        <body data-bs-spy="scroll" data-bs-target="#sections-scrollspy" />
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
      {/* <Container>
        <Col xs={12}>
          <section>
            <div className={stylescc.sectionsNavigation}>
              {sections.map((d, i) => {
                return (
                  <span
                    key={i}
                    className={classNames(
                      stylescc.sectionNavItem,
                      "pointer",
                      "name-" + d.anchor.slice(1)
                    )}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={stylescc.sectionStatus}></div>
                    <p>{("00" + (i + 1)).slice(-2)}</p>
                    <p>{d.title}</p>
                  </span>
                );
              })}
            </div>
          </section>
        </Col>
      </Container> */}

      <Container>
        <nav
          id="sections-scrollspy"
          class="navbar navbar-light bg-light px-3 position-sticky"
          style={{ top: 60, zIndex: 2000 }}
        >
          <ul
            className={classNames(
              "nav",
              "nav-pills",
              stylescc.sectionsNavigation
            )}
          >
            {sections.map((d, i) => (
              <li key={i} className={classNames("nav-item",stylescc.sectionNavItem)}>
                <a class="nav-link" href={d.anchor}>
                  <div className={stylescc.sectionStatus}></div>
                  <p>{("00" + (i + 1)).slice(-2)}</p>
                  <p>{d.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
        // data-bs-spy="scroll"
        // data-bs-target="#sections-scrollspy"
        // data-bs-offset="0"
        // className={classNames(stylescc.scrollspyExample)}
        // tabIndex="0"
        >
          {sections.map((d, i) => (
            <section id={d.anchor.slice(1)} key={i} className={"vh-100"}>
              <Col xs={12}>
                <h1>{d.title}</h1>
              </Col>
            </section>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}
