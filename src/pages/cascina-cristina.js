import React, { useRef, useEffect, useState } from "react";
import "intersection-observer"; // optional polyfill
import Observer from "@researchgate/react-intersection-observer";
import Navigation from "../components/navigation";
// import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Footer from "../components/footer";
import styles from "../styles/page.module.scss";
import stylesCascinaCristina from "../styles/cascinaCristina.module.scss";

let images;

export default function CascinaCristina() {
  images = useStaticQuery(query);
  const [spiritoMostraAltro, setSpiritoMostraAltro] = useState(null);
  useEffect(() => {
    setSpiritoMostraAltro(window.innerWidth > 767);
    document.documentElement.style.setProperty("scroll-behavior", "smooth");
    // returned function will be called on component unmount
    return () => {
      document.documentElement.style.setProperty("scroll-behavior", "auto");
    };
  }, []);
  const spirito = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Spirito <br/> del progetto
        </h1>
        <p className="paragraph paragraphBig">
          Il progetto Cascina Cristina nasce innanzi tutto dal diritto delle
          persone autistiche ad avere una casa e un luogo di abilitazione. Lo
          spirito che lo anima è però molto più ampio.
        </p>
      </div>
      <Img className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <p className={["paragraph", stylesCascinaCristina.paragraph].join(" ")}>
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setSpiritoMostraAltro(!spiritoMostraAltro)}
        >
          {spiritoMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            spiritoMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
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
        </span>
      </p>
    </>
  );
  const mappa = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Mappatura <br /> del bisogno
        </h1>
        <p className="paragraph">
          ATS Insubria, per quanto riguarda la transizione all&#39;età adulta,
          ha eseguito una mappatura dei soggetti con diagnosi di disturbi dello
          spettro autistico.
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image2.childImageSharp.fluid}
      />
      <div className={[stylesCascinaCristina.columns].join(" ")}>
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setSpiritoMostraAltro(!spiritoMostraAltro)}
        >
          {spiritoMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            spiritoMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
          I risultati dello studio dicono che che nella fascia “giovane adulto”,
          cioè dai 18 anni ai 30, si collocheranno nei prossimi tre anni 57
          utenti ovvero l’81% del campione esaminato. Data la gravità di questi
          soggetti, è presumibile ipotizzare la necessità di forme di
          residenzialità che permettano da una parte la riabilitazione delle
          funzionalità residuali e dall’altra di rispondere alle esigenze dei
          soggetti e dei familiari.
        </span>
      </div>
    </>
  );
  const cambiamento = spirito;
  const comunita = spirito;
  const sections = [
    {
      title: (
        <>
          Spirito
          <br />
          del progetto
        </>
      ),
      anchor: "#spirito",
      content: spirito,
    },
    {
      title: (
        <>
          Mappatura
          <br />
          del bisogno
        </>
      ),
      anchor: "#mappa",
      content: mappa,
    },
    {
      title: (
        <>
          Cambiamento
          <br />
          perseguito
        </>
      ),
      anchor: "#cambiamento",
      content: cambiamento,
    },
    {
      title: (
        <>
          Comunità
          <br />
          abitativa
        </>
      ),
      anchor: "#comunita",
      content: comunita,
    },
    {
      title: (
        <>
          Centro
          <br />
          diurno
        </>
      ),
      anchor: "#diurno",
    },
    {
      title: (
        <>
          Sollievo
          <br />e altri servizi
        </>
      ),
      anchor: "#servizi",
    },
    {
      title: (
        <>
          Presa in carico
          <br />a rete
        </>
      ),
      anchor: "#presa-in-carico",
    },
    {
      title: (
        <>
          Emblematicità
          <br />
          per il territorio
        </>
      ),
      anchor: "#emblematicita",
    },
  ];
  const sectionNav = useRef();
  const observerOptions = {
    onChange: (event) => {
      if (event.isIntersecting) {
        sectionNav.current
          .querySelectorAll("a")
          .forEach((a) => a.classList.remove(stylesCascinaCristina.active));
        sectionNav.current
          .querySelector(".name-" + event.target.id)
          .classList.add(stylesCascinaCristina.active);
      }
    },
    rootMargin: "0% 0% -67%",
  };
  return (
    <span className={styles.cascinaCristina}>
      <Navigation background="var(--beige)" />
      <div className={[styles.pageHeader, "text-center"].join(" ")}>
        <span>
          <h1>Cascina Cristina</h1>
          <p className="paragraph-big">
            Un polo territoriale per la presa in carico della persona adulta con
            disturbi dello spettro autistico
          </p>
        </span>
      </div>
      <div
        id="scrolling-container"
        className="layout-main"
        style={{ padding: 0, backgroundColor: "white" }}
      >
        <div
          ref={sectionNav}
          className={[stylesCascinaCristina.sectionsNavigation].join(" ")}
        >
          {sections.map((d, i) => {
            return (
              <Link
                key={i}
                to={"/cascina-cristina" + d.anchor}
                className={[
                  stylesCascinaCristina.sectionNavItem,
                  "name-" + d.anchor.slice(1),
                ].join(" ")}
              >
                <div className={stylesCascinaCristina.sectionStatus}></div>
                <p>{("00" + (i + 1)).slice(-2)}</p>
                <p>{d.title}</p>
              </Link>
            );
          })}
        </div>
        {sections.map((d, i) => {
          return (
            <Observer key={i} {...observerOptions}>
              <div
                id={d.anchor.slice(1)}
                className={[stylesCascinaCristina.section].join(" ")}
                // data-sal="fade"
              >
                {d.content || (
                  <h1 style={{ gridColumn: "1 / -1" }}>{d.title}</h1>
                )}
              </div>
            </Observer>
          );
        })}
      </div>
      <Footer />
    </span>
  );
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "render residenziale.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 670) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "linea ats.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
