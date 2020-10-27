import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import styles from "../styles/navigation.module.css"
import items  from "../menu-items.json"

export default function Navigation({background}) {
  return (
    <div className={["position-sticky",styles.navigation].join(" ")} style={{backgroundColor: background}}>
      <div>
        <Logo />
        <div>
          {items.filter(i=>(i.menues.indexOf("main")>-1)).map(item=>{
            return <Link key={item.label} to={item.url}>{item.label}</Link>
          })}
        </div>
      </div>
    </div>

  )
}

Navigation.defaultProps = {
  background: "#ffffff"
}