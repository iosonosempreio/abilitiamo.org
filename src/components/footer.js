import React from "react"
import Logo from "./logo"
import items from "../menu-items.json"
import { Link } from "gatsby"

import { FaFacebookSquare, FaInstagram, FaYoutube, FaRegEnvelope, FaEnvelope, FaMoneyBillWave } from "react-icons/fa"

export default function Footer(props) {
  return (
    <footer style={{ backgroundColor: "var(--beige)" }}>
      <div className="layout-main">
        <div className="footer-nav">
          <Logo />
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
        <div className="footer-contacts">
          <Link to="/">
            <FaFacebookSquare /> Facebook
          </Link>
          <Link to="/">
            <FaInstagram /> Instagram
          </Link>
          <Link to="/">
            <FaYoutube /> Youtube
          </Link>
          <br/>
          <Link to="/">
            <FaRegEnvelope /> info [at] abilitiamo.org
          </Link>
          <Link to="/">
            <FaEnvelope /> certificata [at] pec.abilitiamo.org
          </Link>
          <Link to="/">
            CF 900411400139
          </Link>
          <Link to="/">
            <FaMoneyBillWave /> IT52P0843051100000000114383
          </Link>
        </div>
        <div className="footer-contributors">
            <span>Con il contributo di</span>
            <span>Fondazione Cariplo</span>
            <span>Regione Lombardia</span>
            <span>Fondazione provinciale comasca</span>
        </div>
        <span className="text-center copyright">
          @ 2020 Associazione Abilitiamo Autismo ONLUS
        </span>
      </div>
    </footer>
  )
}
