import React from "react"
import Layout from "../components/layout"
import styles from "../styles/page.module.scss"
import info from "../components/assets/info.json"
import { FaFacebookSquare, FaInstagram, FaYoutube, FaMapMarkedAlt } from "react-icons/fa"
export default function Contact() {
  return (
    <span className={styles.contacts}>
      <Layout title="Teniamoci in contatto">
        <div className={[styles.pageBlock, styles.contacts, "round-borders"].join(" ")}>
          <span className={styles.info}>
            <h4>Ragione sociale</h4>
            <h2>{info.associazione.ragioneSociale}</h2>
          </span>
          <span className={styles.info}>
            <h4>
              Indirizzo{" "}
              <a href="https://goo.gl/maps/KaUmS3ARG5eCWivM8" target="_blank" rel="noopener noreferrer">
                (vedi mappa <FaMapMarkedAlt style={{ color: "var(--red)" }} />)
              </a>
            </h4>
            <h3>{info.associazione.indirizzo}</h3>
          </span>
          <span className={styles.info + " mt-5"}>
            <h4>Contattare l'associazione</h4>
            <h3>{info.associazione.mail}</h3>
            <h3>{info.associazione.mailRisorseUmane}</h3>
            <h3>{info.associazione.mailAmministrazione}</h3>
            <h3>{info.associazione.mailSostenibilita}</h3>
          </span>
          <span className={styles.info + " mt-5"}>
            <h4>PEC</h4>
            <h3>{info.associazione.pec}</h3>
          </span>
          <span className={styles.info + " mt-5"}>
            <h4>
              Codice fiscale{" "}
              <span style={{ color: "var(--azure)" }}>(5x1000)</span>
            </h4>
            <h3>{info.associazione.codiceFiscale}</h3>
          </span>
          <span className={styles.info + " mt-5"}>
            <h4>
              IBAN
              <span style={{ color: "var(--azure)" }}>(donazioni liberali)</span>
            </h4>
            <h3>{info.associazione.iban}</h3>
          </span>
          <h4 className={"mt-5"}>Canali social</h4>
          <h1 className={styles.socials}>
            <a href={info.associazione.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>{" "}
            <a href={info.associazione.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>{" "}
            <a href={info.associazione.youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </h1>
        </div>
        {/* <div className={[styles.pageBlock, styles.contacts, "round-borders"].join(" ")}>
          <span className={styles.info}>
            <h4>Comunità per persone adulte autistiche</h4>
            <h2>{info.comunita.nome}</h2>
          </span>
          <span className={styles.info}>
            <h4>
              Indirizzo{" "}
              <a href="https://goo.gl/maps/SWwTMLrwt25je2EB7" target="_blank" rel="noopener noreferrer">
                (vedi mappa <FaMapMarkedAlt style={{ color: "var(--red)" }} />)
              </a>
            </h4>
            <h3>{info.comunita.indirizzo}</h3>
          </span>
          <span className={styles.info}>
            <h4>Contattare la comunità o il centro diurno</h4>
            <h3>{info.comunita.mail}</h3>
          </span>
        </div> */}
        {/* <div className={[styles.pageBlock, styles.contacts, "round-borders"].join(" ")}>
          <h4>Iscriviti alla nostra newsletter</h4> [ QUi ci sarà il campo per registrarsi alla NEWSLETTER ]
        </div> */}
      </Layout>
    </span>
  )
}
