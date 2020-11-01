import React from "react"
import Navigation from "../components/navigation"
// import StickyMessage from "../components/stickyMessage"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Footer from "../components/footer"
import styles from "../styles/page.module.css"
import stylesCascinaCristina from "../styles/cascinaCristina.module.css"
// import headerBg from "../components/assets/cascina-cristina-header-bg.svg"

export default function CascinaCristina() {
  return (
    <span className={styles.cascinaCristina}>
      <Navigation background="var(--beige)" />
      {/* <StickyMessage/> */}
      <div className={[styles.pageHeader, "text-center"].join(" ")}>
        <span>
          <h1>Cascina Cristina</h1>
          <p className="paragraph-big">Un polo territoriale per la presa in carico della persona adulta con disturbi dello spettro autistico</p>
        </span>
      </div>
      <div className="layout-main" style={{backgroundColor:'white'}}>
        <div className={stylesCascinaCristina.sectionsNavigation}>
          { sections.map((d,i)=>{
            return (
              <AnchorLink key={i} to={'/cascina-cristina'+d.anchor} className={[stylesCascinaCristina.sectionNavItem, i===1?stylesCascinaCristina.active:''].join(" ")}>
                <p>{("00"+(i+1)).slice(-1)}</p>
                <p>{d.title}</p>
              </AnchorLink>
            )
          }) }
        </div>
        { sections.map((d,i)=>{
          return (
            <div key={i} id={d.anchor.slice(1)} className={[stylesCascinaCristina.section].join(" ")}>
              { d.content || d.title }
            </div>
          );
        }) }
      </div>
      <Footer />
    </span>
  )
}

const spirito = (
  <>
    <h1 style={{gridColumn:"1 / span 4"}}>Spirito<br/>del progetto</h1>
    <div style={{gridColumn:"5 / -2"}} className={stylesCascinaCristina.imgPlaceholder} />
  </>
)
const mappa = (
  <h1 style={{gridColumn:"1 / span 4"}}>Mppatura<br/>del bisogno</h1>
)
const cambiamento = (
  <h1 style={{gridColumn:"1 / span 4"}}>Mappatura<br/>del bisogno</h1>
)
const comunita = (
  <h1 style={{gridColumn:"1 / span 4"}}>Comunità<br/>abitativa</h1>
)
const sections = [
  {
    title: <>Spirito<br/>del progetto</>,
    anchor: "#spirito",
    content: spirito
  },
  {
    title: <>Mappatura<br/>del bisogno</>,
    anchor: "#mappa",
    content: mappa
  },
  {
    title: <>Cambiamento<br/>perseguito</>,
    anchor: "#spirito",
    content: spirito
  },
  {
    title: <>Comunità<br/>abitativa</>,
    anchor: "#comunita",
    content: comunita
  },
  {
    title: <>Centro<br/>diurno</>,
    anchor: "#diurno"
  },
  {
    title: <>Sollievo<br/>e altri servizi</>,
    anchor: "#servizi"
  },
  {
    title: <>Presa in carico<br/>a rete</>,
    anchor: "#presa-in-carico"
  },
  {
    title: <>Emblematicità<br/>per il territorio</>,
    anchor: "#emblematicita"
  },
]