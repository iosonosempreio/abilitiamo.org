import React from "react"
import Navigation from "../components/navigation"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"
import styles from "../styles/page.module.css"
import stylesCascinaCristina from "../styles/cascinaCristina.module.css"

let images

export default function CascinaCristina() {
  images = useStaticQuery(query)

  const spirito = (
    <>
      <div className={stylesCascinaCristina.sectionTitle}>
        <h1>
          Spirito <br /> del progetto
        </h1>
        <p className="paragraph">
          Il progetto Cascina Cristina nasce innanzi tutto dal diritto delle
          persone autistiche ad avere una casa e un luogo di abilitazione.
          <br />
          Lo spirito che lo anima è però molto più ampio.
        </p>
      </div>
      <Img
        className={[
          "round-borders",
          stylesCascinaCristina.imgSectionCover,
        ].join(" ")}
        fluid={images.image1.childImageSharp.fluid}
      />
      <div className={stylesCascinaCristina.columns}>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.{" "}
        <span className={stylesCascinaCristina.further}>
          slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
          His many legs, pitifully thin compared with the size of the rest of
          him, waved about helplessly as he looked. "What's happened to me?" he
          thought. It wasn't a dream. His room, a proper human room although a
          little too small, lay peacefully between its four familiar walls. A
          collection of textile samples lay spread out on the table - Samsa was
          a travelling salesman - and above it there hung a picture that he had
          recently cut out of an illustrated magazine and housed in a nice,
          gilded frame. It showed a lady fitted out with a fur hat and fur boa
          who sat upright, raising a heavy fur muff that covered the whole of
          her lower arm towards the viewer. Gregor then turned to look out the
          window at the dull weather. Drops slightly domed and divided by arches
          into stiff sections.{" "}
        </span>
      </div>
    </>
  )
  const mappa = (
    <>
      <h1 style={{ gridColumn: "1 / span 4" }}>
        Mappatura
        <br />
        del bisogno
      </h1>
      <div
        style={{ gridColumn: "5 / -2" }}
        className={stylesCascinaCristina.imgPlaceholder}
      />
    </>
  )
  const cambiamento = (
    <>
      <h1 style={{ gridColumn: "1 / span 4" }}>
        Mappatura
        <br />
        del bisogno
      </h1>
      <div
        style={{ gridColumn: "5 / -2" }}
        className={stylesCascinaCristina.imgPlaceholder}
      />
    </>
  )
  const comunita = (
    <>
      <h1 style={{ gridColumn: "1 / span 4" }}>
        Comunità
        <br />
        abitativa
      </h1>
      <div
        style={{ gridColumn: "5 / -2" }}
        className={stylesCascinaCristina.imgPlaceholder}
      />
    </>
  )
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
      content: spirito,
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
      content: spirito,
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
      content: spirito,
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
  ]

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
        className="layout-main"
        style={{padding:0,backgroundColor: "white" }}
      >
        <div className={[stylesCascinaCristina.sectionsNavigation].join(" ")}>
        {sections.map((d, i) => {
          return (
            <AnchorLink
              key={i}
              to={"/cascina-cristina" + d.anchor}
              className={[
                stylesCascinaCristina.sectionNavItem,
                i === 1 ? stylesCascinaCristina.active : "",
              ].join(" ")}
            >
              <div className={stylesCascinaCristina.sectionStatus}></div>
              <p>{("00" + (i + 1)).slice(-2)}</p>
              <p>{d.title}</p>
            </AnchorLink>
          )
        })}
      </div>
        {sections.map((d, i) => {
          return (
            <div
              key={i}
              id={d.anchor.slice(1)}
              className={[stylesCascinaCristina.section].join(" ")}
            >
              {d.content || d.title}
            </div>
          )
        })}
      </div>
      <Footer />
    </span>
  )
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
  }
`
