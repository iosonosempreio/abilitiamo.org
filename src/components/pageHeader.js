import React from "react"
import styles from "../styles/page.module.scss"
export default function PageHeader(props) {
  return (
    <div className={styles.pageHeader} style={{ backgroundColor: props.bgColor, color: props.color }}>
      <div className="layout-main">
        <h1 style={{gridColumn:'2/-2'}}>{props.children}</h1>
      </div>
    </div>
  )
}

PageHeader.defaultProps = {
  color: "var(--blue)",
  bgColor: "var(--beige)"
}
