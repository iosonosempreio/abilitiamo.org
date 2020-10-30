import React from "react"
import { Link } from "gatsby"

export default function Logo(props) {
  return (
    <div style={{color:"var(--azure)"}}>
      <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
        <span style={{fontWeight:600}}>
          abi<span style={{color:"var(--red)"}}>lí</span>tiamo
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