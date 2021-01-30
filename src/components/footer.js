import React from "react"
import Logo from "./logo"
import items from "../menu-items.json"
import info from "./assets/info.json"
import { Link } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaYoutube, FaRegEnvelope, FaEnvelope, FaPiggyBank } from "react-icons/fa"
import styles from "../styles/footer.module.scss"
import logoCariplo from "./assets/cariplo.svg"
import logoLombardia from "./assets/lombardia.svg"
import logoFpcc from "./assets/fpcc.png"
import logoCsv from "./assets/comunità-s-vincenzo.png"

export default function Footer(props) {
  return (
    <footer style={{ backgroundColor: "var(--beige)" }}>
      <div className="layout-main">
        <div className={styles.footerNav}>
          <Logo style={{fontSize: '1.3125rem'}} showOnlus={true} />
          {items
            .filter(i => i.menues.indexOf("footer") > -1)
            .map(item => {
              return (
                <Link key={item.label} to={item.url}>
                  {item.label}
                </Link>
              )
            })}
        </div>
        <div className={styles.footerContacts}>
          <a href={info.associazione.facebook} target="_blank" rel="noreferrer">
            <FaFacebookSquare style={{top: 2}} /> <span>Facebook</span>
          </a>
          <span>
            <FaInstagram style={{top: 2}} /> <span>Instagram</span>
          </span>
          <a href={info.associazione.youtube} target="_blank" rel="noreferrer">
            <FaYoutube style={{top: 2}} /> <span>Youtube</span>
          </a>
          <br/>
          <span>
            <FaRegEnvelope style={{top: 2}} /> {info.associazione.mail}
          </span>
          <span>
            <FaEnvelope style={{top: 2}} /> {info.associazione.pec}
          </span>
          <span>
            <span style={{fontSize: '0.75rem',fontWeight:700}}>C.F.</span> {info.associazione.codiceFiscale}
          </span>
          <span>
            <FaPiggyBank style={{top: 2}} /> {info.associazione.iban}
          </span>
        </div>
        <div className={styles.footerContributors}>
            <span style={{fontWeight: 600}}>Con il contributo di</span>
            <img style={{margin:'1rem 0',width:160}} src={logoCariplo} alt="logo Fondazione Cariplo" />
            <img style={{margin:'1rem 0',width:160}} src={logoLombardia} alt="logo Regione Lombardia" />
            <img style={{margin:'2rem 0',width:210,mixBlendMode:'multiply'}} src={logoCsv} alt="logo Comunità Pastorale San Vincenzo Cantù" />
            <img style={{margin:'2rem 0',width:210}} src={logoFpcc} alt="logo Fondazione Provinciale Comasca" />
        </div>
        <span className={["text-center", styles["copyright"]].join(" ")}>
          @ 2020 Associazione Abilitiamo Autismo ONLUS
        </span>
      </div>
    </footer>
  )
}
