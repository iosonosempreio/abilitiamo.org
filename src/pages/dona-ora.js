import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import NavigationBs from "../components/navigationBs";
import ArrowLink from "../components/arrowLink";
import Footer from "../components/footer";
import styles from "../styles/page.module.scss";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import PaypalDonation from "../components/paypalDonation.js";
import info from "../components/assets/info.json";

import donateFacebook from "../images/donate-facebook.gif";
import donateSatispay from "../images/donate-satispay.png";
import donateBank from "../images/assegnozzo.jpg";

export default function DonaOra() {
  return (
    <>
      <NavigationBs />
      <Container fluid style={{ backgroundColor: "var(--beige)" }}>
        <Container className={styles.pageHeader}>
          <Col xs={12} md={{ span: 10, offset: 1 }}>
            <span>
              <h1>Dona ora</h1>
            </span>
          </Col>
        </Container>
      </Container>
      <Container>
        <Row className="">
          <Col xs={12} md={{ span: 7, offset: 1 }}>
            <section className={classNames("mt-3", "mt-md-5")}>
              <h2>Mettiamo in Cascina il futuro</h2>
              <p className="paragraphBig">
                Costruisci insieme a noi Cascina Cristina: un luogo unico
                dedicato ai giovani adulti con autismo e alle loro famiglie, in
                cui daremo vita a un importante progetto di accoglienza,
                sviluppo e condivisione per tenere unita la nostra comunità.
              </p>
              <div className={classNames("video-wrapper")}>
                <ReactPlayer
                  className="react-player"
                  url="https://www.facebook.com/1400253103427642/videos/1496214477164837"
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <p className={classNames("mt-3")}>
                Ogni martedì Marco si sveglia di primo mattino, prende il bus
                per andare a Cantù, porta a Gabriele frutta e verdura da lui
                coltivata, lo aiuta a far la spesa e a svolgere altre
                commissioni, e infine rientra in Cascina e prepara il pranzo
                insieme ai suoi coinquilini. Si tratta di azioni che svolgiamo
                facilmente nella nostra quotidianità, ma per lui sono gesti
                molto importanti, una sfida da affrontare ogni giorno. Perché
                Marco è un giovane adulto con autismo.
              </p>
              <p>
                L’autismo è una condizione di difficoltà nella comunicazione e
                interazione sociale che accompagna le persone per{" "}
                <b>tutto l’arco della loro vita</b>, e che tuttavia viene spesso
                associata solo all’infanzia. Per questo, una volta raggiunta la
                maggiore età, alle persone con autismo mancano servizi e
                strutture dedicati. Rimangono perciò soli, con le loro famiglie,
                a gestire situazioni di vita che diventano sempre più difficili.
              </p>
              <p>
                Grazie a Cascina Cristina sarà presto possibile dare risposta a
                questo bisogno urgente della comunità. Vogliamo realizzare un
                centro multifunzionale per supportare giovani adulti autistici a
                vivere una vita il più possibile autonoma.{" "}
                <b>
                  Un servizio così non esiste ancora nel nostro territorio, ma
                  insieme possiamo costruirlo!
                </b>
              </p>
              <p>
                Cascina Cristina è un progetto di Abilitiamo onlus, associazione
                nata nel 2017 da familiari di persone con autismo. La Cascina
                diventerà{" "}
                <b>
                  un polo multifunzionale per la presa in carico di giovani e
                  adulti con disturbi dello spettro autistico
                </b>
                . Ospiterà una <b>comunità abitativa</b> per 12 persone che
                condivideranno spazi e occasioni di socialità e aggregazione. Ma
                non solo: sarà un centro diurno dove 15 persone, insieme agli
                abitanti, potranno svolgere{" "}
                <b>
                  attività lavorative, ricreative e sportive attraverso cui
                  diventare sempre più autonomi
                </b>
                . Sarà uno spazio in cui offrire{" "}
                <b>uno sportello psicologico</b> per dare supporto alle famiglie
                in difficoltà. Sarà un centro che promuoverà{" "}
                <b>formazione specializzata e informazione</b> per gli operatori
                del settore e la cittadinanza. Sarà un modello pilota e un punto
                di riferimento per tantissime famiglie presenti nel territorio.
              </p>
              <p>
                Inoltre, si tratta di un’area dal grande valore storico che,
                grazie alla donazione da parte della Parrocchia San Carlo di
                Fecchio e al supporto di Fondazione Cariplo, sarà riqualificata
                e restituita alla cittadinanza.
              </p>
              <p>
                Insieme sarà possibile ricostruire, metro quadro dopo metro
                quadro, Cascina Cristina, dando nuova vita ad un magnifico
                edificio oggi abbandonato, affinché diventi un{" "}
                <b>punto di riferimento unico per tutta la comunità</b>.
              </p>
              <p className={classNames("paragraphBig")}>
                Tutto questo sarà possibile, anche grazie al tuo supporto!
              </p>
              <p>
                Con una tua donazione, puoi dare un contributo di grande valore
                alla comunità canturina e a tutta la Lombardia, posando una
                pietra per il futuro del territorio. Realizzerai con noi un
                servizio fondamentale per le persone con autismo e le loro
                famiglie, perché non siano sole. Sosterrai un progetto pilota
                che porterà la comunità ad essere sempre più inclusiva per le
                persone con autismo.
              </p>
              <p>
                Posa simbolicamente una mattone per il futuro delle persone con
                autismo in provincia di Como, fai una donazione per la
                ristrutturazione di Cascina Cristina:
              </p>
              <ul>
                <li>un mattone del futuro (10 x 10 cm) = 10 €</li>
                <li>tre mattoni del futuro = 30 €</li>
                <li>cinque mattoni del futuro = 50 €</li>
                <li>dieci mattoni del futuro = 100 €</li>
              </ul>
              <p>
                <b>
                  Abitare è abilitare, metti in cascina il futuro insieme a noi!
                </b>
              </p>
            </section>
            <section
              id="pagamenti-elettronici"
              className={classNames("mt-3", "mt-md-5")}
            >
              <p className={classNames("paragraph", "paragraphBig")}>
                Pagamenti elettronici
              </p>
              <p>
                Carta di credito e Satispay sono le modalità più rapide per fare
                una donazione e aiutarci a realizzare Cascina Crstina. Non
                dimenticarti che sono previsti{" "}
                <Link to="/benefici-fiscali">benefici fiscali</Link> per chi
                sceglie di donare.
              </p>

              <PaypalDonation />

              <Card className="mb-3">
                <Card.Body>
                  <h3 className="fw-bold mt-0">Facebook</h3>
                  <a
                    href={info.associazione.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="mb-3 w-100"
                      src={donateFacebook}
                      alt="Donazione via Facebook"
                      rounded
                    />
                  </a>
                  <p>
                    Visita la nostra pagina Facebook e clicca sul pulsante “Fai
                    una donazione”. Per donare è necessario fare log-in su
                    Facebook.
                  </p>
                  <ArrowLink
                    data={{
                      label: "Dona con Facebook",
                      url: info.associazione.facebook,
                      external: true,
                    }}
                    type="external"
                  />
                </Card.Body>
              </Card>

              <Card className="mb-3">
                <Card.Body>
                  <h3 className="fw-bold mt-0">Satispay</h3>
                  <a
                    href={info.associazione.satispay}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="mb-3 w-100"
                      src={donateSatispay}
                      alt="Donazione via Satispay"
                      rounded
                    />
                  </a>
                  <p>
                    Sblocca il tuo smartphone e dona con Satispay:
                    un’applicazione per iPhone, Android e Windows Phone che
                    permette di fare pagamenti veloci e gratuiti.
                  </p>
                  <ArrowLink
                    data={{
                      label: "Dona con Satispay",
                      url: info.associazione.satispay,
                      external: true,
                    }}
                    type="external"
                  />
                </Card.Body>
              </Card>
            </section>

            <section
              id="bonifico-bancario"
              className={classNames("mt-3", "mt-md-5")}
            >
              <Card className="mb-3">
                <Card.Body>
                  <h3 className="fw-bold mt-0">Bonifico bancario</h3>
                  <p>
                    Puoi donare tramite bonifico bancario sul nostro c/c.
                    Ricordati di controllare se la tua banca offre la
                    possibilità di azzerare i costi di commissione.
                  </p>
                  <Image
                    className="mb-3"
                    src={donateBank}
                    alt="Foto di un assegno ad Abilitiamo"
                    rounded
                    fluid
                  />
                  <p>Ecco come intestare il bonifico:</p>
                  <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
                    IBAN
                  </h4>
                  <p>{info.associazione.iban}</p>
                  <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
                    Intestatario
                  </h4>
                  <p>{info.associazione.ragioneSociale}</p>
                  <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
                    Presso
                  </h4>
                  <p>{info.associazione.filiale}</p>
                  <h4 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
                    Causale
                  </h4>
                  <p>{info.associazione.causale}</p>
                </Card.Body>
              </Card>
            </section>

            <section id="5x1000" className={classNames("mt-3", "mt-md-5")}>
              <p className={classNames("paragraph", "paragraphBig")}>5x1000</p>
              <p>
                Il 5X1000 è una quota delle tasse che hai pagato e che puoi
                destinare a realtà non-profit. Ogni contribuente può decidere a
                chi donarla. Destinare ad Abilítiamo il tuo 5x1000, è
                facilissimo! È sufficiente inserire il nostro codice fiscale
                nella apposita sezione dei moduli per la dichiarazione dei
                redditi:{" "}
                <span style={{ color: "var(--red)", fontWeight: 600 }}>
                  90041140139
                </span>
                .
              </p>
            </section>
            <section
              id="donazione-materiale"
              className={classNames("mt-3", "mt-md-5")}
            >
              <p className={classNames("paragraph", "paragraphBig")}>
                Donazione liberale materiale
              </p>
              <p>
                La realizzazione di Cascina Cristina è molto onerosa. Siamo alla
                ricerca di arredamento, attrezzature, di una cucina, di un
                pulmino e di materiale per il giardinaggio o agricoltura. Vuoi
                liberarti di cose simili? Le tratti per lavoro e vuoi aiutarci
                con una donazione? Anche per questi casi sono previste
                agevolazioni fiscali.
              </p>
            </section>
            <section
              id="lasciti-testamentari"
              className={classNames("mt-3", "mt-md-5", "mb-3", "mb-md-5")}
            >
              <p className={classNames("paragraph", "paragraphBig")}>
                Lasciti testamentari e patrimoniali
              </p>
              <p>
                Il miglioramento della vita delle persone con autismo va oltre
                il progetto Cascina Cristina. Servono altri luoghi dove erogare
                servizi e diversificare le attività: appartamenti protetti,
                laboratori, avvio alle autonomie, ecc. Abilitiamo può ricevere
                anche lasciti testamentari e donazioni di immobili da dedicare a
                questi utilizzi.
              </p>
              <p>
                È anche possibile devolvere ad Abilítiamo il patrimonio di
                altre associazioni ONLUS in fase di scioglimento.
              </p>
            </section>
          </Col>
          <Col
            className={classNames("my-3 my-md-5")}
            xs={12}
            md={{ span: 4, offset: 0 }}
          >
            <div className={classNames("position-sticky")} style={{ top: 104 }}>
              <p style={{ color: "#999" }}>Tutte le modalità</p>
              <ArrowLink
                data={{
                  label: "Pagamenti elettronici",
                  url: "#pagamenti-elettronici",
                }}
                type="anchor"
              />
              <ArrowLink
                data={{ label: "Bonifico bancario", url: "#bonifico-bancario" }}
                type="anchor"
              />
              <ArrowLink
                data={{ label: "5x1000", url: "#5x1000" }}
                type="anchor"
              />
              <ArrowLink
                data={{
                  label: "Donazione materiale",
                  url: "#donazione-materiale",
                }}
                type="anchor"
              />
              <ArrowLink
                data={{
                  label: "Lasciti testamentari",
                  url: "#lasciti-testamentari",
                }}
                type="anchor"
              />
              <ArrowLink
                data={{ label: "Benefici fiscali", url: "/benefici-fiscali" }}
                type="internal"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
