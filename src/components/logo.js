import React from "react"
import styles from "../styles/logo.module.scss"
import { Link } from "gatsby"

export default function Logo(props) {
  return (
    <div className={styles.logo} style={props.logoStyle}>
      <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
        <span style={{fontWeight:600}}>
          Abi<span style={{color:"var(--red)"}}>lí</span>tiamo
        </span>{" "}
        autismo
        <span style={{display:props.showOnlus?'inline':'none'}}> ONLUS</span>
      </Link>
    </div>
  )
}

Logo.defaultProps = {
  showOnlus:false
}