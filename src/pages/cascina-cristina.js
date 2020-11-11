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
  const [spiritoMostraAltro, setSpiritoMostraAltro] = useState(
    window.innerWidth > 767
  );
  const [mappaMostraAltro, setMappaMostraAltro] = useState(
    window.innerWidth > 767
  );
  const [cambiamentoMostraAltro, setCambiamentoMostraAltro] = useState(
    window.innerWidth > 767
  );
  const [comunitàMostraAltro, setComunitàMostraAltro] = useState(
    window.innerWidth > 767
  );
  const [diurnoMostraAltro, setDiurnoMostraAltro] = useState(
    window.innerWidth > 767
  );
  const [sollievoMostraAltro, setSollievoMostraAltro] = useState(
    window.innerWidth > 767
  );
  const [presaMostraAltro, setPresaMostraAltro] = useState(
    window.innerWidth > 767
  );
  const [emblematicitàMostraAltro, setEmblematicitàMostraAltro] = useState(
    window.innerWidth > 767
  );
  useEffect(() => {
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
          Spirito <br /> del progetto
        </h1>
        <p className="paragraph paragraphBig">
          Il progetto Cascina Cristina nasce dal diritto delle persone
          autistiche ad avere una casa, ma lo spirito che lo anima è però molto
          più ampio.
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <p
        className={[
          "paragraph",
          stylesCascinaCristina.paragraph,
          stylesCascinaCristina.columns,
        ].join(" ")}
      >
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
          onClick={() => setMappaMostraAltro(!mappaMostraAltro)}
        >
          {mappaMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            mappaMostraAltro ? "force-display-inline" : "",
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
  const cambiamento = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Cambiamento <br /> perseguito
        </h1>
        <p className="paragraph">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <div className={[stylesCascinaCristina.columns].join(" ")}>
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setCambiamentoMostraAltro(!cambiamentoMostraAltro)}
        >
          {cambiamentoMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            cambiamentoMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What's happened
          to me?" he thought. It wasn't a dream. His room, a proper human
        </span>
      </div>
    </>
  );
  const comunita = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Comunità
          <br />
          abitativa
        </h1>
        <p className="paragraph paragraphBig">
          La comunità abitativa accoglierà stabilmente dodici persone adulte con
          autismo.
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image4.childImageSharp.fluid}
      />
      <p
        className={[
          "paragraph",
          stylesCascinaCristina.paragraph,
          stylesCascinaCristina.columns,
        ].join(" ")}
      >
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setComunitàMostraAltro(!comunitàMostraAltro)}
        >
          {comunitàMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            comunitàMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
          Il modello sarà quello della &quot;community farm&quot;, secondo
          analoghe esperienze estere e italiane. Cascina Cristina è collocata in
          un contesto rurale e ciò favorirà l&#39;abilitazione fondata sul
          modello della fattoria. Esperienze già fatte da altre realtà hanno
          dimostrato che si tratta di un approccio semplice ma al tempo stesso
          ricco di situazioni e di stimoli che si adattano bene alle
          caratteristiche della persona autistica. Cascina Cristina, pur se
          collocata in un contesto rurale, è allo stesso tempo integrata con il
          territorio urbano di Fecchio (località di Cantù), trovandosi di fronte
          alla Parrocchia di San Carlo e all’annesso oratorio. Ciò eviterà
          l’isolamento e favorirà la relazione delle persone autistiche con gli
          abitanti del luogo. La residenza sarà costituita da 6 camere da letto,
          ciascuna in grado di ospitare 2 letti, e da tanti servizi visibili
          nelle piantine dell’edificio raffigurate nell’immagine.
        </span>
      </p>
    </>
  );
  const diurno = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Centro
          <br />
          diurno
        </h1>
        <p className="paragraph paragraphBig">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <p
        className={[
          "paragraph",
          stylesCascinaCristina.paragraph,
          stylesCascinaCristina.columns,
        ].join(" ")}
      >
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setDiurnoMostraAltro(!diurnoMostraAltro)}
        >
          {diurnoMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            diurnoMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </span>
      </p>
    </>
  );
  const sollievo = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Sollievo
          <br />
          e altri servizi
        </h1>
        <p className="paragraph paragraphBig">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <p
        className={[
          "paragraph",
          stylesCascinaCristina.paragraph,
          stylesCascinaCristina.columns,
        ].join(" ")}
      >
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setSollievoMostraAltro(!sollievoMostraAltro)}
        >
          {sollievoMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            sollievoMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </span>
      </p>
    </>
  );
  const presa = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Presa in carico
          <br />
          a rete
        </h1>
        <p className="paragraph paragraphBig">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <p
        className={[
          "paragraph",
          stylesCascinaCristina.paragraph,
          stylesCascinaCristina.columns,
        ].join(" ")}
      >
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setPresaMostraAltro(!presaMostraAltro)}
        >
          {presaMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            presaMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </span>
      </p>
    </>
  );
  const emblematicità = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Emblematicità
          <br />
          per il territorio
        </h1>
        <p className="paragraph paragraphBig">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <p
        className={[
          "paragraph",
          stylesCascinaCristina.paragraph,
          stylesCascinaCristina.columns,
        ].join(" ")}
      >
        <button
          className={stylesCascinaCristina.mostraAltro}
          onClick={() => setEmblematicitàMostraAltro(!emblematicitàMostraAltro)}
        >
          {emblematicitàMostraAltro ? "Nascondi" : "Mostra altro"}
        </button>
        <span
          className={[
            stylesCascinaCristina.further,
            emblematicitàMostraAltro ? "force-display-inline" : "",
          ].join(" ")}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </span>
      </p>
    </>
  );

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
      content: diurno
    },
    {
      title: (
        <>
          Sollievo
          <br />e altri servizi
        </>
      ),
      anchor: "#servizi",
      content: sollievo
    },
    {
      title: (
        <>
          Presa in carico
          <br />a rete
        </>
      ),
      anchor: "#presa-in-carico",
      content: presa
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
      content: emblematicità
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
    image4: file(relativePath: { eq: "Residenza piantina.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
