import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/page.module.css"

export default function NotFound() {
  return (
    <Layout title="404 - Pagina non trovata">
      <p className={["paragraph", "paragraphBig", styles.paragraph].join(" ")}>
        Questa pagina non esiste o non è ancora stata creata.
      </p>
      <p className={["paragraph", styles.paragraph].join(" ")}>
        Controlla che l'indirizzo sia corretto, oppure ritorna alla{" "}
        <Link to="/">home</Link>.
      </p>
    </Layout>
  )
}
